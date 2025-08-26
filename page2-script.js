// Page 2 Script for ID.EXE - System Prompt

// Smooth loading animation
document.addEventListener('DOMContentLoaded', function() {
    const mainPanel = document.querySelector('.main-panel');
    const ecemElement = document.querySelector('.ecem-word');
    
    // Get user name from localStorage
    const userName = localStorage.getItem('userName');
    if (userName) {
        ecemElement.textContent = `[${userName}]`;
    } else {
        ecemElement.textContent = '[User]'; // Fallback if no name
    }
    
    // Loading animation kaldırıldı - titreme sorunu çözümü
});

// Accept button function
function acceptAction() {
    console.log('User accepted memory recovery');
    
    // Get user name and store it
    const userName = localStorage.getItem('userName');
    if (userName) {
        localStorage.setItem('userName', userName);
    }
    
    // Navigate to page 3
    window.location.href = 'page3.html';
}

// Cancel button function
function cancelAction() {
    console.log('User cancelled memory recovery');
    
    // Get user name and store it
    const userName = localStorage.getItem('userName');
    if (userName) {
        localStorage.setItem('userName', userName);
    }
    
    // Navigate to page 3 (same as Accept)
    window.location.href = 'page3.html';
}
