function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
// create questions here
var questions = [
    new Question("Which of the following anti-satellite missile is tested by India on 27 March, 2019?", ["Mission Antriksh", "Mission Gagan","Mission Shakti", "Mission Destruction"], "Mission Shakti"),
    new Question("Which satellite is dedicated as India's first multi wavelength space observatory?", ["Astrosat","SARAL","SRMSAT","Jugnu"], "Astrosat"),
    new Question("Which space agency has created history in October 2019 by sending 'all women' astronauts into the space walk?", ["Roscosmos", "NASA","ISRO", "CNSA"], "NASA"),
    new Question("What is the name of the new dwarf planet which was discovered in 2005?", ["Eris", "Eros", "Erin", "Eric"], "Eris"),
    new Question("The Nobel Prize for Physics in 2018 was awarded for pioneering work in which field?", ["Laser Physics", "Thermodynamics", "Quantum Physics", "Aerodynamics"], "Laser Physics")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();