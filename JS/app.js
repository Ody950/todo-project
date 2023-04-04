
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






let Array1 = [];
  

function questionOneFun () {
  let question_1 = prompt("Does the time matter to you?(yes/no)");
  
  for (let i = 0; i < 1; i++) {
    
    if (question_1 === "") {
      Array1.push("Question 1 answer is invalid");
    
    } else if (question_1.toLowerCase() === "yes") {
      Array1.push("Question 1 answer: " + question_1);
    
    } else if (question_1.toLowerCase() === "no") {
      Array1.push("Question 1 answer: " + question_1);
    } else {
      question_1 = prompt("Does the time matter to you?(yes/no)");
    }
    
  }
  
  }

questionOneFun();


function questionTwoFun () {
  let question_2 = prompt("Are you confident that this website will allow you to organize your tasks in order to make the best use of your time (yes/no)");
  
  for (let i = 0; i < 1; i++) {
    
    if (question_2 === "") {
      Array1.push("Question 2 answer is invalid");
    
    } else if (question_2.toLowerCase() === "yes") {
      Array1.push("Question 2 answer: " + question_2);
    
    } else if (question_2.toLowerCase() === "no") {
      Array1.push("Question 2 answer: " + question_2);
    } else {
      question_2 = prompt("Does the time matter to you?(yes/no)");
    }
    
  }
  
  }

questionTwoFun();


function questionThreeFun () {
  let question_3 = prompt("Are you of the opinion that the only time to rest should be when you sleep(yes/no)");

  for (let i = 0; i < 1; i++) {
    
    if (question_3 === "") {
      Array1.push("Question 3 answer is invalid");
    
    } else if (question_3.toLowerCase() === "yes") {
      Array1.push("Question 3 answer: " + question_3);
    
    } else if (question_3.toLowerCase() === "no") {
      Array1.push("Question 3 answer: " + question_3);
    } else {
      question_3 = prompt("Does the time matter to you?(yes/no)");
    }
    
  }
  
  }

questionThreeFun();


for (let i = 0; i < Array1.length; i++) {
  console.log(Array1[i]);
}

