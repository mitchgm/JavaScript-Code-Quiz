// var highScore = 0;
var time = 60;
var mainEl = document.querySelector('main');

var questions = [
    {
        numb: 1,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language"
        ]
    },
    {
        numb: 2,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        options: [
          "Common Style Sheet",
          "Colorful Style Sheet",
          "Computer Style Sheet",
          "Cascading Style Sheet"
        ]
      },
        {
        numb: 3,
        question: "What does PHP stand for?",
        answer: "Hypertext Preprocessor",
        options: [
          "Hypertext Preprocessor",
          "Hypertext Programming",
          "Hypertext Preprogramming",
          "Hometext Preprocessor"
        ]
      },
        {
        numb: 4,
        question: "What does SQL stand for?",
        answer: "Structured Query Language",
        options: [
          "Stylish Question Language",
          "Stylesheet Query Language",
          "Statement Question Language",
          "Structured Query Language"
        ]
      },
        {
        numb: 5,
        question: "What does XML stand for?",
        answer: "eXtensible Markup Language",
        options: [
          "eXtensible Markup Language",
          "eXecutable Multiple Language",
          "eXTra Multi-Program Language",
          "eXamine Multiple Language"
        ]
      },
];



document.getElementById("start-quiz").addEventListener("click", startQuiz);

function startQuiz() {
  setInterval(myTimer, 1000);
  startQuestions();
  
};

function myTimer() {
 document.querySelector('span').textContent = time;

 // time--

};

function startQuestions() {
  document.getElementById("start-quiz").style.display = "none";
  var questTitle = document.createElement("h1");
  questTitle.textContent = questions[0].question;
  mainEl.appendChild(questTitle);
  getAnswers();
};

function getAnswers() {
  for (var i = 0; i <= 4; i++) {
  var questAnswer = document.createElement("button");
  questAnswer.addEventListener("click", validateAnswer(i));
  questAnswer.textContent = questions[i].options[i];
  mainEl.appendChild(questAnswer);
  


  }
};

 function validateAnswer(i) {
  console.log(i);
 if (this.textContent == questions[i].answer) {
  console.log("correct")
 
 }
  
};


