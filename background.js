const images = ["iu01.jpg","iu02.jpg","iu03.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");
console.log(bgimage);

console.log(chosenImage)
bgimage.src = `/queotes/img/${chosenImage}`

document.body.appendChild(bgimage)//body에 html을 추가할거야
