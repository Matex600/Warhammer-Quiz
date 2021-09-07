const playGame = document.getElementById("play-btn")
const questionsBox = document.getElementById("questions")

// get play button 
// add eventlistener on click 
// hide button update class
// display quiz
// get question from questions array randomly
// display question 1
// display possible answers 1

function generateQuestions() {
    let gameQuestions = [];
    const questions = ['What is the Empire city of Nuln known for?','Where do the halflings dwell?','Who leads the Dwarfs?','Who is the vampire lord of Sylvania','What other names are the Beastmen also known as?','Who are the Dawi-Zharr?','What is the home land of the druchii called?','What is the capital of the Skaven','Who is the primary worshipped deity in the Empire?','Who is the dark god of pestilence?'];
    let questionsHoldingArray = [...questions];

    x = 0;
    while (x > questions.length) {
        i = Math.floor(Math.random() * questionHoldingArray.length);
    }
         
}

function runQuiz() {

}

function inputQuestions() {

}

function checkAnswer() {

}

function updateScore() {

}

function nextQuestion() {

}