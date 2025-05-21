const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// Select login and signup forms
const loginForm = document.querySelector('.login form');
const signupForm = document.querySelector('.register form');

// Backend API base URL (change if your server URL/port is different)
const API_URL = 'http://localhost:5000';

// Login form submit
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = loginForm.querySelector('input[placeholder="Username"]').value;
    const password = loginForm.querySelector('input[placeholder="Password"]').value;

    try {
        const res = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (res.ok) {
            alert('Login successful!');
            // Save token for future API requests
            localStorage.setItem('token', data.token);
            // You can redirect or update the page here
        } else {
            alert(data.error || 'Login failed');
        }
    } catch (err) {
        alert('Error: ' + err.message);
    }
});

// Signup form submit
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signupForm.querySelector('input[placeholder="Email"]').value;
    const password = signupForm.querySelector('input[placeholder="Password"]').value;

    try {
        const res = await fetch(`${API_URL}/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (res.ok) {
            alert('Signup successful! Please login.');
            container.classList.remove('active'); // Switch to login form
        } else {
            alert(data.error || 'Signup failed');
        }
    } catch (err) {
        alert('Error: ' + err.message);
    }
});
