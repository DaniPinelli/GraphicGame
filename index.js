const questionnaire = [{
        "question": "What is the largest ocean in the world?",
        "answers": ["Atlantic ocean", "Pacific ocean", "Indian ocean"]
    },
    {
        "question": "Who is the best superhero of all time?",
        "answers": ["Superman", "Rambo", "Deadpool"]
    },
    {
        "question": "What is the tallest waterfall in the world?",
        "answers": ["Niaraga Falls", "The Angel's Jump", "Iguazu Waterfalls"]
    },
    {
        "question": "When did World War II end?",
        "answers": ["1945", "1947", "1943"]
    },
    {
        "question": "What year only had 355 days?",
        "answers": ["1582", "1615", "1823"]
    }
];

let rightAnswer;

const printQuestion = (i) => {
    const question = questionnaire[i];
    let answers = question.answers;


    const answersArray = answers.map(currentA => `<p><button onClick="evaluator('${currentA}', this)"> * </button> <span>${currentA} </span></p>`);

    const htmlAnswers = answersArray.join(' ');

    let htmlQuestion = `<p>${question.question}</p> <div>${htmlAnswers}</div>`;

    document.querySelector('.questions').innerHTML = htmlQuestion;
}

const evaluator = (answer, obj) => {
    const parentP = obj.parentNode;
    if (answer === rightAnswer) {
        parentP.classList.add('right');
    } else {
        parentP.classList.add('wrong');
    }
}

printQuestion(1);