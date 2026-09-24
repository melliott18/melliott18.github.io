// Custom theme dropdown logic with icon button and persistence
(function() {
    const iconBtn = document.getElementById('theme-icon-btn');
    const dropdown = document.getElementById('theme-dropdown');
    const emoji = { system: '🌓', light: '☀️', dark: '🌙' };
    let currentTheme = 'system';
    function applyTheme(theme, isSystem) {
        document.body.classList.remove('light-theme', 'dark-theme');
        if (theme === 'light') {
            document.body.classList.add('light-theme');
        } else if (theme === 'dark') {
            document.body.classList.add('dark-theme');
        }
        iconBtn.textContent = emoji[isSystem ? 'system' : theme];
        currentTheme = isSystem ? 'system' : theme;
        localStorage.setItem('portfolioTheme', currentTheme);
    }
    iconBtn.addEventListener('click', function(e) {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });
    document.querySelectorAll('.theme-option').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            const theme = btn.getAttribute('data-theme');
            if (theme === 'system') {
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                applyTheme(systemTheme, true);
            } else {
                applyTheme(theme, false);
            }
            dropdown.style.display = 'none';
        });
    });
    // On load, set to saved theme or system
    const savedTheme = localStorage.getItem('portfolioTheme');
    if (savedTheme && emoji[savedTheme]) {
        if (savedTheme === 'system') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            applyTheme(systemTheme, true);
        } else {
            applyTheme(savedTheme, false);
        }
    } else {
        // Always default to system icon and system theme
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        applyTheme(systemTheme, true);
    }
    // Listen for system changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (currentTheme === 'system') {
            applyTheme(e.matches ? 'dark' : 'light', true);
        }
    });
    // Hide dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!iconBtn.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });
})();
