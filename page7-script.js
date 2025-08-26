// Page 7 Script for ID.EXE - Memory Recovery

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

// Next page function - go to page8
function nextPage() {
    console.log('Page 7 - Going to page 8');
    window.location.href = 'page8.html';
}

// Accept answer function
function acceptAnswer() {
    console.log('User accepted uploading brain to cloud');
    saveAnswer(7, 'Accept');
    window.location.href = 'page8.html';
}

// Cancel answer function
function cancelAnswer() {
    console.log('User declined uploading brain to cloud');
    saveAnswer(7, 'Cancel');
    window.location.href = 'page8.html';
}
