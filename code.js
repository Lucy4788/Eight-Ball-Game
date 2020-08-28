/*let userName = "Trang";
userName.length > 0 ? 
console.log (`Hello, ${userName}!`) :
console.log ("Hello there!"); --- If/else in short version*/ 

function eightBall(){
  alert("Welcome to the 8-Ball game 👋");
  let userName = prompt("What's your name?");
  if (userName.length > 0){
    alert(`Hello, ${userName}!`);
  } else {
    alert(`Hello there!`);
  }
  
  const userQuestion = prompt("What would you like to ask THE 8-BALL?");
  
  alert (`Your question is : ${userQuestion}`); //Step 4
  alert ("And the answer is...");
  
  const randomNumber = Math.floor(Math.random() * 8);
  let eightBall = "";
  
  switch (randomNumber){
    case 0:
    eightBall = "It is certain 🤗";
    break;
    case 1:
    eightBall = "It is decidedly so 🤨";
    break;
    case 2:
    eightBall = "Reply hazy try again 😓";
    break;
    case 3:
    eightBall = "Cannot predict now 🤷‍♀️";
    break;
    case 4:
    eightBall = "Do not count on it 🙅‍♀️";
    break;
    case 5:
    eightBall = "My sources say no 🤯";
    break;
    case 6:
    eightBall = "Outlook not so good 😐";
    break;
    case 7:
    eightBall = "Signs point to yes 🤩";
    break;
    case 8:
    eightBall = "Bad idea, think again! 😲";
    break;
    default:
    eighBall = "Why would you want to? 🙄";
    break;
    }
  alert(`${eightBall}`);
}
let askButton = document.querySelector("h1");
askButton.addEventListener("click", eightBall);






