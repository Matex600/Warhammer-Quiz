// targetting elements by id
const playGame = document.getElementById("play-btn")
const questionsBox = document.getElementById("questions")
const getQuestionElement = document.getElementById("question")
const getAnswerElement = document.getElementById("answer")
const getIncorrectAnswerElement = document.getElementById("incorrect")
const gorkIncreaseElement = document.getElementById("add-point")
const darkGodsIncreaseElement = document.getElementById("lose-point")
const resetGame = document.getElementById("reset-game")


// let question numbers so it starts at 0 index in array
// let scores 0 to increment with answers
let questionNumber = 0
let gorkIzPleased = 0
let youDismayTheDarkGods = 0


// click event listeners for starting game
// click event for question buttons
playGame.addEventListener('click', runQuiz)
getAnswerElement.addEventListener('click', (e) => checkAnswer(e))
getIncorrectAnswerElement.addEventListener('click', (e) => checkAnswer(e))
resetGame.addEventListener('click', resetQuiz)





// question object array
// for questions, answers and
// incorrect answers with while
// loop to create copies and
// randomise questions to get
// different set of questions and answers 
// every time you play

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
        question: 'What is the "English" word for Dawi-Zharr?',
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
        question: 'What is the capital of the Skaven race?',
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

function randomQuestions() {
    let x = 0;
    while (x < questions.length) {
        let i = Math.floor(Math.random() * questions.length);
        const questionsCopy = [...questions]
        questions.splice(i, 1);
        questions.push(questionsCopy[i]);
        x++;
    }
}


// get play button 
//  add eventlistener on click 
//  hide button update class
//  display quiz
//  get question from questions array randomly
//  display question 1 - 10
//  display possible answers 1 - 10
//  check answer
//  add score to gorkIzPleased for correct
//  add score to youDismayTheDarkGods if incorrect
//  communicate to player upong game completion 
//  win, draw or loss.
function runQuiz() {
    playGame.classList.add('hidden');
    questionsBox.classList.remove('hidden');
    inputQuestions(0)
}

// updates view with determined question
function inputQuestions(pos) {
    if (pos < questions.length) {
        getQuestionElement.innerText = questions[pos].question
        getAnswerElement.innerText = questions[pos].answers[1].answer
        getAnswerElement.dataset.correct = questions[pos].answers[1].correct
        getIncorrectAnswerElement.innerText = questions[pos].answers[0].answer
        getIncorrectAnswerElement.dataset.correct = questions[pos].answers[0].correct
    }

}


// checks answers for true or false
// adds corresponding game points
// for selected answer
// increments questions after selecting
// and clicking answer
function checkAnswer(e) {
    if (e.target.dataset.correct === "true") {
        gorkIzPleased += 1;
        gorkIncreaseElement.innerHTML = gorkIzPleased;
    } else {
        youDismayTheDarkGods += 1;
        darkGodsIncreaseElement.innerHTML = youDismayTheDarkGods;
    }
    questionNumber++;
    inputQuestions(questionNumber)

    // check if game is complete here
    // displays results to user at
    // end of game
    if ((questions.length - (gorkIzPleased + youDismayTheDarkGods)) <= 0) {
        if (gorkIzPleased > youDismayTheDarkGods) {

            getQuestionElement.innerText = `You win!! .. you got ${gorkIzPleased} questions right`
            resetGame.innerText = `Try Again?`
            resetGame.classList.remove("hidden")
            getAnswerElement.innerText = ``
            getAnswerElement.classList.add("hidden")
            getIncorrectAnswerElement.innerText = ``
            getIncorrectAnswerElement.classList.add("hidden")
            
        } else if (gorkIzPleased === youDismayTheDarkGods) {

            getQuestionElement.innerText = `You drew :() you got ${gorkIzPleased} questions right`
            resetGame.innerText = `Try Again?`
            resetGame.classList.remove("hidden")
            getAnswerElement.innerText = ``
            getAnswerElement.classList.add("hidden")
            getIncorrectAnswerElement.innerText = ``
            getIncorrectAnswerElement.classList.add("hidden")
        } else {

            getQuestionElement.innerText = `You lose :( .. you got ${gorkIzPleased} questions right`
            resetGame.innerText = `Try Again?`
            resetGame.classList.remove("hidden")
            getAnswerElement.innerText = ``
            getAnswerElement.classList.add("hidden")
            getIncorrectAnswerElement.innerText = ``
            getIncorrectAnswerElement.classList.add("hidden")
        }
    }
}

// function to reset quiz
// returns quiz to original state
function resetQuiz() {
    questionNumber = 0
    gorkIzPleased = 0
    youDismayTheDarkGods = 0
    randomQuestions()
    gorkIncreaseElement.innerHTML = gorkIzPleased;
    darkGodsIncreaseElement.innerHTML = youDismayTheDarkGods;
    runQuiz()
    resetGame.classList.add("hidden")
    getAnswerElement.classList.remove("hidden")
    getIncorrectAnswerElement.classList.remove("hidden")
};
randomQuestions()
