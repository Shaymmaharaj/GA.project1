let array = [
    {
        question: 'Which NFL player legally changed his name to match his jersey number?',
        choices : ['Deion Sanders','Chad Johnson','Terell Owens','Dez Bryant'],
        answer: 1,
        photo: 'https://www.bostonherald.com/wp-content/uploads/2019/05/bradyce011.jpg?w=461'
    },
    {
        question: 'Who was the first player in NFL history to pass for 400 yards, throw 4 TD passes, and rush for 50 yards in a single game?',
        choices : ['Dak Prescott','Deshaun Watson','Steve young','Michael Vick'],
        answer: 1,
        photo: 'https://www.bostonherald.com/wp-content/uploads/2019/05/bradyce011.jpg?w=461'
    },
    {
        question: 'What wide receiver caused a sensation his rookie season with a one-handed catch?',
        choices : ['Antonio Brown','Odell Beckham Jr','Randy moss','Jarvis Landry'],
        answer: 1,
        photo: 'https://www.bostonherald.com/wp-content/uploads/2019/05/bradyce011.jpg?w=461'
    },
    {
        question: 'Which of the following teams has yet to play in the Super Bowl?',
        choices : ['Saints','Jaguars','Vikings','Buccaneers'],
        answer: 1,
        photo: 'https://www.bostonherald.com/wp-content/uploads/2019/05/bradyce011.jpg?w=461'
    },
    {
        question: '“The Blind Side” was a film starring Sandra Bullock based on the life story of this NFL player?',
        choices : ['Antonio Brown','TWilliam “The Fridge” Perry','Michael Oher','Reggie White'],
        answer: 2,
        photo: 'https://www.bostonherald.com/wp-content/uploads/2019/05/bradyce011.jpg?w=461'
    },
    {
        question: 'Brett Favre played quarterback for all these teams EXCEPT',
        choices : ['jets','Vikings','Bills','Falcons'],
        answer: 2,
        photo: 'https://www.bostonherald.com/wp-content/uploads/2019/05/bradyce011.jpg?w=461'
    },
    {
        question: 'The great Joe Montana was the 82nd draft pick in 1979, joining this team?',
        choices : ['colts','49ers','chiefs','ravens'],
        answer: 1,
        photo: 'https://www.bostonherald.com/wp-content/uploads/2019/05/bradyce011.jpg?w=461'
    },
    {
        question: 'What was Bill Belichick’s first head NFL coaching job?',
        choices : ['New York Giants',
        'Cleveland Browns',
        " New York Jets",
        ' New England Patriots'],
        answer: 1,
        photo: 'https://www.bostonherald.com/wp-content/uploads/2019/05/bradyce011.jpg?w=461'
    },
    {
        question: 'Where did Tom Brady play college ball?',
        choices : ["Ohio State", "Purdue",  "Wisconsin", "Michigan"],
        answer: 3,
        photo: 'https://www.bostonherald.com/wp-content/uploads/2019/05/bradyce011.jpg?w=461'
    },
    {
        question: 'Which nfl player has won the most Super Bowls?',
        choices : ['Terry Bradshaw','Tom Brady','Joe Montana','Joe Namath'],
        answer: 1,
        photo: 'https://www.bostonherald.com/wp-content/uploads/2019/05/bradyce011.jpg?w=461'
    },

];


let score = 0;
let scoreCounter = document.querySelector('.score')
let timer = 20;
let intervalId;
let userGuess = "";
let running = false;
let arrLength = array.length;
let pick;
let index;
let newArray = [];
let holder= [];
let time = document.querySelector('.timer');
let questions = document.querySelector('.questions');
let answer = document.querySelector('.answer');
let start = document.querySelector('.start');
let playAgain = document.querySelector('.play-again');



playAgain.style.visibility = 'hidden';


start.addEventListener('click', function(){
    start.style.visibility = 'hidden';
    displayQuestion();
    runTimer();
    for(let i = 0; i < array.length; i++){
        holder.push(array[i])
    }
})


function runTimer(){
    if(!running){
    intervalId = setInterval(decrease, 1000); 
	running = true;
    }
}
function stop() {
	running = false;
	clearInterval(intervalId);
}

function decrease(){
    time.innerHTML = 'time left:' + timer
    timer--;

    if(timer === 0){
        stop()
        answer.innerHTML = 'time is up. the corrent answer is:' + pick.choices[pick.answer];

    }
}


function displayQuestion(){
    index = array.length - 1 ;
    pick = array[index];
    
    questions.innerHTML = pick.question
    
    for(let i = 0; i < pick.choices.length; i++){
        let usersChoice = document.createElement('div');
        usersChoice.className = 'answerChoice';
        usersChoice.innerHTML = pick.choices[i];
        answer.append(usersChoice)
        usersChoice.addEventListener('click', function(e){ 
            console.log(usersChoice.innerHTML, pick.choices[pick.answer])
           if(usersChoice.innerHTML === pick.choices[pick.answer]){ 
               score++
               timer = 20
               newArray.push(pick)
               array.splice(index,1);
               scoreCounter.innerHTML = 'Score:' + score
               answer.innerHTML = 'correct! on to the next question'
            }else{
                timer = 20
                newArray.push(pick)
               array.splice(index,1);
              //stop()
              answer.innerHTML = 'time is up. the corrent answer is:' + pick.choices[pick.answer];

           }
           if(array.length === 0){
               stop();
               questions.innerHTML = ''
               answer.innerHTML = `game over! your final score is ${score}/10`
           }
           displayQuestion()
           
        })
    }
}


