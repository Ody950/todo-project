
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
  
  if (gender == "male" || gender == "Male" || gender == "MALE") {
    alert("Welcom Mr " + name1);
  } else if (gender == "female" || gender == "Female" || gender == "FEMALE") {
    alert("Welcom Ms " + name1);
  } else {
    alert("Welcom " + name1);
  }
} 

