# 🚀 Portfolio Setup Guide

## Project Structure Overview

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Navigation header with theme toggle
│   │   └── Footer.jsx            # Footer with social links
│   ├── pages/
│   │   ├── Home.jsx              # Hero section
│   │   ├── About.jsx             # About me page
│   │   ├── Skills.jsx            # Skills showcase
│   │   ├── Projects.jsx          # Featured projects
│   │   ├── Experience.jsx        # Internships, education, achievements
│   │   └── Contact.jsx           # Contact form with EmailJS
│   ├── hooks/
│   │   ├── useTheme.js           # Theme toggle hook
│   │   └── ThemeContext.jsx      # Theme context provider
│   ├── assets/                    # Static assets (images, etc.)
│   ├── App.jsx                    # Main app component with routing
│   ├── main.jsx                   # React entry point
│   └── index.css                  # Global styles
├── public/
│   ├── resume.pdf                # Your resume (add yours here)
│   └── resume.txt                # Resume text version
├── index.html                     # HTML entry point
├── package.json                   # Dependencies
├── vite.config.js                 # Vite config
├── tailwind.config.js             # Tailwind CSS config
├── postcss.config.js              # PostCSS config
├── vercel.json                    # Vercel deployment config
├── netlify.toml                   # Netlify deployment config
├── .env.example                   # Environment variables template
├── .gitignore                     # Git ignore rules
├── README.md                      # Project README
├── CONFIG.md                      # Configuration guide
├── DEPLOYMENT.md                  # Deployment guide
├── SETUP.md                       # This file
├── setup.sh                       # Linux/Mac setup script
└── setup.bat                      # Windows setup script
```

## Installation & Setup

### Option 1: Automatic Setup (Recommended)

#### Windows
```bash
setup.bat
```

#### Linux/Mac
```bash
chmod +x setup.sh
./setup.sh
```

### Option 2: Manual Setup

1. **Install Dependencies**
```bash
npm install
```

2. **Create Environment File**
```bash
cp .env.example .env.local
```

3. **Update Configuration**
- Edit `.env.local` with your EmailJS credentials (optional for testing)
- Refer to CONFIG.md for detailed customization

## Development Workflow

### 1. Start Development Server
```bash
npm run dev
```
The site will open at `http://localhost:3000`

### 2. Edit Your Information

**Home Page** (`src/pages/Home.jsx`):
- Update your name and title
- Change professional summary
- Update social links

**About Page** (`src/pages/About.jsx`):
- Update professional introduction
- Modify highlights and achievements

**Skills Page** (`src/pages/Skills.jsx`):
- Add/remove programming languages
- Update proficiency levels
- Add frameworks and tools

**Projects Page** (`src/pages/Projects.jsx`):
- Update project details
- Add your GitHub repository links
- Change project descriptions and technologies

**Experience Page** (`src/pages/Experience.jsx`):
- Update internship details
- Add certifications
- Update education history
- Add achievements

**Contact Page** (`src/pages/Contact.jsx`):
- Update contact information
- Configure EmailJS for working contact form

**Header/Footer** (`src/components/`):
- Update social media links
- Change contact details
- Customize branding

### 3. Add Your Resume

1. Create a PDF version of your resume
2. Save as `resume.pdf` in the `public/` folder
3. Download link will work automatically

### 4. Setup EmailJS for Contact Form

