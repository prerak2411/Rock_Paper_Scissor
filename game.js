let h4=document.querySelector("h4");
let container=document.querySelector(".container");
let choices=document.querySelectorAll(".choice");
let userscore=document.querySelector(".user-score");
let compscore=document.querySelector(".comp-score");
let msg=document.querySelector(".msg");

let user=0;
let comp=0;

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        user++;
        userscore.innerText=user;
console.log("You Won");
msg.innerText=`YOU WON:: ${userchoice} beats ${compchoice}`;
        msg.style.background="green";


    }
    else{
        comp++;
        compscore.innerText=comp;
        console.log("You Lose");
        msg.innerText=`YOU LOSE:: ${compchoice} beats ${userchoice}`;
        msg.style.background="red";
    }
   
};

const playgame=(userchoice)=>{
 let options=["Rock","Paper","Scissors"];
 let compch= Math.floor(Math.random()*3);
 let compchoice=options[compch];
 console.log(`computer choice is ${compchoice}`);
 if(userchoice==compchoice){
    console.log(`Game was draw,Both chooses ${userchoice}`);
    msg.innerText=`Game was draw::Both chooses ${userchoice}`;
            msg.style.background="#240a3b";

 }
 else{
    let userwin=true;
    if(userchoice==="Rock"){
        userwin= compchoice=== "Paper"?false:true;
    }
    else if(userchoice==="Paper"){
        userwin= compchoice==="Scissors"?false:true;
        
    }
    else if(userchoice==="Scissors"){
        userwin= compchoice==="Rock"?false:true;
    }
     showwinner(userwin,userchoice,compchoice);
 }





  
};


choices.forEach((choice)=>{
 
  choice.addEventListener(("click"),()=>{
    let userchoice= choice.getAttribute("id");
    console.log("user choice is ",userchoice);
    playgame(userchoice);
  })
});