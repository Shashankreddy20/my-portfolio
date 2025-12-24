# 🎉 START HERE - Portfolio Setup Guide

Welcome! Your complete portfolio website is ready. Follow these simple steps to get started.

---

## ⚡ Quick Start (5 minutes)

### 1️⃣ Install Dependencies
```bash
npm install
```

**On Windows?** Just run: `setup.bat`  
**On Mac/Linux?** Just run: `./setup.sh`

### 2️⃣ Start Development Server
```bash
npm run dev
```

Your site opens at: **http://localhost:3000**

### 3️⃣ View Your Portfolio
- 🏠 **Home** - Hero section
- 📖 **About** - Your introduction
- 💻 **Skills** - Your skills
- 🚀 **Projects** - Your projects
- 🎓 **Experience** - Internships, education
- 📧 **Contact** - Contact form

### 4️⃣ Customize (30 minutes)

**Most Important Changes:**
1. Edit `src/pages/Home.jsx` - Add your name, title, summary
2. Edit `src/pages/Projects.jsx` - Add your projects
3. Edit `src/pages/Experience.jsx` - Add your education/internships
4. Edit `src/components/Footer.jsx` - Add your contact info
5. Add `resume.pdf` to the `public/` folder

**See CONFIG.md for detailed instructions**

### 5️⃣ Deploy (5 minutes)

#### **Easiest: Vercel**
1. Push to GitHub: `git push`
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repo
5. Click "Deploy" ✅

