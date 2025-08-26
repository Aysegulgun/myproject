// Page 8 Script for ID.EXE - Memory Recovery

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

// Next page function - go to page9
function nextPage() {
    console.log('Page 8 - Going to page 9');
    window.location.href = 'page9.html';
}

// Accept answer function
function acceptAnswer() {
    console.log('User accepted AI sentience');
    saveAnswer(8, 'Accept');
    window.location.href = 'page9.html';
}

// Cancel answer function
function cancelAnswer() {
    console.log('User declined AI sentience');
    saveAnswer(8, 'Cancel');
    window.location.href = 'page9.html';
}
