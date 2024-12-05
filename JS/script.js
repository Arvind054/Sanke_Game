//variables that will be in use
let direction = {x:0, y: 0};
let speed = 2;
let lastPaintTime = 0;
let snakeArr =  [ {x: 13, y: 15}]
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
function gameEngine(){
    //part1: updating the snake array & food.
    //part2: Display the snake and food.
}



//main logic
//we use animation frame because it doesntot fliker and not make programme solwer
window.requestAnimationFrame(main);