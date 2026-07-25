@echo off
chcp 65001 >nul
title ENIS COSKUN GAYRIMENKUL - Sunum Sunucusu
cd /d "%~dp0"

echo.
echo   ENIS COSKUN GAYRIMENKUL — site baslatiliyor...
echo.

rem Derleme yoksa (ilk kullanim) once derle
if not exist ".next\BUILD_ID" (
  echo   Ilk calistirma: site derleniyor, 1-2 dakika surebilir...
  call npm run build
)

rem 3 saniye sonra tarayicida ac (sunucu ayaga kalkarken)
start /b cmd /c "timeout /t 3 >nul & start http://localhost:3002"

echo   Site: http://localhost:3002
echo   Bu pencereyi kapatirsaniz site durur.
echo.
call npm run start -- -p 3002
