import { formatHex8, oklch, parseHex, type Oklch } from 'culori'
import { generateVscodeTheme } from './src/vscode-theme'
import { generateZedTheme } from './src/zed/zed-theme'

const config1 = {
	transparent: '#000000',
	bg: '#000400',
	fg: '#f8f8f8',
	highlight: '#002300',
	line: '#303F3Faf',
	lineTransparent: '#303D3D77',
	selection: '#303D3Dbf',
	// NAMED
	red: '#F83379',
	redTransparent: '#F8337977',
	pink: '#FF7DCF',
	orange: '#EEA2A2',
	yellow: '#D3B857',
	green: '#00D700',
	greenDark: '#008D48',
	cyanDark: '#1C7D6C',
	cyan: '#00B5B5',
	cyanLight: '#8FECEC',
	cyanHighlight: '#A2FFFF',
	gray: '#94C1C1',
	grayMid: '#5b8686',
	grayDark: '#546262',
	grayDarker: '#303D3D',
	black: '#121B1B',
}

type Config = typeof config1

export type Generator<Output> = (c: Config, unprocessed: Config, name: string) => Output

const flattenOKLCHLightness = (L: number, LMin: number, LMax: number, c: number): number => {
	return LMin + (LMax - LMin) * ((L - LMin) / (LMax - LMin)) ** (1 - c)
}

const preprocess = (c: Config, colorTransform?: (color: Oklch) => Oklch) => {
	const o = Object.entries(c).reduce((acc, [k, v]) => {
		let color = oklch(parseHex(v))
		if (colorTransform) {
			color = colorTransform(color)
		}

		acc[k as keyof Config] = formatHex8(color)
		return acc
	}, {} as Config)

	return o
}

const quantize = (value: number, steps: number) => {
	const step = 1 / steps
	const q = Math.floor(value / step) * step
	return q
}

/** Function that maps a value to the closest step in a given array */
const alignMap = (value: number, steps: number[]): number =>
	steps.reduce((a, b) => (Math.abs(b - value) < Math.abs(a - value) ? b : a))

const variants = {
	base: (color: Oklch) => {
		if (color.h) {
			color.h += 0
			color.c *= 1.25
			color.l = flattenOKLCHLightness(color.l, 0, 0.6, 0.2)
		}

		return color
	},
	ice: (color: Oklch) => {
		if (!color.h) {
			color.h = 0
		}
		color.h += 80
		color.c *= 1.25
		color.l = flattenOKLCHLightness(color.l, 0, 0.6, 0.2)

		return color
	},
	mono: (color: Oklch) => {
		if (!color.h) {
			color.h = 0
		}
		color.c *= 0
		if (color.l > 0.5) {
			color.l *= color.l
			color.l += 0.15
		}
		color.l = quantize(color.l, 3)
		if (color.l < 0.1) {
			color.l = 0
		}
		return color
	},
	lavender: (color: Oklch) => {
		if (!color.h) {
			color.h = 0
		}
		color.h *= 1.5
		color.h = quantize(color.h, 6)
		return color
	},
	blacklight: (color: Oklch) => {
		if (!color.h) {
			color.h = 0
		}
		color.h *= color.h
		color.h -= 220
		if (color.l < 0.1) {
			color.l = 0
		}
		color.c *= 1.5
		return color
	},
	pop: (color: Oklch) => {
		if (!color.h) {
			color.h = 0
		}

		const threshold = 0.05

		if (color.c > threshold) {
			color.c *= 2
		}
		if (color.c < threshold) {
			color.c *= 0
		}

		if (color.c > threshold) {
			color.l = quantize(color.l, 6) + 0.05
		}

		if (color.l < 0.1) {
			color.l = 0
		}
		return color
	},
	cosmos: (color: Oklch) => {
		if (!color.h) {
			color.h = 0
		}

		if (color.c < 0.05) {
			color.c = 0
		}

		color.l = alignMap(color.l, [0, 0.34, 0.5, 0.85])

		color.h = Math.sin(color.h * Math.PI) * 360
		color.h *= 1.5
		color.h += 340

		color.c *= 1.25

		return color
	},
	poise: (color: Oklch) => {
		if (!color.h) {
			color.h = 0
		}

		color.h = Math.tan(color.h) * 50
		color.h += 100

		if (color.c < 0.05) {
			color.c = 0
		}

		color.l = alignMap(color.l, [0, 0.34, 0.5, 0.85])

		// color.h = Math.sin(color.h * Math.PI) * 360
		color.h *= 1.5
		color.h += 340

		color.c *= 1.25

		return color
	},
	copper: (color: Oklch) => {
		if (!color.h) {
			color.h = 0
		}

		// split
		if (color.h > 180) {
			color.h = (color.h % 60) + 60
		} else {
			color.h = (color.h % 120) + 120
		}

		// if (color.l < 0.1) {
		// 	color.c = 0
		// 	color.l = 0
		// }

		color.l = alignMap(color.l, [0.1, 0.3, 0.5, 0.85])

		// color.h *= 2.8
		color.h *= 2.91
		// color.h *= 1.5
		color.c *= 1.25
		// color.l = flattenOKLCHLightness(color.l, 0, 0.6, 0.2)

		return color
	},
}

type PkgTheme = {
	id: string
	label: string
	uiTheme: string
	path: string
}

const writeVscodeThemes = async () => {
	Promise.all(
		Object.entries(variants).map(async ([name, transform]) => {
			const nameCaps = name.toUpperCase()
			const themePath = `themes/evoke-${name}.json`

			console.log('⏳ Vscode: Generating Evoke', nameCaps)

			const generated = generateVscodeTheme(preprocess(config1, transform), config1, nameCaps)
			await Bun.write(themePath, JSON.stringify(generated, null, 2))

			const pkg = await Bun.file('package.json').json()
			const pkgThemes = pkg.contributes.themes as PkgTheme[]

			console.log('✅ Generated Evoke Theme', nameCaps, 'at', themePath)

			if (pkgThemes.some((t) => t.label === `Evoke ${nameCaps}`)) {
				return
			}

			pkgThemes.push({
				id: `evoke-${name}`,
				label: `Evoke ${nameCaps}`,
				uiTheme: 'vs-dark',
				path: themePath,
			})

			pkg.contributes.themes = pkgThemes
			await Bun.write('package.json', JSON.stringify(pkg, null, 2))

			console.log('✅ Added new Evoke', nameCaps, 'to package.json')
		}),
	)
}

const writeZedThemes = async () => {
	Promise.all(
		Object.entries(variants).map(async ([name, transform]) => {
			const nameCaps = name.toUpperCase()
			const themePath = `zed-themes/evoke-${name}.json`

			console.log('⏳ Zed: Generating Evoke', nameCaps)

			const generated = generateZedTheme(preprocess(config1, transform), config1, nameCaps)
			await Bun.write(themePath, JSON.stringify(generated, null, 2))

			console.log('✅ Zed: Generated Evoke Theme', nameCaps, 'at', themePath)
		}),
	)
}

await writeZedThemes()
