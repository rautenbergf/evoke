import type { Generator } from '../gen'
import type { SemanticTokenColors, TextmateColor } from '../vsc-types'
import type { WorkbenchColors } from '../vsc-workbench'

export type VsCodeOutput = {
	name: string
	colors: WorkbenchColors
	tokenColors: TextmateColor[]
	semanticHighlighting: boolean
	semanticTokenColors: SemanticTokenColors
}

export const generateVscodeTheme: Generator<VsCodeOutput> = (c, unprocessed, name) => ({
	name: `Evoke ${name}`,
	colors: {
		// general
		focusBorder: c.green,
		'editor.foldBackground': c.lineTransparent,
		'editor.background': c.bg,
		'editor.foreground': c.fg,
		'editorLineNumber.foreground': c.line,
		'editorLineNumber.activeForeground': c.green,
		'editorGroup.emptyBackground': c.bg,
		'welcomePage.background': c.bg,
		'panel.background': c.bg,
		'panel.border': c.line,
		'commandCenter.background': c.bg,
		'commandCenter.foreground': c.grayDark,
		'editorGroupHeader.tabsBackground': c.bg,
		'editorGroupHeader.noTabsBackground': c.bg,
		'tree.indentGuidesStroke': c.grayDark,
		'editorIndentGuide.activeBackground1': c.line,
		'editorIndentGuide.background1': c.black,
		// buttons
		'button.background': c.grayDark,
		'button.foreground': c.fg,
		'button.secondaryBackground': c.grayDarker,
		'button.secondaryForeground': c.fg,
		// git
		'gitDecoration.addedResourceForeground': c.cyan,

		'gitDecoration.untrackedResourceForeground': c.yellow,
		'gitDecoration.modifiedResourceForeground': c.cyan,
		'gitDecoration.deletedResourceForeground': c.red,
		'gitDecoration.conflictingResourceForeground': c.pink,
		'gitDecoration.ignoredResourceForeground': c.grayDark,
		'gitDecoration.submoduleResourceForeground': c.cyanHighlight,
		// gutter
		'editorGutter.background': c.bg,
		'editorGutter.addedBackground': c.green,
		'editorGutter.deletedBackground': c.red,
		'editorGutter.modifiedBackground': c.cyan,
		// bracket pairs
		'editorBracketHighlight.foreground1': c.cyan,
		'editorBracketHighlight.foreground2': c.pink,
		'editorBracketHighlight.foreground3': c.orange,
		// menu
		'menu.background': c.bg,
		'menu.selectionBackground': c.grayDarker,
		'menu.separatorBackground': c.grayDarker,
		'menu.border': c.grayDarker,
		'menu.foreground': c.fg,
		// breadcrumbs
		'breadcrumb.background': c.bg,
		'breadcrumb.focusForeground': c.gray,
		'breadcrumb.foreground': c.grayDark,
		// activity bar
		'activityBarBadge.background': c.greenDark,
		'activityBar.background': c.bg,
		'activityBar.border': c.line,
		'activityBar.foreground': c.gray,
		// tabs
		'tab.inactiveBackground': c.bg,
		'tab.unfocusedActiveBackground': c.black,
		'tab.border': c.transparent,
		'tab.activeBorderTop': c.grayDark,
		// title
		'titleBar.activeBackground': c.bg,
		'titleBar.inactiveBackground': c.bg,
		'titleBar.inactiveForeground': c.grayDark,
		'titleBar.border': c.line,
		// sidebar
		'sideBar.border': c.line,
		'sideBarTitle.foreground': c.grayDark,
		'sideBarSectionHeader.background': c.bg,
		'sideBar.background': c.bg,
		// statusbar
		'statusBar.background': c.bg,
		'statusBar.foreground': c.grayDark,
		'statusBar.border': c.line,
		// list
		'list.activeSelectionBackground': c.lineTransparent,
		'list.activeSelectionForeground': c.fg,
		'list.inactiveFocusBackground': c.grayDark,
		'list.inactiveSelectionBackground': c.black,
		'list.hoverBackground': c.black,
		'list.highlightForeground': c.green,
		'list.focusBackground': c.gray,
		'list.focusOutline': c.green,
		'list.deemphasizedForeground': c.grayDark,
		// find
		'editor.findMatchBackground': c.redTransparent,
		'editorOverviewRuler.findMatchForeground': c.redTransparent,
		'editor.findMatchHighlightBackground': c.lineTransparent,
		// suggest
		'editorSuggestWidget.background': c.bg,
		'editorSuggestWidget.foreground': c.fg,
		'editorSuggestWidget.highlightForeground': c.green,
		'editorSuggestWidget.focusHighlightForeground': c.green,
		'editorSuggestWidget.selectedForeground': c.green,
		'editorSuggestWidget.selectedIconForeground': c.green,
		'editorSuggestWidget.border': c.line,
		'editorSuggestWidget.selectedBackground': c.lineTransparent,
		// input
		'input.background': c.bg,
		'input.foreground': c.fg,
		'input.border': c.grayDarker,
		// hoverwidget
		'editorHoverWidget.background': c.bg,
		'editorHoverWidget.border': c.line,
		// links
		'editorLink.activeForeground': c.red,
		'editorLink.foreground': c.red,
		'textLink.activeForeground': c.red,
		'textLink.foreground': c.red,
		// errors
		'editorError.foreground': unprocessed.red,
		'list.errorForeground': unprocessed.red,
		'minimap.errorHighlight': unprocessed.red,
		'notificationsErrorIcon.foreground': unprocessed.red,
		'editorOverviewRuler.errorForeground': unprocessed.red,

		'editorInfo.foreground': unprocessed.cyan,
		'list.infoForeground': unprocessed.cyan,
		'minimap.infoHighlight': unprocessed.cyan,
		'notificationsInfoIcon.foreground': unprocessed.cyan,
		'editorOverviewRuler.infoForeground': unprocessed.cyan,

		'editorWarning.foreground': unprocessed.yellow,
		'list.warningForeground': unprocessed.yellow,
		'minimap.warningHighlight': unprocessed.yellow,
		'notificationsWarningIcon.foreground': unprocessed.yellow,
		'editorOverviewRuler.warningForeground': unprocessed.yellow,
		// file picker
		'editorWidget.background': c.bg,
		'editorWidget.border': c.line,
		'editorWidget.foreground': c.cyan,
		'editorWidget.resizeBorder': c.line,
		// selection
		'editor.selectionBackground': c.selection,
	} as WorkbenchColors,
	tokenColors: [
		{
			scope: [
				'punctuation',
				'meta.bracket',
				'meta.brace',
				'punctuation.section.braces',
				'punctuation.section.brackets',
				'meta.parenthesis',
				'punctuation.section.parens',
			],
			settings: {
				foreground: c.gray,
			},
		},
		{
			scope: ['keyword.operator', 'storage.type', 'meta.link'],
			settings: {
				foreground: c.green,
			},
		},
		{
			scope: ['keyword.operator.namespace'],
			settings: {
				foreground: c.gray,
			},
		},
		{
			scope: ['comment'],
			settings: { foreground: c.grayMid },
		},
		{
			scope: [
				'entity.name.type',
				'entity.name.class',
				'support.class',
				'entity.name.type.alias',
				'support.type',
				'entity.name.struct',
				'support.type.struct',
				'markup.inline.raw',
				'storage.type',
			],
			settings: { foreground: c.orange },
		},
		{
			scope: ['entity.name.tag'],
			settings: { foreground: c.greenDark },
		},
		{
			scope: [
				'meta.tag.attributes',
				'support.type.property-name.toml',
				'support.type.property-name.array',
				'support.type.property-name.table',
			],
			settings: { foreground: c.fg },
		},
		{
			scope: [
				'support.class.component',
				'entity.other.attribute-name.pseudo-element',
				'entity.other.attribute-name.pseudo-class',
			],
			settings: { foreground: c.orange },
		},
		{
			scope: [
				'entity.name.function',
				'support.function',
				'variable.function',
				'entity.name.macro',
				'entity.other.attribute-name.class',
				'heading',
			],
			settings: { foreground: c.cyanLight, fontStyle: 'bold' },
		},
		{
			scope: [
				'variable.other.enummember',
				'constant.numeric',
				'support.constant.property-value',
				'markup.bold',
				'constant.language.json',
				'constant.language.powershell',
			],
			settings: { foreground: c.pink },
		},
		{
			scope: ['keyword', 'keyword.operator'],
			settings: { foreground: c.green },
		},
		{
			scope: ['support.type.property-name'],
			settings: {
				foreground: c.gray,
			},
		},
		{
			scope: [
				'variable.annotation',
				'meta.decorator',
				'punctuation.definition.string',
				'string.quoted',
				'string.template',
				'entity.name.function.call',
				'support.function.call',
			],
			settings: { foreground: c.cyan },
		},
		{
			scope: ['comment.documentation'],
			settings: { foreground: c.grayMid },
		},
		{
			scope: ['storage.modifier'],
			settings: { fontStyle: 'bold' },
		},
	] as TextmateColor[],
	semanticHighlighting: true,
	semanticTokenColors: {
		comment: c.grayMid,
		type: c.orange,
		typeAlias: c.orange,
		typeParameter: c.orange,
		function: {
			bold: true,
			foreground: c.cyanLight,
		},
		method: c.cyanLight,
		const: c.pink,
		enum: c.orange,
		enumMember: c.pink,
		string: c.cyan,
		operator: c.green,
		keyword: c.green,
		macro: c.cyanLight,
		deriveHelper: c.orange,
		decorator: c.cyan,
		punctuation: c.grayDark,
		brace: c.grayDark,
		bracket: c.gray,
		parenthesis: c.gray,
		number: c.pink,
		struct: c.orange,
		'variable.defaultLibrary': {
			underline: true,
		},
		'*.documentation': c.grayDark,
		'*.constant': c.pink,
		'*.callable': c.cyan,
		'*.modification': {
			bold: true,
		},
		'*.readonly': {
			bold: true,
		},
		label: c.pink,
	} as SemanticTokenColors,
})
