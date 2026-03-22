document.addEventListener("DOMContentLoaded", function () {
    // 1. Set Current Year
    const yearEl = document.getElementById('currentYear');
    if(yearEl) yearEl.textContent = new Date().getFullYear();

    // 2. Dynamic Navbar Height
    const nav = document.querySelector(".navbar");
    if(nav) {
        const updateNavHeight = () => {
            document.documentElement.style.setProperty("--navbar-height", nav.offsetHeight + "px");
        };
        updateNavHeight();
        window.addEventListener('resize', updateNavHeight);
    }

    // 3. Skill Bar Jitter Logic
    const skills = [
        { id: 'skill-1', base: 85 },
        { id: 'skill-2', base: 70 },
        { id: 'skill-3', base: 99 }
    ];

    setInterval(() => {
        skills.forEach(skill => {
            const bar = document.getElementById(`${skill.id}-bar`);
            const text = document.getElementById(`${skill.id}-val`);
            if (bar && text) {
                const offset = Math.floor(Math.random() * 5) - 2; // ±2% jitter
                const newVal = Math.min(100, Math.max(0, skill.base + offset));
                bar.style.width = newVal + '%';
                text.innerText = newVal + '%';
            }
        });
    }, 500);
});