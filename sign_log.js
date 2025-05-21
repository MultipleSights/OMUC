// Container toggle logic (if you have container toggle buttons)
const container = document.querySelector('.container'); // add container if you have one
const registerBtn = document.querySelector('.register-btn'); // adjust if you have buttons
const loginBtn = document.querySelector('.login-btn');

if (registerBtn) registerBtn.addEventListener('click', () => container.classList.add('active'));
if (loginBtn) loginBtn.addEventListener('click', () => container.classList.remove('active'));

// API base URL
const API_URL = 'http://localhost:5000';

// Login form
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value.trim();

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
                // Redirect after login success:
                window.location.href = 'index.html'; // replace with your actual page
            } else {
                alert(data.error || 'Login failed');
            }
        } catch (err) {
            alert('Login error: ' + err.message);
        }
    });
}

// Signup form
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('signupUsername').value.trim(); // if you want to send username too
        const email = document.getElementById('signupEmail').value.trim();
        const password = document.getElementById('signupPassword').value.trim();

        try {
            const res = await fetch(`${API_URL}/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password }), // include username if your backend supports it
            });

            const data = await res.json();

            if (res.ok) {
                alert('Signup successful! Please login.');
                // Switch to login form if you have container toggling logic
                if (container) container.classList.remove('active');
            } else {
                alert(data.error || 'Signup failed');
            }
        } catch (err) {
            alert('Signup error: ' + err.message);
        }
    });
}
