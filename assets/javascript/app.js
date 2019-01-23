// defining questions, mult choice, answer, and also gif  
var questions = [
     { 
        question: "What is the symbol for Silver?",
        answer: 1,
        answerArray: ["Si", "Ag", "Sl"],
    },

    { 
        question: "What survives impacting Earth’s surface",
        answer: 2,
        answerArray: ["Meteors", "Asteroids", "Meteorites"],
    },

    { 
        question: "Which is the hottest planet in the solar system?",
        answer: 0,
        answerArray: ["Venus", "Mars", "Mercury"],
    },

    { 
        question: "What is the heaviest organ in the human body?",
        answer: 2,
        answerArray: ["Lungs", "Brain", "Liver"],
    },

    { 
        question: "Where does sound travel faster",
        answer: 0,
        answerArray: ["Water", "Air", "Space"],
    },
    ];  

// declaring important variables
    // we need: correct/incorrect/unanswered questions
    // declare timeRemaining for time and interval
var timeRemaining = 60;
var interval;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

// when user clicks start....
    // we want to hide the start button (for visual sake)
    // start and display countdown
$("#start").on("click", function() {
    $(this).hide();
    $("#playAgain").hide();
    $("#timer").html("<h2>Time Remaining: 60 Seconds</h2>" + "<br>");
    timer();
   
    // Display questions

    // Question 1
    // value = index in answerArray
    // use .html and not .text (.text shows everything in between and including the <h3> brackets)
    $("#question1").html("<h3>" + questions[0].question + "</h3>");
    $("#answer1").html("<input type='radio' name='answer1' value='1'>" + "<label>" + questions[0].answerArray[0] + "</label>"
        + "<input type='radio' name='answer1' value='1' >" + "<label> " + questions[0].answerArray[1] + "</label>"
        + "<input type='radio' name='answer1' value='2' >" + "<label> " + questions[0].answerArray[2] + "</label>"
    );

    // Question 2
    $("#question2").html("<h3>" + questions[1].question + "</h3>");
    $("#answer2").html("<input type='radio' name='answer2' value='2'>" + "<label>" + questions[1].answerArray[0] + "</label>"
        + "<input type='radio' name='answer2' value='1'>" + "<label>" + questions[1].answerArray[1] + "</label>"
        + "<input type='radio' name='answer2' value='2'>" + "<label>" + questions[1].answerArray[2] + "</label>"
    );

    // Question 3
    $("#question3").html("<h3>" + questions[2].question + "</h3>");
    $("#answer3").html("<input type='radio' name='answer3' value='0'>" + "<label>" + questions[2].answerArray[0] + "</label>"
        + "<input type='radio' name='answer3' value='1'>" + "<label>" + questions[2].answerArray[1] + "</label>"
        + "<input type='radio' name='answer3' value='2'>" + "<label>" + questions[2].answerArray[2] + "</label>"
    );

    // Question 4
    $("#question4").html("<h3>" + questions[3].question + "</h3>");
    $("#answer4").html("<input type='radio' name='answer4' value='2'>" + "<label>" + questions[3].answerArray[0] + "</label>"
        + "<input type='radio' name='answer4' value='1'>" + "<label>" + questions[3].answerArray[1] + "</label>"
        + "<input type='radio' name='answer4' value='2'>" + "<label>" + questions[3].answerArray[2] + "</label>"
    );

    // Question 5
    $("#question5").html("<h3>" + questions[4].question + "</h3>");
    $("#answer5").html("<input type='radio' name='answer5' value='0'>" + "<label>" + questions[4].answerArray[0] + "</label>"
        + "<input type='radio' name='answer5' value='1'>" + "<label>" + questions[4].answerArray[1] + "</label>"
        + "<input type='radio' name='answer5' value='2'>" + "<label>" + questions[4].answerArray[2] + "</label>"
    );
    

    // when user hits submit...
        // we want to check their score and display the results 
    $("#submit").on("click", function() {
        keepingScore();
        displayResults();
     });
});

// Timer function
    // set intervealId to decrease by 1000 miliseconds
function timer() {
    clearInterval(interval);
    interval = setInterval(decrement, 1000);
}

function decrement() {
    //  Decrease timeRemaining by one.
    timeRemaining--;
    //  Show the timeRemaining in the #time tag
    $("#timer").html("<h2>Time Remaining: " + timeRemaining + " Seconds</h2>" + "<br>");
// if statement to stop timer, take score, and display results
    if (timeRemaining === 0) {
        stopTimer();
        keepingScore();
        displayResults();

    }
}

// clear interval
function stopTimer() {
    clearInterval(interval);
}

function displayResults() {
    // hide the quiz 
    $("#timer").hide();
    $("#question1").hide();
    $("#answer1").hide();
    $("#question2").hide();
    $("#answer2").hide();
    $("#question3").hide();
    $("#answer3").hide();
    $("#question4").hide();
    $("#answer4").hide();
    $("#question5").hide();
    $("#answer5").hide();
    $("#submit").hide();
    // display score 
    $("#correct").html("Correct Answers: " + correctAnswers);
    $("#incorrect").html("Incorrect Answers: " + incorrectAnswers);
    $("#unanswered").html("Unanswered: " + unanswered);
    // show play again button
    // $("#playAgain").show();
}

// $("#playAgain").on("click", function() {
//     $(this).hide();
//     $("#playAgain").hide();
//     $("#timer").html("<h2>Time Remaining: 60 Seconds</h2>" + "<br>");
//     timer();
// },

// Function that keeps score of correct, incorrect, and unanswered 
    // things we need: 
    // check userAnswer against the answer using .val() - make sure you have a 
        
    // if/else if/else statements for unanswered(undefined), correct, and incorrect answers
function keepingScore() {

    var userAnswer1 = $("input[name='answer1']:checked").val();
    var userAnswer2 = $("input[name='answer2']:checked").val();
    var userAnswer3 = $("input[name='answer3']:checked").val();
    var userAnswer4 = $("input[name='answer4']:checked").val();
    var userAnswer5 = $("input[name='answer5']:checked").val();

    // Question 1
    if (userAnswer1 === undefined) {
        unanswered++;
    }
    else if (userAnswer1 == questions[0].answer) {
        correctAnswers++;
    }
    else {
        incorrectAnswers++;
    }

    // Question 2
    if (userAnswer2 === undefined) {
        unanswered++;
    }
    else if (userAnswer2 == questions[1].answer) {
        correctAnswers++;
    }
    else {
        incorrectAnswers++;
    }

    // Question 3
    if (userAnswer3 === undefined) {
        unanswered++;
    }
    else if (userAnswer3 == questions[2].answer) {
         correctAnswers++;
    }
    else {
        incorrectAnswers++;
    }

    // Question 4
    if (userAnswer4 === undefined) {
        unanswered++;
    }
    else if (userAnswer4 == questions[3].answer) {
        correctAnswers++;
    }
    else {
        incorrectAnswers++;
    }

    // Question 5
    if (userAnswer5 === undefined) {
        unanswered++;
    }
    else if (userAnswer5 == questions[4].answer) {
        correctAnswers++;
    }
    else {
        incorrectAnswers++;
    }
}

  




