//variables that will be in use
let inputDir = {x:0, y: 0};
let speed = 5;
let lastPaintTime = 0;
let snakeArr =  [ {x:5, y: 5}];
let board = document.getElementsByClassName("board")[0];
let food  = {x: 8, y: 10};
let score = 0;
//game functions 
//main function game Loop.
function main(currentTime){
    window.requestAnimationFrame(main);//call main again and again to make game loop.
    if((currentTime-lastPaintTime)/1000 <1/speed){
         return ;
    }
    lastPaintTime = currentTime;
    gameEngine();// game function.
}
function isOut(sArr){
    //if snake gets touch itself.
    if(snakeArr[0].x > 20 ||snakeArr[0].x < 0 || snakeArr[0].y > 20 || snakeArr[0].y < 0){
        return true;
    }
    for(let i = 1; i < sArr.length; i++){
        if(sArr[i].x === sArr[0].x && sArr[i].y === sArr[0].y){
            return true;
        }
        if(snakeArr[i].x > 20 ||snakeArr[i].x <0 || snakeArr[i].y > 20 || snakeArr[i].y < 0){
            return true;
        }
    }
}
function gameEngine(){
    //part1: updating the snake array & food.
     if(isOut(snakeArr)){
        inputDir = {x: 0, y: 0};
        alert(`game Over, Press any Key to Play Again. score is ${score}`);
        
        snakeArr = [{x: 5, y: 0}];
        score = 0;
        return ;
     }

     //after eating the food:
       if(snakeArr[0].y === food.y && snakeArr[0].x=== food.x){ 
         snakeArr.unshift({
            x:snakeArr[0].x + inputDir.x,
             y: snakeArr[0].y+inputDir.y})
          score += 1;
        let a = 1, b = 20;
        food = {x: Math.round(a+(b-1)*Math.random()), y: Math.round(a+(b-1)*Math.random())};
       }
       //moving the snake
       for(let i = snakeArr.length-2; i>=0; i--){
          snakeArr[i+1] = {...snakeArr[i]};
       }
       snakeArr[0].x += inputDir.x;
       snakeArr[0].y  += inputDir.y;
    //part2: Display the snake and food.
       //display the Snake.
   board.innerHTML = "";
   snakeArr.forEach((e, index)=>{
        let snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if(index == 0){
            snakeElement.classList.add('head');
            
        }else{
            snakeElement.classList.add('snakeBody');

        }
        board.appendChild(snakeElement);

   });
    // creating the food Element.
    let foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
}



//main logic
//we use animation frame because it doesnot fliker and not make programme solwer
window.requestAnimationFrame(main);

window.addEventListener('keydown', (e)=>{
     inputDir = {x:0, y:1};
     switch(e.key){
        case "ArrowUp":
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        case "ArrowDown":
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        case "ArrowLeft":
            inputDir.x = -1;
            inputDir.y = 0 ;
            break;
        case "ArrowRight":
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        
     }
})