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
    
    // Add loading animation
    mainPanel.style.opacity = '0';
    mainPanel.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        mainPanel.style.transition = 'all 0.8s ease';
        mainPanel.style.opacity = '1';
        mainPanel.style.transform = 'translateY(0)';
    }, 200);
});

// Accept button function
function acceptAction() {
    console.log('User accepted memory recovery');
    alert('Memory recovery accepted! Processing...');
    // Here you can add navigation to next page or memory recovery logic
}

// Cancel button function
function cancelAction() {
    console.log('User cancelled memory recovery');
    alert('Memory recovery cancelled.');
    // Here you can add navigation back or alternative flow
}
