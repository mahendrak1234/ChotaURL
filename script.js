// script.js

document.addEventListener('DOMContentLoaded', function () {
    const scopeSelect = document.getElementById('scope');
    const usernameInput = document.getElementById('access-username');

    scopeSelect.addEventListener('change', function () {
        if (scopeSelect.value === 'public') {
            usernameInput.value = ''; // Clear the input field
            usernameInput.disabled = true;
        } else {
            usernameInput.disabled = false;
        }
    });

    // To handle the initial state of the page
    if (scopeSelect.value === 'public') {
        usernameInput.value = ''; // Clear the input field
        usernameInput.disabled = true;
    }
});


