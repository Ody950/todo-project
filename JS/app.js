
"use strict";

let name1 = prompt("Please enter your name:");
while (name1 == "") {
  name1 = prompt("Please enter your name to continue:");
}


let gender = prompt("Please enter your gender (male/female):");
while (gender ==="") {
  gender = prompt("Please enter your gender (male/female) to continue:");
}


let age = prompt("Please enter your age:");
while (age <= 0) {
  age = prompt("The age is less than or equal to zero!,Please enter your age again to continue:");
}
while (age <= 0 || isNaN(age)) {
  age = prompt("The age is less than or equal to zero or not a number!,Please enter your age again to continue:");
}

if (confirm("Do you want skip the welcoming message?")) {
  
} else {
  
  if (gender.toLowerCase() === "male") {
    alert("Welcom Mr " + name1);
  } else if (gender.toLowerCase() === "female") {
    alert("Welcom Ms " + name1);
  } else {
    alert("Welcom " + name1);
  }
} 


//Lap_06:


const answerArray = [];
let answer1 = prompt("Does the time matter to you?(yes/no)") ;
let answer2 = prompt("Are you confident that this website will allow you to organize your tasks in order to make the best use of your time (yes/no)");
let answer3 = prompt("Are you of the opinion that the only time to rest should be when you sleep(yes/no)" );
  


function QuestionsAndArray(answer) {

  if (answer === undefined) {
    answerArray.push("Answer not provided.");
  } else if (answer.toLowerCase() === "yes" ) {
    answerArray.push("Yes");
  } else if (answer.toLowerCase() === "no") {
    answerArray.push("No");
  } else {
    answerArray.push("Invalid");
  }

    
  }
  
  QuestionsAndArray(answer1);
  QuestionsAndArray(answer2);
  QuestionsAndArray(answer3);
  
  


  function arrayAnswers (array) {
    
    for (let i = 0; i < array.length; i++) {
    console.log(array[i]);}
  }

    arrayAnswers (answerArray);

    


