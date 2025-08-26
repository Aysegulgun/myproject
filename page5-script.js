// Page 5 Script for ID.EXE - Memory Recovery

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

// Next page function - go to page6
function nextPage() {
    console.log('Page 5 - Going to page 6');
    window.location.href = 'page6.html';
}

// Accept answer function
function acceptAnswer() {
    console.log('User accepted digital dreams');
    saveAnswer(5, 'Accept');
    window.location.href = 'page6.html';
}

// Cancel answer function
function cancelAnswer() {
    console.log('User declined digital dreams');
    saveAnswer(5, 'Cancel');
    window.location.href = 'page6.html';
}
