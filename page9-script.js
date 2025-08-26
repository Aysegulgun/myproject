// Page 9 Script for ID.EXE - Memory Recovery

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

// Next page function - go to page10
function nextPage() {
    console.log('Page 9 - Going to page 10');
    window.location.href = 'page10.html';
}

// Accept answer function
function acceptAnswer() {
    console.log('User accepted knowing future');
    saveAnswer(9, 'Accept');
    window.location.href = 'page10.html';
}

// Cancel answer function
function cancelAnswer() {
    console.log('User declined knowing future');
    saveAnswer(9, 'Cancel');
    window.location.href = 'page10.html';
}
