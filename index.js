(function() {
        // Role typing: Social Media Marketer, SEO Analyst, Web Developer, Meta Ads Expert, Graphic Designer, Cybersecurity Intern
        const roles = ["Social Media Marketer", "SEO Analyst", "Web Developer", "Meta Ads Expert", "Graphic Designer", "Cybersecurity Intern"];
        const roleContainer = document.getElementById('roleContainer');
        let idx = 0, charIdx = 0, isDeleting = false;
        let currentText = "";
        function typeRole() {
            if (!roleContainer) return;
            if (!isDeleting && charIdx <= roles[idx].length) {
                currentText = roles[idx].substring(0, charIdx);
                roleContainer.innerHTML = `<span style="background: linear-gradient(135deg,#A78BFA,#6366F1); background-clip:text; -webkit-background-clip:text; color:transparent; font-weight:600;">${currentText}</span>`;
                charIdx++;
                if (charIdx === roles[idx].length+1) setTimeout(() => isDeleting = true, 1500);
                setTimeout(typeRole, 100);
            } else if (isDeleting && charIdx >= 0) {
                currentText = roles[idx].substring(0, charIdx);
                roleContainer.innerHTML = `<span style="background: linear-gradient(135deg,#A78BFA,#6366F1); background-clip:text; -webkit-background-clip:text; color:transparent; font-weight:600;">${currentText}</span>`;
                charIdx--;
                if (charIdx < 0) {
                    isDeleting = false;
                    idx = (idx+1)%roles.length;
                    charIdx = 0;
                }
                setTimeout(typeRole, 60);
            } else { setTimeout(typeRole, 100); }
        }
        typeRole();

        // Download CV - generate text file with resume data
        const cvBtn = document.getElementById('download-cv-btn');
        if(cvBtn) {
            cvBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const resumeText = `YAMNA FATIMA\nSocial Media Marketer | SEO Analyst | Graphic Designer | Web Development Intern\n\nContact: yamnafatima.tms@gmail.com | +92 323 2106763\n\nABOUT ME:\nCreative Social Media Marketer, SEO Analyst & Graphic Designer with hands-on experience in content strategy, audience engagement, and basic web development. Skilled in growing online presence, optimizing content, creating visually compelling designs, and managing multiple platforms using data-driven strategies.\n\nEXPERIENCE:\n- Aabtaab | Social Media Marketing (2025-Present): Managed Facebook pages, content strategies, analytics.\n- Techmire Solutions | Social Media & SEO: Created engaging content, managed interactions, campaign assistance.\n- Techmire Solutions | Web Development Intern (In Progress): HTML/CSS/JS, building layouts, testing.\n\nEDUCATION:\n- Intermediate (F.Sc) – Shaikh Zaid College (2025)\n- Matriculation – The SET School (2023)\n\nSKILLS: SEO, Social Media Analytics, Graphic Design (Canva/Adobe), HTML/CSS/JS, Google Sheets/Docs, AI Tools.\n\nLANGUAGES: English, Urdu, Sindhi`;
                const blob = new Blob([resumeText], {type: 'text/plain'});
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = 'Yamna_Fatima_CV.txt';
                link.click();
                URL.revokeObjectURL(link.href);
            });
        }

        // About page (new window with profile, image, skills)
        document.getElementById('open-about-page')?.addEventListener('click', () => {
            const win = window.open('', '_blank');
            if(win) {
                win.document.write(`
                    <html><head><title>About Yamna Fatima</title><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"><style>
                    body{font-family: 'Inter',sans-serif; background:#0A0C10; color:#E8EDF2; margin:0; padding:40px; text-align:center;}
                    .card{max-width:800px; margin:auto; background:#11161f; border-radius:48px; padding:40px; border:1px solid #8B5CF6;}
                    .profile-img{width:180px; height:180px; border-radius:50%; object-fit:cover; border:3px solid #A78BFA; margin:20px 0; background:#2a2f44; display:flex; align-items:center; justify-content:center; font-size:80px; color:#A78BFA; margin-left:auto; margin-right:auto;}
                    .skills-list{display:flex; flex-wrap:wrap; gap:15px; justify-content:center; margin-top:30px;}
                    .skill-badge{background:#1E2538; padding:8px 18px; border-radius:40px; color:#A78BFA;}
                    h1{color:white;} .btn{background:#6366F1; padding:12px 28px; border-radius:40px; display:inline-block; margin-top:30px; text-decoration:none; color:white; border:none; cursor:pointer;}
                    </style></head><body>
                    <div class="card"><h1>✨ Yamna Fatima</h1>
                    <div class="profile-img"><i class="fas fa-user-circle"></i></div>
                    <p style="font-size:1.1rem; line-height:1.6;">Creative Social Media Marketer, SEO Analyst & Graphic Designer with hands-on experience in content strategy, audience engagement, and web development. Skilled in growing online presence, optimizing content, and creating visually compelling designs.</p>
                    <div class="skills-list"><span class="skill-badge">SEO</span><span class="skill-badge">Social Media Analytics</span><span class="skill-badge">Canva/Photoshop</span><span class="skill-badge">HTML/CSS/JS</span><span class="skill-badge">Google Ads</span><span class="skill-badge">AI Prompt Engineering</span></div>
                    <button class="btn" onclick="window.close()">Close</button></div></body></html>
                `);
                win.document.close();
            } else alert("Please allow popups to view my detailed profile.");
        });

        // Projects "Explore More" with categories
        document.getElementById('explore-projects-btn')?.addEventListener('click', () => {
            const win = window.open('', '_blank');
            if(win) {
                win.document.write(`
                    <html><head><title>All Projects - Yamna</title><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"><style>
                    body{background:#0A0C10; color:#eee; font-family:Inter; padding:40px; text-align:center;}
                    .filters{display:flex; justify-content:center; gap:20px; margin-bottom:40px; flex-wrap:wrap;}
                    .filter-btn{background:#1E2538; border:none; padding:12px 26px; border-radius:40px; color:white; cursor:pointer; font-weight:600;}
                    .filter-btn.active{background:#6366F1;}
                    .projects-grid{display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:28px; max-width:1200px; margin:auto;}
                    .card{background:#11161f; border-radius:32px; padding:24px; border:1px solid #6366F1;}
                    .category{display:inline-block; background:#8B5CF6; border-radius:20px; padding:4px 14px; font-size:0.8rem; margin-bottom:12px;}
                    </style></head><body><h2>✨ My Project Gallery</h2>
                    <div class="filters"><button class="filter-btn active" data-cat="all">All</button><button class="filter-btn" data-cat="graphics">Graphics</button><button class="filter-btn" data-cat="marketing">Marketing</button><button class="filter-btn" data-cat="websites">Websites</button></div>
                    <div class="projects-grid" id="projectsGrid"></div><script>
                    const projects = [
                        {title:"Brand Identity Pack", desc:"Logo suite & social templates", cat:"graphics", icon:"🎨"},
                        {title:"Instagram Viral Reels", desc:"300% reach increase", cat:"marketing", icon:"📱"},
                        {title:"EcoStore Website", desc:"Fully responsive e-commerce", cat:"websites", icon:"💻"},
                        {title:"TikTok Ad Campaign", desc:"40% conversion uplift", cat:"marketing", icon:"📈"},
                        {title:"UI Dashboard Design", desc:"Figma modern UI", cat:"graphics", icon:"🖌️"},
                        {title:"Portfolio 2026", desc:"Developer portfolio", cat:"websites", icon:"🌐"}
                    ];
                    function render(category){
                        const filtered = category==='all' ? projects : projects.filter(p=>p.cat===category);
                        document.getElementById('projectsGrid').innerHTML = filtered.map(p=> '<div class="card"><div class="category">'+p.icon+' '+p.cat.toUpperCase()+'</div><h3>'+p.title+'</h3><p>'+p.desc+'</p></div>').join('');
                    }
                    render('all');
                    document.querySelectorAll('.filter-btn').forEach(btn=>{ btn.addEventListener('click',()=>{ document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); render(btn.dataset.cat); }); });
                    </script></body></html>
                `);
                win.document.close();
            } else alert("Please allow popups to view projects.");
        });

        // Services full page
        document.getElementById('open-services-page')?.addEventListener('click', () => {
            const win = window.open('', '_blank');
            if(win) {
                win.document.write(`
                    <html><head><title>All Services - Yamna</title><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"><style>
                    body{background:#0A0C10;color:#E8EDF2;font-family:Inter;padding:40px;text-align:center;}
                    .services-container{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:30px;max-width:1100px;margin:auto;}
                    .service-card{background:#11161f;border-radius:36px;padding:32px;border:1px solid #8B5CF6;}
                    i{font-size:42px;margin-bottom:18px;color:#A78BFA;}
                    </style></head><body><h2>🌟 My Complete Services</h2><div class="services-container">
                    <div class="service-card"><i class="fas fa-palette"></i><h3>Graphic Designing</h3><p>Canva, Photoshop, visual branding</p></div>
                    <div class="service-card"><i class="fas fa-chart-line"></i><h3>Social Media Marketing</h3><p>Organic growth, strategy, content calendars</p></div>
                    <div class="service-card"><i class="fas fa-laptop-code"></i><h3>Web Development</h3><p>HTML/CSS/JS, React, responsive sites</p></div>
                    <div class="service-card"><i class="fas fa-bullhorn"></i><h3>Ads Campaigns</h3><p>Meta & Google Ads, retargeting, A/B testing</p></div>
                    <div class="service-card"><i class="fas fa-search"></i><h3>Search Engine Optimization</h3><p>On-page, technical SEO, local SEO</p></div>
                    <div class="service-card"><i class="fas fa-tools"></i><h3>Site Maintenance</h3><p>Updates, security, speed optimization</p></div>
                    </div><button onclick="window.close()" style="margin-top:40px; background:#6366F1; border:none; padding:12px 34px; border-radius:40px; color:white; cursor:pointer;">Close</button></body></html>
                `);
                win.document.close();
            } else alert("Please allow popups to view services.");
        });

        // Intersection Observer for scroll reveal
        const hiddenEls = document.querySelectorAll('.hidden');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('show'); });
        }, { threshold: 0.15 });
        hiddenEls.forEach(el => observer.observe(el));

        // Active nav and smooth scroll
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav ul li a');
        function updateActive() {
            let curId = '';
            const scrollY = window.scrollY + 120;
            sections.forEach(sec => { if(scrollY >= sec.offsetTop && scrollY < sec.offsetTop+sec.offsetHeight) curId = sec.getAttribute('id'); });
            navLinks.forEach(link => { link.classList.remove('active'); if(link.getAttribute('href') === '#'+curId) link.classList.add('active'); });
        }
        window.addEventListener('scroll', updateActive);
        updateActive();
        document.querySelectorAll('nav ul li a, .logo').forEach(link => {
            link.addEventListener('click', function(e){
                const hash = this.getAttribute('href');
                if(hash && hash.startsWith('#')){
                    e.preventDefault();
                    const target = document.querySelector(hash);
                    if(target){ window.scrollTo({ top: target.offsetTop - 80, behavior:'smooth' }); }
                }
            });
        });
    })();
