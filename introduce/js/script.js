// Vietinsoft Website JavaScript

// Products Data - PLACEHOLDER: Replace with your actual products
const products = [
    {
        name: "Workforce Management",
        icon: "fas fa-users",
        description: "Comprehensive employee scheduling and time tracking solution for manufacturing environments.",
        // PLACEHOLDER: Add product image path
        image: "assets/images/products/workforce.jpg"
    },
    {
        name: "Payroll System",
        icon: "fas fa-calculator",
        description: "Automated payroll processing with manufacturing-specific calculations and compliance.",
        image: "assets/images/products/payroll.jpg"
    },
    {
        name: "Performance Analytics",
        icon: "fas fa-chart-line",
        description: "Real-time performance metrics and analytics for manufacturing productivity optimization.",
        image: "assets/images/products/analytics.jpg"
    },
    {
        name: "Safety Management",
        icon: "fas fa-hard-hat",
        description: "Comprehensive safety tracking and incident management for manufacturing facilities.",
        image: "assets/images/products/safety.jpg"
    },
    {
        name: "Training Portal",
        icon: "fas fa-graduation-cap",
        description: "Digital training platform for manufacturing skills development and certification.",
        image: "assets/images/products/training.jpg"
    },
    {
        name: "Compliance Tracker",
        icon: "fas fa-clipboard-check",
        description: "Automated compliance monitoring and reporting for manufacturing regulations.",
        image: "assets/images/products/compliance.jpg"
    },
    {
        name: "Shift Planner",
        icon: "fas fa-calendar-alt",
        description: "Advanced shift planning and optimization for 24/7 manufacturing operations.",
        image: "assets/images/products/shift.jpg"
    },
    {
        name: "Equipment Maintenance",
        icon: "fas fa-tools",
        description: "Preventive maintenance scheduling integrated with HR workforce planning.",
        image: "assets/images/products/maintenance.jpg"
    },
    {
        name: "Quality Control",
        icon: "fas fa-search",
        description: "Quality assurance tracking with employee performance correlation analysis.",
        image: "assets/images/products/quality.jpg"
    },
    {
        name: "Mobile Workforce",
        icon: "fas fa-mobile-alt",
        description: "Mobile applications for on-the-go workforce management and communication.",
        image: "assets/images/products/mobile.jpg"
    },
    {
        name: "Recruitment Suite",
        icon: "fas fa-user-plus",
        description: "Specialized recruitment tools for manufacturing talent acquisition and onboarding.",
        image: "assets/images/products/recruitment.jpg"
    },
    {
        name: "Document Management",
        icon: "fas fa-folder-open",
        description: "Digital document management system for HR policies and manufacturing procedures.",
        image: "assets/images/products/documents.jpg"
    }
];

// DOM Elements
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const backToTopBtn = document.getElementById('back-to-top');
const contactForm = document.getElementById('contact-form');
const productsGrid = document.getElementById('products-grid');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeScrollEffects();
    initializeMobileMenu();
    initializeContactForm();
    renderProducts();
    initializeIntersectionObserver();
    initializeParallax();
});

// Navigation functionality
function initializeNavigation() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
                
                // Update active navigation link
                updateActiveNavLink(targetId);
            }
        });
    });
}

// Update active navigation link
function updateActiveNavLink(activeId) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === activeId) {
            link.classList.add('active');
        }
    });
}

// Scroll effects
function initializeScrollEffects() {
    window.addEventListener('scroll', throttle(() => {
        const scrollTop = window.pageYOffset;
        
        // Update navbar appearance
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Show/hide back to top button
        if (scrollTop > 300) {
            backToTopBtn.classList.remove('opacity-0', 'invisible');
            backToTopBtn.classList.add('opacity-100', 'visible');
        } else {
            backToTopBtn.classList.add('opacity-0', 'invisible');
            backToTopBtn.classList.remove('opacity-100', 'visible');
        }
        
        // Update active section in navigation
        updateActiveSection();
    }, 100));
    
    // Back to top functionality
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Update active section based on scroll position
function updateActiveSection() {
    const sections = ['home', 'about', 'products', 'contact'];
    const scrollTop = window.pageYOffset + 100;
    
    for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollTop >= section.offsetTop) {
            updateActiveNavLink(`#${sections[i]}`);
            break;
        }
    }
}

// Mobile menu functionality
function initializeMobileMenu() {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        
        // Update button icon
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileMenu.classList.contains('hidden')) {
            icon.className = 'fas fa-bars text-xl';
        } else {
            icon.className = 'fas fa-times text-xl';
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            icon.className = 'fas fa-bars text-xl';
        }
    });
}

// Contact form functionality
function initializeContactForm() {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Add loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual form handling)
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Show success message
        showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
        
        // Reset form
        contactForm.reset();
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    });
}

// Render products grid
function renderProducts() {
    if (!productsGrid) return;
    
    productsGrid.innerHTML = products.map((product, index) => `
        <div class="product-card rounded-2xl p-6 fade-in-up" style="animation-delay: ${index * 0.1}s">
            <div class="product-icon w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <i class="${product.icon} text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">${product.name}</h3>
            <p class="text-gray-300 text-sm leading-relaxed mb-4">${product.description}</p>
            <button class="text-vietin-bright hover:text-vietin-light transition-colors font-semibold flex items-center space-x-2 group">
                <span>Learn More</span>
                <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </button>
        </div>
    `).join('');
    
    // Add click events to product cards
    document.querySelectorAll('.product-card').forEach((card, index) => {
        card.addEventListener('click', () => {
            showProductModal(products[index]);
        });
    });
}

// Show product modal (placeholder implementation)
function showProductModal(product) {
    // PLACEHOLDER: Implement product modal
    showNotification(`${product.name} - Feature coming soon!`, 'info');
}

// Intersection Observer for scroll animations
function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right').forEach(el => {
        observer.observe(el);
    });
}

// Parallax effects
function initializeParallax() {
    const floatingElements = document.querySelectorAll('.floating-element');
    
    window.addEventListener('scroll', throttle(() => {
        const scrollTop = window.pageYOffset;
        
        floatingElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrollTop * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }, 16));
}

// Utility function for throttling
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-xl text-white font-semibold max-w-sm transform translate-x-full transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500' : 
        type === 'error' ? 'bg-red-500' : 
        'bg-blue-500'
    }`;
    notification.innerHTML = `
        <div class="flex items-center space-x-2">
            <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'times' : 'info'}-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        const icon = mobileMenuBtn.querySelector('i');
        icon.className = 'fas fa-bars text-xl';
    }
});

// Performance optimization: Lazy load images
function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', initializeLazyLoading);

// Service Worker registration for PWA support (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}