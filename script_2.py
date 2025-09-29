# Create the CSS file
css_content = '''/* PM Internship Platform - CSS Styles */

:root {
    --primary-color: #CC7722;
    --primary-light: #E6941A;
    --primary-dark: #B8651A;
    --white: #FFFFFF;
    --off-white: #FAFAFA;
    --light-gray: #F5F5F5;
    --medium-gray: #E0E0E0;
    --dark-gray: #666666;
    --text-primary: #333333;
    --text-secondary: #666666;
    --shadow-light: 0 2px 8px rgba(204, 119, 34, 0.1);
    --shadow-medium: 0 4px 16px rgba(204, 119, 34, 0.15);
    --border-radius: 8px;
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--text-primary);
    background-color: var(--off-white);
}

/* Navigation */
.navbar {
    background-color: var(--white);
    box-shadow: var(--shadow-light);
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 2px solid var(--primary-color);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
}

.nav-logo {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.logo-img {
    height: 50px;
    width: auto;
    object-fit: contain;
}

.logo-text {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--primary-color);
}

.nav-menu {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.nav-link {
    text-decoration: none;
    color: var(--text-primary);
    font-weight: 500;
    transition: var(--transition);
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
}

.nav-link:hover {
    color: var(--primary-color);
    background-color: var(--light-gray);
}

.nav-user {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-left: 1rem;
    border-left: 1px solid var(--medium-gray);
}

.user-name {
    color: var(--text-secondary);
    font-weight: 500;
}

.logout-btn {
    background-color: var(--primary-color);
    color: var(--white);
    border: none;
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    cursor: pointer;
    font-weight: 500;
    transition: var(--transition);
}

.logout-btn:hover {
    background-color: var(--primary-dark);
}

/* Main Content */
.main-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

/* Hero Section */
.hero-section {
    background: linear-gradient(135deg, var(--white) 0%, var(--light-gray) 100%);
    border-radius: var(--border-radius);
    padding: 3rem 2rem;
    text-align: center;
    margin-bottom: 3rem;
    box-shadow: var(--shadow-light);
    border: 1px solid var(--primary-color);
}

.hero-content h1 {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
    font-weight: bold;
}

.hero-content p {
    font-size: 1.2rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
}

.search-container {
    display: flex;
    max-width: 500px;
    margin: 0 auto;
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--shadow-light);
}

.search-input {
    flex: 1;
    padding: 1rem;
    border: 2px solid var(--primary-color);
    border-right: none;
    outline: none;
    font-size: 1rem;
}

.search-btn {
    background-color: var(--primary-color);
    color: var(--white);
    border: none;
    padding: 1rem 1.5rem;
    cursor: pointer;
    transition: var(--transition);
    border: 2px solid var(--primary-color);
}

.search-btn:hover {
    background-color: var(--primary-dark);
}

/* Recommendations Section */
.recommendations-section {
    margin-bottom: 3rem;
}

.section-header {
    margin-bottom: 2rem;
}

.section-header h2 {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
}

.section-header p {
    color: var(--text-secondary);
    font-size: 1.1rem;
}

/* Internship Grid */
.internship-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.internship-card {
    background-color: var(--white);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-medium);
    border: 1px solid var(--medium-gray);
    transition: var(--transition);
    overflow: hidden;
}

.internship-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-medium);
    border-color: var(--primary-color);
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1.5rem;
    border-bottom: 1px solid var(--light-gray);
}

.company-info {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.company-logo {
    width: 50px;
    height: 50px;
    background-color: var(--primary-color);
    color: var(--white);
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 0.9rem;
}

.company-details h3 {
    font-size: 1.2rem;
    color: var(--text-primary);
    margin-bottom: 0.25rem;
}

.company-name {
    color: var(--text-secondary);
    font-size: 0.9rem;
}

.match-score {
    background-color: var(--primary-color);
    color: var(--white);
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    font-size: 0.9rem;
    font-weight: bold;
}

.card-content {
    padding: 1.5rem;
}

.job-details {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
}

.detail-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-secondary);
    font-size: 0.9rem;
}

.detail-item i {
    color: var(--primary-color);
}

.skills-required {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.skill-tag {
    background-color: var(--light-gray);
    color: var(--primary-color);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
    border: 1px solid var(--primary-color);
}

.job-description {
    color: var(--text-secondary);
    line-height: 1.5;
}

.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background-color: var(--light-gray);
}

.apply-btn {
    background-color: var(--primary-color);
    color: var(--white);
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: var(--border-radius);
    cursor: pointer;
    font-weight: 500;
    transition: var(--transition);
    flex: 1;
    margin-right: 1rem;
}

.apply-btn:hover {
    background-color: var(--primary-dark);
}

.save-btn {
    background-color: var(--white);
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
    padding: 0.75rem;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: var(--transition);
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.save-btn:hover {
    background-color: var(--primary-color);
    color: var(--white);
}

/* Stats Section */
.stats-section {
    background-color: var(--white);
    border-radius: var(--border-radius);
    padding: 2rem;
    margin-bottom: 3rem;
    box-shadow: var(--shadow-light);
    border: 1px solid var(--primary-color);
}

.stats-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
}

.stat-item {
    text-align: center;
}

.stat-number {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
}

.stat-label {
    color: var(--text-secondary);
    font-weight: 500;
}

/* Footer */
.footer {
    background-color: var(--white);
    border-top: 2px solid var(--primary-color);
    padding: 3rem 2rem 2rem;
    margin-top: 4rem;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.footer-section h4 {
    color: var(--primary-color);
    margin-bottom: 1rem;
    font-size: 1.2rem;
}

.footer-section p {
    color: var(--text-secondary);
    line-height: 1.6;
}

.footer-section a {
    display: block;
    color: var(--text-secondary);
    text-decoration: none;
    margin-bottom: 0.5rem;
    transition: var(--transition);
}

.footer-section a:hover {
    color: var(--primary-color);
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav-container {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
    }
    
    .nav-menu {
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .hero-content h1 {
        font-size: 2rem;
    }
    
    .main-content {
        padding: 1rem;
    }
    
    .internship-grid {
        grid-template-columns: 1fr;
    }
    
    .job-details {
        flex-direction: column;
        gap: 0.5rem;
    }
}

@media (max-width: 480px) {
    .search-container {
        flex-direction: column;
    }
    
    .search-input {
        border-right: 2px solid var(--primary-color);
        border-bottom: none;
    }
    
    .card-footer {
        flex-direction: column;
        gap: 1rem;
    }
    
    .apply-btn {
        margin-right: 0;
    }
}'''

# Save the CSS file
with open('pm-internship/src/style.css', 'w', encoding='utf-8') as f:
    f.write(css_content)

print("✅ Created: style.css")