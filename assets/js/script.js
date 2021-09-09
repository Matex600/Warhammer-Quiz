const playGame = document.getElementById("play-btn")
const questionsBox = document.getElementById("questions")
const getQuestionElement = document.getElementById("question")
const getAnswerElement = document.getElementById("answer")
const getIncorrectAnswerElement = document.getElementById("incorrect")
const gorkIncreaseElement = document.getElementById("add-point")
const darkGodsIncreaseElement = document.getElementById("lose-point")
let questionNumber = 0
let gorkIzPleased = 0
let youDismayTheDarkGods = 0

playGame.addEventListener('click', runQuiz)
getAnswerElement.addEventListener('click', (e) => checkAnswer(e))
getIncorrectAnswerElement.addEventListener('click', (e) => checkAnswer(e))
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

// let questions = [];
let answers = [];
let gameIncorrectAnswers = [];
// const questions = [
//     'What is the Empire city of Nuln known for?',
//     'Where do the halflings call home?',
//     'Which of these dawi leads the Dwarfs?',
//     'Who is the vampire lord of Sylvania',
//     'What are the Beastmen also known as?',
//     'What is the English word forDawi-Zharr?',
//     'What is the home land of the druchii called?',
//     'What is the capital of the Skaven',
//     'What is the worshipped deity in the Empire?',
//     'Who is the dark god of pestilence?'
// ];

const questions = [{
        question: 'What is the Empire city of Nuln known for?',
        answers: [{
                correct: false,
                answer: 'Imperial Wizard school',
            },
            {
                correct: true,
                answer: 'Imperial Gunnery school',
            }
        ]
    },
    {
        question: 'Where do the halflings call home?',
        answers: [{
                correct: false,
                answer: 'Karak eight peaks',
            },
            {
                correct: true,
                answer: 'The Moot',
            }
        ]
    },
    {
        question: 'Which of these dawi leads the Dwarfs?',
        answers: [{
                correct: false,
                answer: 'Ungrim Ironfist',
            },
            {
                correct: true,
                answer: 'Thorgrim Grudgebearer',
            }
        ]
    },
    {
        question: 'Who is the vampire lord of Sylvania?',
        answers: [{
                correct: false,
                answer: 'Vlad von Carstein',
            },
            {
                correct: true,
                answer: 'Manfredd von Carstein',
            }
        ]
    },
    {
        question: 'What other names are the Beastmen also known as?',
        answers: [{
                correct: false,
                answer: 'The Old ones',
            },
            {
                correct: true,
                answer: 'The Cloven ones',
            }
        ]
    },
    {
        question: 'Who are the Dawi-Zharr?',
        answers: [{
                correct: false,
                answer: 'Chaos Ogres',
            },
            {
                correct: true,
                answer: 'Chaos Dwarfs',
            }
        ]
    },
    {
        question: 'What is the home land of the druchii called?',
        answers: [{
                correct: false,
                answer: 'Ulthuan',
            },
            {
                correct: true,
                answer: 'Naggaroth',
            }
        ]
    },
    {
        question: 'What is the capital of the Skaven?',
        answers: [{
                correct: false,
                answer: 'Hellpit',
            },
            {
                correct: true,
                answer: 'Skavenblight',
            }
        ]
    },
    {
        question: 'Who is the primary worshipped deity in the Empire?',
        answers: [{
                correct: false,
                answer: 'Lady of the Lake',
            },
            {
                correct: true,
                answer: 'Sigmar',
            }
        ]
    },
    {
        question: 'Who is the dark god of pestilence?',
        answers: [{
                correct: false,
                answer: 'Khorne',
            },
            {
                correct: true,
                answer: 'Nurgle',
            }
        ]
    },
]

let x = 0;

while (x < questions.length) {
    let i = Math.floor(Math.random() * questions.length);
    questions.push(questions[i]);
    questions.splice(i, 1);
    x++;
}

function runQuiz() {
    playGame.classList.add('hidden');
    questionsBox.classList.remove('hidden');
    inputQuestions(0)
}

function inputQuestions(pos) {
    getQuestionElement.innerText = questions[pos].question
    getAnswerElement.innerText = questions[pos].answers[1].answer
    getAnswerElement.dataset.correct = questions[pos].answers[1].correct
    getIncorrectAnswerElement.innerText = questions[pos].answers[0].answer
    getIncorrectAnswerElement.dataset.correct = questions[pos].answers[0].correct
}

function checkAnswer(e) {
    if (e.target.dataset.correct) {
        questionNumber++;
        inputQuestions(questionNumber)
        gorkIzPleased += 1;
        gorkIncreaseElement.innerHTML 
    } else {
        youDismayTheDarkGods += 1;
        youDismayTheDarkGods.innerHTML;
    }
    // set innner html of gork and you.
    // check if game is complete here
    if ((questions.length - (gorkIzPleased + youDismayTheDarkGods)) <= 0) {
        //game is complete
        if (gorkIzPleased > youDismayTheDarkGods) {
            // you win
            `you got ${gorkIzPleased} questions right`
        } else if (gorkIzPleased === youDismayTheDarkGods) {
            // you draw
        } else {
            // you lose
        }
    }
}