var clearScores = document.getElementById("clearScores");
var scoreList = document.getElementById("scoresUl");
clearScores.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
})

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores != null) {
    console.log(allScores);
    allScores.sort(function(a, b){return b.score - a.score});
    for (var i = 0; i < allScores.length; i++) {
        var scoreLi = document.createElement("li");
        scoreLi.setAttribute("class", "highList")
        scoreLi.textContent = allScores[i].initials + " " + allScores[i].score;
        scoreList.appendChild(scoreLi);
    }
}
// dynamically creates the list and sets the text to the initials and the scores









