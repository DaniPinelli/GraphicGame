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

let finishCount = 0;

const printQuestion = (i) => {
    currentQindex++;
    finishCount++;
    const question = questionnaire[i];
    let answers = question.answers;

    const hideCongrats = document.querySelector('.congrats').style.display = 'none';
    const hideWrong = document.querySelector('.wrongMessage').style.display = 'none';

    const answersArray = answers.map(currentA => `<p class="answer"><button class="btn" onClick="evaluator('${currentA}', this)"> Click </button> <span>${currentA}</span></p>`);

    const htmlAnswers = answersArray.join(' ');

    let htmlQuestion = `<p>${question.question}</p> <div>${htmlAnswers}</div>`;

    document.querySelector('.questions').innerHTML = htmlQuestion;


    if (finishCount == 5) {

        document.querySelector('.next').style.display = 'none';

    }
}

const evaluator = (answer, obj) => {
    document.querySelectorAll('.answer').forEach(answer => answer.classList.remove('right', 'wrong'));
    document.querySelectorAll('.btn').forEach(answer => answer.classList.add('hide'));

    const parentP = obj.parentNode;

    if (answer == "Pacific Ocean" || answer == "Deadpool" || answer == "The Angels Jump" || answer == "1945" || answer == "1582") {
        parentP.classList.add('right');
        pointsCounter = pointsCounter + 100;
        document.querySelector('.points').innerHTML = pointsCounter;
        document.querySelector('.congrats').style.display = 'block';


    } else {
        parentP.classList.add('wrong');
        document.querySelector('.wrongMessage').style.display = 'block';

    }
}


setTimeout('printQuestion(currentQindex)', 3000);