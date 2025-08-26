// Answer Storage System for ID.EXE
// Common functions to save and retrieve user answers

// Questions for each page
const pageQuestions = {
    2: "Do you want to recover old memories?",
    3: "System detected unresolved feelings. Would you like to troubleshoot now?", 
    4: "Would you like to explore new realities?",
    5: "Have you ever experienced digital dreams?",
    6: "Are you ready to face your deepest fears?",
    7: "Would you upload your brain to the cloud?",
    8: "Can artificial intelligence become sentient?",
    9: "Would you want to know your future?",
    10: "Would you accept immortality if offered?"
};

// Function to save user answer
function saveAnswer(pageNumber, answer) {
    const question = pageQuestions[pageNumber];
    if (!question) {
        console.warn(`No question found for page ${pageNumber}`);
        return;
    }
    
    // Get existing answers
    let answers = [];
    const existingAnswers = localStorage.getItem('userAnswers');
    if (existingAnswers) {
        try {
            answers = JSON.parse(existingAnswers);
        } catch (e) {
            console.error('Error parsing existing answers:', e);
            answers = [];
        }
    }
    
    // Add new answer
    const newAnswer = {
        page: pageNumber,
        question: question,
        answer: answer,
        timestamp: new Date().toISOString()
    };
    
    // Remove existing answer for this page if any
    answers = answers.filter(a => a.page !== pageNumber);
    
    // Add new answer
    answers.push(newAnswer);
    
    // Save to localStorage
    try {
        localStorage.setItem('userAnswers', JSON.stringify(answers));
        console.log(`Answer saved for page ${pageNumber}: ${answer}`);
    } catch (e) {
        console.error('Error saving answer:', e);
    }
}

// Function to get all answers
function getAllAnswers() {
    const answers = localStorage.getItem('userAnswers');
    if (answers) {
        try {
            return JSON.parse(answers);
        } catch (e) {
            console.error('Error parsing answers:', e);
            return [];
        }
    }
    return [];
}

// Function to clear all answers (for testing)
function clearAllAnswers() {
    localStorage.removeItem('userAnswers');
    console.log('All answers cleared');
}
