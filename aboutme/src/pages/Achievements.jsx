/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { Trophy, Award, Star, Calendar, GraduationCap, Target } from 'lucide-react'

const Achievements = () => {
  const achievements = [
    {
      title: "Dean's List Achievement",
      description: "Consistently maintained high academic performance with GPA above 3.7 for 4 consecutive semesters",
      icon: <GraduationCap size={24} />,
      date: "2023-2024",
      type: "Academic",
      color: "bg-blue-500"
    },
    
    
  ]

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
            A collection of academic honors, awards, and recognitions earned throughout my journey at SLIIT
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
                  <span className={`achievement-type ${achievement.type.toLowerCase()}`}>
                    {achievement.type}
                  </span>
                </div>
                <p className="achievement-description">{achievement.description}</p>
                <div className="achievement-date">
                  <Calendar size={16} />
                  <span>{achievement.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Statistics */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="achievement-stats"
        >
          <h2 className="stats-title">Achievement Summary</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <Trophy className="stat-icon" />
              <h3>6</h3>
              <p>Total Achievements</p>
            </div>
            <div className="stat-card">
              <GraduationCap className="stat-icon" />
              <h3>2.4</h3>
              <p>Current GPA</p>
            </div>
            <div className="stat-card">
              <Award className="stat-icon" />
              <h3>0</h3>
              <p>Competition Wins</p>
            </div>
            <div className="stat-card">
              <Star className="stat-icon" />
              <h3>4</h3>
              <p>Academic Honors</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default Achievements
