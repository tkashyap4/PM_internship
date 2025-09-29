// PM Internship Platform JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('PM Internship Platform loaded successfully!');

    // Initialize the application
    init();

    function init() {
        setupEventListeners();
        loadRecommendations();
        updateUserInfo();
        initializeSearch();
        animateOnScroll();
    }

    function setupEventListeners() {
        // Apply button listeners
        document.querySelectorAll('.apply-btn').forEach(btn => {
            btn.addEventListener('click', handleApply);
        });

        // Save button listeners
        document.querySelectorAll('.save-btn').forEach(btn => {
            btn.addEventListener('click', handleSave);
        });

        // Search functionality
        const searchBtn = document.querySelector('.search-btn');
        const searchInput = document.querySelector('.search-input');

        if (searchBtn) {
            searchBtn.addEventListener('click', handleSearch);
        }

        if (searchInput) {
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    handleSearch();
                }
            });
        }

        // Logout functionality
        const logoutBtn = document.querySelector('.logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', handleLogout);
        }

        // Navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const linkText = this.textContent;
                showNotification(`Navigating to ${linkText}`, 'info');
            });
        });
    }

    function handleApply(e) {
        e.preventDefault();
        const card = e.target.closest('.internship-card');
        const jobTitle = card.querySelector('.company-details h3').textContent;
        const companyName = card.querySelector('.company-name').textContent;

        // Show confirmation
        if (confirm(`Apply for ${jobTitle} at ${companyName}?`)) {
            showNotification(`Application submitted for ${jobTitle}!`, 'success');

            // Update button state
            e.target.textContent = 'Applied ✓';
            e.target.disabled = true;
            e.target.style.backgroundColor = '#28a745';
            e.target.style.cursor = 'not-allowed';
        }
    }

    function handleSave(e) {
        e.preventDefault();
        const card = e.target.closest('.internship-card');
        const jobTitle = card.querySelector('.company-details h3').textContent;
        const saveBtn = e.target.closest('.save-btn');
        const icon = saveBtn.querySelector('i');

        // Toggle saved state
        if (icon.classList.contains('fas')) {
            icon.classList.remove('fas');
            icon.classList.add('far');
            saveBtn.style.backgroundColor = '#ffffff';
            saveBtn.style.color = '#CC7722';
            showNotification(`${jobTitle} removed from saved jobs`, 'info');
        } else {
            icon.classList.remove('far');
            icon.classList.add('fas');
            saveBtn.style.backgroundColor = '#CC7722';
            saveBtn.style.color = '#ffffff';
            showNotification(`${jobTitle} saved successfully!`, 'success');
        }
    }

    function handleSearch() {
        const searchInput = document.querySelector('.search-input');
        const query = searchInput.value.trim();

        if (query) {
            showNotification(`Searching for: "${query}"...`, 'info');

            // Simulate search with loading
            searchInput.disabled = true;
            const searchBtn = document.querySelector('.search-btn');
            const originalHTML = searchBtn.innerHTML;
            searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';

            setTimeout(() => {
                searchInput.disabled = false;
                searchBtn.innerHTML = originalHTML;
                showNotification(`Found 12 results for "${query}"`, 'success');
            }, 2000);
        } else {
            showNotification('Please enter a search term', 'warning');
            searchInput.focus();
        }
    }

    function handleLogout() {
        if (confirm('Are you sure you want to logout?')) {
            showNotification('Logging out...', 'info');

            // Simulate logout process
            setTimeout(() => {
                showNotification('Successfully logged out!', 'success');
                // In a real app, redirect to login page
                console.log('Redirecting to login page...');
            }, 1500);
        }
    }

    function loadRecommendations() {
        const cards = document.querySelectorAll('.internship-card');

        cards.forEach((card, index) => {
            // Add staggered animation
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';

            setTimeout(() => {
                card.style.transition = 'all 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);

            // Add hover effects
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px)';
                this.style.boxShadow = '0 8px 25px rgba(204, 119, 34, 0.2)';
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 4px 16px rgba(204, 119, 34, 0.15)';
            });
        });
    }

    function updateUserInfo() {
        // Simulate user data
        const userData = {
            name: 'Computer Science Student',
            skills: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
            location: 'Mumbai',
            applications: 25,
            interviews: 8
        };

        // Update user name in navigation
        const userNameElement = document.querySelector('.user-name');
        if (userNameElement) {
            userNameElement.textContent = `Welcome, ${userData.name}`;
        }

        // Update recommendation criteria
        const criteriaElement = document.querySelector('.section-header p');
        if (criteriaElement) {
            const skillsText = userData.skills.slice(0, 3).join(', ');
            criteriaElement.textContent = `Based on your skills: ${skillsText} | Location: ${userData.location}`;
        }
    }

    function initializeSearch() {
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            const suggestions = [
                'Frontend Developer',
                'Backend Developer', 
                'Full Stack Developer',
                'React Developer',
                'Node.js Developer',
                'Python Developer',
                'Data Science Intern',
                'UI/UX Designer'
            ];

            let currentSuggestion = 0;

            searchInput.addEventListener('focus', function() {
                this.placeholder = 'Try: ' + suggestions[currentSuggestion % suggestions.length];
                currentSuggestion++;
            });

            searchInput.addEventListener('blur', function() {
                this.placeholder = 'Search internships...';
            });
        }
    }

    function animateOnScroll() {
        // Animate stats when they come into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('stats-section')) {
                        animateStats();
                    }
                }
            });
        }, { threshold: 0.5 });

        const statsSection = document.querySelector('.stats-section');
        if (statsSection) {
            observer.observe(statsSection);
        }
    }

    function animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');

        statNumbers.forEach(stat => {
            const finalValue = parseInt(stat.textContent);
            let currentValue = 0;
            const increment = finalValue / 30;

            const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= finalValue) {
                    stat.textContent = finalValue;
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(currentValue);
                }
            }, 50);
        });
    }

    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(n => n.remove());

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;

        // Style the notification
        const colors = {
            success: '#28a745',
            error: '#dc3545', 
            warning: '#ffc107',
            info: '#17a2b8'
        };

        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '1rem 1.5rem',
            borderRadius: '8px',
            color: 'white',
            fontWeight: '500',
            zIndex: '10000',
            transform: 'translateX(400px)',
            transition: 'transform 0.3s ease',
            maxWidth: '300px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
            backgroundColor: colors[type] || colors.info
        });

        // Add to page
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after delay
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 4000);
    }

    // Add some interactive features
    function addInteractiveFeatures() {
        // Skill tag interactions
        document.querySelectorAll('.skill-tag').forEach(tag => {
            tag.addEventListener('click', function() {
                const skill = this.textContent;
                showNotification(`Searching for ${skill} internships...`, 'info');
            });

            tag.style.cursor = 'pointer';
            tag.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
            });

            tag.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });

        // Company logo interactions
        document.querySelectorAll('.company-logo').forEach(logo => {
            logo.addEventListener('click', function() {
                const companyName = this.nextElementSibling.querySelector('.company-name').textContent;
                showNotification(`Viewing ${companyName} profile...`, 'info');
            });

            logo.style.cursor = 'pointer';
        });
    }

    // Call additional features after main initialization
    setTimeout(addInteractiveFeatures, 1000);

    // Welcome message
    setTimeout(() => {
        showNotification('Welcome to PM Internship Platform! 🎉', 'success');
    }, 500);
});

// Global utility functions
window.PMInternship = {
    showNotification: function(message, type = 'info') {
        const event = new CustomEvent('showNotification', {
            detail: { message, type }
        });
        document.dispatchEvent(event);
    },

    searchInternships: function(query) {
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.value = query;
            searchInput.dispatchEvent(new KeyboardEvent('keypress', { key: 'Enter' }));
        }
    }
};