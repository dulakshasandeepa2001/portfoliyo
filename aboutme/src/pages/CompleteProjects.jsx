/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { Github, ExternalLink, Calendar, Code, Users, Star } from 'lucide-react'

const CompleteProjects = () => {
  const projects = [
    {
      title: " Virtual Dressing Mall",
      description: "A full-stack e-commerce web application built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      category: "Web Development",
      completedDate: "MAY 2025",
      duration: "3 months",
      role: "Full Stack Developer",
      team: "University Group Project",
features: [
  "For Shoppers:",
  "Find Nearby Stores with real-time dress availability",
  "Browse Trending Outfits, prices, and reviews",
  "Get Fashion Inspiration from a social media-style feed",
  "Buy Online with secure payments and real-time order tracking",
  "For Sellers:",
  "Inventory Management – Add and update dresses in stock",
  "Sales Reports – View detailed analytics and revenue stats",
  "Bidding System – Manage offers and customer bids",
  "Order Tracking – Monitor orders and delivery statuses"
],
      githubUrl: "https://github.com/dulakshasandeepa2001/virtualdressingmall.git",

      highlights: [
        "Implemented secure payment processing",
        "Built responsive UI with modern design",
        
      ]
    },
    {
      title: "Wildtrack",
      description: "Wild Side Hotel Management System is a web-based platform built with PHP, HTML, CSS, and MySQL. It manages hotel operations like bookings, guest profiles, rooms, facilities, and admin tasks, offering a streamlined and efficient user experience. comprehensive student management system for educational institutions built with Java Spring Boot and MySQL. Includes student enrollment, grade management, attendance tracking, and reporting features.",
      image: "/api/placeholder/400/250",
      technologies: ["HTML", "CSS", "Java Script", "PHP", ],
      category: "Web Development",
      completedDate: "October 2024",
      duration: "3 months",
      role: "Full Stack Developer",
      team: "5 Members",
      features: [
        "booking",
        "guest profiles",
         "rooms Booking",
        "facilities",
         "admin tasks",
      ],
      githubUrl: "https://github.com/dulakshasandeepa2001/Wildtrack.git",
      liveUrl: "https://wildsafari.infinityfreeapp.com/?i=1",
      highlights: [
        "Designed efficient database schema",
        "Implemented role-based access control",
        "Generated automated reports"
      ]
    },
    {
      title: "Farmer Task Mobile App",
      description: "armer Task Mobile App A mobile application designed to assist farmers in managing their daily agricultural tasks, including crop care, fertilizer recommendations, disease identification, and irrigation management. This app simplifies farming by providing smart suggestions to improve crop productivity and save resources.A cross-platform mobile application built with React Native that provides real-time weather information, forecasts, and weather alerts. Features location-based weather data and beautiful weather animations.",
      image: "/api/placeholder/400/250",
      technologies: ["Kotlin", "android Studio", "OpenWeather API", "AsyncStorage"],
      category: "Mobile Development",
      completedDate: "MAY 2025",
      duration: "2 months",
      role: "Mobile Developer",
      team: "Solo Project",
features: [
  "Reminds farmers about watering, fertilizing, and crop inspections.",
  "Suggests best fertilizers and exact quantity based on crop type and growth stage.",
  "AI-powered plant disease identification using images.",
  "Provides treatment and prevention tips.",
  "Calculates optimal water requirement based on crop, soil type, and weather."
],
      githubUrl: "https://github.com/dulakshasandeepa2001/FarmerTask.git",
     
      highlights: [
        "Implemented smooth animations",
        "Optimized for both  Android"
      ]
    },
    
    
      
    {
      title: "Film Buffs",
      description: "Movie Streaming & Download Site A full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application that allows users to stream and download movies, with SEO optimization, indexing, and ad network integration for monetization.A desktop application for inventory management built with C# and WPF. Features barcode scanning, stock tracking, supplier management, and automated reordering capabilities.",
      image: "/api/placeholder/400/250",
      technologies: ["React.js / Next.js", "Node.js + Express.js", "MongoDB + Mongoose", "AWS S3 / Cloudinary", "HLS/DASH Streaming", "JWT Authentication", "Google AdSense"],
      category: "Web Application",
      completedDate: "June 2024",
      duration: "4 months",
      role: "Software Developer",
      team: "Solo Project",
     
      githubUrl: "https://github.com/username/inventory-system",
      liveUrl: null,
highlights: [
  "🎥 Movie Streaming",
  "Watch movies online in HD",
  "Adaptive HLS or MP4 streaming for smooth playback",
  "⬇ Movie Downloads",
  "Secure multi-resolution download links",
  "Track downloads and popular movies",
  "Upload and manage movies, posters, and trailers",
  "Organize by genres, release year, and popularity",
  "📈 SEO & Search Engine Indexing",
  "Dynamic meta tags & Open Graph for each movie page",
  "Optional SSR with Next.js for better Google indexing",
  "💰 Ad Network Integration",
  "Google AdSense or Adsterra ready",
  "Support for banner, sidebar, and video ads",
  "📱 Responsive & Mobile-Friendly"
]
    }
  ]

  const getCategoryColor = (category) => {
    const colors = {
      "Web Development": "bg-blue-500",
      "Mobile Development": "bg-green-500",
      "Desktop Application": "bg-purple-500",
      "AI/Machine Learning": "bg-red-500"
    }
    return colors[category] || "bg-gray-500"
  }

  return (
    <div className="page-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-title">Complete Projects</h1>
          <p className="section-subtitle">
            A showcase of successfully completed software projects demonstrating my technical skills and problem-solving abilities across various domains
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="project-card"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className={`project-category ${getCategoryColor(project.category)}`}>
                  <Code size={16} />
                  <span>{project.category}</span>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-meta">
                    <span className="project-role">{project.role}</span>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-info">
                  <div className="info-row">
                    <Calendar size={16} />
                    <span>Completed: {project.completedDate}</span>
                  </div>
                  <div className="info-row">
                    <Users size={16} />
                    <span>Team: {project.team}</span>
                  </div>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-highlights">
                  <h4>Key Highlights:</h4>
                  <ul>
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex}>
                        <Star size={12} />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-actions">
                  <a href={project.githubUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    View Code
                  </a>
                  {project.liveUrl && (
                    <a href={project.liveUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Projects Summary */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="projects-summary"
        >
          <h2 className="stats-title">Project Portfolio Summary</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <Code className="stat-icon" />
              <h3>4</h3>
              <p>Completed Projects</p>
            </div>
            <div className="stat-card">
              <Star className="stat-icon" />
              <h3>4</h3>
              <p>Technology Domains</p>
            </div>
            <div className="stat-card">
              <Users className="stat-icon" />
              <h3>10+</h3>
              <p>Team Collaborations</p>
            </div>
            <div className="stat-card">
              <Calendar className="stat-icon" />
              <h3>18+</h3>
              <p>Months Experience</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default CompleteProjects
