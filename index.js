    // ===== JAVASCRIPT (Enhanced Mobile Responsive) =====
    (function() {
      const roles = ["Social Media Marketer", "SEO Analyst", "Web Developer", "Meta Ads Expert", "Graphic Designer", "Cybersecurity Intern"];
      const roleContainer = document.getElementById('roleContainer');
      let idx = 0, charIdx = 0, isDeleting = false;
      let currentText = "";

      function typeRole() {
        if (!roleContainer) return;
        if (!isDeleting && charIdx <= roles[idx].length) {
          currentText = roles[idx].substring(0, charIdx);
          roleContainer.innerHTML = `<span style="background: linear-gradient(135deg,#A78BFA,#6366F1); -webkit-background-clip:text; color:transparent; font-weight:600;">${currentText}</span>`;
          charIdx++;
          if (charIdx === roles[idx].length + 1) setTimeout(() => isDeleting = true, 1500);
          setTimeout(typeRole, 100);
        } else if (isDeleting && charIdx >= 0) {
          currentText = roles[idx].substring(0, charIdx);
          roleContainer.innerHTML = `<span style="background: linear-gradient(135deg,#A78BFA,#6366F1); -webkit-background-clip:text; color:transparent; font-weight:600;">${currentText}</span>`;
          charIdx--;
          if (charIdx < 0) { isDeleting = false; idx = (idx + 1) % roles.length; charIdx = 0; }
          setTimeout(typeRole, 60);
        }
      }
      typeRole();
    })();

    // Toggle About
    const toggleAboutBtn = document.getElementById('toggle-about');
    const aboutDetails = document.getElementById('about-details');
    if (toggleAboutBtn && aboutDetails) {
      toggleAboutBtn.addEventListener('click', () => {
        aboutDetails.classList.toggle('show');
        aboutDetails.classList.toggle('hidden');
        toggleAboutBtn.textContent = aboutDetails.classList.contains('show') ? 'Show Less ←' : 'Read More →';
      });
    }

    // Modals
    const projectsModal = document.getElementById('projectsModal');
    const servicesModal = document.getElementById('servicesModal');
    document.getElementById('explore-projects-btn')?.addEventListener('click', () => { projectsModal.style.display = 'flex'; });
    document.getElementById('open-services-page')?.addEventListener('click', () => { servicesModal.style.display = 'flex'; });
    document.querySelectorAll('.close-modal').forEach(btn => {
      btn.addEventListener('click', () => { projectsModal.style.display = 'none'; servicesModal.style.display = 'none'; });
    });
    window.addEventListener('click', (e) => {
      if (e.target === projectsModal) projectsModal.style.display = 'none';
      if (e.target === servicesModal) servicesModal.style.display = 'none';
    });

    // Back to Top
    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => { backToTop?.classList.toggle('visible', window.scrollY > 500); });
    backToTop?.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });

    // Navbar Scroll
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => { nav?.classList.toggle('scrolled', window.scrollY > 50); });

    // Smooth Scroll
    document.querySelectorAll('.nav-links a, .logo').forEach(link => {
      link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) { e.preventDefault(); window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' }); }
      });
    });

    // Mobile Menu with body scroll lock
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        document.body.classList.toggle('menu-open');
      });
      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('active');
          document.body.classList.remove('menu-open');
        });
      });
    }

    // Scroll Reveal
    const revealElements = document.querySelectorAll('.slide-left, .slide-right, .fade-up');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); });
    }, { threshold: 0.1 });
    revealElements.forEach(el => observer.observe(el));

    // Background animation
    const canvas = document.getElementById('bg-animation');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      let bubbles = [];
      function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
      class Bubble {
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = canvas.height + Math.random() * 200;
          this.size = Math.random() * 15 + 10;
          this.speed = Math.random() * 0.5 + 0.2;
        }
        update() {
          this.y -= this.speed;
          if (this.y < -this.size) { this.y = canvas.height + this.size; this.x = Math.random() * canvas.width; }
        }
        draw() {
          const gradient = ctx.createRadialGradient(this.x, this.y, this.size * 0.3, this.x, this.y, this.size);
          gradient.addColorStop(0, "rgba(147, 197, 253, 0.25)");
          gradient.addColorStop(1, "rgba(147, 197, 253, 0)");
          ctx.beginPath();
          ctx.fillStyle = gradient;
          ctx.shadowColor = "rgba(147, 197, 253, 0.3)";
          ctx.shadowBlur = 30;
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      function init() { bubbles = []; for (let i = 0; i < 25; i++) bubbles.push(new Bubble()); }
      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        bubbles.forEach(b => { b.update(); b.draw(); });
        requestAnimationFrame(animate);
      }
      window.addEventListener('resize', () => { resizeCanvas(); init(); });
      resizeCanvas(); init(); animate();
    }
