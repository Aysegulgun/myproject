// Completion Page Script for ID.EXE

// Page initialization
document.addEventListener('DOMContentLoaded', function() {
    const nameDisplay = document.querySelector('.ecem-word');
    
    // Get user name from localStorage
    const userName = localStorage.getItem('userName');
    if (userName) {
        nameDisplay.textContent = `[${userName}]`;
    } else {
        nameDisplay.textContent = '[User]';
    }
});

// Restart session function - go back to beginning
function restartSession() {
    console.log('Restarting session - going to index.html');
    
    // Keep user name but restart the process
    const userName = localStorage.getItem('userName');
    localStorage.clear();
    if (userName) {
        localStorage.setItem('userName', userName);
    }
    
    // Go back to beginning
    window.location.href = 'index.html';
}

// Exit session function - could go back to start or close
function exitSession() {
    console.log('Exiting session');
    
    // Clear all localStorage data
    localStorage.clear();
    
    // Go back to start page
    window.location.href = 'index.html';
}
