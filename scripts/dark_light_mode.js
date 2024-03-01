document.addEventListener('DOMContentLoaded', () => {

    const themeToggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    updateSectionsVisibility();

    themeToggleButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior

        const currentTheme = document.body.getAttribute('data-theme');

        if (currentTheme === 'dark') {
            document.body.setAttribute('data-theme', 'light');
        } else {
            document.body.setAttribute('data-theme', 'dark');
        }

        updateSectionsVisibility();
        updateButtonIcon();
    });

    function updateSectionsVisibility() {
        const currentTheme = document.body.getAttribute('data-theme');
        const jourSection = document.querySelector('.jour');
        const nuitSection = document.querySelector('.nuit');

        if (currentTheme === 'dark') {
            jourSection.style.display = 'none';
            nuitSection.style.display = 'block';
        } else {
            jourSection.style.display = 'block';
            nuitSection.style.display = 'none';
        }
    }

    function updateButtonIcon() {
        const currentTheme = document.body.getAttribute('data-theme');

        if (currentTheme === 'dark') {
            themeIcon.classList.remove('fa-sun', 'sun');
            themeIcon.classList.add('fa-moon', 'moon');
        } else {
            themeIcon.classList.remove('fa-moon', 'moon');
            themeIcon.classList.add('fa-sun', 'sun');
        }
    }
});