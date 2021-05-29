function openNav() {
document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
document.getElementById("mySidepanel").style.width = "0";
}

function submitAnswers() {
var total = 5;
var score = 0;

var q1 = document.forms['quizForm']['q1'].value;
var q2 = document.forms['quizForm']['q2'].value;
var q3 = document.forms['quizForm']['q3'].value;
var q4 = document.forms['quizForm']['q4'].value;
var q5 = document.forms['quizForm']['q5'].value;

for(var i = 1; i <= total; i++) {
if(eval('q' + i) === null || eval('q' + i) == '' ) {
alert('You missed question ' + i);
return false;
}
}

var answers = ["c","c","d", "a", "d"];

for(var i = 1; i <= total; i++) {
if (eval('q' + i) == answers[i - 1]) {
score++;
}
}


var results = document.getElementById('results');
results.innerHTML = '<h3>You scored <span>' + score + '</span> out of <span>' + total + '</span></h3>';

return false;
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}