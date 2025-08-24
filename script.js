// System initiation script for ID.EXE

// Smooth loading animation
document.addEventListener('DOMContentLoaded', function() {
    const mainPanel = document.querySelector('.main-panel');
    const nameInput = document.querySelector('.name-input');
    
    // Add loading animation
    mainPanel.style.opacity = '0';
    mainPanel.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        mainPanel.style.transition = 'all 0.8s ease';
        mainPanel.style.opacity = '1';
        mainPanel.style.transform = 'translateY(0)';
    }, 200);
    
    // Focus on input after load
    setTimeout(() => {
        nameInput.focus();
    }, 1000);
});

// Start journey function
function startJourney() {
    const nameInput = document.querySelector('.name-input');
    const startButton = document.querySelector('.start-button');
    const name = nameInput.value.trim();
    
    if (!name) {
        // Shake animation for empty input
        nameInput.style.animation = 'shake 0.5s ease';
        nameInput.style.borderColor = '#DDA3C1'; /* Start butonunun pembe rengi */
        
        setTimeout(() => {
            nameInput.style.animation = '';
            nameInput.style.borderColor = '#52555A'; /* Normal gri renk */
        }, 500);
        
        return;
    }
    
    // Direct redirect to page 2
    console.log('Journey started for user:', name);
    
    // Store user name for next screen
    localStorage.setItem('userName', name);
    
    // Navigate to page 2 immediately
    window.location.href = 'page2.html';
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
