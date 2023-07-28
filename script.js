const birthDay = document.querySelector('input[name=days]').value;
const birthMonth = document.querySelector('input[name=months]').value;
const birthYear = document.querySelector('input[name=years]').value;
const submitBtn = document.querySelector('.svg-arrow');

let userAge = document.querySelector('.year-output');
let userMonth = document.querySelector('.months-output');
let userDays = document.querySelector('.days-output');

let date = new Date();
// new Date() is a javascript method that collects time from your device
let currentDay = date.getDate();
let currentMonth = 1 + date.getMonth();
let currentYear = date.getFullYear();
let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const ageFunction = function() {
  if (birthDay > currentDay) {
    currentDay = currentDay + month[currentMonth - 1];
    currentMonth = currentMonth - 1; 

  }
  if (birthMonth > currentMonth) {
    currentMonth = currentMonth + 12;
    currentYear = currentYear - 1;
  }
   userDays.innerHTML = currentDay - birthDay;
   userMonth.innerHTML = currentMonth - birthMonth;
   userAge.innerHTML = currentYear - birthYear;


  console.log(userAge);
  console.log(userMonth);
  console.log(userDay);

}
ageFunction()

submitBtn.addEventListener( "click", ageFunction);




