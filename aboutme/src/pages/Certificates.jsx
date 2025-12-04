/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { Award, Calendar, ExternalLink, Download, BookOpen, Shield } from 'lucide-react'

const Certificates = () => {
  const certificates = []

  const getCategoryColor = (category) => {
    const colors = {
      "Cloud Computing": "bg-blue-500",
      "Programming": "bg-purple-500",
      "Web Development": "bg-yellow-500",
      "Frontend": "bg-pink-500",
      "Database": "bg-green-500",
      "Mobile Development": "bg-indigo-500"
    }
    return colors[category] || "bg-gray-500"
  }

  const getLevelColor = (level) => {
    const colors = {
      "Foundation": "bg-green-100 text-green-800",
      "Intermediate": "bg-yellow-100 text-yellow-800",
      "Advanced": "bg-red-100 text-red-800",
      "Professional": "bg-purple-100 text-purple-800"
    }
    return colors[level] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="page-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-title">Certifications & Credentials</h1>
          <p className="section-subtitle">
            Professional certifications demonstrating my expertise in various technology domains
          </p>
        </motion.div>

        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="certificate-card"
            >
              <div className="certificate-image">
                <img src={cert.image} alt={cert.title} />
                <div className={`certificate-category ${getCategoryColor(cert.category)}`}>
                  <BookOpen size={16} />
                  <span>{cert.category}</span>
                </div>
              </div>
              
              <div className="certificate-content">
                <div className="certificate-header">
                  <h3 className="certificate-title">{cert.title}</h3>
                  <span className={`certificate-level ${getLevelColor(cert.level)}`}>
                    {cert.level}
                  </span>
                </div>
                
                <div className="certificate-issuer">
                  <Award size={16} />
                  <span>{cert.issuer}</span>
                </div>
                
                <p className="certificate-description">{cert.description}</p>
                
                <div className="certificate-skills">
                  {cert.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="certificate-footer">
                  <div className="certificate-date">
                    <Calendar size={16} />
                    <span>{cert.date}</span>
                  </div>
                  <div className="certificate-actions">
                    <button className="btn-icon" title="View Certificate">
                      <ExternalLink size={16} />
                    </button>
                    <button className="btn-icon" title="Download">
                      <Download size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="certificate-id">
                  <Shield size={14} />
                  <span>ID: {cert.credentialId}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification Summary */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="certification-summary"
        >
          <h2 className="stats-title">Certification Overview</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <Award className="stat-icon" />
              <h3>6</h3>
              <p>Total Certifications</p>
            </div>
            <div className="stat-card">
              <BookOpen className="stat-icon" />
              <h3>6</h3>
              <p>Technology Domains</p>
            </div>
            <div className="stat-card">
              <Shield className="stat-icon" />
              <h3>100%</h3>
              <p>Verified Credentials</p>
            </div>
            <div className="stat-card">
              <Calendar className="stat-icon" />
              <h3>2024</h3>
              <p>Latest Achievement</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default Certificates
