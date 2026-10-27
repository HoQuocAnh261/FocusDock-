@echo off
title FocusDock - Disable Windows Startup
echo ========================================================
echo   FocusDock - Disable Auto-Start with Windows
echo ========================================================
echo.
reg.exe delete "HKCU\Software\Microsoft\Windows\CurrentVersion\Run" /v "FocusDock" /f
if %errorlevel% equ 0 (
    echo [OK] FocusDock will NO LONGER start with Windows.
) else (
    echo [INFO] FocusDock was not in Windows Startup.
)
echo.
pause
