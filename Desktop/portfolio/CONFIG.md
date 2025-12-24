# Portfolio Configuration Guide

This guide explains how to customize every aspect of the portfolio to match your profile.

## 1. Personal Information

### In `src/pages/Home.jsx`
- Line 48-51: Update name and title
- Line 57-62: Update professional summary

### In `src/components/Footer.jsx`
- Line 30-37: Update personal description
- Line 69-73: Update email and phone

### In `src/pages/Contact.jsx`
- Line 137-148: Update contact information
- Add your actual email: `shashank@example.com` → `your@email.com`
- Add your phone: `+91 9999999999` → `+91 XXXXXXXXXX`

## 2. Social Links

Update these URLs across the portfolio:

### GitHub
```javascript
// In src/components/Header.jsx (line ~140)
// In src/components/Footer.jsx (line ~96)
// In src/pages/Home.jsx (line ~105)
// In src/pages/Projects.jsx (line ~283)
// In src/pages/Contact.jsx (line ~210)
https://github.com/yourusername
```

### LinkedIn
```javascript
// In src/components/Footer.jsx (line ~93)
// In src/pages/Contact.jsx (line ~209)
https://linkedin.com/in/yourprofile
```

### Email
Replace `shashank@example.com` with your email in:
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`
- `index.html` (meta description)

## 3. Resume

1. Create a PDF version of your resume
2. Place it in `public/resume.pdf`
3. The download button in Home page will automatically work

## 4. Projects

Edit `src/pages/Projects.jsx`:

For each project, update:
- `title`: Project name
- `description`: Project description
- `tech`: Technology stack (array)
- `image`: Emoji representing the project
- `github`: GitHub repository URL
- `highlights`: Key features/achievements

Example:
```javascript
{
  title: 'Your Project Name',
  description: 'Your project description...',
  tech: ['React', 'Node.js', 'MongoDB'],
  image: '🚀',
  github: 'https://github.com/yourname/project-name',
  highlights: [
    'Feature 1',
    'Feature 2',
    'Feature 3',
  ],
}
```

## 5. Skills

Edit `src/pages/Skills.jsx`:

Update the `skillCategories` array (line ~8):
- Change category titles
- Update skill names
- Adjust proficiency levels (0-100)

```javascript
{
  title: 'Your Category',
  skills: [
    { name: 'Skill Name', level: 85 },
    // ... more skills
  ],
}
```

## 6. Experience

Edit `src/pages/Experience.jsx`:

### Internships (line ~8)
```javascript
{
  title: 'Position Title',
  company: 'Company Name',
  period: 'Start - End',
  description: 'Description...',
  achievements: [
    'Achievement 1',
    'Achievement 2',
  ],
  icon: Briefcase,
}
```

### Certifications (line ~28)
```javascript
{
  title: 'Certification Name',
  issuer: 'Issuing Organization',
  date: '2024',
  description: 'Description...',
}
```

### Education (line ~42)
```javascript
{
  degree: 'Degree Name',
  institution: 'University Name',
  period: 'Start - End',
  cgpa: '9.0',
  description: 'Description...',
  courses: ['Course 1', 'Course 2'],
}
```

### Achievements (line ~77)
```javascript
{
  title: 'Achievement Title',
  organization: 'Organization Name',
  date: '2024',
  description: 'Description...',
  icon: Trophy,
}
```

## 7. About Page

Edit `src/pages/About.jsx`:

- Line 48-65: Update introduction paragraphs
- Line 71-103: Customize highlights (Icon, title, description)

## 8. Theme Colors

Edit `tailwind.config.js` to customize colors:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#0ea5e9',  // Main color
        600: '#0284c7',
        700: '#0369a1',
      },
    },
  },
}
```

**Popular color options:**
- Blue: `#0ea5e9`, `#0284c7`, `#0369a1`
- Purple: `#9333ea`, `#7e22ce`, `#6b21a8`
- Green: `#22c55e`, `#16a34a`, `#15803d`
- Red: `#ef4444`, `#dc2626`, `#991b1b`

