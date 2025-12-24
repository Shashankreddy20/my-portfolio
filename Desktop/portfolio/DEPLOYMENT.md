# Deployment Guide

## Quick Start to Deployment

### Prerequisites
- GitHub account
- Vercel or Netlify account
- Node.js installed locally

## Step 1: Setup EmailJS

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Create an Email Service (Gmail recommended)
4. Create an Email Template with variables:
   - `from_name`: Your name
   - `from_email`: Your email
   - `message`: Message content
   - `to_email`: Your receiving email
5. Copy your:
   - Public Key
   - Service ID
   - Template ID

## Step 2: Update Contact Form

In `src/pages/Contact.jsx`, replace:
```javascript
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY') // Line 8
// AND
await emailjs.send(
  'YOUR_SERVICE_ID',           // Line 75
  'YOUR_TEMPLATE_ID',          // Line 76
  templateParams
)
```

## Step 3: Add Resume

1. Generate your resume as a PDF
2. Save as `resume.pdf` in the `public/` folder
3. The download button will automatically work

## Step 4: Update Portfolio Content

### Personal Information
- Edit `src/pages/Home.jsx` - Change role and summary
- Edit `src/pages/About.jsx` - Update professional intro
- Edit `src/components/Footer.jsx` - Update contact details

### Projects
- Edit `src/pages/Projects.jsx` - Update project details and GitHub links

### Experience
- Edit `src/pages/Experience.jsx` - Update internships, certifications, education

### Links
- Update GitHub URL: `https://github.com/yourusername`
- Update LinkedIn URL: `https://linkedin.com/in/yourprofile`
- Update email addresses
- Update phone number

## Step 5: Deploy to Vercel

### Method 1: Connect GitHub (Recommended)

1. Push your code to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. Go to [Vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Configure settings:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Deploy

### Method 2: CLI Deployment

```bash
npm install -g vercel
vercel login
vercel --prod
```

## Step 6: Deploy to Netlify

### Method 1: GitHub Integration (Recommended)

1. Push to GitHub (same as above)
2. Go to [Netlify.com](https://www.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy

### Method 2: Drag & Drop

1. Run build locally:
```bash
npm run build
```

2. Go to Netlify
3. Drag and drop the `dist` folder

## Step 7: Custom Domain (Optional)

### For Vercel:
1. Go to Project Settings
2. Domains
3. Add your custom domain
4. Follow DNS configuration

### For Netlify:
1. Go to Domain settings
2. Add custom domain
3. Update DNS records

## Step 8: Environment Variables

If using environment variables:

1. Create `.env.local` locally:
```
VITE_EMAILJS_PUBLIC_KEY=your_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

2. In Vercel:
   - Project Settings → Environment Variables
   - Add each variable

3. In Netlify:
   - Site settings → Build & deploy → Environment
   - Add each variable

## Testing Before Deploy

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Test contact form
# - Fill all fields
# - Check you receive emails

# Test dark mode toggle
# - Click theme button in header

# Test responsive design
# - Use browser DevTools (F12)
# - Test on mobile viewport

# Build for production
npm run build

# Preview production build
npm run preview
```

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Test dark/light mode toggle
- [ ] Test contact form - verify emails are received
- [ ] Test all GitHub links work
- [ ] Test resume download works
- [ ] Check mobile responsiveness
- [ ] Test on multiple browsers
- [ ] Check page speed with PageSpeed Insights
- [ ] Verify SEO meta tags
- [ ] Test all external links

## Troubleshooting

### Contact Form Not Working
1. Verify EmailJS keys are correct
2. Check template ID matches service
3. Test with sample email first
4. Check browser console for errors

### Build Fails
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Try `npm run build` locally
4. Check Node.js version (v16+)

### Deploy Fails
1. Check build logs on platform
2. Verify all dependencies in `package.json`
3. Check for environment variable issues
4. Ensure no hardcoded secrets in code

### Performance Issues
1. Optimize images
2. Enable compression
3. Use CDN for assets
4. Minimize bundle size

## Monitoring

After deployment:
1. Set up Google Analytics
2. Monitor error tracking (Sentry)
3. Check Core Web Vitals
4. Review user analytics

## Updates & Maintenance

To update content after deployment:

1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub
4. Vercel/Netlify will auto-deploy

## Support

For issues:
- Check deployment platform docs
- Review error logs
- Check browser console
- Test locally first

---

Happy deploying! 🚀
