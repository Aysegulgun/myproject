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
    
    // Save the answer
    saveAnswer(2, 'Accept');
    
    // Navigate to page 3
    window.location.href = 'page3.html';
}

// Cancel button function
function cancelAction() {
    console.log('User cancelled memory recovery');
    
    // Save the answer
    saveAnswer(2, 'Cancel');
    
    // Navigate to page 3
    window.location.href = 'page3.html';
}
