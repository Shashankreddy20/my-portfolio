# Bokka Shashank's Portfolio Website

A modern, responsive, and fully functional personal portfolio website built with React, Vite, and Tailwind CSS.

## 🌟 Features

- **Responsive Design** - Mobile-first approach that works on all devices
- **Dark Mode Support** - Toggle between light and dark themes
- **Smooth Animations** - Framer Motion animations throughout
- **Contact Form** - Fully functional email contact form with EmailJS
- **SEO Optimized** - Meta tags and structured content
- **Fast Performance** - Built with Vite for optimal build speed
- **Modern UI** - Clean, professional design with Tailwind CSS
- **Production Ready** - Optimized and ready for deployment

## 📋 Pages

- **Home** - Hero section with CTA buttons
- **About** - Professional introduction and highlights
- **Skills** - Technical skills with progress bars
- **Projects** - Featured projects with GitHub links
- **Experience** - Internships, certifications, education, and achievements
- **Contact** - Contact form and contact information

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router v6
- **Email Service**: EmailJS
- **Deployment**: Vercel/Netlify ready

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

The website will open at `http://localhost:3000`

## 📧 Email Configuration

To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the following in `src/pages/Contact.jsx`:
   - Replace `YOUR_EMAILJS_PUBLIC_KEY` with your public key
   - Replace `YOUR_SERVICE_ID` with your service ID
   - Replace `YOUR_TEMPLATE_ID` with your template ID

## 🔨 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 📦 Deployment

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically build and deploy
3. Set environment variables if needed

### Netlify

1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   ├── hooks/
│   │   ├── useTheme.js
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── resume.pdf
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── .gitignore
```

## 🎨 Customization

### Colors

Edit the theme in `tailwind.config.js`:

```js
colors: {
  primary: {
    500: '#0ea5e9',
    600: '#0284c7',
    // ... more colors
  }
}
```

### Content

Update your information in the respective page files:
- Personal details in `src/pages/Home.jsx`
- CV information across all pages
- Social links in `src/components/Footer.jsx` and `src/pages/Contact.jsx`

### Resume

Replace the resume PDF in the `public/` folder:
1. Add your resume as `resume.pdf` in the `public/` folder
2. The download link in the Hero section will work automatically

## ✨ Features Implemented

- ✅ Fully responsive design
- ✅ Dark/Light mode toggle
- ✅ Smooth page transitions
- ✅ Animated components
- ✅ Working contact form
- ✅ GitHub links for projects
- ✅ Resume download
- ✅ Professional typography
- ✅ Accessibility best practices
- ✅ SEO meta tags
- ✅ Fast load times
- ✅ Mobile-optimized

## 🔐 Security

- Environment variables for sensitive data
- No hardcoded credentials
- XSS protection
- CSRF protection ready

## 📄 License

This project is open source and available under the MIT License.

## 📞 Contact

For questions or suggestions about this portfolio:
- Email: shashank@example.com
- LinkedIn: [Bokka Shashank](https://linkedin.com/in/bokka-shashank)
- GitHub: [@bokkashashank](https://github.com/bokkashashank)

## 🎯 Next Steps

1. Configure EmailJS for the contact form
2. Add your resume PDF to the public folder
3. Update all links and contact information
4. Deploy to your preferred platform
5. Monitor analytics and user engagement

---

Built with ❤️ by Bokka Shashank
