#!/bin/bash

# Portfolio Quick Start Script
# This script sets up the portfolio project

echo "🚀 Starting Portfolio Setup..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v16 or higher."
    exit 1
fi

echo "✅ Node.js found: $(node --version)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Create .env.local from template
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local from template..."
    cp .env.example .env.local
    echo "⚠️  Please update .env.local with your EmailJS credentials"
else
    echo "✅ .env.local already exists"
fi

echo ""
echo "✨ Setup complete!"
echo ""
echo "📖 Next steps:"
echo "1. Update your information in src/pages/ and src/components/"
echo "2. Add your resume to public/resume.pdf"
echo "3. Configure EmailJS in src/pages/Contact.jsx"
echo "4. Run: npm run dev"
echo ""
echo "📚 Documentation:"
echo "- Configuration Guide: open CONFIG.md"
echo "- Deployment Guide: open DEPLOYMENT.md"
echo "- README: open README.md"
