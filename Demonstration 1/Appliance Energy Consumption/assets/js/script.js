// Page navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page-content');
    const logo = document.getElementById('logo');

    // Navigation function
    function showPage(pageId) {
        // Hide all pages
        pages.forEach(page => {
            page.classList.remove('active');
        });
        
        // Remove active class from all nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Show selected page
        const targetPage = document.getElementById(pageId + '-page');
        if (targetPage) {
            targetPage.classList.add('active');
        }
        
        // Add active class to corresponding nav link
        const activeLink = document.querySelector(`[data-page="${pageId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
        
        // Update page title
        const pageTitles = {
            'home': 'Power Energy - Home',
            'televisions': 'Power Energy - Televisions',
            'about': 'Power Energy - About Us'
        };
        document.title = pageTitles[pageId] || 'Power Energy';
    }

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
            
            // Smooth scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });

    // Logo click event - return to home
    logo.addEventListener('click', function() {
        showPage('home');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add hover effects for enhanced user experience
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(-2px)';
            }
        });
        
        link.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });

    // Add smooth transitions for page changes
    function addPageTransition() {
        const style = document.createElement('style');
        style.textContent = `
            .page-content {
                transition: opacity 0.3s ease-in-out;
            }
            .page-content:not(.active) {
                opacity: 0;
            }
            .page-content.active {
                opacity: 1;
            }
        `;
        document.head.appendChild(style);
    }
    
    addPageTransition();

    // Initialize with home page active
    showPage('home');
});

