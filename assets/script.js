// var highScore = 0;
var time = 60;
var mainEl = document.querySelector('main');
var que_count = 0;
var currentIndex = 0;
var score = 0;
var correctScore = 100;


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
  questTitle.setAttribute("class", "pastTitle")
  questTitle.textContent = questions[currentIndex].question;
  mainEl.appendChild(questTitle);
  getAnswers();
  currentIndex++;
  
};

function getAnswers() {
  for (var i = 0; i < questions[currentIndex].options.length; i++) {
  var questAnswer = document.createElement("button");
  questAnswer.setAttribute("class", "pastAnswer")
  questAnswer.textContent = questions[currentIndex].options[i];
  
  //console.log(i);
  mainEl.append(questAnswer);
 // currentIndex++;
  //indexCount();

  questAnswer.addEventListener("click", validateAnswer);
  };
  
 
};

  function validateAnswer() {
  // console.log("1");
 // console.log(questions[currentIndex-1].answer);
  if (this.textContent == questions[currentIndex-1].answer) {
   console.log("correct");
    clearTitle();
    clearQ();
   startQuestions();
   score += correctScore;
   
  }
  else {
   console.log('wrong');
   clearTitle();
   clearQ();
   startQuestions();
  }
 
  
  
 };

// function indexCount () {
//   currentIndex++
// };

function clearTitle () {
  var pastT = document.getElementsByClassName("pastTitle");
  
  for (var e = 0; e < pastT.length; e++) {
    
    pastT[e].style.display = "none";
  };
};


function clearQ () {
  var pastQ = document.getElementsByClassName("pastAnswer");
 // console.log(pastQ);
  for (var e = 0; e < pastQ.length; e++) {
    
    pastQ[e].style.display = "none";
  };
};


function endQuiz () {
  window.alert('end of quiz')
};
