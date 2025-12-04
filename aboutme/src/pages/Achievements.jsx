/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { Trophy, Award, Star, Calendar, GraduationCap, Target, Zap, Users } from 'lucide-react'

const Achievements = () => {
  const achievements = []

  return (
    <div className="page-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-title">My Achievements</h1>
          <p className="section-subtitle">
            A collection of academic honors, awards, and recognitions earned throughout my journey
          </p>
        </motion.div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="achievement-card"
            >
              <div className={`achievement-icon ${achievement.color}`}>
                {achievement.icon}
              </div>
              <div className="achievement-content">
                <div className="achievement-header">
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <span className={`achievement-type ${achievement.type}`}>
                    {achievement.type.charAt(0).toUpperCase() + achievement.type.slice(1)}
                  </span>
                </div>
                <p className="achievement-description">{achievement.description}</p>
                <div className="achievement-date">
                  <Calendar size={16} />
                  {achievement.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="achievement-stats"
        >
          <h2 className="stats-title">Achievement Overview</h2>
          <div className="stats-grid">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0 }}
              className="stat-card"
            >
              <Trophy className="stat-icon" />
              <h3>15+</h3>
              <p>Achievements</p>
            </motion.div>
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.1 }}
              className="stat-card"
            >
              <Award className="stat-icon" />
              <h3>8+</h3>
              <p>Certifications</p>
            </motion.div>
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="stat-card"
            >
              <Star className="stat-icon" />
              <h3>3.8</h3>
              <p>GPA</p>
            </motion.div>
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              className="stat-card"
            >
              <Target className="stat-icon" />
              <h3>100%</h3>
              <p>Dedication</p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default Achievements
