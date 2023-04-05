
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



  function QuestionsAndArray(question1, question2, question3) {
    const answers = [];
  
    
    let answer1 = prompt("Does the time matter to you?(yes/no)" + question1);
    while (answer1.toLowerCase() !== "yes" && answer1.toLowerCase() !== "no") {
      if (answer1 === "" || answer1 === null) {
        answer1 = "invalid";
        break;
      } else {
        answer1 = prompt("Does the time matter to you?(yes/no)" + question1);
      }
    }
    answers.push(answer1);
  
    
    let answer2 = prompt("Are you confident that this website will allow you to organize your tasks in order to make the best use of your time (yes/no)" + question2);
    while (answer2.toLowerCase() !== "yes" && answer2.toLowerCase() !== "no") {
      if (answer2 === "" || answer2 === null) {
        answer2 = "invalid";
        break;
      } else {
        answer2 = prompt("Are you confident that this website will allow you to organize your tasks in order to make the best use of your time (yes/no)" + question2);
      }
    }
    answers.push(answer2);
  
    
    let answer3 = prompt("Are you of the opinion that the only time to rest should be when you sleep(yes/no)" + question3);
    while (answer3.toLowerCase() !== "yes" && answer3.toLowerCase() !== "no") {
      if (answer3 === "" || answer3 === null) {
        answer3 = "invalid";
        break;
      } else {
        answer3 = prompt("Are you of the opinion that the only time to rest should be when you sleep(yes/no)" + question3);
      }
    }
    answers.push(answer3);
    for (let i = 0; i < answers.length; i++) {
      console.log(answers[i]);}
      return answers;
    
  }
  QuestionsAndArray()
