const createBox = document.getElementsByClassName('create-box')[0]; // Add [0] to access the first element
const flashcardsContainer = document.getElementsByClassName('flashcards')[0]; // Add [0] to access the first element
const questionInput = document.getElementById('question');
const answerInput = document.getElementById('answer');
let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

function delFlashcards(){
    localStorage.clear(); 
    flashcardsContainer.innerHTML = '';
    contentArray = [];
}

// Function to show the create card box
function ShowCreateCardBox() {
    createBox.style.display = 'block';
}

// Function to hide the create card box
function hideCreateBox() {
    createBox.style.display = 'none';
}

// Function to add a new flashcard
function addFlashcard() {
    const question = questionInput.value;
    const answer = answerInput.value;

    if (question && answer) {
        const flashcard_info = {
            'question': question,
            'answer': answer,
        };
        contentArray.push(flashcard_info);
        localStorage.setItem('items', JSON.stringify(contentArray));

        const flashcard = document.createElement('div');
        flashcard.classList.add('flashcard');
        flashcard.innerHTML = `<h2>${question}</h2><p>${answer}</p>`;
        flashcardsContainer.appendChild(flashcard);

        questionInput.value = '';
        answerInput.value = '';
        hideCreateBox();
    }
}

function loadFlashcards() {
    contentArray.forEach(flashcard => {
        const flashcardElement = document.createElement('div');
        flashcardElement.classList.add('flashcard');
        flashcardElement.innerHTML = `<h2>${flashcard.question}</h2><p>${flashcard.answer}</p>`;
        flashcardsContainer.appendChild(flashcardElement);
    });
}

// Call the function to load flashcards from localStorage
loadFlashcards();

// Attached event listeners to buttons
document.getElementById('new-card-button').addEventListener('click', ShowCreateCardBox);
document.getElementById('save-button').addEventListener('click', addFlashcard);
document.getElementById('close-button').addEventListener('click', hideCreateBox);


