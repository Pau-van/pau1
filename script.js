 // Boolean state to track the current theme
        let isDarkMode = false;

        // DOM selection
        const body = document.body;
        const toggleButton = document.getElementById('themeToggle');

        // Event handling with arrow function
        toggleButton.addEventListener('click', () => {
            isDarkMode = !isDarkMode; // Toggle the boolean state

            // Update the theme based on the state
            if (isDarkMode) {
                body.classList.remove('light-mode');
                body.classList.add('dark-mode');
                toggleButton.textContent = 'Switch to Light Mode';
            } else {
                body.classList.remove('dark-mode');
                body.classList.add('light-mode');
                toggleButton.textContent = 'Switch to Dark Mode';
            }
        });