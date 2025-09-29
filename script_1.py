# Let me recreate the website files properly and make them available for download

# First, create the directory structure
import os

# Create directories
os.makedirs('pm-internship/public', exist_ok=True)
os.makedirs('pm-internship/src', exist_ok=True)
os.makedirs('pm-internship/assets', exist_ok=True)

# Create the main HTML file
html_content = '''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PM Internship - Find Your Perfect Internship</title>
    <link rel="stylesheet" href="../src/style.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>
<body>
    <!-- Navigation Header -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <img src="../assets/logo.jpg" alt="PM Internship Logo" class="logo-img">
                <span class="logo-text">PM Internship</span>
            </div>
            <div class="nav-menu">
                <a href="#" class="nav-link">Home</a>
                <a href="#" class="nav-link">Browse Internships</a>
                <a href="#" class="nav-link">Companies</a>
                <a href="#" class="nav-link">Profile</a>
                <div class="nav-user">
                    <span class="user-name">Welcome, Student</span>
                    <button class="logout-btn">Logout</button>
                </div>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="main-content">
        <!-- Hero Section -->
        <section class="hero-section">
            <div class="hero-content">
                <h1>Find Your Perfect Internship</h1>
                <p>Discover opportunities tailored to your skills and location preferences</p>
                <div class="search-container">
                    <input type="text" placeholder="Search internships..." class="search-input">
                    <button class="search-btn"><i class="fas fa-search"></i></button>
                </div>
            </div>
        </section>

        <!-- Recommendations Section -->
        <section class="recommendations-section">
            <div class="section-header">
                <h2>Recommended for You</h2>
                <p>Based on your skills: JavaScript, React, Node.js | Location: Mumbai</p>
            </div>
            
            <div class="internship-grid">
                <!-- Internship Card 1 -->
                <div class="internship-card">
                    <div class="card-header">
                        <div class="company-info">
                            <div class="company-logo">TCS</div>
                            <div class="company-details">
                                <h3>Frontend Developer Intern</h3>
                                <p class="company-name">Tata Consultancy Services</p>
                            </div>
                        </div>
                        <div class="match-score">95% Match</div>
                    </div>
                    <div class="card-content">
                        <div class="job-details">
                            <div class="detail-item">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>Mumbai, Maharashtra</span>
                            </div>
                            <div class="detail-item">
                                <i class="fas fa-clock"></i>
                                <span>3 months</span>
                            </div>
                            <div class="detail-item">
                                <i class="fas fa-rupee-sign"></i>
                                <span>₹15,000/month</span>
                            </div>
                        </div>
                        <div class="skills-required">
                            <span class="skill-tag">React</span>
                            <span class="skill-tag">JavaScript</span>
                            <span class="skill-tag">CSS</span>
                        </div>
                        <p class="job-description">
                            Work on modern web applications using React and JavaScript. 
                            Build responsive user interfaces and collaborate with design teams.
                        </p>
                    </div>
                    <div class="card-footer">
                        <button class="apply-btn">Apply Now</button>
                        <button class="save-btn"><i class="fas fa-bookmark"></i></button>
                    </div>
                </div>

                <!-- Internship Card 2 -->
                <div class="internship-card">
                    <div class="card-header">
                        <div class="company-info">
                            <div class="company-logo">INF</div>
                            <div class="company-details">
                                <h3>Full Stack Developer Intern</h3>
                                <p class="company-name">Infosys Limited</p>
                            </div>
                        </div>
                        <div class="match-score">88% Match</div>
                    </div>
                    <div class="card-content">
                        <div class="job-details">
                            <div class="detail-item">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>Pune, Maharashtra</span>
                            </div>
                            <div class="detail-item">
                                <i class="fas fa-clock"></i>
                                <span>6 months</span>
                            </div>
                            <div class="detail-item">
                                <i class="fas fa-rupee-sign"></i>
                                <span>₹20,000/month</span>
                            </div>
                        </div>
                        <div class="skills-required">
                            <span class="skill-tag">Node.js</span>
                            <span class="skill-tag">MongoDB</span>
                            <span class="skill-tag">React</span>
                        </div>
                        <p class="job-description">
                            Develop end-to-end web applications using MERN stack. 
                            Work with databases and create RESTful APIs.
                        </p>
                    </div>
                    <div class="card-footer">
                        <button class="apply-btn">Apply Now</button>
                        <button class="save-btn"><i class="fas fa-bookmark"></i></button>
                    </div>
                </div>

                <!-- Internship Card 3 -->
                <div class="internship-card">
                    <div class="card-header">
                        <div class="company-info">
                            <div class="company-logo">WIP</div>
                            <div class="company-details">
                                <h3>Web Developer Intern</h3>
                                <p class="company-name">Wipro Technologies</p>
                            </div>
                        </div>
                        <div class="match-score">82% Match</div>
                    </div>
                    <div class="card-content">
                        <div class="job-details">
                            <div class="detail-item">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>Mumbai, Maharashtra</span>
                            </div>
                            <div class="detail-item">
                                <i class="fas fa-clock"></i>
                                <span>4 months</span>
                            </div>
                            <div class="detail-item">
                                <i class="fas fa-rupee-sign"></i>
                                <span>₹12,000/month</span>
                            </div>
                        </div>
                        <div class="skills-required">
                            <span class="skill-tag">JavaScript</span>
                            <span class="skill-tag">HTML</span>
                            <span class="skill-tag">Bootstrap</span>
                        </div>
                        <p class="job-description">
                            Create responsive websites and maintain existing web applications. 
                            Focus on frontend development and user experience.
                        </p>
                    </div>
                    <div class="card-footer">
                        <button class="apply-btn">Apply Now</button>
                        <button class="save-btn"><i class="fas fa-bookmark"></i></button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Quick Stats Section -->
        <section class="stats-section">
            <div class="stats-container">
                <div class="stat-item">
                    <div class="stat-number">25</div>
                    <div class="stat-label">Applications Sent</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">8</div>
                    <div class="stat-label">Interviews Scheduled</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">150</div>
                    <div class="stat-label">Companies Active</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">500</div>
                    <div class="stat-label">Open Positions</div>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <h4>PM Internship</h4>
                <p>Connecting talented students with amazing internship opportunities.</p>
            </div>
            <div class="footer-section">
                <h4>For Students</h4>
                <a href="#">Browse Internships</a>
                <a href="#">Create Profile</a>
                <a href="#">Career Tips</a>
            </div>
            <div class="footer-section">
                <h4>For Companies</h4>
                <a href="#">Post Internships</a>
                <a href="#">Find Talent</a>
                <a href="#">Pricing</a>
            </div>
            <div class="footer-section">
                <h4>Support</h4>
                <a href="#">Help Center</a>
                <a href="#">Contact Us</a>
                <a href="#">Privacy Policy</a>
            </div>
        </div>
    </footer>

    <script src="../src/app.js"></script>
</body>
</html>'''

# Save the HTML file
with open('pm-internship/public/index.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

print("✅ Created: index.html")