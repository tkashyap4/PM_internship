// PM Internship Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('PM Internship Dashboard loaded!');

    // Check authentication
    checkAuthentication();

    // Initialize dashboard
    initializeDashboard();

    function checkAuthentication() {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        if (isLoggedIn !== 'true') {
            window.location.href = 'login.html';
            return;
        }

        // Load user data
        const userSession = JSON.parse(sessionStorage.getItem('userSession') || '{}');
        updateUserInfo(userSession);
    }

    function initializeDashboard() {
        setupEventListeners();
        setupDropdownMenu();
        loadDashboardData();
        initializeInternshipCards();
        animateStatsOnLoad();
    }

    function setupEventListeners() {
        // Navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', handleNavigation);
        });

        // User dropdown
        const userDropdown = document.getElementById('userDropdown');
        if (userDropdown) {
            userDropdown.addEventListener('click', toggleDropdown);
        }

        // Logout button
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', handleLogout);
        }

        // Quick action buttons
        document.querySelectorAll('.action-btn').forEach(btn => {
            btn.addEventListener('click', handleQuickAction);
        });

        // Profile buttons
        const completeProfileBtn = document.querySelector('.complete-profile-btn');
        if (completeProfileBtn) {
            completeProfileBtn.addEventListener('click', () => navigateToPage('profile.html'));
        }

        const addSkillBtn = document.querySelector('.add-skill-btn');
        if (addSkillBtn) {
            addSkillBtn.addEventListener('click', handleAddSkill);
        }

        // Dropdown menu items
        document.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', handleDropdownAction);
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            const dropdown = document.getElementById('dropdownMenu');
            const toggle = document.getElementById('userDropdown');

            if (dropdown && !dropdown.contains(e.target) && !toggle.contains(e.target)) {
                dropdown.classList.remove('show');
            }
        });
    }

    function handleNavigation(e) {
        e.preventDefault();
        const link = e.target.closest('.nav-link');
        const href = link.getAttribute('href');

        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

        // Add active class to clicked link
        link.classList.add('active');

        // Navigate based on href
        switch(href) {
            case '#dashboard':
                showNotification('You are already on the dashboard', 'info');
                break;
            case '#browse':
                navigateToPage('browse-internships.html');
                break;
            case '#applications':
                navigateToPage('my-applications.html');
                break;
            case '#profile':
                navigateToPage('profile.html');
                break;
            default:
                showNotification('Navigation functionality coming soon!', 'info');
        }
    }

    function handleDropdownAction(e) {
        e.preventDefault();
        const item = e.target.closest('.dropdown-item');
        const href = item.getAttribute('href');

        switch(href) {
            case '#profile':
                navigateToPage('profile.html');
                break;
            case '#settings':
                navigateToPage('settings.html');
                break;
            case '#help':
                navigateToPage('help.html');
                break;
            default:
                if (item.classList.contains('logout-btn')) {
                    handleLogout();
                }
        }

        // Close dropdown
        document.getElementById('dropdownMenu').classList.remove('show');
    }

    function setupDropdownMenu() {
        const dropdownToggle = document.getElementById('userDropdown');
        const dropdownMenu = document.getElementById('dropdownMenu');

        if (dropdownToggle && dropdownMenu) {
            dropdownToggle.addEventListener('click', function(e) {
                e.stopPropagation();
                dropdownMenu.classList.toggle('show');
            });
        }
    }

    function toggleDropdown(e) {
        e.stopPropagation();
        const dropdown = document.getElementById('dropdownMenu');
        if (dropdown) {
            dropdown.classList.toggle('show');
        }
    }

    function handleQuickAction(e) {
        const button = e.target.closest('.action-btn');
        const text = button.textContent.trim();

        if (text.includes('Browse All Internships')) {
            navigateToPage('browse-internships.html');
        } else if (text.includes('Create Job Alert')) {
            navigateToPage('job-alerts.html');
        }
    }

    function navigateToPage(page) {
        showNotification(`Navigating to ${page}...`, 'info');

        // Add loading state
        document.body.style.opacity = '0.8';
        document.body.style.pointerEvents = 'none';

        setTimeout(() => {
            window.location.href = page;
        }, 1000);
    }

    function initializeInternshipCards() {
        // Apply buttons
        document.querySelectorAll('.apply-btn').forEach(btn => {
            btn.addEventListener('click', handleApplyClick);
        });

        // Save buttons
        document.querySelectorAll('.save-btn').forEach(btn => {
            btn.addEventListener('click', handleSaveClick);
        });

        // Card hover effects
        document.querySelectorAll('.internship-card').forEach(card => {
            card.addEventListener('click', function(e) {
                if (!e.target.closest('button')) {
                    handleCardClick(this);
                }
            });
        });
    }

    function handleApplyClick(e) {
        e.stopPropagation();
        const card = e.target.closest('.internship-card');
        const jobTitle = card.querySelector('.company-details h3').textContent;
        const companyName = card.querySelector('.company-name').textContent;

        // Show confirmation dialog
        if (confirm(`Apply for ${jobTitle} at ${companyName}?\n\nThis will redirect you to the application page.`)) {
            // Update button state
            const btn = e.target.closest('.apply-btn');
            btn.innerHTML = '<i class="fas fa-check"></i> Applied';
            btn.disabled = true;
            btn.style.backgroundColor = '#28a745';
            btn.style.cursor = 'not-allowed';

            // Update application count
            updateApplicationCount();

            // Show success message
            showNotification(`Successfully applied for ${jobTitle}!`, 'success');

            // Store application in session
            storeApplication(jobTitle, companyName);
        }
    }

    function handleSaveClick(e) {
        e.stopPropagation();
        const card = e.target.closest('.internship-card');
        const jobTitle = card.querySelector('.company-details h3').textContent;
        const saveBtn = e.target.closest('.save-btn');
        const icon = saveBtn.querySelector('i');

        if (icon.classList.contains('far')) {
            // Save job
            icon.classList.remove('far');
            icon.classList.add('fas');
            saveBtn.style.backgroundColor = '#CC7722';
            saveBtn.style.color = '#ffffff';
            saveBtn.style.borderColor = '#CC7722';

            // Update saved jobs count
            updateSavedJobsCount(1);

            showNotification(`${jobTitle} saved to your list!`, 'success');
        } else {
            // Unsave job
            icon.classList.remove('fas');
            icon.classList.add('far');
            saveBtn.style.backgroundColor = '#ffffff';
            saveBtn.style.color = '#CC7722';
            saveBtn.style.borderColor = '#CC7722';

            // Update saved jobs count
            updateSavedJobsCount(-1);

            showNotification(`${jobTitle} removed from saved jobs`, 'info');
        }
    }

    function handleCardClick(card) {
        const jobTitle = card.querySelector('.company-details h3').textContent;
        const companyName = card.querySelector('.company-name').textContent;

        showNotification(`Opening ${jobTitle} at ${companyName}...`, 'info');

        // Redirect to job details page
        setTimeout(() => {
            navigateToPage(`job-details.html?job=${encodeURIComponent(jobTitle)}&company=${encodeURIComponent(companyName)}`);
        }, 1000);
    }

    function handleAddSkill() {
        const newSkill = prompt('Enter a new skill to add:');

        if (newSkill && newSkill.trim()) {
            const skillsList = document.querySelector('.skills-list');
            const skillTag = document.createElement('span');
            skillTag.className = 'skill-tag';
            skillTag.textContent = newSkill.trim();

            skillsList.appendChild(skillTag);
            showNotification(`Added "${newSkill}" to your skills!`, 'success');
        }
    }

    function updateApplicationCount() {
        const appCountElements = document.querySelectorAll('.stat-number');
        appCountElements.forEach(el => {
            if (el.nextElementSibling && el.nextElementSibling.textContent.includes('Applications')) {
                const currentCount = parseInt(el.textContent);
                el.textContent = currentCount + 1;
            }
        });
    }

    function updateSavedJobsCount(change) {
        const statElements = document.querySelectorAll('.stat-number');
        statElements.forEach(el => {
            if (el.nextElementSibling && el.nextElementSibling.textContent.includes('Saved Jobs')) {
                const currentCount = parseInt(el.textContent);
                el.textContent = Math.max(0, currentCount + change);
            }
        });
    }

    function storeApplication(jobTitle, companyName) {
        const applications = JSON.parse(localStorage.getItem('userApplications') || '[]');
        applications.push({
            jobTitle: jobTitle,
            companyName: companyName,
            appliedDate: new Date().toISOString(),
            status: 'Applied'
        });
        localStorage.setItem('userApplications', JSON.stringify(applications));
    }

    function handleLogout() {
        if (confirm('Are you sure you want to logout?')) {
            showNotification('Logging out...', 'info');

            // Clear session data
            sessionStorage.removeItem('isLoggedIn');
            sessionStorage.removeItem('userSession');

            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1500);
        }
    }

    function updateUserInfo(userSession) {
        // Update user name in welcome section
        const userNameElement = document.getElementById('userName');
        if (userNameElement && userSession.name) {
            userNameElement.textContent = userSession.name;
        }

        // Update user name in navigation
        const navUserName = document.querySelector('.user-name');
        if (navUserName && userSession.name) {
            navUserName.textContent = userSession.name;
        }

        // Update profile section
        const profileName = document.querySelector('.profile-header h3');
        if (profileName && userSession.name) {
            profileName.textContent = userSession.name;
        }
    }

    function loadDashboardData() {
        // Load user applications count
        const applications = JSON.parse(localStorage.getItem('userApplications') || '[]');
        const appCountElement = document.querySelector('.stat-number');
        if (appCountElement && applications.length > 0) {
            appCountElement.textContent = applications.length;
        }

        showNotification('Dashboard loaded successfully!', 'success');
    }

    function animateStatsOnLoad() {
        const statNumbers = document.querySelectorAll('.stat-number');

        statNumbers.forEach((stat, index) => {
            const finalValue = parseInt(stat.textContent);
            let currentValue = 0;
            const increment = finalValue / 20;

            setTimeout(() => {
                const timer = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= finalValue) {
                        stat.textContent = finalValue;
                        clearInterval(timer);
                    } else {
                        stat.textContent = Math.floor(currentValue);
                    }
                }, 50);
            }, index * 200);
        });
    }

    function showNotification(message, type = 'info') {
        const container = document.getElementById('notificationContainer');

        // Remove existing notifications
        const existing = container.querySelectorAll('.notification');
        existing.forEach(n => n.remove());

        // Create notification
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;

        const colors = {
            success: '#28a745',
            error: '#dc3545',
            warning: '#ffc107',
            info: '#17a2b8'
        };

        const icons = {
            success: 'fa-check-circle',
            error: 'fa-exclamation-circle',
            warning: 'fa-exclamation-triangle',
            info: 'fa-info-circle'
        };

        notification.innerHTML = `
            <i class="fas ${icons[type]}"></i>
            <span>${message}</span>
        `;

        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: colors[type],
            color: 'white',
            padding: '1rem 1.5rem',
            borderRadius: '8px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
            zIndex: '10000',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transform: 'translateX(400px)',
            transition: 'transform 0.3s ease',
            maxWidth: '300px'
        });

        container.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after delay
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }, 4000);
    }

    // Welcome message
    setTimeout(() => {
        const userSession = JSON.parse(sessionStorage.getItem('userSession') || '{}');
        const name = userSession.name || 'Student';
        showNotification(`Welcome back, ${name}! 🎉`, 'success');
    }, 1000);
});