console.log("hi")

document.querySelector('.box1').addEventListener('click', changeColor)
document.querySelector('.box2').addEventListener('click', changeColor)
document.querySelector('.box3').addEventListener('click', changeColor)
document.querySelector('.box4').addEventListener('click', changeColor)
document.querySelector('.box5').addEventListener('click', changeColor)
document.querySelector('.box6').addEventListener('click', changeColor)
document.querySelector('.box7').addEventListener('click', changeColor)
document.querySelector('.box8').addEventListener('click', changeColor)
document.querySelector('.box9').addEventListener('click', changeColor)
let tCounter = 0


function changeColor(){
    tCounter = tCounter + 1;
   if(tCounter %2 ==0){
    this.style.backgroundColor =  "green";
}
   else if(tCounter % 2 !==0){
    this.style.backgroundColor =  "blue";
   } 
}
let anwsers = []



document.querySelector('.reset').addEventListener('click', reset)

function reset(){
 window.location.reload(true);
}





//global counter variable 
// add to the value . increments 
// add a class to click
// check if even or odd. to change color













