const game = () => {
    let userScore = 0;
    let aiScore = 0;
    let moves = 0;
 
    document.querySelector('.reload').style.display = 'none'
    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const userOptions = [rockBtn,paperBtn,scissorBtn];
        const aiOptions = ['rock','paper','scissors']
         
        userOptions.forEach(option => {
            option.addEventListener('click',function(){
 
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10-moves}`;
 
                const choiceNum = Math.floor(Math.random()*3);
                const aiChoice = aiOptions[choiceNum];
 
                // console.log(choiceNum)
                winner(this.innerText,aiChoice)
                 
                if(moves == 10){
                    gameOver(userOptions,movesLeft);
                }
            })
        })
         
    }
 
    const winner = (user,ai) => {
        const result = document.querySelector('.result');
        const userScoreBoard = document.querySelector('.ucount');
        const aiScoreBoard = document.querySelector('.acount');
        const resultUserText = document.querySelector('.resultUserText');
        const resultAiText = document.querySelector('.resultAiText');
        user = user.toLowerCase();
        ai = ai.toLowerCase();
        if(user === ai){
            result.textContent = 'DRAW'
        }
        else if(user == 'rock'){
            if(ai == 'paper'){
                result.textContent = 'You Lose';
                resultUserText.textContent = 'rock'
                resultAiText.textContent = 'paper'
                aiScore++;
                aiScoreBoard.textContent = aiScore;
 
            }
            else{
                result.textContent = 'You Won'
                resultUserText.textContent = 'rock'
                resultAiText.textContent = 'scissor'
                userScore++;
                userScoreBoard.textContent = userScore;
            }
        }
        else if(user == 'scissor'){
            if(ai == 'rock'){
                result.textContent = 'You Lose';
                resultUserText.textContent = 'scissor'
                resultAiText.textContent = 'rock'
                aiScore++;
                aiScoreBoard.textContent = aiScore;
            }
            else{
                result.textContent = 'You Won';
                resultUserText.textContent = 'scissor'
                resultAiText.textContent = 'paper'
                userScore++;
                userScoreBoard.textContent = userScore;
            }
        }
        else if(user == 'paper'){
            if(ai == 'scissor'){
                result.textContent = 'You Lose';
                resultUserText.textContent = 'paper'
                resultAiText.textContent = 'scissor'
                aiScore++;
                aiScoreBoard.textContent = aiScore;
            }
            else    {
                result.textContent = 'You Won';
                resultUserText.textContent = 'paper'
                resultAiText.textContent = 'rock'
                userScore++;
                userScoreBoard.textContent = userScore;
            }
        }
    }
 
    const gameOver = (userOptions,movesLeft) => {
 
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');
        
        userOptions.forEach(option => {
            option.style.display = 'none';
        })
 
      
        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none';
 
        if(userScore > aiScore){
            result.style.fontSize = '5rem';
            result.innerText = 'You Won'
            result.style.color = '#308D46';
        }
        else if(userScore < aiScore){
            result.style.fontSize = '5em';
            result.innerText = 'You Lost';
            result.style.color = 'red';
        }
        else{
            result.style.fontSize = '5rem';
            result.innerText = 'DRAW';
            result.style.color = 'grey'
        }
        document.querySelector('.reload').style.display = 'block'
        reloadBtn.innerText = 'Restart';
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
    }
 
 
    playGame();
     
}
 
game();