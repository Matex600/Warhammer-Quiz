const playGame = document.getElementById("play-btn")
const questionsBox = document.getElementById("questions")
const getQuestionElement = document.getElementById("question")
const getAnswerElement = document.getElementById("answer")
const getIncorrectAnswerElement = document.getElementById("incorrect")
const scoreIncreaseElement = document.getElementById("add-point")


playGame.addEventListener('click', runQuiz)
/* get play button 
 add eventlistener on click 
 hide button update class
 display quiz
 get question from questions array randomly
 display question 1
 display possible answers 1
*/

/* function to create array
for questions, answers and
incorrect answers with while
loop for answers and incorrectAnswers
to set true and false value to answers in
quiz, then a while loop to create copies and
randomise questions and answers arrays to get
different set of questions and answers every
time you play */

let gameQuestions = [];
let gameAnswers = [];
let gameIncorrectAnswers = [];
const questions = [
    'What is the Empire city of Nuln known for?',
    'Where do the halflings call home?',
    'Which of these dawi leads the Dwarfs?',
    'Who is the vampire lord of Sylvania',
    'What are the Beastmen also known as?',
    'What is the English word forDawi-Zharr?',
    'What is the home land of the druchii called?',
    'What is the capital of the Skaven',
    'What is the worshipped deity in the Empire?',
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
i = 0
while (i < answers.length) {
    answers[i] = true;
    i++
}

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

function runQuiz() {
    console.log('play');
    playGame.classList.add('hidden');
    questionsBox.classList.remove('hidden');
    inputQuestions()
}

function inputQuestions() {
    getQuestionElement.innerText = gameQuestions[0]
    getAnswerElement.innerText = gameAnswers[0]
    getIncorrectAnswerElement.innerText = gameIncorrectAnswers[0]
    
}

function checkAnswer() {
    if (answers === true) {
        scoreIncreaseElement = x++;
    }
}

function updateScore() {

}

function nextQuestion() {

}