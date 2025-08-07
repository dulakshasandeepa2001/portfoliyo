/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Send, User, MessageSquare } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "student@sliit.lk",
      link: "it23379992@my.sliit.lk"
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+94 77 977 4966",
      link: "tel:+94771234567"
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Colombo, Sri Lanka",
      link: ""
    }
  ]

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      username: "@sliit-student",
      url: "https://www.linkedin.com/in/dulaksha-sandeepa12/",
      color: "bg-blue-600"
    },
    {
      icon: <Github size={24} />,
      name: "GitHub",
      username: "@sliit-student",
      url: "https://github.com/dulakshasandeepa2001",
      color: "bg-gray-800"
    },
    {
      icon: <Instagram size={24} />,
      name: "Instagram",
      username: "@sliit.student",
      url: "https://instagram.com/sliit.student",
      color: "bg-pink-600"
    }
  ]

  return (
    <div className="page-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-title">Get In Touch</h1>
          <p className="section-subtitle">
            I'm always open to discussing new opportunities, collaborations, and interesting projects. Feel free to reach out!
          </p>
        </motion.div>

        <div className="contact-layout">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="contact-info"
          >
            <h2>Contact Information</h2>
            <p className="contact-intro">
              Let's connect! I'm currently seeking internship opportunities and open to freelance projects.
            </p>

            <div className="contact-details">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.link}
                  className="contact-item"
                  whileHover={{ scale: 1.05 }}
                  target={contact.link.startsWith('http') ? '_blank' : undefined}
                  rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className="contact-icon">
                    {contact.icon}
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">{contact.label}</span>
                    <span className="contact-value">{contact.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="social-section">
              <h3>Follow Me</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className={`social-link ${social.color}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                    <div className="social-info">
                      <span className="social-name">{social.name}</span>
                      <span className="social-username">{social.username}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="availability-status">
              <div className="status-indicator">
                <div className="status-dot"></div>
                <span>Available for opportunities</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="contact-form-section"
          >
            <div className="contact-form-card">
              <h2>Send Me a Message</h2>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <div className="input-wrapper">
                    <User size={20} />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <div className="input-wrapper">
                    <Mail size={20} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <div className="input-wrapper">
                    <MessageSquare size={20} />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <div className="input-wrapper">
                    <MessageSquare size={20} />
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or opportunity..."
                      rows="5"
                      required
                    ></textarea>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="btn btn-primary btn-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Quick Stats */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="contact-stats"
        >
          <h2 className="stats-title">Let's Build Something Great Together</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <Mail className="stat-icon" />
              <h3>24h</h3>
              <p>Response Time</p>
            </div>
            <div className="stat-card">
              <MessageSquare className="stat-icon" />
              <h3>100%</h3>
              <p>Reply Rate</p>
            </div>
            <div className="stat-card">
              <User className="stat-icon" />
              <h3>50+</h3>
              <p>Connections</p>
            </div>
            <div className="stat-card">
              <Phone className="stat-icon" />
              <h3>Always</h3>
              <p>Available</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default Contact
