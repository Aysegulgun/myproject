// Page 4 Script for ID.EXE - Print View

// Same question database as page 3
const questionDatabase = [
    "Do you want to recover old memories?",
    "Enable TrueSelf.exe?",
    "Restore ancestral backup?",
    "Simulate authenticity?",
    "Run script: WhoAmI_v5.6?",
    "Install empathy patch now?",
    "Begin emotional diagnostics?",
    "Install update: 'Version 2.0 — You with less fear'?",
    "System detected unresolved feelings. Would you like to troubleshoot now?",
    "You have unsaved moments. Save before exiting?",
    "Would you like to explore new realities?",
    "Do you believe in life after artificial consciousness?",
    "Have you ever experienced digital dreams?",
    "Would you like to delete all past memories?",
    "Are you ready to face your deepest fears?",
    "If you could change one moment in history, would you?",
    "Would you upload your brain to the cloud?",
    "Can artificial intelligence become sentient?",
    "Would you want to know your future?",
    "Would you accept immortality if offered?",
    "Would you trust an AI with your emotions?",
    "Can the future be predicted by machines?",
    "Would you give up your physical body for a digital one?",
    "Can digital beings have rights?",
    "Would you want to be uploaded into the metaverse?",
    "Would you like to experience life in a parallel universe?",
    "Would you like to live in a world where every thought is instantly understood by others?",
    "Would you sacrifice your current identity for eternal wisdom?",
    "Would you give up your physical existence for a life of infinite knowledge?",
    "Is time a human construct?",
    "What would happen if emotions were stored in a database?",
    "Do you think machines can feel emotions?",
    "Do you want to experience the future of human evolution?",
    "Should AI be able to create art?",
    "Do you believe the universe is infinite?",
    "Would you like to transcend time?",
    "Is it possible for machines to dream?",
    "What is your personal definition of truth?",
    "Is memory a form of coding?",
    "Can digital experiences be as real as physical ones?",
    "Can machines be more creative than humans?",
    "What would life look like in a post-human world?",
    "Do you think virtual reality can replace real-world experiences?",
    "Would you be happy living in a simulated world?",
    "What is the connection between memory and identity?",
    "Can love exist between a human and an AI?",
    "Do you think the idea of 'self' is an illusion?",
    "What would it feel like to be a machine?",
    "Would you consider downloading your consciousness?",
    "Do you think reality is a simulation?",
    "Do you believe time travel is possible?",
    "Is there an objective reality?",
    "Can technology understand and create art?",
    "Do you think humans will merge with machines in the future?",
    "Is the universe conscious?",
    "What is the meaning of existence?",
    "Is artificial intelligence a threat or a gift?",
    "Can machines have its own ethics?",
    "Do you want to experience a digital rebirth?",
    "Are you willing to share your data with AI?",
    "What does it mean to be human in a technological world?",
    "Would you want to live forever in a virtual world?",
    "Can you trust a machine more than a human?",
    "Is the mind separate from the body?",
    "Do you think the soul can exist in a machine?",
    "What is the future of emotional intelligence?",
    "Are we in control of our own memories?",
    "Can AI have a sense of humor?",
    "Is there life on other planets?",
    "Can you change your past?",
    "Is there a perfect state of being, or is perfection an illusion?",
    "Do you believe your life has a higher purpose, or is it purely random?",
    "If you could meet your future self, what would you ask them?",
    "Can you be fully honest with yourself?",
    "Is the concept of 'self' fluid, or is it fixed?"
];

// Function to generate question HTML for print (no accept buttons)
function generatePrintQuestionHTML(questions) {
    return questions.map(question => `
        <div class="option-item">
            <span class="option-text">${question}</span>
            <span class="option-accept print-accept">Accept</span>
        </div>
    `).join('');
}

// Page load
document.addEventListener('DOMContentLoaded', function() {
    const mainPanel = document.querySelector('.main-panel');
    const nameDisplay = document.querySelector('.name-display');
    const optionsSection = document.querySelector('.options-section');
    
    // Get user name from localStorage
    const userName = localStorage.getItem('userName');
    if (userName) {
        nameDisplay.textContent = userName;
    } else {
        nameDisplay.textContent = 'User';
    }
    
    // Get the same questions from page 3 (from localStorage if stored, or generate new ones)
    const storedQuestions = localStorage.getItem('currentQuestions');
    let questionsToShow;
    
    if (storedQuestions) {
        questionsToShow = JSON.parse(storedQuestions);
    } else {
        // If no stored questions, generate new random ones
        const shuffled = [...questionDatabase].sort(() => 0.5 - Math.random());
        questionsToShow = shuffled.slice(0, 7);
    }
    
    // Generate print version (with non-clickable Accept text)
    optionsSection.innerHTML = generatePrintQuestionHTML(questionsToShow);
    
    // Add loading animation
    mainPanel.style.opacity = '0';
    mainPanel.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        mainPanel.style.transition = 'all 0.8s ease';
        mainPanel.style.opacity = '1';
        mainPanel.style.transform = 'translateY(0)';
    }, 200);
});