#### **Alternative: Netlify**
1. Push to GitHub: `git push`
2. Go to [netlify.com](https://www.netlify.com)
3. Click "Import an existing project"
4. Select your GitHub repo
5. Deploy ✅

---

## 📚 Documentation Index

| Document | Purpose | When to Read |
|----------|---------|--------------|
| **THIS FILE** | Getting started | First (you are here!) |
| **QUICKREF.md** | Quick reference | When customizing |
| **CONFIG.md** | Detailed customization | When making changes |
| **SETUP.md** | Complete setup guide | For detailed setup help |
| **DEPLOYMENT.md** | Deployment steps | Before deploying |
| **README.md** | Project overview | For project info |
| **DELIVERY_SUMMARY.md** | What's included | To see full scope |
| **FEATURES_CHECKLIST.md** | All features | To verify features |

---

## 🎯 What You Get

✅ **6 Complete Pages**
- Home, About, Skills, Projects, Experience, Contact

✅ **All Features Working**
- Dark mode, animations, contact form, responsive design

✅ **Production Ready**
- Optimized, tested, deployment-ready

✅ **Fully Documented**
- Setup, customization, deployment guides

✅ **No Extra Work**
- Just update content and deploy!

---

## 🚀 Step-by-Step Guide

### Step 1: Install (2 min)
```bash
npm install
```

### Step 2: Run Locally (1 min)
```bash
npm run dev
```

### Step 3: Customize (20-30 min)

**Edit these files:**

1. **Your Name & Title**
   - File: `src/pages/Home.jsx`
   - Lines: 48-51
   - Change: "Bokka Shashank" and "Computer Science..."

2. **Your About Section**
   - File: `src/pages/About.jsx`
   - Lines: 48-65
   - Change: Paragraphs about yourself

3. **Your Skills**
   - File: `src/pages/Skills.jsx`
   - Update: Skill names and proficiency levels

4. **Your Projects**
   - File: `src/pages/Projects.jsx`
   - Update: Project array with your projects

5. **Your Education & Experience**
   - File: `src/pages/Experience.jsx`
   - Update: Internships, certifications, education

6. **Your Contact Info**
   - Files: `src/components/Footer.jsx` and `src/pages/Contact.jsx`
   - Update: Email, phone, social links

7. **Your Resume**
   - File: `public/resume.pdf`
   - Add: Your resume PDF here

### Step 4: Test (2-3 min)
```bash
# Check in browser:
# ✓ All pages load
# ✓ Dark mode toggle works
# ✓ Mobile view looks good
# ✓ All links work
```

### Step 5: Deploy (2-3 min)

**Vercel (Easiest):**
```bash
npm install -g vercel
vercel --prod
```

**OR Netlify:**
```bash
npm run build
# Upload dist/ folder to Netlify
```

---

## 📝 File Locations Quick Reference

```
Update name/title           → src/pages/Home.jsx
Update about info          → src/pages/About.jsx
Update skills              → src/pages/Skills.jsx
Update projects            → src/pages/Projects.jsx
Update experience/education → src/pages/Experience.jsx
Update contact form        → src/pages/Contact.jsx
Update footer links        → src/components/Footer.jsx
Change theme color         → tailwind.config.js
Add your resume            → public/resume.pdf
Configure EmailJS          → src/pages/Contact.jsx
```

---

## 🎨 Customization Tips

### Change Primary Color
Edit `tailwind.config.js` line ~11:
```javascript
primary: {
  500: '#YOUR_COLOR_HEX',  // Change blue to any color
  600: '#DARKER_HEX',
  700: '#EVEN_DARKER_HEX',
}
```

### Find & Replace All
Use **Ctrl+H** in VS Code:
- Replace `Bokka Shashank` with your name
- Replace `shashank@example.com` with your email
- Replace `bokkashashank` with your GitHub username

### Add GitHub Link
Replace: `https://github.com/bokkashashank` with your GitHub

### Add LinkedIn Link
Replace: `https://linkedin.com/in/bokka-shashank` with your LinkedIn

---

## ✅ Pre-Deploy Checklist

Before deploying, verify:

- [ ] Name and title updated
- [ ] All projects added
- [ ] Skills list updated
- [ ] Education info correct
- [ ] Contact email correct
- [ ] Resume added to public/
- [ ] All links working
- [ ] No console errors (F12)
- [ ] Mobile looks good
- [ ] Dark mode works

---

## 🌟 Key Features

🎨 **Dark Mode** - Toggle in header
📱 **Responsive** - Works on all devices
⚡ **Fast** - Optimized performance
✨ **Smooth Animations** - Professional look
📧 **Contact Form** - Ready for EmailJS
🔗 **GitHub Integration** - Project links
📄 **Resume Download** - One-click download
🌍 **SEO Optimized** - Search engine ready

---

## 📞 Help & Support

### If Something Doesn't Work:

1. **Check browser console** (F12 → Console)
2. **See if port 3000 is in use**: Kill and restart
3. **Read SETUP.md** for detailed help
4. **Check CONFIG.md** for customization help
5. **See QUICKREF.md** for quick answers

### Common Issues:

| Issue | Solution |
|-------|----------|
| npm install fails | Delete `node_modules`, try again |
| Port 3000 in use | Run `npm run dev -- --port 3001` |
| Site looks wrong | Clear browser cache: Ctrl+Shift+Delete |
| Form not working | EmailJS not configured (optional) |

---

## 🎓 Project Structure

```
portfolio/
├── src/
│   ├── pages/          ← Edit content here
│   │   ├── Home.jsx    ← Your name/title
│   │   ├── About.jsx   ← Your bio
│   │   ├── Skills.jsx  ← Your skills
│   │   ├── Projects.jsx ← Your projects
│   │   ├── Experience.jsx ← Your experience
│   │   └── Contact.jsx ← Contact form
│   ├── components/     ← Header, Footer
│   └── index.css       ← Global styles
├── public/             ← Add resume.pdf here
├── package.json        ← Dependencies
├── tailwind.config.js  ← Theme colors
└── index.html          ← SEO meta tags
```

---

## 🚀 Deployment Platforms

### Vercel (Recommended) ⭐
- Free tier
- Auto-deploy from GitHub
- Great performance
- Dashboard

### Netlify
- Free tier
- Simple setup
- Good performance
- Dashboard

### Your Own Server
- Full control
- More work
- Traditional hosting

---

## 💡 Pro Tips

1. **Save & Refresh** - Always save file and refresh browser
2. **Test Mobile** - F12 → Toggle device toolbar
3. **Dark Mode** - Test both light and dark modes
4. **Links** - Test all links before deploying
5. **Console** - Check F12 console for errors
6. **Performance** - Deploy usually takes <1 minute

---

## 🎯 Typical Timeline

| Task | Time |
|------|------|
| Install & setup | 5 min |
| Update content | 30 min |
| Test locally | 5 min |
| Deploy | 5 min |
| **Total** | **45 min** |

---

## 🎉 You're Ready!

Your portfolio is:
- ✅ Complete
- ✅ Professional
- ✅ Production-ready
- ✅ Fully documented
- ✅ Easy to customize
- ✅ Ready to deploy

**Just 3 things to do:**
1. Update content
2. Test locally
3. Deploy!

---

## 📖 Next: Read These Files

1. **QUICKREF.md** - Quick reference for common changes
2. **CONFIG.md** - When making detailed changes
3. **DEPLOYMENT.md** - When deploying to production

---

## ✨ You've Got This!

Everything is already built. You just need to:
1. Add your information
2. Deploy
3. Share with the world!

**Questions?** Check the documentation files (they're comprehensive!)

---

**Happy coding! 🚀**

*Built with React, Vite, and Tailwind CSS*
