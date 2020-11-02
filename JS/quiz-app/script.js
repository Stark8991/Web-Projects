// Questions
const quizData = [
  {
    question: "What is the most used programming language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the President of India?",
    a: "Narendra Modi",
    b: "Ram Nath Kovind",
    c: "Amit Sha",
    d: "Manmohan Singh",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

// Selecting Elemnts
const submit = document.querySelector(".submit");
const question = document.getElementById("question");
const quiz = document.getElementById("quiz");
const inputs = document.getElementsByTagName("input");
const label_a = document.getElementById("option_1_text");
const label_b = document.getElementById("option_2_text");
const label_c = document.getElementById("option_3_text");
const label_d = document.getElementById("option_4_text");
const options = document.querySelectorAll(".option");

var currentQuiz = 0;
var score = 0;

// to check the radio buttons

function selected() {
  let answer = undefined;

  options.forEach((option) => {
    if (option.checked) {
      answer = option.id;
    }
  });
  return answer;
}
// deselect answers

function deselect_answers() {
  options.forEach((option) => {
    option.checked = false;
  });
}

// to load the quiz

loadQuiz();
function loadQuiz() {
  deselect_answers();

  var currentQuizData = quizData[currentQuiz];
  question.innerText = currentQuizData.question;
  label_a.innerText = currentQuizData.a;
  label_b.innerText = currentQuizData.b;
  label_c.innerText = currentQuizData.c;
  label_d.innerText = currentQuizData.d;
}

submit.addEventListener("click", () => {
  const getanswer = selected();

  if (getanswer) {
    if (getanswer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions.</h2> <button class="submit" onclick="location.reload()">Reload</button>`;
      document.querySelector(".main").style = "transform: translate(0%, 150%);";
    }
  }
});
