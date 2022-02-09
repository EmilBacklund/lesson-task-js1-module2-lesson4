const button = document.querySelector('.toolbar > button');
const counter = document.querySelector('.counter');

console.dir(counter);

// button.onmousedown = function () {
//   for (let i = 0; ; i++) {}
// };

// function mousedown(event) {
//   if (counter === 0) {
//     counter = setInterval(onmousedown, 1000);
//   }
// }

button.onmousedown = function () {
  setInterval(function () {
    counter.innerHTML++;
  }, 1000);
};

button.onmouseup = function () {
  counter.innerHTML = 0;
  clearInterval();
};
