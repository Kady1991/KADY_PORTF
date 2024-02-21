
const questions = [
    // Ajoutez vos questions ici
{
question: "Combien font 2 + 3 ?",
options: ["4", "5", "6"],
answer: "5"
},
{
question: "Si tu as 8 pommes et que tu en donnes 2 à un ami, combien de pommes te restent ?",
options: ["4", "6", "8"],
answer: "6"
},
{
question: "Calcule : 4 x 7 - 3 = ?",
options: ["24", "25", "29"],
answer: "25"
},
{
question: "Si tu as 15 crayons et que tu en perds 5, combien de crayons te restent ?",
options: ["5", "10", "15"],
answer: "10"
},
{
question: "Résous cette équation : 3 x (4 + 2) = ?",
options: ["12", "18", "24"],
answer: "18"
},
{
question: "Si tu as 42 billes et que tu en donnes la moitié à ton ami, combien de billes te restent ?",
options: ["14", "21", "28"],
answer: "21"
},
{
question: "Combien font 6 - 2 ?",
options: ["2", "4", "6"],
answer: "4"
},
{
question: "Si tu as 9 bonbons et que tu en manges 3, combien de bonbons te restent ?",
options: ["3", "6", "9"],
answer: "6"
},
{
question: "Calcule : 5 x 5 + 2 = ?",
options: ["25", "30", "27"],
answer: "27"
},
{
question: "Si tu as 28 billes et que tu en donnes 8 à un ami, combien de billes te restent ?",
options: ["10", "20", "18"],
answer: "20"
}
];


let currentQuestion = 0;
let score = 0;
let feedback = ""

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score");
const feedbackElement = document.getElementById("feedback");

function showQuestion() {
    feedbackElement.textContent = "";
    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = "";
    questions[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(button);
    });
}
// fonction pour afficher la reponse

function afficherFeedback(message) {
    feedbackElement.textContent = message;
}

function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestion].answer) {
        score++;
        afficherFeedback("Bravo mon cheri, t'es le meilleur !");

    } else {
        feedbackElement.classList.add("incorrect");
        
        afficherFeedback("Raté mon cheri essaie encore " );
    }
    
    scoreElement.textContent = "Score : " + score;
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        questionElement.textContent = "Jeu terminé !";
        optionsElement.innerHTML = "";
        scoreElement.textContent = "Score final : " + score + " / " + questions.length;
    }
}

showQuestion();
