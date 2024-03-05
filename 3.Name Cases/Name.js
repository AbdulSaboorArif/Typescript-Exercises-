"use strict";
let personName = "";
personName = prompt("What is your name?") || "";
let lowercase = personName.toLowerCase();
let uppercase = personName.toUpperCase();
let titlecase = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase()).join(' ');
if (personName !== null && personName !== "") {
    alert(`hello ${personName},here are your name in
    lowercase: ${lowercase}
    uppercase: ${uppercase}
    Titlecase: ${titlecase}`);
}
else {
    alert('Please fill your name !');
}
