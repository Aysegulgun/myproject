// Completion Page Script for ID.EXE - Shows all 8 questions answered

// 8 questions from the journey
const answeredQuestions = [
    "Do you want to recover old memories?",
    "System detected unresolved feelings. Would you like to troubleshoot now?",
    "Would you like to explore new realities?",
    "Have you ever experienced digital dreams?",
    "Are you ready to face your deepest fears?",
    "Would you upload your brain to the cloud?",
    "Can artificial intelligence become sentient?",
    "Would you want to know your future?",
    "Would you accept immortality if offered?"
];

// Function to generate question HTML for completion page
function generateCompletionHTML(questions) {
    return questions.map(question => `
        <div class="option-item">
            <span class="option-text">${question}</span>
            <span class="option-accept">Accept</span>
        </div>
    `).join('');
}

// Page initialization
document.addEventListener('DOMContentLoaded', function() {
    const nameDisplayTop = document.querySelector('.ecem-word');
    const nameDisplayCongrats = document.querySelector('.name-display');
    const optionsSection = document.querySelector('.options-section');
    
    // Get user name from localStorage
    const userName = localStorage.getItem('userName');
    if (userName) {
        nameDisplayTop.textContent = `[${userName}]`;
        nameDisplayCongrats.textContent = userName;
    } else {
        nameDisplayTop.textContent = '[User]';
        nameDisplayCongrats.textContent = 'User';
    }
    
    // Generate all answered questions
    optionsSection.innerHTML = generateCompletionHTML(answeredQuestions);
});

// Print function
function printPage() {
    console.log('Print requested - opening print dialog');
    window.print();
}
