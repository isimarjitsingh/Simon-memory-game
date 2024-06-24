let gameSeq = [];
let userSeq = [];

let color=["red","orange","green","blue"];
let started = false;
let level = 0;
let bestScore=0;

let h2 = document.querySelector("#head");

document.addEventListener("keypress", function(event) {
  if (started==false) {
    console.log("game started");
    started = true;
    levelup();
  }
});


// For changing the text of h2 and also helps to other functions their action takes place
 //head of all other functions
 function levelup() {
  userSeq=[];  //for reset the values of 'user clicked btns'
  level++;
  h2.innerText = `Level ${level}`;
  let randIdx=Math.floor(Math.random()*4);
  let randColor=color[randIdx];
  let randBtn=document.querySelector(`.${randColor}`);
//   console.log(randIdx);
//   console.log(randColor);   //FOR PRACTICE
//   console.log(randBtn);
  gameSeq.push(randColor);
  // console.log(gameSeq);   //for check
  btnFlash(randBtn);
 
}



// for Flashing the box color whenever we leveled up
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);

}


let allBtns=document.querySelectorAll(".box")
for(btn of allBtns){
    btn.addEventListener("click",btnPress) //for store user output
}

//for flashing the boxes when we click on that
function btnPress(){
    let btn=this;
   
    btnFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userSeq);    //for check
    checkAns(userSeq.length-1);
}

function checkAns(idx){
  bstScore();
  if(gameSeq[idx]==userSeq[idx]){
      if(gameSeq.length==userSeq.length){
        setTimeout(levelup,1000);//calling the function if user pattern is correct
      }
  }
  else{
    h2.innerHTML = `Game Over! Your Score Was <b>${level-1}</b> <br> Press Any Key To Restart`;
    reset();  //function which reset the game after failed attemption
  }
}

let header=document.querySelector(".header");
function bstScore(){
  if(bestScore<gameSeq.length+1){// for store the bestscore
    bestScore=level-1;
    header.innerText=bestScore;
  }
}


function reset(){
  started=false;
  gameSeq = [];
  userSeq = [];
  level=0;
}

// for dispalying the input value
const urlParams = new URLSearchParams(window.location.search);
const inputValue = urlParams.get('inputValue');
console.log("Received Input Value:", inputValue);
   // Use the inputValue to set the h3 tag
document.querySelector('h3').textContent =`${inputValue}'s Best Score`;
