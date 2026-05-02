@echo off
echo ========================================
echo  Mahesh Portfolio - Setup Script
echo ========================================
echo.

REM Create public assets directory
if not exist "public\assets" mkdir "public\assets"

REM Copy profile photo
if exist "My_pic\IMG.jpeg" (
    copy /Y "My_pic\IMG.jpeg" "public\assets\profile.jpeg"
    echo [OK] Profile photo copied
) else (
    echo [WARN] My_pic\IMG.jpeg not found
)

REM Copy GFG logo
if exist "GFG logo\idFKvyQOZ__1777525096867.png" (
    copy /Y "GFG logo\idFKvyQOZ__1777525096867.png" "public\assets\gfg-logo.png"
    echo [OK] GFG logo copied
) else (
    echo [WARN] GFG logo not found
)

REM Copy resume
if exist "Resume\Mahesh GEN AI.pdf" (
    copy /Y "Resume\Mahesh GEN AI.pdf" "public\assets\Mahesh_GEN_AI.pdf"
    echo [OK] Resume copied
) else (
    echo [WARN] Resume not found
)

echo.
echo ========================================
echo  Installing dependencies...
echo ========================================
call npm install

echo.
echo ========================================
echo  Setup complete! Run: npm run dev
echo ========================================
pause
