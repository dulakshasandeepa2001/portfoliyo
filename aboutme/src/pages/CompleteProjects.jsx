/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { Github, ExternalLink, Calendar, Code, Users, Star, CheckCircle } from 'lucide-react'

const CompleteProjects = () => {
  const projects = []

  const getCategoryColor = (category) => {
    const colors = {
      "Web Development": "bg-blue-500",
      "Mobile Development": "bg-green-500",
      "Web Application": "bg-purple-500",
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
            A showcase of successfully completed software projects demonstrating technical skills and problem-solving abilities
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
                        <CheckCircle size={12} />
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
                  {project.liveUrl && project.liveUrl !== "#" && (
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
