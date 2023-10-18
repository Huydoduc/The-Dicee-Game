const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  let randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
  let randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

  let image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomImageSource);

  let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
  //If player 1 wins
  logic(randomNumber1, randomNumber2);
});

function logic(randomNumber1, randomNumber2) {
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Tie!";
  }
}
