// System initiation script for ID.EXE

// Smooth loading animation
document.addEventListener('DOMContentLoaded', function() {
    const mainPanel = document.querySelector('.main-panel');
    const nameInput = document.querySelector('.name-input');
    
    // Loading animation kaldırıldı - titreme sorunu çözümü
    
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
        // Shake animation kaldırıldı - sadece border rengi değişir
        nameInput.style.borderColor = '#DDA3C1'; /* Start butonunun pembe rengi */
        
        setTimeout(() => {
            nameInput.style.borderColor = '#52555A'; /* Normal gri renk */
        }, 1000);
        
        return;
    }
    
    // Direct redirect to page 2
    console.log('Journey started for user:', name);
    
    // Store user name for next screen - capitalize first letter
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    localStorage.setItem('userName', capitalizedName);
    
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
    
    // Transform efektleri kaldırıldı - titreme sorunu çözümü
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

// Shake animation kaldırıldı - titreme sorunu çözümü
