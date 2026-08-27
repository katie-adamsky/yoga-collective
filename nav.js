document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const navLinks = nav.querySelector('.nav-links');
    const BREAKPOINT = 600;

    const toggle = document.createElement('button');
    toggle.className = 'nav-toggle';
    toggle.setAttribute('aria-label', 'Open menu');
    toggle.textContent = '☰';
    toggle.style.alignItems = 'center';
    nav.insertBefore(toggle, navLinks);

    function isMobile() {
        return window.innerWidth <= BREAKPOINT;
    }

    function update() {
        if (isMobile()) {
            toggle.style.display = 'flex';
            if (!nav.classList.contains('open')) {
                navLinks.style.display = 'none';
            }
        } else {
            toggle.style.display = 'none';
            navLinks.style.display = '';
            nav.classList.remove('open');
            toggle.textContent = '☰';
        }
    }

    toggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        toggle.textContent = isOpen ? '✕' : '☰';
        toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
        navLinks.style.display = isOpen ? 'flex' : 'none';
    });

    navLinks.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            nav.classList.remove('open');
            toggle.textContent = '☰';
            toggle.setAttribute('aria-label', 'Open menu');
            navLinks.style.display = 'none';
        });
    });

    window.addEventListener('resize', update);
    update();
});
