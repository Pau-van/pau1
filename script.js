
        // Using let for mutable data
        let count = 0;

        // DOM selection
        const button = document.getElementById('counterButton');
        const message = document.getElementById('message');

        // Event handling with arrow function
        button.addEventListener('click', () => {
            count++; // Increment count
            button.textContent = `Click me: ${count}`; // Use backticks for template literals

            // Conditional logic with template literals
            if (count === 10) {
                message.textContent = `You reached ${count} clicks!`;
            } else if (count > 10) {
                message.textContent = `Keep going! You've clicked ${count} times.`;
            } else {
                message.textContent = ''; // Clear message for counts less than 10
            }
        });
