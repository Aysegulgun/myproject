// Page 3 Script for ID.EXE - Congratulations Page

// Smooth loading animation
document.addEventListener('DOMContentLoaded', function() {
    const mainPanel = document.querySelector('.main-panel');
    const nameDisplay = document.querySelector('.name-display');
    
    // Get user name from localStorage
    const userName = localStorage.getItem('userName');
    if (userName) {
        nameDisplay.textContent = userName;
    } else {
        nameDisplay.textContent = 'User';
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

// Option accept function
function acceptOption() {
    console.log('Option accepted');
    alert('Option accepted! Processing...');
}

// Print function
function printPage() {
    console.log('Print requested');
    window.print();
}

// Reset form function for demo
function resetForm() {
    const nameInput = document.querySelector('.name-input');
    const startButton = document.querySelector('.start-button');
    const mainPanel = document.querySelector('.main-panel');
    
    nameInput.value = '';
    nameInput.style.borderColor = '#52555A'; /* Normal gri renk */
    startButton.textContent = 'Start';
    startButton.disabled = false;
    startButton.style.background = '#DDA3C1'; /* Güncel pembe renk */
    
    mainPanel.style.opacity = '1';
    mainPanel.style.transform = 'scale(1)';
}

// Enter key support
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const nameInput = document.querySelector('.name-input');
        if (document.activeElement === nameInput) {
            startJourney();
        }
    }
});

// Add shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);
