const navbarToggle = document.getElementById('navbarToggle');
const navbarLinks = document.getElementById('navbarLinks');

navbarToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});
// Optional additional JavaScript code
// Currently, the buttons use the inline onclick events in HTML
// Feel free to extend functionality here if needed
// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (firstName && lastName && email && password) {
        alert(`Welcome, ${firstName} ${lastName}! You have successfully logged in with email: ${email}`);
    } else {
        alert('Please fill in all the fields.');
    }
});
