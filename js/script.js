var boxDisplay = document.querySelector(".box-display");
var startButton = document.querySelector("#start");
var nextButton = document.querySelector("#next");
var questionDisplay = document.querySelector("#question-display");
var answerDisplay = document.querySelector("#answer-display");
var timerDisplay = document.querySelector("#timer-display");
var questionWrap = document.querySelector(".question-wrap");
var currentQuestionIndex = 0;
var questionList;
var count = 5;


startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", displayQuestion)

function startQuiz() {
    startButton.classList.add("hide");
    displayQuestion();
}

function displayQuestion() {
    questionList = questions[currentQuestionIndex];
    questionWrap.dataset.index = questions.correctIndex;

    questionDisplay.innerText = questionList.question;
    answerDisplay.innerText = questionList.choices;

    var choicesWrap = document.createElement("div");
	choicesWrap.classList = "choices";

    boxDisplay.classList.remove("hide");
    questionDisplay.classList.remove("hide");
    answerDisplay.classList.remove("hide");
    timerDisplay.classList.remove("hide");

    timerCountDown()

}   


function showAnswer() {
    answerDisplay.innerText = questions.answer;

    currentQuestionIndex++;


    if (currentQuestionIndex === questions.length) {
        currentQuestionIndex = 0;
    }
}

function timerCountDown() {
    timerDisplay.classList.remove("hide");
    timerDisplay.innerText = "5";

    var timer = setInterval(function() {
        count--;

        timerDisplay.innerText = count;

        if(!count) {
            clearInterval(timer)
            count = 5;
            showAnswer();
        }
    }, 1000);
}

