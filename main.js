const countdown = document.querySelector('.countdown');

//Set launch date
const launchDate = new Date ('Jun 27, 2018 13:00:00').getTime();

//Update every second
const intvl = setInterval(() => {
  //get today's date and time (ms)
const now = new Date().getTime();

//Distance from now to the day of the trip
const distance = launchDate - now;

//Time calculations
const days = Math.floor(distance /(1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const mins = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60 * 60 * 24)) / 1000);

//Display result
  countdown.innerHTML = `
  <div>${days}<span>Days</span></div>
  <div>${hours}<span>Hours</span></div>
  <div>${mins}<span>Minutes</span></div>
  <div>${seconds}<span>Seconds</span></div>
`;


//If launch date passed
If (distance < 0);{
  //stop countdown
  clearInterval(intvl);
  //Style and outout text
  countdown.style.color = '#17a2b8';
  countdown.innerHTML = 'The trip has passed';

}
}, 1000);