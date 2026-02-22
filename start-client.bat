@echo off
chcp 65001 >nul 2>&1
title Traide JW - Client (port 3000)
cd /d "%~dp0client"
npm run dev
pause
