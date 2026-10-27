@echo off
title FocusDock - Enable Windows Startup
echo ========================================================
echo   FocusDock - Enable Auto-Start with Windows
echo ========================================================
echo.
reg.exe add "HKCU\Software\Microsoft\Windows\CurrentVersion\Run" /v "FocusDock" /t REG_SZ /d "wscript.exe \"G:\FocusDock\launch.vbs\"" /f
if %errorlevel% equ 0 (
    echo [OK] FocusDock will now start automatically when Windows boots!
    echo [OK] Reg key: HKCU\Software\Microsoft\Windows\CurrentVersion\Run -> FocusDock
) else (
    echo [ERROR] Failed to add registry key.
)
echo.
pause
