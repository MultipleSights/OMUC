// Select container and toggle buttons
const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

// Toggle form view
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// Base API URL
const API_URL = 'http://localhost:5000';

// Handle Login
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        try {
            const res = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.ok) {
                alert('Login successful!');
                localStorage.setItem('token', data.token);
                window.location.href = 'dashboard.html'; // change to your actual page
            } else {
                alert(data.error || 'Invalid credentials');
            }
        } catch (err) {
            console.error('Login error:', err);
            alert('Something went wrong during login.');
        }
    });
}

// Handle Signup
const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        try {
            const res = await fetch(`${API_URL}/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.ok) {
                alert('Signup successful! Please log in.');
                container.classList.remove('active'); // Switch to login view
            } else {
                alert(data.error || 'Signup failed');
            }
        } catch (err) {
            console.error('Signup error:', err);
            alert('Something went wrong during signup.');
        }
    });
}
