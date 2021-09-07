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
    let gameAnswers = [];
    let gameIncorrectAnswers = [];
    const questions = [
        'What is the Empire city of Nuln known for?',
        'Where do the halflings dwell?',
        'Who leads the Dwarfs?',
        'Who is the vampire lord of Sylvania',
        'What other names are the Beastmen also known as?',
        'Who are the Dawi-Zharr?',
        'What is the home land of the druchii called?',
        'What is the capital of the Skaven',
        'Who is the primary worshipped deity in the Empire?',
        'Who is the dark god of pestilence?'
    ];
    let questionsHoldingArray = [...questions];
    console.log(questionsHoldingArray.length);
    const answers = [
        'Imperial Gunnery school',
        'The Moot',
        'Thorgrim Grudgebearer',
        'Manfredd von Carstein',
        'The Cloven ones',
        'Chaos Dwarfs',
        'Naggaroth',
        'Skavenblight',
        'Sigmar',
        'Nurgle'
    ];
    let answersHoldingArray = [...answers];
    console.log(answersHoldingArray.length);
    const incorrectAnswers = [
        'Imperial Wizard school',
        'Karak eight peaks',
        'Ungrim Ironfist',
        'Vlad von Carstein',
        'The Old ones',
        'Chaos Ogres',
        'Ulthuan',
        'Hellpit',
        'Lady of the Lake',
        'Khorne'
    ];
    let incorrectAnswersHoldingArray = [...incorrectAnswers];
    console.log(incorrectAnswersHoldingArray.length);
    x = 0;
    while (x < questions.length) {
        i = Math.floor(Math.random() * questionsHoldingArray.length);
        console.log(i);
        temp = questionsHoldingArray[i];
        tempAnswer = answersHoldingArray[i];
        tempIncorrectAnswer = incorrectAnswersHoldingArray[i];
        console.log(temp);
        console.log(questionsHoldingArray);
        console.log(tempAnswer);
        console.log(answersHoldingArray);
        console.log(tempIncorrectAnswer);
        console.log(incorrectAnswersHoldingArray);
        gameQuestions.push(temp);
        gameAnswers.push(tempAnswer);
        gameIncorrectAnswers.push(tempIncorrectAnswer);
        questionsHoldingArray.splice(i, 1);
        answersHoldingArray.splice(i, 1);
        incorrectAnswersHoldingArray.splice(i, 1);
        console.log(gameQuestions);
        console.log(gameAnswers);
        console.log(gameIncorrectAnswers);
        x++;
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