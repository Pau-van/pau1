 // DOM selection
        const nameInput = document.getElementById('name');
        const ageInput = document.getElementById('age');
        const colorInput = document.getElementById('color');
        const generateButton = document.getElementById('generateProfile');
        const profileOutput = document.getElementById('profileOutput');

        // Event handling with arrow function
        generateButton.addEventListener('click', () => {
            const name = nameInput.value.trim();
            const age = ageInput.value.trim();
            const color = colorInput.value.trim();

            // Validate input
            if (!name || !age || !color) {
                profileOutput.innerHTML = '<p style="color: red;">Please fill out all fields!</p>';
                return;
            }

            // Generate profile using template literals
            profileOutput.innerHTML = `
                <h2>Profile</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Age:</strong> ${age}</p>
                <p><strong>Favorite Color:</strong> <span style="color: ${color};">${color}</span></p>
            `;
        });