**Steps:**
1. Visit [emailjs.com](https://www.emailjs.com/)
2. Sign up (free tier works)
3. Create Email Service (Gmail recommended)
4. Create Email Template with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
   - `{{to_email}}`

5. In `src/pages/Contact.jsx`:
   - Update line 8: `emailjs.init('YOUR_PUBLIC_KEY')`
   - Update lines 75-76: Service ID and Template ID

### 5. Test Locally

```bash
# Start dev server
npm run dev

# Test each page:
# - Check responsiveness (F12 → Mobile View)
# - Test dark/light mode toggle
# - Test contact form (should receive emails)
# - Test all links
# - Test resume download

# Build production version
npm run build

# Preview production build
npm run preview
```

## Customization Quick Reference

### Change Primary Color
Edit `tailwind.config.js`:
```javascript
primary: {
  500: '#YOUR_HEX_COLOR',  // Change this
  600: '#DARKER_HEX',
  700: '#EVEN_DARKER_HEX',
}
```

### Update Navigation Links
Edit `src/components/Header.jsx` line ~20:
```javascript
const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  // ... more links
]
```

### Modify Animations
Edit component files, Framer Motion properties:
```javascript
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}  // Change timing
```

### Update Social Links
Search and replace across files:
- `bokkashashank` → Your GitHub username
- `bokka-shashank` → Your LinkedIn profile
- `shashank@example.com` → Your email
- `+91 9999999999` → Your phone

## Key Features Implemented

✅ **Fully Responsive** - Mobile-first design
✅ **Dark/Light Mode** - Toggle in header
✅ **Smooth Animations** - Framer Motion effects
✅ **SEO Optimized** - Meta tags and structured content
✅ **Fast Performance** - Vite build optimization
✅ **Working Contact Form** - EmailJS integration
✅ **Resume Download** - PDF support
✅ **GitHub Integration** - Links to projects
✅ **Professional Design** - Modern, recruiter-friendly
✅ **Accessibility** - WCAG compliant

## Testing Checklist

Before deploying, verify:

- [ ] All pages load without errors
- [ ] Dark/light mode toggle works
- [ ] Navigation links work correctly
- [ ] Contact form sends emails
- [ ] Resume download works
- [ ] All GitHub links are correct
- [ ] Mobile responsive (test on phone)
- [ ] Images load properly
- [ ] No console errors (F12)
- [ ] Fast load time
- [ ] All text is accurate and professional

## Build & Deploy

### Production Build
```bash
npm run build
```
Creates optimized files in `dist/` folder

### Deploy Options

**Vercel (Recommended)**
```bash
npm install -g vercel
vercel --prod
```

**Netlify**
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

**Traditional Hosting**
1. Run `npm run build`
2. Upload `dist` folder contents to your server
3. Configure server for SPA (redirect 404s to index.html)

## Common Tasks

### Add a New Project
1. Edit `src/pages/Projects.jsx`
2. Add new object to `projects` array
3. Update title, description, tech stack, and GitHub link
4. Re-run dev server to see changes

### Update Skills
1. Edit `src/pages/Skills.jsx`
2. Modify `skillCategories` array
3. Update skill names and proficiency levels
4. Add or remove skill categories

### Change Theme Colors
1. Edit `tailwind.config.js`
2. Update primary color values in theme.extend.colors
3. Save and see changes in dev server

### Add New Page
1. Create new file in `src/pages/`
2. Create component with export
3. Add route in `src/App.jsx`
4. Add navigation link in `src/components/Header.jsx`

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use different port
npm run dev -- --port 3001
```

### Dependencies Not Installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Fails
```bash
# Clear build cache
rm -rf dist
npm run build
```

### Contact Form Not Working
- Verify EmailJS keys are correct
- Check browser console for errors (F12)
- Test from incognito window
- Verify email service is configured

## Performance Tips

- Compress images before using
- Use WebP format for images
- Keep bundle size minimal
- Lazy load heavy components
- Cache static assets
- Use CDN for fast delivery

## Security Notes

- Never commit `.env.local` with real keys
- Use GitHub Actions for secrets
- Validate all form inputs
- Keep dependencies updated
- Use HTTPS for deployment

## Support & Resources

- [Vite Docs](https://vitejs.dev/)
- [React Router Docs](https://reactrouter.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [EmailJS Docs](https://www.emailjs.com/docs/)

## Next Steps

1. ✅ Complete installation
2. ✅ Update all personal information
3. ✅ Configure EmailJS
4. ✅ Test all functionality
5. ✅ Deploy to Vercel or Netlify
6. ✅ Set up custom domain (optional)
7. ✅ Monitor analytics (optional)
8. ✅ Keep content updated

## Support

Need help?
1. Check CONFIG.md for detailed customization
2. Check DEPLOYMENT.md for deployment issues
3. Review error messages in browser console (F12)
4. Check framework documentation

---

**Happy coding! 🎉**

Built with ❤️ for your success
