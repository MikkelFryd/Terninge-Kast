let result = 0;
let resEle = document.createElement("p");
let btn = document.createElement("button");
let numberOfDices = 2;
let container = document.getElementById("diceroller");
let diceContainer = document.createElement("div");
let resultContainer = document.createElement("section");
let gameTitle = document.createElement("h1");
let selectLabel = document.createElement("label");
let select = document.createElement("select");
let resArr = [];

function startGame() {
  gameTitle.innerText = "Terninge kast!";
  selectLabel.innerText = "Vælg antal terninger";
  resEle.innerText = "Score: 0";
  for (let i = 0; i < numberOfDices; i++) {
    let dice = document.createElement("figure");
    dice.style.backgroundImage = `url(assets/images/dice6.svg)`;
    diceContainer.append(dice);
  }
  for (let h = 0; h < 6; h++) {
    let option = document.createElement("option");
    option.value = h + 1;
    option.innerText = h + 1;
    select.append(option);
  }
  btn.innerText = "Kast terninger";
  btn.onclick = Play;
  select.value = numberOfDices;
  select.onchange = (e) => {
    numberOfDices = e.target.value;
  };
  resultContainer.append(resEle, btn, selectLabel, select);
  container.append(gameTitle, diceContainer, resultContainer);
}

function rollDice() {
  let diceThrow = Math.ceil(Math.random(1) * 6);
  return diceThrow;
}

function Play() {
  diceContainer.innerHTML = "";
  resArr.length = 0;
  for (let i = 0; i < numberOfDices; i++) {
    let dice = document.createElement("figure");
    let random = rollDice();
    resArr.push(random);
    dice.style.backgroundImage = `url(assets/images/dice${random}.svg)`;
    diceContainer.append(dice);
  }
  btn.innerText = "Kast igen";
  getScore();
}

function getScore() {
  let score = 0;
  for (let s = 0; s < numberOfDices; s++) {
    score = score + resArr[s];
  }
  resEle.innerText = "Score: " + score;
}