## 9. Metadata & SEO

Edit `index.html`:

```html
<meta name="description" content="Your description here" />
<meta name="keywords" content="your, keywords, here" />
<meta name="author" content="Your Name" />
<meta property="og:title" content="Your Name - Portfolio" />
<meta property="og:description" content="Your description" />
<title>Your Name - Portfolio</title>
```

## 10. Email Configuration

### Step 1: Setup EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up (free tier is fine)
3. Create an Email Service (use Gmail)
4. Create an Email Template

### Step 2: Get Your Credentials
- **Public Key**: From Account settings
- **Service ID**: From Email Services
- **Template ID**: From Email Templates

### Step 3: Update Contact Form
In `src/pages/Contact.jsx`:

Line 8:
```javascript
emailjs.init('YOUR_ACTUAL_PUBLIC_KEY_HERE')
```

Line 75-76:
```javascript
await emailjs.send(
  'YOUR_ACTUAL_SERVICE_ID_HERE',
  'YOUR_ACTUAL_TEMPLATE_ID_HERE',
  templateParams
)
```

### Step 4: Update Template Variables
In your EmailJS template, use these variables:
- `{{from_name}}` - Visitor's name
- `{{from_email}}` - Visitor's email
- `{{message}}` - Visitor's message
- `{{to_email}}` - Your email address

## 11. Header Logo

The logo shows "BS" (Bokka Shashank). To customize:

In `src/components/Header.jsx`, line ~32:
```javascript
<span className="text-white font-bold text-lg">BS</span>
// Change to your initials
```

## 12. Animations

All animations are in `tailwind.config.js` (keyframes section) and use Framer Motion.

To adjust animation speeds:
- Edit `duration` values in animation definitions
- Slower: increase duration (0.8s, 1.0s, etc.)
- Faster: decrease duration (0.3s, 0.4s, etc.)

## 13. Mobile Responsiveness

The site is mobile-first using Tailwind breakpoints:
- `sm:` - 640px (phones)
- `md:` - 768px (tablets)
- `lg:` - 1024px (laptops)
- `xl:` - 1280px (large screens)

Test with DevTools (F12) → Responsive Design Mode

## 14. Fonts

Current fonts are from Tailwind's default system fonts. To change:

Update `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap');

* {
  font-family: 'YourFont', sans-serif;
}
```

## 15. Performance Optimization

Already optimized with:
- ✅ Code splitting (React Router)
- ✅ Lazy loading (Framer Motion)
- ✅ Minified CSS/JS
- ✅ Image optimization
- ✅ Efficient animations

To further optimize:
1. Compress images
2. Use WebP format
3. Lazy load project images
4. Remove unused dependencies

## Common Customization Checklist

- [ ] Update name and title
- [ ] Update email and phone
- [ ] Update GitHub/LinkedIn URLs
- [ ] Add resume PDF
- [ ] Update all projects
- [ ] Update skills with your proficiencies
- [ ] Update experience/internships
- [ ] Update education
- [ ] Update achievements
- [ ] Change primary color theme
- [ ] Setup EmailJS
- [ ] Update meta descriptions
- [ ] Test all links work
- [ ] Test on mobile
- [ ] Deploy

## Quick Find & Replace

Use Ctrl+H (Find & Replace) in VS Code:

1. `shashank@example.com` → your email
2. `+91 9999999999` → your phone
3. `bokkashashank` → your username
4. `Bokka Shashank` → your name
5. `0ea5e9` → your primary color (if changing)

## Support

For detailed help:
- Check specific page files in `src/pages/`
- Review component files in `src/components/`
- Refer to Tailwind docs for styling
- Check Framer Motion docs for animations
- Review EmailJS docs for email setup

---

**Tip**: Test changes locally with `npm run dev` before deploying!
