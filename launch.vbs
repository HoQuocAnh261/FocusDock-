' FocusDock - Silent Windows Startup Launcher
Option Explicit
Dim WshShell, fso, appDir, edgePath, chromePath

Set WshShell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")

' Path to FocusDock directory
appDir = "G:\FocusDock"

' 1. Start FocusDock local server in background (0 = hidden window, False = asynchronous)
WshShell.Run "cmd /c cd /d """ & appDir & """ && node server.js", 0, False

' 2. Wait 900ms for server to bind port 8081
WScript.Sleep 900

' 3. Detect Microsoft Edge or Google Chrome to launch in clean borderless app window
edgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
chromePath = "C:\Program Files\Google\Chrome\Application\chrome.exe"

If fso.FileExists(edgePath) Then
    WshShell.Run """" & edgePath & """ --app=http://localhost:8081", 1, False
ElseIf fso.FileExists(chromePath) Then
    WshShell.Run """" & chromePath & """ --app=http://localhost:8081", 1, False
Else
    WshShell.Run "cmd /c start http://localhost:8081", 0, False
End If
