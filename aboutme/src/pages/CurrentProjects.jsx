/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { Github, Calendar, Code, Users, Clock, Target, TrendingUp } from 'lucide-react'

const CurrentProjects = () => {
  const currentProjects = [
    {
      title: "AI-Powered Doctors helping platform",
      description: "MediTrack is a smart, cloud-based healthcare platform designed to digitize and modernize the interaction between doctors and patients. It features AI-powered tools for prescription writing, real-time appointment queues, patient feedback systems, receipt management, public health alerts, personalized drug recommendations, and long-term treatment analytics.Developing an intelligent learning management system that uses machine learning to personalize educational content and track student progress. The platform adapts to individual learning styles and provides real-time feedback.",
      image: "/api/placeholder/400/250",
technologies: ["Python (95.2%)", "C (1.5%)", "HTML (1.2%)", "JavaScript (0.5%)", "Cython (0.5%)", "CSS (0.4%)"],
      category: "AI/Medical",
      startDate: "June 2025",
      expectedCompletion: "September M2025",
      progress: 25,
      role: "Full Stack Developer",
      team: "3 Members",
      status: "In Development",
      
      currentTasks: [
        
      ],
      challenges: [
       
      ],
      githubUrl: "https://github.com/dulakshasandeepa2001/MedicareApp.git",
      nextDeadline: "August 15, 2025"
    },
    /*{
      title: "Smart Home IoT Dashboard",
      description: "Building a comprehensive IoT dashboard for smart home management using React Native and Arduino. The app controls various home devices, monitors energy consumption, and provides automation features.",
      image: "/api/placeholder/400/250",
      technologies: ["React Native", "Arduino", "MQTT", "Firebase", "TypeScript"],
      category: "IoT/Mobile",
      startDate: "December 2024",
      expectedCompletion: "April 2025",
      progress: 35,
      role: "IoT Developer",
      team: "3 Members",
      status: "Active Development",
      milestones: [
        { title: "Hardware Setup", completed: true },
        { title: "MQTT Communication", completed: true },
        { title: "Mobile App Framework", completed: true },
        { title: "Device Control Interface", completed: false, current: true },
        { title: "Energy Monitoring", completed: false },
        { title: "Automation Rules", completed: false },
        { title: "Security Implementation", completed: false }
      ],
      currentTasks: [
        "Developing device control components",
        "Implementing real-time data visualization",
        "Creating automation rule engine"
      ],
      challenges: [
        "Managing real-time communication between devices",
        "Ensuring secure data transmission",
        "Optimizing mobile app performance"
      ],
      githubUrl: "https://github.com/username/smart-home-dashboard",
      nextDeadline: "February 20, 2025"
    },
    {
      title: "Blockchain Voting System",
      description: "Creating a secure and transparent voting system using blockchain technology. The system ensures vote integrity, provides anonymity, and allows for real-time result tracking with immutable records.",
      image: "/api/placeholder/400/250",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
      category: "Blockchain",
      startDate: "November 2024",
      expectedCompletion: "June 2025",
      progress: 40,
      role: "Blockchain Developer",
      team: "4 Members",
      status: "Mid Development",
      milestones: [
        { title: "Blockchain Research", completed: true },
        { title: "Smart Contract Design", completed: true },
        { title: "Contract Development", completed: true },
        { title: "Web Interface Development", completed: false, current: true },
        { title: "Security Auditing", completed: false },
        { title: "Testing on Testnet", completed: false },
        { title: "Production Deployment", completed: false }
      ],
      currentTasks: [
        "Building voter registration interface",
        "Implementing vote casting mechanism",
        "Developing result visualization dashboard"
      ],
      challenges: [
        "Ensuring voter anonymity while maintaining transparency",
        "Optimizing gas costs for blockchain transactions",
        "Creating user-friendly interface for non-technical users"
      ],
      githubUrl: "https://github.com/username/blockchain-voting",
      nextDeadline: "March 1, 2025"
    },
    {
      title: "Medical Record Management System",
      description: "Developing a secure medical record management system for healthcare providers. The system includes patient data management, appointment scheduling, prescription tracking, and telemedicine features.",
      image: "/api/placeholder/400/250",
      technologies: ["Java Spring", "MySQL", "Angular", "JWT", "Docker"],
      category: "Healthcare/Web",
      startDate: "October 2024",
      expectedCompletion: "July 2025",
      progress: 50,
      role: "Backend Developer",
      team: "6 Members",
      status: "Mid Development",
      milestones: [
        { title: "Requirements Gathering", completed: true },
        { title: "Database Design", completed: true },
        { title: "Backend API Development", completed: true },
        { title: "Authentication System", completed: true },
        { title: "Frontend Development", completed: false, current: true },
        { title: "Integration Testing", completed: false },
        { title: "Security Compliance", completed: false },
        { title: "Deployment", completed: false }
      ],
      currentTasks: [
        "Implementing patient dashboard interface",
        "Developing appointment scheduling system",
        "Creating prescription management module"
      ],
      challenges: [
        "Ensuring HIPAA compliance for patient data",
        "Implementing robust security measures",
        "Creating intuitive interface for medical staff"
      ],
      githubUrl: "https://github.com/username/medical-records-system",
      nextDeadline: "February 28, 2025"
    }*/
  ]

  const getStatusColor = (status) => {
    const colors = {
      "In Development": "bg-blue-100 text-blue-800",
      "Active Development": "bg-green-100 text-green-800",
      "Mid Development": "bg-yellow-100 text-yellow-800",
      "Testing Phase": "bg-purple-100 text-purple-800"
    }
    return colors[status] || "bg-gray-100 text-gray-800"
  }

  const getCategoryColor = (category) => {
    const colors = {
      "AI/Education": "bg-purple-500",
      "IoT/Mobile": "bg-green-500",
      "Blockchain": "bg-blue-500",
      "Healthcare/Web": "bg-red-500"
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
          <h1 className="section-title">Current Projects</h1>
          <p className="section-subtitle">
            Ongoing software development projects that I'm actively working on. These projects showcase my current learning journey and technical growth.
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
                    <span>{project.progress}%</span>
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
                  <div className="meta-row">
                    <Users size={16} />
                    <span>Team: {project.team}</span>
                  </div>
                  <div className="meta-row">
                    <Clock size={16} />
                    <span>Next Deadline: {project.nextDeadline}</span>
                  </div>
                </div>

                <div className="project-progress">
                  <div className="progress-header">
                    <span>Project Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${project.progress}%` }}
                    ></div>
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
                  <h4>Current Focus:</h4>
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
                    View Progress
                  </a>
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
              <h3>4</h3>
              <p>Active Projects</p>
            </div>
            <div className="stat-card">
              <Target className="stat-icon" />
              <h3>37.5%</h3>
              <p>Average Progress</p>
            </div>
            <div className="stat-card">
              <Users className="stat-icon" />
              <h3>3</h3>
              <p>Team Members</p>
            </div>
            <div className="stat-card">
              <Calendar className="stat-icon" />
              <h3>6</h3>
              <p>Months Timeline</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default CurrentProjects
