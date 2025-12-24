# 📋 Portfolio Quick Reference

## 🎯 Most Important Files to Edit

### Personal Information
| What | Where | Line |
|------|-------|------|
| Name & Title | `src/pages/Home.jsx` | 48-51 |
| Professional Summary | `src/pages/Home.jsx` | 57-62 |
| About Introduction | `src/pages/About.jsx` | 48-65 |
| Email | Footer, Contact pages | Multiple |
| Phone | Footer, Contact pages | Multiple |

### Key Configuration
| What | File | Purpose |
|------|------|---------|
| Dependencies | `package.json` | All npm packages |
| Build Settings | `vite.config.js` | Vite configuration |
| Styles | `tailwind.config.js` | Theme, colors, fonts |
| Theme Colors | `tailwind.config.js` | Primary color (line 11) |
| Global Styles | `src/index.css` | CSS utilities |

### Content Updates
| Section | File | What to Update |
|---------|------|-----------------|
| Projects | `src/pages/Projects.jsx` | Entire projects array |
| Skills | `src/pages/Skills.jsx` | skillCategories array |
| Experience | `src/pages/Experience.jsx` | internships, certifications, education, achievements |
| Education | `src/pages/Experience.jsx` | education array |

## 🔧 Quick Commands

```bash
# Development
npm install          # Install dependencies
npm run dev         # Start dev server (localhost:3000)
npm run build       # Create production build
npm run preview     # Preview production build

# Deployment
vercel --prod       # Deploy to Vercel
netlify deploy      # Deploy to Netlify
```

## 🎨 Change Primary Color

Edit `tailwind.config.js` line ~11:
```javascript
primary: {
  500: '#0ea5e9',  // ← Change this to your color
  600: '#0284c7',
  700: '#0369a1',
}
```

Popular colors:
- Blue: `#0ea5e9`
- Purple: `#9333ea`
- Green: `#22c55e`
- Red: `#ef4444`

## 📧 EmailJS Setup (3 Steps)

### Step 1: Register
Go to [emailjs.com](https://www.emailjs.com/) → Sign Up (free)

### Step 2: Get Credentials
- Public Key: Account Settings
- Service ID: Email Services
- Template ID: Email Templates

### Step 3: Update Code
In `src/pages/Contact.jsx`:
```javascript
// Line 8
emailjs.init('YOUR_PUBLIC_KEY')

// Lines 75-76
await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  templateParams
)
```

## 🔗 Update Links

Replace these throughout the project:

```
bokkashashank          → Your GitHub username
bokka-shashank         → Your LinkedIn profile
shashank@example.com   → Your email
+91 9999999999         → Your phone
Bokka Shashank         → Your name
```

Use **Ctrl+H** (Find & Replace) in VS Code

## 📄 Add Resume

1. Create PDF of your resume
2. Save as `resume.pdf` in `public/` folder
3. Done! Download button will work automatically

## 📱 Test Responsiveness

Press **F12** in browser → Click responsive design mode icon
Test: Mobile (375px), Tablet (768px), Desktop (1024px+)

## 🌙 Dark Mode

Already included! Users can toggle with the sun/moon icon in the header.

## 🚀 Deploy Steps

### Vercel (Easiest)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import GitHub project
4. Click Deploy
5. Done!

### Netlify
1. Push code to GitHub
2. Go to [netlify.com](https://www.netlify.com)
3. Import GitHub project
4. Build: `npm run build`
5. Publish: `dist`
6. Deploy!

## ⚙️ Environment Variables

Create `.env.local`:
```
VITE_EMAILJS_PUBLIC_KEY=your_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

## 📊 File Structure at a Glance

```
src/
├── components/       # Header, Footer
├── pages/           # All page content
├── hooks/           # Theme management
├── assets/          # Images, etc.
├── App.jsx          # Routes & layout
├── main.jsx         # Entry point
└── index.css        # Global styles
```

## 🔍 Find & Replace Cheat Sheet

| Find | Replace With |
|------|---------------|
| `bokkashashank` | Your GitHub |
| `Bokka Shashank` | Your Name |
| `shashank@example.com` | Your Email |
| `+91 9999999999` | Your Phone |
| `0ea5e9` | Your Primary Color |

## 🐛 Debug Checklist

- [ ] Open F12 console → Check for errors
- [ ] Check network tab → All requests 200-300
- [ ] Test on mobile → Use responsive mode
- [ ] Test dark mode → Click theme toggle
- [ ] Test contact form → Send test email
- [ ] Test resume download → Should work
- [ ] Check all links → Should not be 404

## 📚 Documentation Files

- **SETUP.md** - Complete setup guide
- **CONFIG.md** - Detailed customization
- **DEPLOYMENT.md** - How to deploy
- **README.md** - Project overview

## 💡 Pro Tips

1. **Testing** - Always test with `npm run dev` before building
2. **Colors** - Use [colorhexa.com](https://www.colorhexa.com/) for hex colors
3. **Icons** - Browse [lucide.dev](https://lucide.dev/) for more icons
4. **Fonts** - Get fonts from [Google Fonts](https://fonts.google.com/)
5. **Images** - Compress with [tinypng.com](https://tinypng.com/)

## 🎯 Before Deployment

- [ ] Update all personal info
- [ ] Add resume.pdf
- [ ] Configure EmailJS
- [ ] Test contact form
- [ ] Test all links
- [ ] Test on mobile
- [ ] Check dark mode works
- [ ] No console errors
- [ ] Build succeeds (`npm run build`)

## 🚨 Common Issues

| Issue | Solution |
|-------|----------|
| Port 3000 in use | Run on different port: `npm run dev -- --port 3001` |
| Contact form not working | Check EmailJS keys, test with incognito |
| Styles not applying | Clear cache: `Ctrl+Shift+Delete` |
| Build fails | Delete `node_modules`, run `npm install` again |
| Pages not loading | Check routes in `src/App.jsx` |

## 📞 Support

1. Check SETUP.md for detailed steps
2. Check CONFIG.md for customization
3. Check DEPLOYMENT.md for deploy help
4. Review browser console errors (F12)
5. Check documentation links in README

## 🎉 You're Ready!

Your portfolio is production-ready. Just:
1. Customize your content
2. Test locally
3. Deploy to Vercel/Netlify
4. Share with the world!

---

**Made with ❤️ for developers**
