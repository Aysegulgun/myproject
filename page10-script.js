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
