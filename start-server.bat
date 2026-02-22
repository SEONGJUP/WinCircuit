@echo off
chcp 65001 >nul 2>&1
title Traide JW - Server (port 3001)
cd /d "%~dp0server"
node index.js
pause
