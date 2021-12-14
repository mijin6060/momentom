const images = [
  "bg00.jpeg",
  "bg01.jpeg",
  "bg02.jpeg",
  "bg03.jpeg",
  "bg04.jpeg",
  "bg05.jpeg",
  "bg06.jpeg",
  "bg07.jpeg",
  "bg08.jpeg",
  "bg09.jpeg",
  "bg10.jpeg",
  "bg11.jpeg",
];
const IMG_NUMBER = 12;

const getRandom = () => {
  return Math.floor(Math.random() * IMG_NUMBER);
};

const paintImage = (imgNumber) => {
  const backgroundImage = "url('" + images[imgNumber] + "')";
  body.style.backgroundImage = backgroundImage;
};
// const chosenImage = images[Math.floor(Math.random() * images.length)];
// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;

// // console.log(bgImage);

// // //* appendChild는 body에 html을 추가하는것!
// document.body.appendChild(bgImage);
