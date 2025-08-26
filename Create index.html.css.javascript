<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Computer Hardware Education - Learn, Build, Understand</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        :root {
            --primary: #1a73e8;
            --primary-dark: #0d47a1;
            --secondary: #4caf50;
            --dark: #263238;
            --light: #f5f5f5;
            --gray: #78909c;
            --white: #ffffff;
            --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            --transition: all 0.3s ease;
        }

        body {
            background-color: var(--light);
            color: var(--dark);
            line-height: 1.6;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Header Styles */
        header {
            background-color: var(--dark);
            color: var(--white);
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: var(--shadow);
        }

        .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 0;
        }

        .logo {
            display: flex;
            align-items: center;
            font-size: 1.8rem;
            font-weight: bold;
        }

        .logo i {
            color: var(--primary);
            margin-right: 10px;
        }

        nav ul {
            display: flex;
            list-style: none;
        }

        nav ul li {
            margin-left: 25px;
        }

        nav ul li a {
            color: var(--white);
            text-decoration: none;
            font-weight: 500;
            transition: var(--transition);
            padding: 8px 15px;
            border-radius: 4px;
        }

        nav ul li a:hover {
            background-color: var(--primary);
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-4.0.3') center/cover no-repeat;
            color: var(--white);
            padding: 100px 0;
            text-align: center;
        }

        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 20px;
        }

        .hero p {
            font-size: 1.2rem;
            max-width: 700px;
            margin: 0 auto 30px;
        }

        .btn {
            display: inline-block;
            background-color: var(--primary);
            color: var(--white);
            padding: 12px 30px;
            border-radius: 30px;
            text-decoration: none;
            font-weight: bold;
            transition: var(--transition);
            border: none;
            cursor: pointer;
            font-size: 1rem;
        }

        .btn:hover {
            background-color: var(--primary-dark);
            transform: translateY(-3px);
        }

        .btn-outline {
            background-color: transparent;
            border: 2px solid var(--primary);
            color: var(--primary);
        }

        .btn-outline:hover {
            background-color: var(--primary);
            color: var(--white);
        }

        /* Section Styles */
        .section {
            padding: 80px 0;
        }

        .section-title {
            text-align: center;
            margin-bottom: 50px;
        }

        .section-title h2 {
            font-size: 2.5rem;
            color: var(--dark);
            margin-bottom: 15px;
        }

        .section-title p {
            color: var(--gray);
            max-width: 700px;
            margin: 0 auto;
        }

        /* Features Section */
        .features {
            background-color: var(--white);
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .feature-card {
            background-color: var(--white);
            border-radius: 10px;
            padding: 30px;
            box-shadow: var(--shadow);
            transition: var(--transition);
            text-align: center;
        }

        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }

        .feature-icon {
            font-size: 3rem;
            color: var(--primary);
            margin-bottom: 20px;
        }

        .feature-card h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
        }

        /* Components Section */
        .components {
            background-color: var(--light);
        }

        .components-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
        }

        .component-card {
            background-color: var(--white);
            border-radius: 10px;
            overflow: hidden;
            box-shadow: var(--shadow);
            transition: var(--transition);
        }

        .component-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
        }

        .component-img {
            height: 200px;
            background-color: #e0e0e0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4rem;
            color: var(--primary);
        }

        .component-content {
            padding: 20px;
        }

        .component-content h3 {
            margin-bottom: 10px;
            color: var(--dark);
        }

        .component-content p {
            color: var(--gray);
            margin-bottom: 15px;
        }

        .component-content a {
            color: var(--primary);
            font-weight: 500;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
        }

        .component-content a i {
            margin-left: 5px;
        }

        /* Tutorials Section */
        .tutorials {
            background-color: var(--white);
        }

        .tutorials-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .tutorial-card {
            background-color: var(--light);
            border-radius: 10px;
            overflow: hidden;
            box-shadow: var(--shadow);
            transition: var(--transition);
        }

        .tutorial-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
        }

        .tutorial-img {
            height: 180px;
            background-color: #e0e0e0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            color: var(--primary);
        }

        .tutorial-content {
            padding: 20px;
        }

        .tutorial-content h3 {
            margin-bottom: 10px;
            color: var(--dark);
        }

        .tutorial-content p {
            color: var(--gray);
            margin-bottom: 15px;
        }

        .tutorial-meta {
            display: flex;
            justify-content: space-between;
            color: var(--gray);
            font-size: 0.9rem;
        }

        .tutorial-meta span {
            display: flex;
            align-items: center;
        }

        .tutorial-meta i {
            margin-right: 5px;
        }

        /* Resources Section */
        .resources {
            background-color: var(--light);
        }

        .resources-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }

        .resource-item {
            background-color: var(--white);
            border-radius: 8px;
            padding: 20px;
            box-shadow: var(--shadow);
            transition: var(--transition);
        }

        .resource-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
        }

        .resource-item h3 {
            margin-bottom: 10px;
            color: var(--dark);
            display: flex;
            align-items: center;
        }

        .resource-item h3 i {
            color: var(--primary);
            margin-right: 10px;
        }

        .resource-item p {
            color: var(--gray);
            margin-bottom: 15px;
        }

        .resource-item a {
            color: var(--primary);
            font-weight: 500;
            text-decoration: none;
        }

        /* CTA Section */
        .cta {
            background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3') center/cover no-repeat;
            color: var(--white);
            text-align: center;
            padding: 80px 0;
        }

        .cta h2 {
            font-size: 2.5rem;
            margin-bottom: 20px;
        }

        .cta p {
            max-width: 700px;
            margin: 0 auto 30px;
            font-size: 1.1rem;
        }

        /* Footer */
        footer {
            background-color: var(--dark);
            color: var(--white);
            padding: 70px 0 20px;
        }

        .footer-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 40px;
            margin-bottom: 50px;
        }

        .footer-col h3 {
            font-size: 1.3rem;
            margin-bottom: 25px;
            position: relative;
            padding-bottom: 10px;
        }

        .footer-col h3::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 50px;
            height: 3px;
            background-color: var(--primary);
        }

        .footer-col ul {
            list-style: none;
        }

        .footer-col ul li {
            margin-bottom: 12px;
        }

        .footer-col ul li a {
            color: #b0bec5;
            text-decoration: none;
            transition: var(--transition);
        }

        .footer-col ul li a:hover {
            color: var(--primary);
            padding-left: 5px;
        }

        .social-links {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }

        .social-links a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            color: var(--white);
            transition: var(--transition);
        }

        .social-links a:hover {
            background-color: var(--primary);
            transform: translateY(-3px);
        }

        .copyright {
            text-align: center;
            padding-top: 30px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            color: #b0bec5;
            font-size: 0.9rem;
        }

        /* Responsive Design */
        @media (max-width: 992px) {
            .hero h1 {
                font-size: 2.8rem;
            }
            
            .section-title h2 {
                font-size: 2.2rem;
            }
        }

        @media (max-width: 768px) {
            .header-container {
                flex-direction: column;
                padding: 15px;
            }
            
            nav ul {
                margin-top: 15px;
                flex-wrap: wrap;
                justify-content: center;
            }
            
            nav ul li {
                margin: 5px 10px;
            }
            
            .hero {
                padding: 70px 0;
            }
            
            .hero h1 {
                font-size: 2.2rem;
            }
            
            .section {
                padding: 60px 0;
            }
            
            .section-title h2 {
                font-size: 2rem;
            }
        }

        @media (max-width: 576px) {
            .hero h1 {
                font-size: 1.8rem;
            }
            
            .hero p {
                font-size: 1rem;
            }
            
            .btn {
                padding: 10px 20px;
                font-size: 0.9rem;
            }
            
            .section-title h2 {
                font-size: 1.8rem;
            }
            
            .footer-grid {
                grid-template-columns: 1fr;
                gap: 30px;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="container header-container">
            <div class="logo">
                <i class="fas fa-microchip"></i>
                <span>HardwareEd</span>
            </div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#components">Components</a></li>
                    <li><a href="#tutorials">Tutorials</a></li>
                    <li><a href="#resources">Resources</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="container">
            <h1>Master Computer Hardware</h1>
            <p>Your comprehensive guide to understanding, building, and troubleshooting computer hardware. From basic components to advanced systems.</p>
            <a href="#components" class="btn">Explore Components</a>
            <a href="#tutorials" class="btn btn-outline" style="margin-left: 15px;">View Tutorials</a>
        </div>
    </section>

    <!-- Features Section -->
    <section class="features section">
        <div class="container">
            <div class="section-title">
                <h2>Why Learn With Us</h2>
                <p>We provide comprehensive, easy-to-understand resources for all levels of learners</p>
            </div>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-book-open"></i>
                    </div>
                    <h3>Comprehensive Guides</h3>
                    <p>In-depth articles covering every hardware component with detailed explanations and visual aids.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-tools"></i>
                    </div>
                    <h3>Practical Tutorials</h3>
                    <p>Step-by-step tutorials for building PCs, upgrading components, and troubleshooting common issues.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <h3>Community Support</h3>
                    <p>Join our community of learners and experts to ask questions, share knowledge, and get help.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Components Section -->
    <section id="components" class="components section">
        <div class="container">
            <div class="section-title">
                <h2>Hardware Components</h2>
                <p>Learn about the essential components that make up a computer system</p>
            </div>
            <div class="components-grid">
                <div class="component-card">
                    <div class="component-img">
                        <i class="fas fa-microchip"></i>
                    </div>
                    <div class="component-content">
                        <h3>Central Processing Unit (CPU)</h3>
                        <p>The brain of the computer that performs most of the processing inside the computer.</p>
                        <a href="#">Learn More <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                <div class="component-card">
                    <div class="component-img">
                        <i class="fas fa-memory"></i>
                    </div>
                    <div class="component-content">
                        <h3>Random Access Memory (RAM)</h3>
                        <p>Temporary memory that stores data that is being processed by the CPU.</p>
                        <a href="#">Learn More <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                <div class="component-card">
                    <div class="component-img">
                        <i class="fas fa-desktop"></i>
                    </div>
                    <div class="component-content">
                        <h3>Graphics Processing Unit (GPU)</h3>
                        <p>Specialized processor designed to accelerate graphics rendering and video processing.</p>
                        <a href="#">Learn More <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                <div class="component-card">
                    <div class="component-img">
                        <i class="fas fa-hdd"></i>
                    </div>
                    <div class="component-content">
                        <h3>Storage (HDD/SSD)</h3>
                        <p>Devices that store digital data permanently, even when the computer is turned off.</p>
                        <a href="#">Learn More <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                <div class="component-card">
                    <div class="component-img">
                        <i class="fas fa-bolt"></i>
                    </div>
                    <div class="component-content">
                        <h3>Power Supply Unit (PSU)</h3>
                        <p>Converts mains AC to low-voltage regulated DC power for the internal components.</p>
                        <a href="#">Learn More <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                <div class="component-card">
                    <div class="component-img">
                        <i class="fas fa-server"></i>
                    </div>
                    <div class="component-content">
                        <h3>Motherboard</h3>
                        <p>The main circuit board that connects all components and allows communication between them.</p>
                        <a href="#">Learn More <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Tutorials Section -->
    <section id="tutorials" class="tutorials section">
        <div class="container">
            <div class="section-title">
                <h2>Popular Tutorials</h2>
                <p>Step-by-step guides to help you build, upgrade, and troubleshoot your computer</p>
            </div>
            <div class="tutorials-grid">
                <div class="tutorial-card">
                    <div class="tutorial-img">
                        <i class="fas fa-laptop-code"></i>
                    </div>
                    <div class="tutorial-content">
                        <h3>Building Your First PC</h3>
                        <p>A complete guide to building your own computer from selecting components to installation.</p>
                        <div class="tutorial-meta">
                            <span><i class="fas fa-clock"></i> 45 min</span>
                            <span><i class="fas fa-signal"></i> Beginner</span>
                        </div>
                    </div>
                </div>
                <div class="tutorial-card">
                    <div class="tutorial-img">
                        <i class="fas fa-memory"></i>
                    </div>
                    <div class="tutorial-content">
                        <h3>How to Install RAM</h3>
                        <p>Learn how to safely install or upgrade your computer's memory for better performance.</p>
                        <div class="tutorial-meta">
                            <span><i class="fas fa-clock"></i> 20 min</span>
                            <span><i class="fas fa-signal"></i> Beginner</span>
                        </div>
                    </div>
                </div>
                <div class="tutorial-card">
                    <div class="tutorial-img">
                        <i class="fas fa-tools"></i>
                    </div>
                    <div class="tutorial-content">
                        <h3>Troubleshooting Common Issues</h3>
                        <p>Diagnose and fix common hardware problems like boot failures and overheating.</p>
                        <div class="tutorial-meta">
                            <span><i class="fas fa-clock"></i> 30 min</span>
                            <span><i class="fas fa-signal"></i> Intermediate</span>
                        </div>
                    </div>
                </div>
                <div class="tutorial-card">
                    <div class="tutorial-img">
                        <i class="fas fa-microchip"></i>
                    </div>
                    <div class="tutorial-content">
                        <h3>CPU Installation Guide</h3>
                        <p>Step-by-step instructions for safely installing a new processor in your motherboard.</p>
                        <div class="tutorial-meta">
                            <span><i class="fas fa-clock"></i> 25 min</span>
                            <span><i class="fas fa-signal"></i> Intermediate</span>
                        </div>
                    </div>
                </div>
                <div class="tutorial-card">
                    <div class="tutorial-img">
                        <i class="fas fa-desktop"></i>
                    </div>
                    <div class="tutorial-content">
                        <h3>GPU Installation & Setup</h3>
                        <p>Learn how to install a graphics card and set up drivers for optimal performance.</p>
                        <div class="tutorial-meta">
                            <span><i class="fas fa-clock"></i> 35 min</span>
                            <span><i class="fas fa-signal"></i> Intermediate</span>
                        </div>
                    </div>
                </div>
                <div class="tutorial-card">
                    <div class="tutorial-img">
                        <i class="fas fa-hdd"></i>
                    </div>
                    <div class="tutorial-content">
                        <h3>Upgrading to an SSD</h3>
                        <p>Transform your computer's performance by upgrading from a hard drive to an SSD.</p>
                        <div class="tutorial-meta">
                            <span><i class="fas fa-clock"></i> 40 min</span>
                            <span><i class="fas fa-signal"></i> Beginner</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Resources Section -->
    <section id="resources" class="resources section">
        <div class="container">
            <div class="section-title">
                <h2>Learning Resources</h2>
                <p>Additional materials to enhance your understanding of computer hardware</p>
            </div>
            <div class="resources-grid">
                <div class="resource-item">
                    <h3><i class="fas fa-book"></i> eBooks</h3>
                    <p>Download our free eBooks covering various hardware topics in depth.</p>
                    <a href="#">Browse eBooks</a>
                </div>
                <div class="resource-item">
                    <h3><i class="fas fa-video"></i> Video Courses</h3>
                    <p>Comprehensive video courses for visual learners who prefer step-by-step demonstrations.</p>
                    <a href="#">Watch Courses</a>
                </div>
                <div class="resource-item">
                    <h3><i class="fas fa-file-pdf"></i> Cheat Sheets</h3>
                    <p>Quick reference guides and diagrams to help you remember key concepts.</p>
                    <a href="#">Download PDFs</a>
                </div>
                <div class="resource-item">
                    <h3><i class="fas fa-tools"></i> Tools Guide</h3>
                    <p>Essential tools you'll need for building and repairing computers.</p>
                    <a href="#">View Tools</a>
                </div>
                <div class="resource-item">
                    <h3><i class="fas fa-comments"></i> Forums</h3>
                    <p>Join our community forums to ask questions and share your knowledge.</p>
                    <a href="#">Visit Forums</a>
                </div>
                <div class="resource-item">
                    <h3><i class="fas fa-certificate"></i> Certifications</h3>
                    <p>Information about hardware certifications and how to prepare for exams.</p>
                    <a href="#">Learn More</a>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
        <div class="container">
            <h2>Ready to Master Computer Hardware?</h2>
            <p>Join thousands of learners who have improved their hardware knowledge with our comprehensive resources.</p>
            <a href="#" class="btn">Sign Up for Free</a>
        </div>
    </section>

    <!-- Footer -->
    <footer id="about">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <h3>HardwareEd</h3>
                    <p>Your comprehensive guide to understanding, building, and troubleshooting computer hardware.</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div class="footer-col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#components">Components</a></li>
                        <li><a href="#tutorials">Tutorials</a></li>
                        <li><a href="#resources">Resources</a></li>
                        <li><a href="#about">About Us</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3>Components</h3>
                    <ul>
                        <li><a href="#">CPU</a></li>
                        <li><a href="#">GPU</a></li>
                        <li><a href="#">RAM</a></li>
                        <li><a href="#">Storage</a></li>
                        <li><a href="#">Motherboard</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3>Contact Us</h3>
                    <ul>
                        <li><i class="fas fa-envelope"></i> info@hardwareed.com</li>
                        <li><i class="fas fa-phone"></i> +1 (555) 123-4567</li>
                        <li><i class="fas fa-map-marker-alt"></i> 123 Tech Street, Silicon Valley, CA</li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; 2023 HardwareEd. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script>
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Add active class to navigation items on scroll
        window.addEventListener('scroll', () => {
            let current = '';
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('nav ul li a');
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === current) {
                    link.classList.add('active');
                }
            });
        });

        // Simple animation for cards on scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all cards
        document.querySelectorAll('.feature-card, .component-card, .tutorial-card, .resource-item').forEach(card => {
            card.style.opacity = 0;
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(card);
        });
    </script>
</body>
</html>
