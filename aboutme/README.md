# SLIIT Student Portfolio Website

A beautiful and modern portfolio website built with React for a Sri Lanka Institute of Information Technology (SLIIT) undergraduate student. This portfolio showcases academic achievements, certifications, projects, and contact information.

## 🎓 About

This portfolio website is designed for a 3rd year Information Technology student at SLIIT. It features a clean, professional design with smooth animations and responsive layout.

## ✨ Features

- **Modern Design**: Clean and professional UI with beautiful gradients and animations
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Six Main Sections**:
  - 🏠 **Home**: Personal introduction and overview
  - 🏆 **Achievements**: Academic honors and awards
  - 📜 **Certificates**: Professional certifications and credentials
  - 💻 **Complete Projects**: Showcase of finished software projects
  - 🚧 **Current Projects**: Ongoing development work with progress tracking
  - 📞 **Contact Me**: Contact information and social links

## 🛠 Technology Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: CSS3 with CSS Variables
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd aboutme
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   └── Navbar.jsx          # Navigation component
├── pages/
│   ├── Home.jsx            # Homepage with introduction
│   ├── Achievements.jsx    # Academic achievements
│   ├── Certificates.jsx    # Certifications showcase
│   ├── CompleteProjects.jsx # Finished projects
│   ├── CurrentProjects.jsx # Ongoing projects
│   └── Contact.jsx         # Contact information
├── App.jsx                 # Main app component
├── App.css                # Global styles
└── main.jsx               # Application entry point
```

## 🎨 Customization

To customize this portfolio for your own use:

1. **Personal Information**: Update the content in each page component
2. **Images**: Replace placeholder images with your own photos
3. **Colors**: Modify CSS variables in `App.css` for color scheme
4. **Content**: Add your own projects, achievements, and certifications
5. **Contact Info**: Update contact details and social media links

## 📱 Responsive Design

The portfolio is fully responsive and includes:
- Mobile-first design approach
- Flexible grid layouts
- Optimized typography for all screen sizes
- Touch-friendly navigation on mobile devices

## 🌟 Key Highlights

- **Performance**: Built with Vite for fast development and optimized builds
- **Accessibility**: Semantic HTML and proper ARIA labels
- **SEO Ready**: Proper meta tags and structure
- **Modern CSS**: Uses CSS Grid, Flexbox, and CSS Variables
- **Interactive**: Smooth animations and hover effects

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you have suggestions for improvements, please open an issue or submit a pull request.

## 📧 Contact

For questions about this portfolio template, please reach out through the contact form or social media links provided in the website.

---

**Note**: This is a template portfolio. Remember to replace all placeholder content with your actual information before deploying.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
