// var highScore = 0;
var time = 60;
var mainEl = document.querySelector('main');
var que_count = 0;
var currentIndex = 0;


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
  questTitle.textContent = questions[currentIndex].question;
  mainEl.appendChild(questTitle);
  getAnswers();
  currentIndex++;
};

function getAnswers() {
  for (var i = 0; i < questions[currentIndex].options.length; i++) {
  var questAnswer = document.createElement("button");
  
  questAnswer.textContent = questions[currentIndex].options[i];
  
  //console.log(i);
  mainEl.append(questAnswer);
 // currentIndex++;
  //indexCount();
  };
  validateAnswer();
  console.log('function works');
  questAnswer.addEventListener("click", validateAnswer(i));
};

  function validateAnswer() {
   console.log("1");
//   //console.log(questAnswer.textContent.op);
//  if (this.textContent == questions[currentIndex].answer) {
//   console.log("correct");
//  }
//  else {
//   console.log('wrong');
//  }

  
 };

// function indexCount () {
//   currentIndex++
// };

