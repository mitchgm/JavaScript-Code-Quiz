// var highScore = 0;
var time = 60;
var mainEl = document.querySelector('main');
var que_count = 5;
var currentIndex = 0;
var score = 0;
var correctScore = 100;
var someTime ;
var scores = [];
document.getElementById("viewScores").addEventListener("click", viewScores);
var inputEl = document.getElementById("")
var formEl = document.getElementById("getName")
formEl.addEventListener("submit", getName);
var reload = document.getElementById("restartBtn");
reload.addEventListener("click", restartQuiz);


// array of questions
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


// when the start quiz button is clicked, fun the startQuiz function
document.getElementById("start-quiz").addEventListener("click", startQuiz);

function startQuiz() {
  someTime = setInterval(myTimer, 1000);
  startQuestions();
  // starts the questions, as well as the timer

};

function myTimer() {
 document.querySelector('span').textContent = time;

  if (time >= 0) {
    time--;
  }

  else
   {
    
    endQuiz();
    clearInterval(someTime);
    var pastTime = document.getElementsByClassName("time");
    pastTime[0].style.visibility = "hidden";
    var pastTimer = document.getElementsByClassName("timer-sec");
    pastTimer[0].style.visibility = "hidden";
  }
  

};

function startQuestions() {
  // Hides the start quiz button
  document.getElementById("start-quiz").style.display = "none";
 
   if (currentIndex == questions.length) {
    // if the question array is empty, calls the end quiz function
    endQuiz();
  }
  else {
    // if there are still questions, keep dynamically creating a h1 element
    var questTitle = document.createElement("h1");
    questTitle.setAttribute("class", "pastTitle")
    questTitle.textContent = questions[currentIndex].question;
    mainEl.appendChild(questTitle);
    getAnswers();
    // currentIndex++;

  }
  
  
  
};

function getAnswers() {
  //dynamically creates the answer options as long as there still are questions left in the quiz
  for (var i = 0; i < questions[currentIndex].options.length; i++) {
    var questAnswer = document.createElement("button");
    // gives each button the pastAnswer class
    questAnswer.setAttribute("class", "pastAnswer")
    questAnswer.textContent = questions[currentIndex].options[i];
    mainEl.append(questAnswer);
    questAnswer.addEventListener("click", validateAnswer);
  };
  

 
};

  function validateAnswer() {

 if (this.textContent == questions[currentIndex].answer) {
    // if the content of this equals the answer from the array, its correct, move on and add the score
    clearTitle();
    clearQ();
    score += correctScore;
   
  }
  else {
 
   clearTitle();
   clearQ();
   time = time - 5;
    // if the answer is wrong, move on but subtract time
  }
  currentIndex++;
  startQuestions();
  // either way, add to the index and re run the startQuestions button
 };


function clearTitle () {
  var pastT = document.getElementsByClassName("pastTitle");
  // this function clears away the title from the prior question
  for (var e = 0; e < pastT.length; e++) {
    
    pastT[e].style.display = "none";
  };
};


function clearQ () {
  var pastQ = document.getElementsByClassName("pastAnswer");
 // this function clears away the answers from the prior question
  for (var e = 0; e < pastQ.length; e++) {
    
    pastQ[e].style.display = "none";
  };
};


function endQuiz () {
  window.alert('end of quiz')
  clearTitle();
  clearQ();
  getButton();
};


function saveScore() {
  window.alert("saveScore");
  localStorage.setItem("scores", JSON.stringify(scores))
};

function viewScores() {
  window.alert("viewScores");
  var saveScore = localStorage.getItem("scores")
  window.alert(saveScore);
};

function getButton() {
  
  document.getElementById("getName").style.display = "block";
  document.getElementById("restartBtn").style.display = "block";
  
};

function getName(event) {
  event.preventDefault();
  var inputName = document.getElementById("userInitials");
  var max_char = 3;
  console.log(inputName.value);
  if (inputName.value.length > max_char) {
    window.alert("Initials can only be 3 or less characters");

    //getName();
  }
  else {
    window.alert("score saved");
    inputName.value = "";
  }
  //userName.setAttribute("id", "getName")
  
  
};

function restartQuiz() {
  window.alert("restart quiz")
  window.location.reload();
};
