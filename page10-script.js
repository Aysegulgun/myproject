// Page 10 Script for ID.EXE - Memory Recovery Final

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

// Next page function - go to completion page (answers list)
function nextPage() {
    console.log('Page 10 - Going to completion page with answers');
    window.location.href = 'completion.html';
}

// Accept answer function
function acceptAnswer() {
    console.log('User accepted immortality');
    saveAnswer(10, 'Accept');
    window.location.href = 'completion.html';
}

// Cancel answer function
function cancelAnswer() {
    console.log('User declined immortality');
    saveAnswer(10, 'Cancel');
    window.location.href = 'completion.html';
}
