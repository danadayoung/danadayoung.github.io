const body = document.querySelector("body");

const IMG_NUM = 4;

function paintImage(num) {
  const image = new Image();
  image.src = `images/background_img0${num + 1}.jpg`;
  image.classList.add("bg-image");
  body.append(image);
}

function generateNum() {
  const number = Math.floor(Math.random() * IMG_NUM);
  return number;
}

function init() {
  const randomNumber = generateNum();
  paintImage(randomNumber);
}

init();