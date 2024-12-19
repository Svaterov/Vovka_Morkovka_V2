const question = [
    {question: "2+2", answers: {"3","2","4"},correct: 3},
    {question: "2+2", answers: {"31","22","42"},correct: 2},
    {question: "2+2", answers: {"10","5","3"},correct: 1},
];
let currentQuestionINDEX = 0, score = 0
function showQuestion() {
    const q = question[currentQuestionINDEX];
    document.getElementById('question-container').innerText = q.question;
    const buttons = document.getElementById('answer-buttons');
    buttons.innerHTML ='';
    q.answers.forEach
}