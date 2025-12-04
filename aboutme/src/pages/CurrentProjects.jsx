/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { Github, Calendar, Code, Users, Clock, Target, TrendingUp } from 'lucide-react'

const CurrentProjects = () => {
  const currentProjects = []

  const getCategoryColor = (category) => {
    const colors = {
      "AI/Healthcare": "bg-red-500",
      "IoT/Mobile": "bg-green-500",
      "Web/ML": "bg-purple-500"
    }
    return colors[category] || "bg-blue-500"
  }

  const getStatusColor = (status) => {
    const colors = {
      "Active Development": "bg-green-100 text-green-800",
      "Planning": "bg-yellow-100 text-yellow-800",
      "Testing": "bg-blue-100 text-blue-800"
    }
    return colors[status] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="page-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-title">Current Projects</h1>
          <p className="section-subtitle">
            Work in progress projects showcasing recent developments and ongoing innovations
          </p>
        </motion.div>

        <div className="current-projects-grid">
          {currentProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="current-project-card"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className={`project-category ${getCategoryColor(project.category)}`}>
                  <Code size={16} />
                  <span>{project.category}</span>
                </div>
                <div className="project-progress-overlay">
                  <div className="progress-circle">
                    {project.progress}%
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className={`project-status ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-meta">
                  <div className="meta-row">
                    <Calendar size={16} />
                    <span>Started: {project.startDate}</span>
                  </div>
                  <div className="meta-row">
                    <Target size={16} />
                    <span>Expected: {project.expectedCompletion}</span>
                  </div>
                </div>

                <div className="project-progress">
                  <div className="progress-header">
                    <span>Development Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${project.progress}%` }}></div>
                  </div>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="current-tasks">
                  <h4>Current Tasks</h4>
                  <ul>
                    {project.currentTasks.map((task, taskIndex) => (
                      <li key={taskIndex}>
                        <TrendingUp size={12} />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-actions">
                  <a href={project.githubUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    View Code
                  </a>
                </div>

                <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #e5e7eb' }}>
                  <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>
                    <Clock size={14} style={{ display: 'inline', marginRight: '6px' }} />
                    Next Deadline: {project.nextDeadline}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Current Projects Summary */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="current-projects-summary"
        >
          <h2 className="stats-title">Development Status</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <Code className="stat-icon" />
              <h3>3</h3>
              <p>Active Projects</p>
            </div>
            <div className="stat-card">
              <Target className="stat-icon" />
              <h3>48%</h3>
              <p>Average Progress</p>
            </div>
            <div className="stat-card">
              <Users className="stat-icon" />
              <h3>10+</h3>
              <p>Team Members</p>
            </div>
            <div className="stat-card">
              <Calendar className="stat-icon" />
              <h3>9</h3>
              <p>Months Timeline</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default CurrentProjects
