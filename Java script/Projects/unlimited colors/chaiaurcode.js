//generate a random color
//random hex value
const randomColor = function () {
  const hex = '0123456789ABCDEF'; //16 numbers array thats why generating only 16 numbers
  let color = '#'; // making a random color hex using for loop
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let interval;
const startchangingcolor = function () {
  if (!interval) {
    interval = setInterval(changeBGColor, 1000);
  }
  function changeBGColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopchangingcolor = function () {
  clearInterval(interval);
  interval = null; //flushing out so that it doesnt overwrite
};
document.querySelector('#start').addEventListener('click', startchangingcolor);

document.querySelector('#stop').addEventListener('click', stopchangingcolor);
