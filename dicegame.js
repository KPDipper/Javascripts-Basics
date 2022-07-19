dice_face = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];

let x = Number(Math.random() * 6);
x = Math.floor(x);

document.getElementById("result").src = dice_face[x];

switch (x) {
  case 1:
    document.getElementById("result").innerHTML = "Try again";
    break;

  case 2:
  case 3:
  case 4:
  case 5:
    document.getElementById("result").innerHTML = "you loose";
    break;

  case 6:
    document.getElementById("result").innerHTML = "You Win";
    break;
}
