const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex +1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'How many squares does a chessboard have?',
    answers: [
      { text: '65', correct: false },
      { text: '32', correct: false },
      { text: '203', correct: false },
      { text: '64', correct: true }
    ]
  },
  {
    question: 'Who were the opponents in the famous Evergreen Game?',
    answers: [
      { text: 'Paul Morphy vs. Howard Staunton', correct: false },
      { text: 'Adolf Anderssen vs. Jean Dufresne', correct: true },
      { text: 'Wilhelm Steinitz vs. Emanuel Lasker', correct: false },
      { text: 'Jose Raul Capablanca vs. Alexander Alekhine', correct: false }
    ]
  },
  {
    question: "What is it called when a player can't defend an attack against their king?",
    answers: [
      { text: 'Check', correct: false },
      { text: 'Zugzwang', correct: false },
      { text: 'Pin', correct: false },
      { text: 'CheckMate', correct: true }
    ]
  },
  {
    question: "Where did Chess Originate?",
    answers: [
      { text: 'India', correct: true },
      { text: 'China', correct: false },
      { text: 'Russia', correct: false },
      { text: 'France', correct: false }
    ]
  },
  {
    question: "Which game is the earliest known predecessor of chess?",
    answers: [
      { text: 'Chaturanga', correct: true },
      { text: 'Checkers', correct: false },
      { text: 'Ludo', correct: false },
      { text: 'Backgammon', correct: false }
    ]
  },
  {
    question: "Who was the Runner up at the inaugral World Chess Championship?",
    answers: [
      { text: 'Mikhail Botvinnik', correct: false },
      { text: 'Johannes Zukertort', correct: true },
      { text: 'Paul Morphy', correct: false },
      { text: 'NN', correct: false }
    ]
  },
  {
    question: "What is the highest title a player can achieve apart from World Champion?",
    answers: [
      { text: 'BM', correct: false },
      { text: 'Super GM', correct: false },
      { text: 'GM', correct: true },
      { text: 'NM', correct: false }
    ]
  },
  {
    question: "In 1989 a computer won against a GM for the first time. What was the computer called?",
    answers: [
      { text: 'Deep Blue', correct: false },
      { text: 'Deep Fish', correct: false },
      { text: 'Deep Thought', correct: true },
      { text: 'Leela', correct: false }
    ]
  },
  {
    question: "How did the first game between Earth and the crew of the Soyez-9 spacecraft played on the 9th of June, 1970 finish?",
    answers: [
      { text: 'White Won', correct: false },
      { text: 'Black Won', correct: false },
      { text: 'Draw', correct: true },
      { text: 'It never finished', correct: false }
    ]
  },
  {
    question: "Who is the GOAT of chess?",
    answers: [
      { text: 'Magnus Carlsen', correct: true },
      { text: 'Garry Kasparov', correct: true },
      { text: 'V Anand', correct: true },
      { text: 'Bobby Fischer', correct: true }
    ]
  },
]
console.log(questions.length);
