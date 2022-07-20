img_array = ["1.png", "2.png", "3.png", "4.png", "5.png"];

len = img_array.length;
document.write(len, "<br>");
index = 0;

document.getElementById("slider").src = img_array[index];

const next = () => {
  index++;
  if (index == len) {
    index = 0;
  }
  document.getElementById("slider").src = img_array[index];
};

const previous = () => {
  index--;
  if (index < 0) {
    index = len - 1;
  }
  document.getElementById("slider").src = img_array[index];
};

setInterval(next, [3000]);
