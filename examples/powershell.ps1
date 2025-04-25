[CmdletBinding()]
param(
    [Parameter(HelpMessage = "Zeigt eine Hilfe oder eine bestimmte Konfigurationsbeschreibung an.")]
    [switch]$h,
    [Parameter(HelpMessage = "Erstellt eine Beispiel-Konfigurationsdatei im selben Ordner (config.ini).")]
    [switch]$g,
    [Parameter(HelpMessage = "Alle Datenbanken kopieren (Standard: Nur Test-Datenbanken).")]
    [switch]$all,
    [Parameter(HelpMessage = "Alle Benutzerabfragen automatisch mit 'Ja' beantworten.")]
    [switch]$y,
    [Parameter(HelpMessage = "Kopiert nur Dateien die noch nicht im Zielordner existieren.")]
    [switch]$keepExisting
)

$header = @"
# -------------------------------------------------------------------------------
# Script        : ProdDBRestore.ps1
# Beschreibung  : Kopiert bestimmte .bak-Dateien aus einem Backup-Verzeichnis
#                 und legt sie an einem konfigurierten Pfad ab. 
# Version       : 1.0 (25.04.2025)
# Verwendung    : .\getProdDBs.ps1 [-all] [-y] [-keepExisting] 
# Hilfe         : .\getProdDBs.ps1 -h 
# -------------------------------------------------------------------------------
"@

Write-Host $header

#region Help
#region Help

function Show-Help {
    Write-Host ""
    Write-Host "═══════════════════════════════════════════════════════════════════════" -ForegroundColor DarkCyan
    Write-Host "  🔧  getProdDBs.ps1 – Hilfe" -ForegroundColor Cyan
    Write-Host "═══════════════════════════════════════════════════════════════════════" -ForegroundColor DarkCyan

    Write-Host "`n📄  Zweck:" -ForegroundColor Yellow
    Write-Host "    Kopiert .bak-Dateien von einem Quell- in ein Zielverzeichnis."
    Write-Host "    Steuerung über config.ini im gleichen Ordner."

    Write-Host "`n⚙️  Parameter:" -ForegroundColor Yellow
    Write-Host "    -g               Erstellt eine Beispiel-Konfigurationsdatei"
    Write-Host "    -all             Kopiert ALLE .bak-Dateien (auch Produktivdatenbanken)"
    Write-Host "    -y               Beantwortet alle Abfragen automatisch mit 'Ja'"
    Write-Host "    -keepExisting    Überspringt bereits vorhandene Dateien im Zielordner"
    Write-Host "    -h [Abschnitt]   Zeigt Hilfe oder bestimmten Abschnitt (z.B. -h config)"

    Write-Host "`n🛠️  Konfiguration (config.ini):" -ForegroundColor Yellow
    Write-Host "    [ProdDBRestore]"
    Write-Host "      ExcludeProdDBs        = 1"
    Write-Host "      TestDBNameIdentifier  = _test"
    Write-Host "      AdditionalTestDBs     = test1.bak, test2.bak"
    Write-Host "      SourcePath            = Z:\Backup"
    Write-Host "      DestinationPath       = C:\Restore"

    Write-Host "`n    [Logfiles]"
    Write-Host "      EnableLogging         = 1"
    Write-Host "      LogPath               = C:\Logs\ProdDBRestore"

    Write-Host "`n⚠️  Hinweis zu STRG+C:" -ForegroundColor Yellow
    Write-Host "    Wird der Kopiervorgang mit STRG+C unterbrochen,"
    Write-Host "    kann die gerade verarbeitete Datei beschädigt werden!"

    Write-Host "`n💡 Beispiel:" -ForegroundColor Yellow
    Write-Host "    .\getProdDBs.ps1 -all -keepExisting -y"

    Write-Host "`n═══════════════════════════════════════════════════════════════════════" -ForegroundColor DarkCyan
    Write-Host ""
}

if ($PSBoundParameters.ContainsKey("h")) {
    Show-Help
    exit 0
}
#endregion

#region Utility Functions
function Prompt {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Message
    )
    if ($y) { return $true }

    do {
        $userInput = Read-Host "$Message (J/N)"
        switch ($userInput.ToUpper()) {
            'J' { return $true }
            'Y' { return $true }
            'N' { return $false }
            default { Write-Host "Bitte 'J' oder 'N' eingeben." }
        }
    } while ($true)
}

function Get-IniFile {
    param([parameter(Mandatory = $true)][string]$filePath)
    $anonymous = "NoSection"
    $ini = @{}
    switch -regex -file $filePath {
        "^\[(.+)\]$" { $section = $matches[1]; $ini[$section] = @{}; $CommentCount = 0 }
        "^(;.*)$" { if (!($section)) { $section = $anonymous; $ini[$section] = @{} }
                    $value = $matches[1]; $CommentCount++; $name = "Comment$CommentCount"
                    $ini[$section][$name] = $value }
        "(.+?)\s*=\s*(.*)" { if (!($section)) { $section = $anonymous; $ini[$section] = @{} }
                             $name, $value = $matches[1..2]; $ini[$section][$name] = $value }
    }
    return $ini
}

