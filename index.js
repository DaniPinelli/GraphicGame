//////////////////// Q & A list ////////////////////


const questionnaire = [{
        "question": "What is the largest ocean in the world?",
        "answers": ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean"]
    },
    {
        "question": "Who is the best superhero of all time?",
        "answers": ["Superman", "Rambo", "Deadpool"]
    },
    {
        "question": "What is the tallest waterfall in the world?",
        "answers": ["Niaraga Falls", "The Angels Jump", "Iguazu Waterfalls"]
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

//////////////////// Printing on screen ////////////////////

let currentQindex = 0;

let pointsCounter = 0;
document.querySelector('.points').innerHTML = pointsCounter;

const printQuestion = (i) => {
    currentQindex++;
    const question = questionnaire[i];
    let answers = question.answers;


    const answersArray = answers.map(currentA => `<p class="answer"><button onClick="evaluator('${currentA}', this)"> Click </button> <span>${currentA}</span></p>`);

    const htmlAnswers = answersArray.join(' ');

    let htmlQuestion = `<p>${question.question}</p> <div>${htmlAnswers}</div>`;

    document.querySelector('.questions').innerHTML = htmlQuestion;
}

const evaluator = (answer, obj) => {
    document.querySelectorAll('.answer').forEach(answer => answer.classList.remove('right', 'wrong'));

    const parentP = obj.parentNode;

    if (answer == "Pacific Ocean" || answer == "Deadpool" || answer == "The Angels Jump" || answer == "1945" || answer == "1582") {
        parentP.classList.add('right');
        pointsCounter = pointsCounter + 100;
        document.querySelector('.points').innerHTML = pointsCounter;
        document.getElementById('congrats').innerHTML = "Congratulations!";
    } else {
        parentP.classList.add('wrong');
    }
}

setTimeout('printQuestion(currentQindex)', 4000);