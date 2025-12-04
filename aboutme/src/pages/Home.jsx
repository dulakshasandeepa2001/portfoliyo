import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, Phone, MapPin, ExternalLink } from 'lucide-react'
import profileImage from '../assets/profile.png'

const Home = () => {
  const projects = [
    {
      id: 1,
      title: "Virtual Dressing Mall",
      description: "Developed a full-stack e-commerce platform with product view & seller dashboard, enhanced UI for engagement, and implemented secure payment integration.",
      image: "https://insights.boldbusiness.com/wp-content/uploads/2021/09/Artificial-Intelligence-and-the-Virtual-Dressing-Room-Featured-IV.jpg",
      technologies: ["React.js", "Redux", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      timeline: "Feb – Jun 2025 | Group Project",
      demoLink: "#",
      githubLink: "https://github.com/dulakshasandeepa2001/virtualdressingmall"
    },
    {
      id: 2,
      title: "Wild Track Hotel Booking",
      description: "Safari hotel booking system with admin dashboard & SQL-based data handling for seamless reservation management.",
      image: "https://www.clawear.com/cdn/shop/articles/tiger-walking-dirt-road-amidst-trees_1048944-4340569_1.jpg?v=1731563947",
      technologies: ["HTML", "CSS", "PHP", "SQL"],
      timeline: "Feb – Jun 2024 | Group Project",
      demoLink: "#",
      githubLink: "https://github.com/dulakshasandeepa2001/Wildtrack"
    },
    {
      id: 3,
      title: "Farmer Task Management App",
      description: "An agricultural management mobile app with task reminders and real-time notifications for farmers.",
      image: "https://agrismart.com/wp-content/uploads/2024/08/Industry-Specific-Illustration-1.png",
      technologies: ["Kotlin", "Android Studio", "Firebase"],
      timeline: "Feb – Jun 2025 | Individual Project",
      demoLink: "#",
      githubLink: "https://github.com/dulakshasandeepa2001/FarmerTask"
    },
    {
      id: 4,
      title: "Wildlife Safari Management System",
      description: "Web-based system with user & admin dashboards featuring reservation management and responsive UI design.",
      image: "https://websitedemos.net/wildlife-safari-04/wp-content/uploads/sites/1133/2022/11/demo-screenshot.jpg",
      technologies: ["HTML", "CSS", "Java", "JAX-RS", "Servlet", "JSP"],
      timeline: "Jun – Dec 2024 | Group Project",
      demoLink: "#",
      githubLink: "https://github.com/dulakshasandeepa2001/Wild-Safari-Management-System"
    },
    {
      id: 5,
      title: "Creative Coding & Particle Animation",
      description: "Interactive image-to-particle animations with customizable effects using creative coding frameworks.",
      image: "https://i.pinimg.com/736x/10/3c/87/103c87f88612ce47b766f9a32c07066c.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "Canvas Sketch", "p5.js"],
      timeline: "Personal Project",
      demoLink: "#",
      githubLink: "https://github.com/dulakshasandeepa2001/creativecode"
    }
  ]

  const skills = {
    languages: ["Java", "JavaScript", "HTML", "CSS", "C", "C++", "Python", "Kotlin", "p5.js", "Linux"],
    frameworks: ["React", "Node.js", "Express", "Tailwind", "JAX-RS", "JSP", "Servlet", "Apache Tomcat", ".NET", "Canvas Sketch"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Microsoft SQL Server", "PL/SQL"],
    tools: ["Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA", "NetBeans", "Android Studio", "Oracle SQL Developer", "Adobe Creative Suite"],
    softSkills: ["Problem Solving", "Teamwork", "Time Management", "Critical Thinking", "Leadership"]
  }

  const stats = [
    { number: "5+", label: "Major Projects" },
    { number: "4", label: "Tech Certifications & Badges" },
    { number: "2+", label: "Years Building" },
    { number: "3", label: "Freelance & Community Roles" }
  ]

  return (
    <div className="home">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">Portfolio</div>
          <ul className="nav-menu">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="hero" className="hero">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <div className="hero-text">
              <p className="hero-greeting">Hi, I'm</p>
              <h1 className="hero-title">Dulaksha Sandeepa</h1>
              <p className="hero-subtitle">Full-Stack & Creative Developer</p>
              <p className="hero-description">
                Motivated computer science student specialising in modern web applications across React, Node.js, and
                cloud-ready databases. I craft user-friendly interfaces, build reliable backends, and love solving
                complex problems with thoughtful design and clean, maintainable code.
              </p>
              <div className="hero-buttons">
                <a className="btn btn-primary" href="https://drive.google.com/file/d/1wURvZ4k4Ry7SheFuHHkOtqUPWm3JSpxL/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  <Download size={20} /> Download CV
                </a>
                <a className="btn btn-secondary" href="#contact">
                  <Mail size={20} /> Contact Me
                </a>
              </div>
              <div className="social-links">
                <a href="https://github.com/dulakshasandeepa2001" title="GitHub" target="_blank" rel="noopener noreferrer"><Github size={24} /></a>
                <a href="https://www.linkedin.com/in/dulaksha-sandeepa12/" title="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
                <a href="mailto:sandeepadulaksha93@gmail.com" title="Email"><Mail size={24} /></a>
              </div>
            </div>
            <div className="hero-image">
              <img src={profileImage} alt="Dulaksha Sandeepa Profile" />
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="about">
          <div className="section-container">
            <h2 className="section-title">About Me</h2>
            <p className="section-description">
              I am a motivated computer science student with a solid foundation in full-stack development, blending
              user-first design with dependable server-side engineering. I thrive in collaborative environments and
              continue to grow through freelance work, community learning, and experimentation with creative coding.
            </p>
            
            <div className="about-grid">
              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                className="about-card"
              >
                <h3>🎓 Current Degree</h3>
                <p>BSc (Hons) in Information Technology</p>
                <p className="text-muted">SLIIT | June 2023 – Present</p>
              </motion.div>

              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                className="about-card"
              >
                <h3>🛠 Technical Focus</h3>
                <p>Full-Stack & Creative Development</p>
                <p className="text-muted">React, Node.js, Kotlin, Creative Coding</p>
              </motion.div>

              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                className="about-card"
              >
                <h3>💼 Experience</h3>
                <p>Freelance & Community Roles</p>
                <p className="text-muted">Fiverr, Medium, LinkedIn Blogging</p>
              </motion.div>
            </div>

            <div className="stats-section">
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    whileInView={{ scale: 1 }}
                    initial={{ scale: 0 }}
                    className="stat-item"
                  >
                    <h3>{stat.number}</h3>
                    <p>{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects">
          <div className="section-container">
            <h2 className="section-title">Featured Projects</h2>
            
            <div className="projects-grid">
              {projects.map((project) => (
                <motion.div 
                  key={project.id}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  className="project-card"
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tech-stack">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.demoLink} className="link-btn" target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                      <a href={project.githubLink} className="link-btn" target="_blank" rel="noopener noreferrer">
                        <Github size={16} /> GitHub
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              className="view-all"
            >
              <a href="https://github.com/dulakshasandeepa2001" className="btn btn-primary" target="_blank" rel="noopener noreferrer">All Projects</a>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills">
          <div className="section-container">
            <h2 className="section-title">Skills & Technologies</h2>
            
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Languages</h3>
                <div className="skill-items">
                  {skills.languages.map((skill) => (
                    <span key={skill} className="skill-item">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3>Frameworks & Libraries</h3>
                <div className="skill-items">
                  {skills.frameworks.map((skill) => (
                    <span key={skill} className="skill-item">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3>Databases</h3>
                <div className="skill-items">
                  {skills.databases.map((skill) => (
                    <span key={skill} className="skill-item">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3>Tools</h3>
                <div className="skill-items">
                  {skills.tools.map((skill) => (
                    <span key={skill} className="skill-item">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3>Soft Skills</h3>
                <div className="skill-items">
                  {skills.softSkills.map((skill) => (
                    <span key={skill} className="skill-item">{skill}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="expertise-section">
              <h3>Areas of Expertise</h3>
              <div className="expertise-items">
                <span className="expertise-item">Full Stack Development</span>
                <span className="expertise-item">Creative Coding & Visuals</span>
                <span className="expertise-item">Mobile App Development</span>
                <span className="expertise-item">RESTful APIs & Integrations</span>
                <span className="expertise-item">Database Design</span>
                <span className="expertise-item">Technical Blogging & Mentoring</span>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Achievements Section */}
        <section id="certifications" className="about">
          <div className="section-container">
            <h2 className="section-title">Certifications & Achievements</h2>
            <p className="section-description">
              Professional certifications and recognition earned through continuous learning and skill development.
            </p>
            
            <div className="about-grid">
              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                className="about-card"
              >
                <h3>🏆 Hack the Box</h3>
                <p>"Philomath" Badge</p>
                <p className="text-muted">Username: Whicher3</p>
              </motion.div>

              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                className="about-card"
              >
                <h3>🎓 Hack the Box</h3>
                <p>"Academician" Badge</p>
                <p className="text-muted">Username: Whicher3</p>
              </motion.div>

              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                className="about-card"
              >
                <h3>☕ HackerRank</h3>
                <p>Java Badge</p>
                <p className="text-muted">Programming Proficiency</p>
              </motion.div>

              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                className="about-card"
              >
                <h3>💻 HackerRank</h3>
                <p>C Language Badge</p>
                <p className="text-muted">Programming Proficiency</p>
              </motion.div>

              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                className="about-card"
              >
                <h3>🐍 Cisco Networking</h3>
                <p>Python Essentials</p>
                <p className="text-muted">Networking Academy</p>
              </motion.div>

              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                className="about-card"
              >
                <h3>💼 Freelance Work</h3>
                <p>Fiverr Developer</p>
                <p className="text-muted">WordPress & Pattern Design</p>
              </motion.div>
            </div>

            <div className="expertise-section" style={{ marginTop: '3rem' }}>
              <h3>External Activities</h3>
              <div className="expertise-items">
                <span className="expertise-item">School Prefect - Leadership Role</span>
                <span className="expertise-item">Leadership Campaign Participant</span>
                <span className="expertise-item">Volleyball & Football Player</span>
                <span className="expertise-item">Medium & LinkedIn Tech Blogger</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="section-container">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-description">Feel free to reach out to me for any opportunities or questions!</p>

            <div className="contact-grid">
              <div className="contact-card">
                <Mail size={32} />
                <h3>Email</h3>
                <a href="mailto:sandeepadulaksha93@gmail.com">sandeepadulaksha93@gmail.com</a>
              </div>

              <div className="contact-card">
                <Phone size={32} />
                <h3>Phone</h3>
                <a href="tel:+94779774966">+94 77 977 4966</a>
              </div>

              <div className="contact-card">
                <MapPin size={32} />
                <h3>Location</h3>
                <p>Malabe & Matara, Sri Lanka</p>
              </div>
            </div>

            <div className="contact-socials">
              <h3>Follow Me</h3>
              <div className="social-links">
                <a href="https://github.com/dulakshasandeepa2001" title="GitHub" target="_blank" rel="noopener noreferrer"><Github size={32} /></a>
                <a href="https://www.linkedin.com/in/dulaksha-sandeepa12/" title="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin size={32} /></a>
                <a href="mailto:sandeepadulaksha93@gmail.com" title="Email"><Mail size={32} /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Dulaksha Sandeepa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home
