let birthDay
let birthMonth
let birthYear
const submitBtn = document.querySelector('.svg-arrow');
const requiredMessage1 = document.getElementById('required-msg-1');
const requiredMessage2 = document.getElementById('required-msg-2');
const requiredMessage3 = document.getElementById('required-msg-3');
// requiredMessage.innerHTML = "This field is required"; 
let userAge = document.querySelector('.year-output');
let userMonth = document.querySelector('.months-output');
let userDays = document.querySelector('.days-output');

let date = new Date();
// new Date() is a javascript method that collects time from your device
let currentDay = date.getDate();
let currentMonth = 1 + date.getMonth();
console.log(currentMonth);
let currentYear = date.getFullYear();
let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; 

const lastDayOfCurrentMonth = (new Date(currentYear, currentMonth, 0 )).getDate();

const checkEmptyStateFunction = function(){
  if (birthDay =='') {
    requiredMessage1.innerHTML = `This field is required`; 
    return
  } 
  else if (birthYear =='') {
    requiredMessage3.innerHTML = `This field is required`; 
    return
  }
  else if (birthMonth =='') {
    requiredMessage2.innerHTML = `This field is required`;
    return
  }
  else if (birthMonth.value > 12) {
    requiredMessage2.innerHTML = `Must be a valid Month`;
    return
  } 
  calendarSimulationFunction();
}





let calendarSimulationFunction = function() {
  if (birthYear > currentYear ) {
    requiredMessage3.innerHTML = `Must be in the past`;
    return;
  } 
  else if (birthMonth > 12) {
    requiredMessage2.innerHTML = `Must be a valid Month`;
    return;
  }
  else if (birthDay > lastDayOfCurrentMonth) {
    requiredMessage1.innerHTML = `Must be a valid day`;
    console.log('Must be a valid day');
    return;
  };
  calcAgeFunction();

}

const calcAgeFunction = function() {
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
  console.log(userDays);
}




let label = document.querySelectorAll('label');

const ageFunction = function() {
  birthDay = document.querySelector('input[name=days]').value;
  birthMonth = document.querySelector('input[name=months]').value;
  birthYear = document.querySelector('input[name=years]').value;


  checkEmptyStateFunction();
  // calendarSimulationFunction();
  // calcAgeFunction();
}

submitBtn.addEventListener( "click", ageFunction);




  


