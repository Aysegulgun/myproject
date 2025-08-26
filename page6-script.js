// Page 6 Script for ID.EXE - Memory Recovery

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

// Next page function - go to page7
function nextPage() {
    console.log('Page 6 - Going to page 7');
    window.location.href = 'page7.html';
}

// Accept answer function
function acceptAnswer() {
    console.log('User accepted facing deepest fears');
    saveAnswer(6, 'Accept');
    window.location.href = 'page7.html';
}

// Cancel answer function
function cancelAnswer() {
    console.log('User declined facing deepest fears');
    saveAnswer(6, 'Cancel');
    window.location.href = 'page7.html';
}
