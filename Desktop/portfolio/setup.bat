@echo off
REM Portfolio Quick Start Script for Windows
REM This script sets up the portfolio project

echo.
echo 🚀 Starting Portfolio Setup...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js v16 or higher.
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✅ Node.js found: %NODE_VERSION%
echo.

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

if errorlevel 1 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo ✅ Dependencies installed successfully
echo.

REM Create .env.local from template
if not exist .env.local (
    echo 📝 Creating .env.local from template...
    copy .env.example .env.local
    echo ⚠️  Please update .env.local with your EmailJS credentials
) else (
    echo ✅ .env.local already exists
)

echo.
echo ✨ Setup complete!
echo.
echo 📖 Next steps:
echo 1. Update your information in src/pages/ and src/components/
echo 2. Add your resume to public/resume.pdf
echo 3. Configure EmailJS in src/pages/Contact.jsx
echo 4. Run: npm run dev
echo.
echo 📚 Documentation:
echo - Configuration Guide: CONFIG.md
echo - Deployment Guide: DEPLOYMENT.md
echo - README: README.md
echo.
pause