function Write-IniFile {
    param(
        [Parameter(Mandatory = $true)][string]$IniFilePath,
        [Parameter(Mandatory = $true)][hashtable]$IniData
    )
    if (Test-Path $IniFilePath) {
        Write-Warning "Konfigurationsdatei '$IniFilePath' existiert bereits."
        return
    }
    $iniContent = @()
    foreach ($sectionName in $IniData.Keys | Sort-Object) {
        $iniContent += "[$sectionName]"
        foreach ($key in $IniData[$sectionName].Keys | Sort-Object) {
            $iniContent += "$key = $($IniData[$sectionName][$key])"
        }
        $iniContent += ""
    }
    try {
        $iniContent | Set-Content -Path $IniFilePath -Encoding UTF8 -Force
        Write-Log "Beispiel-Konfigurationsdatei erfolgreich erstellt: '$IniFilePath'"
    } catch {
        Write-Error "Fehler beim Schreiben der Konfigurationsdatei '$IniFilePath': $_"
    }
}

function Write-Log {
    param (
        [Parameter(Mandatory = $true)][string]$Message,
        [switch]$NoNewline, [switch]$NoTimestamp
    )
    $LogMessage = $Message
    if (-not $NoTimestamp -and $LogMessage) {
        $LogMessage = "$(Get-Date -Format "yyyy-MM-dd HH:mm:ss") - $LogMessage"
    }
    if ($NoNewline) {
        Write-Host -NoNewline $LogMessage
        if ($EnableLogging -eq 1) { Add-Content -Path $LogFile -Value $LogMessage -NoNewline }
    } else {
        Write-Host $LogMessage
        if ($EnableLogging -eq 1) { Add-Content -Path $LogFile -Value $LogMessage }
    }
}
#endregion

#region Configuration
$scriptPath = Split-Path -Path $MyInvocation.MyCommand.Path
$iniFile = Join-Path $scriptPath "config.ini"

if ($g) {
    Write-Log "Erstelle eine Beispiel-Konfigurationsdatei: '$iniFile'"
    $exampleConfig = @{
        ProdDBRestore = @{
            ExcludeProdDBs = "1"
            TestDBNameIdentifier = "_test"
            AdditionalTestDBs = "dbtest.bak, demodb.bak"
            SourcePath = "Z:\Backup"
            DestinationPath = "C:\Restore"
        }
        Logfiles = @{
            EnableLogging = 1
            LogPath = "C:\Logs\ProdDBRestore"
        }
    }
    Write-IniFile -IniFilePath $iniFile -IniData $exampleConfig
    exit 0
}

if (-not (Test-Path $iniFile)) {
    Write-Error "Config-Fehler: Konfigurationsdatei fehlt. Mit '-g' kann eine Beispiel-Konfig erstellt werden."
    exit 1
}

try {
    $config = Get-IniFile -filePath $iniFile
    if (-not $config) {
        Write-Error "Config-Fehler: Fehler beim Lesen der Konfigurationsdatei."
        exit 1
    }
} catch {
    Write-Error "Config-Fehler: $_"
    exit 1
}

# ProdDBRestore Section
$ExcludeProdDBsIdentifier = [int]$config.ProdDBRestore.ExcludeProdDBs
$TestDBNameIdentifier = $config.ProdDBRestore.TestDBNameIdentifier
$SourcePath = $config.ProdDBRestore.SourcePath
$DestinationPath = $config.ProdDBRestore.DestinationPath

$AdditionalTestDBs = @()
if ($config.ProdDBRestore.ContainsKey("AdditionalTestDBs") -and ($config.ProdDBRestore.AdditionalTestDBs -ne "")) {
    $AdditionalTestDBs = $config.ProdDBRestore.AdditionalTestDBs -split '\s*,\s*'
    $AdditionalTestDBs = $config.ProdDBRestore.AdditionalTestDBs -split '\s*,\s*' | ForEach-Object { $_.Trim().ToLower() }
}

# Logfiles Section
$EnableLogging = [int]$config.Logfiles.EnableLogging
$LogPath = $config.Logfiles.LogPath

if (-not $SourcePath -or -not $DestinationPath) {
    Write-Error "Config-Fehler: SourcePath und DestinationPath muessen gesetzt sein."
    exit 1
}

if ($EnableLogging -eq 1 -and -not $LogPath) {
    Write-Error "Config-Fehler: LogPath muss gesetzt sein, wenn Logging aktiv ist."
    exit 1
}

if ($EnableLogging -eq 1 -and -not (Test-Path $LogPath)) {
    try { New-Item -ItemType Directory -Path $LogPath -Force | Out-Null }
    catch {
        Write-Error "Log-Verzeichnis konnte nicht erstellt werden: $_"
        exit 1
    }
}

$timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
$LogFile = if ($EnableLogging -eq 1) { Join-Path $LogPath "BackupCopyLog_$timestamp.txt" }
$TempLogFile = Join-Path $env:TEMP "robocopy_rawlog_$timestamp.txt"
#endregion

#region Main Logic
try {
    if (-not (Test-Path $SourcePath)) {
        throw "SourcePath '$SourcePath' existiert nicht."
    }

    if (-not (Test-Path $DestinationPath)) {
        try {
            New-Item -ItemType Directory -Path $DestinationPath -Force | Out-Null
            Write-Log "Zielordner erstellt: '$DestinationPath'"
        } catch {
            throw "Zielordner konnte nicht erstellt werden: $_"
        }
    } elseif ($keepExisting -eq $false) {
        if (Prompt -Message "Zielordner '$DestinationPath' wird geleert. Fortfahren?") {
            try {
                Get-ChildItem -Path $DestinationPath -Recurse -Force | Remove-Item -Force -Recurse
                Write-Log "Zielordner geleert: '$DestinationPath'"
            } catch {
                throw "Fehler beim Leeren des Zielordners: $_"
            }
        } else {
            Write-Log "Abgebrochen: Zielordner wurde nicht geleert."
            exit 0
        }
    }

    $bakFiles = Get-ChildItem -Path $SourcePath -Filter *.bak -ErrorAction Stop

    if ($all -eq $false -and $ExcludeProdDBsIdentifier -eq 1) {
        $filteredFiles = @()

        $filteredFiles = $bakFiles | Where-Object {
            ($TestDBNameIdentifier -and $_.Name -like "*$TestDBNameIdentifier*") -or
            ($AdditionalTestDBs -contains $_.Name.ToLower())
        }        

        $bakFiles = $filteredFiles | Sort-Object -Unique
        Write-Log "Aktueller Modus: Nur Test-Datenbanken und definierte Dateien werden kopiert."
    } else {
        Write-Log "Aktueller Modus: Alle Datenbanken werden kopiert."
    }

    if ($keepExisting) {
        $existingFiles = Get-ChildItem -Path $DestinationPath -Filter *.bak -ErrorAction SilentlyContinue | Select-Object -ExpandProperty Name
        if ($existingFiles) {
            $bakFiles = $bakFiles | Where-Object { $existingFiles -notcontains $_.Name }
            Write-Log "Option aktiviert: Bereits vorhandene Dateien werden uebersprungen."
        }
    }

    $fileNamesToCopy = $bakFiles | Select-Object -ExpandProperty Name

    if ($fileNamesToCopy.Count -eq 0) {
        Write-Log "Keine zu kopierenden Dateien gefunden."
    } else {
        Write-Log "Zu kopierende Dateien: " -NoNewline
        foreach ($file in $fileNamesToCopy) {
            Write-Log "${file}, " -NoNewline -NoTimestamp
        }

        Write-Log "`n" -NoNewline -NoTimestamp
        Write-Warning "Das Unterbrechen des Kopiervorgangs (z.B. mit STRG+C) kann zur Folge haben, dass die aktuell verarbeitete Datei nicht korrekt uebertragen wird. Sollte der Prozess also unterbrochen werden, muessen die Dateien manuell geprueft und ggf. geloescht werden."

        if (Prompt -Message "Robocopy wird jetzt gestartet. Fortfahren?") {
            Write-Log "Starte robocopy..."

            $fileArgs = $fileNamesToCopy | ForEach-Object { """$_""" }
            $robocopyArgs = @(
                """$SourcePath""", """$DestinationPath"""
            ) + $fileArgs + @(
                "/Z", "/R:2", "/W:2", "/ETA", "/TS", "/FP", "/V", "/IF", "/COPY:DAT",
                "/LOG:""$TempLogFile""", "/TEE"
            )

            & robocopy.exe @robocopyArgs

            if ((Test-Path $TempLogFile) -and ($EnableLogging -eq 1)) {
                Get-Content $TempLogFile | Where-Object {
                    $_ -and $_.Trim() -ne "" -and $_ -notmatch "^\s*\d{1,3}(\.\d+)?%$"
                } | ForEach-Object {
                    Add-Content -Path $LogFile -Value "$(Get-Date -Format "yyyy-MM-dd HH:mm:ss") - $_"
                }
            }

            Write-Log "Robocopy abgeschlossen."
            Write-Log "Log-Datei: '$LogFile'"
            if (Test-Path $TempLogFile) { Remove-Item $TempLogFile -Force }
        } else {
            Write-Log "Abgebrochen: Robocopy wurde nicht ausgefuehrt."
            exit 0
        }
    }

} catch {
    Write-Error "Fehler:"
    Write-Error "  Typ      : $($_.Exception.GetType().Name)"
    Write-Error "  Nachricht: $($_.Exception.Message)"
    Write-Error "  Ort      : $($_.InvocationInfo.PositionMessage.Trim())"
}
#endregion