@echo off
chcp 65001 >nul 2>&1
title Traide JW - Dev Server
echo ==========================================
echo   Traide JW Development Server
echo   Client: http://localhost:3000
echo   Server: http://localhost:3001
echo ==========================================
echo.
cd /d "%~dp0"
npm run dev
pause
