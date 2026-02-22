@echo off
chcp 65001 >nul 2>&1
echo Installing all dependencies...
cd /d "%~dp0"
call npm install
cd client
call npm install
cd ..\server
call npm install
echo.
echo All dependencies installed!
pause
