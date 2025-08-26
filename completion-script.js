// Completion Page Script for ID.EXE - Shows all questions and answers

// Function to get all answered questions from localStorage
function getAnsweredQuestions() {
    const answers = localStorage.getItem('userAnswers');
    if (answers) {
        return JSON.parse(answers);
    }
    return []; // Eğer hiç cevap yoksa boş dizi döndür
}

// Function to generate question HTML for completion page with answers
function generateCompletionHTML(questionsAndAnswers) {
    if (questionsAndAnswers.length === 0) {
        return '<div class="no-answers"><span class="option-text">Henüz hiçbir soruya cevap verilmemiş.</span></div>';
    }
    
    return questionsAndAnswers.map(item => {
        // Convert "Decline" to "Cancel" for display
        const displayAnswer = item.answer === 'Decline' ? 'Cancel' : item.answer;
        const cssClass = item.answer.toLowerCase() === 'decline' ? 'cancel' : item.answer.toLowerCase();
        
        return `
            <div class="option-item">
                <span class="option-text">${item.question}</span>
                <span class="option-answer ${cssClass}">${displayAnswer}</span>
            </div>
        `;
    }).join('');
}

// Page initialization
document.addEventListener('DOMContentLoaded', function() {
    const nameDisplayCongrats = document.querySelector('.name-display');
    const optionsSection = document.querySelector('.options-section');
    
    // Get user name from localStorage
    const userName = localStorage.getItem('userName');
    if (userName && nameDisplayCongrats) {
        nameDisplayCongrats.textContent = userName;
    } else if (nameDisplayCongrats) {
        nameDisplayCongrats.textContent = 'User';
    }
    
    // Generate all answered questions with their answers
    const answeredQuestions = getAnsweredQuestions();
    optionsSection.innerHTML = generateCompletionHTML(answeredQuestions);
});

// Print function
function printPage() {
    console.log('Print requested - opening print dialog');
    window.print();
}
