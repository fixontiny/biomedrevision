const questions = [
    {
        question: "What does first-order kinetics mean in drug metabolism?"       ,
        answers: [
            { text: "The drug is eliminated at a constant rate regardless of concentration", correct: false},
            { text: "The reaction rate is independent of drug concentration", correct: false},
            { text: "The reaction rate is directly proportional to drug concentration", correct: true},
            { text: "The rate decreases over time", correct: false},
        ]
    },
    {
        question: "Which graph best represents a first-order reaction?",
        answers: [
            { text: "Straight line in a concentration vs. time plot", correct: false},
            { text: "Exponential decay curve in a concentration vs. time plot", correct: true},
            { text: "Flat line over time", correct: false},
            { text: "Sigmoidal curve", correct: false},
        ]        
    },
    {
        question: "What is the typical rate of alcohol elimination in zero-order kinetics?",
        answers: [
            { text: "1-3 grams per hour", correct: false},
            { text: "5-8 grams per hour", correct: false},
            { text: "10-15 grams per hour", correct: true},
            { text: "20-25 grams per hour", correct: false},
        ]        
    },
    {
        question: "What parameter represents the theoretical volume in which a drug is distributed?",
        answers: [
            { text: "Bioavailability", correct: false},
            { text: "Clearance", correct: false},
            { text: "Half-life", correct: false},
            { text: "Volume of distribution", correct: true},
        ]
    },
    {
        question: "In Michaelis-Menten kinetics, what does Km represent?",
        answers: [
            { text: "The maximum reaction rate", correct: false},
            { text: "The drug's half life", correct: false},
            { text: "The concentration where the rate is half of Vmax", correct: true},
            { text: "The rate of elimination", correct: false},
        ]
    },
    {
        question: "What is the formula to calculate the area under the concentration-time curver (AUC)?",
        answers: [
            { text: "AUC = Dose / Clearance", correct: false},
            { text: "AUC = 0.5 x (t2 - t1) x (Cp1 + Cp2)", correct: true},
            { text: "AUC = Vd x C", correct: false},
            { text: "AUC = In(C0 / t)", correct: false},
        ]
    },
    {
        question: "What is the effect of increased capillary permeability on hydrophilic drugs?",
        answers: [
            { text: "Decreases their Vd", correct: false},
            { text: "Increases their Vd", correct: true},
            { text: "Has no effect", correct: false},
            { text: "Makes them lipopihllic", correct: false},
        ]
    },
    {
        question: "What does the term bioavailability refer to?",
        answers: [
            { text: "The total volume of blood the drug is dissolved in", correct: false },
            { text: "The proportion of the drug reaching systemic circulation", correct: true },
            { text: "The elimination half-life of a drug", correct: false },
            { text: "The rate at which a drug binds to proteins", correct: false }
        ]
    },
    {
        question: "What is Therapeutic Drug Monitoring (TDM) primarily used for?",
        answers: [
            { text: "Monitoring liver enzymes", correct: false },
            { text: "Ensuring patients take the drug on time", correct: false },
            { text: "Individualizing drug therapy based on plasma concentration", correct: true },
            { text: "Predicting drug-drug interactions", correct: false }
        ]
    },
    {
        question: "Which equation is used to calculate drug clearance (CL)?",
        answers: [
            { text: "CL = Dose / Volume of distribution", correct: false },
            { text: "CL = Rate of elimination / Plasma concentration", correct: true },
            { text: "CL = AUC / Dose", correct: false },
            { text: "CL = Half-life × Elimination constant", correct: false }
        ]
    },
    {
        question: "What happens when a drug's metabolism becomes saturated?",
        answers: [
            { text: "The drug follows first-order kinetics", correct: false },
            { text: "The rate of elimination becomes constant", correct: true },
            { text: "The half-life decreases", correct: false },
            { text: "Bioavailability increases", correct: false }
        ]
    },
    {
        question: "Which of the following is a characteristic of zero-order kinetics?",
        answers: [
            { text: "Elimination rate depends on concentration", correct: false },
            { text: "Half-life remains constant", correct: false },
            { text: "A constant amount of drug is eliminated per unit time", correct: true },
            { text: "Drug follows Michaelis-Menten kinetics", correct: false }
        ]
    },
    {
        question: "In infection, what is the typical change to the volume of distribution (Vd) for hydrophilic drugs?",
        answers: [
            { text: "Decreases due to vasoconstriction", correct: false },
            { text: "Remains unchanged", correct: false },
            { text: "Increases due to fluid shifts", correct: true },
            { text: "Decreases due to increased clearance", correct: false }
        ]
    },
    {
    question: "Which parameter is used to calculate a loading dose?",
    answers: [
        { text: "Bioavailability", correct: false },
        { text: "Clearance", correct: false },
        { text: "Volume of distribution", correct: true },
        { text: "Half-life", correct: false }
        ]
    },
    {
    question: "What does the area under the concentration-time curve (AUC) represent?",
    answers: [
        { text: "Drug bioavailability", correct: true },
        { text: "Drug toxicity", correct: false },
        { text: "Drug half-life", correct: false },
        { text: "Rate of elimination", correct: false }
        ]
    },
    {
    question: "In first-order kinetics, what is true about drug elimination?",
    answers: [
        { text: "It occurs at a constant rate", correct: false },
        { text: "The rate is proportional to drug concentration", correct: true },
        { text: "It follows zero-order dynamics", correct: false },
        { text: "It cannot be graphed", correct: false }
        ]
    },
    {
    question: "Which of the following drugs is commonly eliminated by zero-order kinetics?",
    answers: [
        { text: "Paracetamol", correct: false },
        { text: "Caffeine", correct: false },
        { text: "Ethanol", correct: true },
        { text: "Amoxicillin", correct: false }
        ]
    },
    {
    question: "How is drug clearance (CL) defined?",
    answers: [
        { text: "Rate of drug absorption per volume", correct: false },
        { text: "Volume of plasma cleared of drug per unit time", correct: true },
        { text: "Rate of protein binding", correct: false },
        { text: "Volume of drug distribution", correct: false }
        ]
    },
    {
    question: "What does a straight line in a plot of ln[A] vs. time indicate?",
    answers: [
        { text: "Zero-order kinetics", correct: false },
        { text: "Saturation kinetics", correct: false },
        { text: "First-order kinetics", correct: true },
        { text: "Michaelis-Menten kinetics", correct: false }
        ]
    },
    {
    question: "Which process does NOT contribute to renal drug clearance?",
    answers: [
        { text: "Glomerular filtration", correct: false },
        { text: "Active tubular secretion", correct: false },
        { text: "Passive tubular reabsorption", correct: false },
        { text: "First-pass metabolism", correct: true }
        ]
    },
    {
    question: "What is a clinical consequence of exceeding capacity-limited drug metabolism?",
    answers: [
        { text: "Increased absorption", correct: false },
        { text: "Decreased plasma concentration", correct: false },
        { text: "Onset of adverse effects", correct: true },
        { text: "More rapid elimination", correct: false }
       ]
    },
    {
    question: "What factor can reduce the bioavailability of an orally administered drug?",
    answers: [
        { text: "IV administration", correct: false },
        { text: "Enzyme induction", correct: false },
        { text: "First-pass metabolism", correct: true },
        { text: "High protein binding", correct: false }
        ]
    },
    {
    question: "What is the role of Vmax in Michaelis-Menten kinetics?",
    answers: [
        { text: "It reflects the rate at half saturation", correct: false },
        { text: "It is the maximum elimination rate at full enzyme saturation", correct: true },
        { text: "It is equal to Km", correct: false },
        { text: "It represents the loading dose", correct: false }
        ]
    }


]
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];

    // Shuffle the answers before displaying them
    shuffleArray(currentQuestion.answers);

    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();