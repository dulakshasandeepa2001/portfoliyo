/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { Download, MapPin, Calendar, GraduationCap, Code, Award } from 'lucide-react'

const Home = () => {
  return (
    <div className="page-section">
      <div className="container">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-section"
        >
          <div className="hero-content">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="profile-image"
            >
              <img src=".\src\assets\profile.png" alt="Profile" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="hero-title"
            >
              Hello, I'm <span className="text-gradient">Dulaksha Sandeepa</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="hero-subtitle"
            >
              3rd Year Information Technology Student at Sri Lanka Institute of Information Technology
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="hero-info"
            >
              <div className="info-item">
                <GraduationCap size={20} />
                <span>SLIIT - Faculty of Information Technology</span>
              </div>
              <div className="info-item">
                <MapPin size={20} />
                <span>Colombo, Sri Lanka</span>
              </div>
              <div className="info-item">
                <Calendar size={20} />
                <span>Year 3 - Undergraduate</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="hero-buttons"
            >
              <a href="#contact" className="btn btn-primary">
                <Download size={20} />
                Download CV
              </a>
              <a href="/complete-projects" className="btn btn-secondary">
                View Projects
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* About Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="about-section"
        >
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I am a dedicated and passionate Information Technology student at Sri Lanka Institute of Information Technology (SLIIT), 
                currently in my third year of undergraduate studies. With a strong foundation in software development, 
                web technologies, and problem-solving, I am eager to apply my knowledge and skills in real-world projects.
              </p>
              <p>
                Throughout my academic journey, I have gained expertise in various programming languages and technologies, 
                completed numerous projects, and earned certifications that demonstrate my commitment to continuous learning 
                and professional development.
              </p>
            </div>
            
            <div className="skills-grid">
              <div className="skill-category">
                <Code size={24} />
                <h3>Programming</h3>
                <p>Java, JavaScript, Python, C#, React, Node.js</p>
              </div>
              <div className="skill-category">
                <Award size={24} />
                <h3>Achievements(latest)</h3>
                <p>Cisco Python Essential Badge</p>
              </div>
              <div className="skill-category">
                <GraduationCap size={24} />
                <h3>Education</h3>
                <p>SLIIT IT Undergraduate</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Quick Stats */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="stats-section"
        >
          <div className="stats-grid1">
            <div className="stat-item">
              <h3>15+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>8+</h3>
              <p>Certifications</p>
            </div>
            <div className="stat-item">
              <h3>0</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default Home
