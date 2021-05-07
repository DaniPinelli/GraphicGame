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

const printQuestion = (i) => {
    const question = questionnaire[i];
    let htmlQuestion = `<p>${question.question}</p>`;

    document.querySelector('.questions').innerHTML = htmlQuestion;
}

printQuestion(2);