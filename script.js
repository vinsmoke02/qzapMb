const qns = [
    {
        qn:"1. What is the Hiragana character for 'su'?",ans:[
            {text: "A. せ", correct: false},
            {text: "B. す", correct: true},
            {text: "C. し", correct: false},
            {text: "D. そ", correct: false}
        ]
    },
    {
        qn:"2. What does the word 'さくら' (sakura) mean in English?",ans:[
            {text: "A. Fire", correct: false},
            {text: "B. Cat", correct: false},
            {text: "C. Cherry Blossom ", correct: true},
            {text: "D. River", correct: false}
        ]
    },
    {
        qn:"3. Which Hiragana character stands for the sound 'me'?",ans:[
            {text: "A. ま", correct: false},
            {text: "B. も", correct: false},
            {text: "C. め", correct: true},
            {text: "D. み", correct: false}
        ]
    },
    {
        qn:"4. How do you write 'neko'(cat) in Hiragana?",ans:[
            {text: "A. ねけ", correct: false},
            {text: "B. ねこ", correct: true},
            {text: "C. ぬこ", correct: false},
            {text: "D. ぬけ", correct: false}
        ]
    },
    {
        qn:"5. Which of the following means 'water' in Hiragana?",ans:[
            {text: "A. みず", correct: true},
            {text: "B. みす", correct: false},
            {text: "C. みこ", correct: false},
            {text: "D. みつ", correct: false}
        ]
    },
    {
        qn:"6. What sound does ち make?",ans:[
            {text: "A. Ta", correct: false},
            {text: "B. Chu", correct: false},
            {text: "C. To", correct: false},
            {text: "D. Chi", correct: true}
        ]
    },
    {
        qn:"7. Which of these is the correct Hiragana spelling of 'arigatou' (thank you)?",ans:[
            {text: "A. ありがとお", correct: false},
            {text: "B. ありがとう", correct: true},
            {text: "C. ありがとう", correct: false},
            {text: "D. ありかとう", correct: false}
        ]
    },
    {
        qn:"8. The Hiragana word 'とけい' means what?",ans:[
            {text: "A. Watch/Clock", correct: true},
            {text: "B. Train", correct: false},
            {text: "C. Tree", correct: false},
            {text: "D. Chair", correct: false}
        ]
    },
    {
        qn:"9. Which Hiragana character is not a voiced version of “k”?",ans:[
            {text: "A. が", correct: false},
            {text: "B. ぐ", correct: false},
            {text: "C. ご", correct: false},
            {text: "D. さ", correct: true}
        ]
    },
    {
        qn:"10. What does 'はな' mean in Japanese?",ans:[
            {text: "A. Book", correct: false},
            {text: "B. Flower", correct: true},
            {text: "C. Wind", correct: false},
            {text: "D. Sky", correct: false}
        ]
    }

];

const question = document.getElementById("question");
const answerBtn = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQnIndex = 0;
let score = 0;

function startQuiz(){
    currentQnIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQn = qns[currentQnIndex];
    question.innerHTML = currentQn.qn;

    currentQn.ans.forEach(ans =>{
        const button = document.createElement("button");
        button.innerHTML = ans.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);

        if(ans.correct){
            button.dataset.correct = ans.correct;

        }
        button.addEventListener("click", selectAns);

    })
}

function resetState(){
    nextBtn.style.display ="none";
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function selectAns(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerBtn.children).forEach(buttons => {
        if(buttons.dataset.correct === "true"){
            buttons.classList.add("correct");
        }
        buttons.disabled = true;
        
    });
    nextBtn.style.display = "";

}

function showScore(){
    resetState();
    question.innerHTML = `You have scored ${score} out of ${qns.length}!!`;
    nextBtn.innerHTML = "Play Again ";
    nextBtn.style.margin = "20px auto 0 auto";
    nextBtn.style.display = "block";
    document.getElementById("toBe").style.display = "none";

}

function handleNextBtn(){
    currentQnIndex++;
    if(currentQnIndex < qns.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextBtn.addEventListener("click", () => {
    if(currentQnIndex < qns.length){
        handleNextBtn();
    }else{
        startQuiz();
    }
})

startQuiz();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
  }
  


