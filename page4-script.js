// Page 4 Script for ID.EXE - Memory Recovery

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

// Next page function - go to page5
function nextPage() {
    console.log('Page 4 - Going to page 5');
    window.location.href = 'page5.html';
}

// Accept answer function
function acceptAnswer() {
    console.log('User accepted exploring new realities');
    saveAnswer(4, 'Accept');
    window.location.href = 'page5.html';
}

// Cancel answer function
function cancelAnswer() {
    console.log('User declined exploring new realities');
    saveAnswer(4, 'Cancel');
    window.location.href = 'page5.html';
}