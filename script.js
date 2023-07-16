const DiceValute = document.querySelector(".dice-value");
const StopBtn = document.querySelector(".stop");
const RollingBtn = document.querySelector(".rolling");
const Accumulated = document.querySelector(".accumulated");
const Player1Acc = document.querySelector(".play1-acc");
const Player2Acc = document.querySelector(".play2-acc");
const Player1Score = document.querySelector(".play1-score");
const Player2Score = document.querySelector(".play2-score");
const Modal1Btn = document.querySelector(".modal1-btn");
const Modal2Btn = document.querySelector(".modal2-btn");
const Modal1 = document.querySelector(".modal-1");
const Modal2 = document.querySelector(".modal-2");
const ResetBtn = document.querySelector(".reset");
const Player1Box = document.querySelector(".p1");
const Player2Box = document.querySelector(".p2");
const OkBtn = document.querySelectorAll(".ok");

let AccumulatedValut = 0;
let Score = 0;
let Score1 = 0;
let Score2 = 0;

RollingBtn.addEventListener("click", () => {
  const min = 1;
  const max = 6;
  const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
  DiceValute.innerText = randomValue;
  AccumulatedValut += randomValue;
  if (randomValue === 1 || randomValue === 2) {
    AccumulatedValut = 0;
    Reset();
  } else if (Player1Acc.classList.contains("accumulated")) {
    Player1Acc.innerText = AccumulatedValut;
  } else if (Player2Acc.classList.contains("accumulated")) {
    Player2Acc.innerText = AccumulatedValut;
  }
});

ResetBtn.addEventListener("click", () => {
  AccumulatedValut = 0;
  Score = 0;
  Score1 = 0;
  Score2 = 0;
  DiceValute.innerText = 0;
  Player1Score.innerText = Score1;
  Player2Score.innerText = Score2;
  Player1Acc.innerText = 0;
  Player2Acc.innerText = 0;
  Player2Acc.classList.remove("accumulated");
  Player1Acc.classList.add("accumulated");
  Player2Box.classList.remove("line");
  Player1Box.classList.add("line");
});

StopBtn.addEventListener("click", () => {
  Score = AccumulatedValut;
  Stop();
});

const Stop = () => {
  if (Player1Acc.classList.contains("accumulated")) {
    Player1Acc.classList.remove("accumulated");
    Player2Acc.classList.add("accumulated");
    Player1Box.classList.remove("line");
    Player2Box.classList.add("line");
    Score1 += Score;
    AccumulatedValut = 0;
    Player1Score.innerText = Score1;
    Player1Acc.innerText = 0;
    if (Score1 >= 50) {
      Modal1.classList.remove("none");
      Player2Box.classList.remove("line");
    }
  } else if (Player2Acc.classList.contains("accumulated")) {
    Player2Acc.classList.remove("accumulated");
    Player1Acc.classList.add("accumulated");
    Player2Box.classList.remove("line");
    Player1Box.classList.add("line");
    Score2 += Score;
    AccumulatedValut = 0;
    Player2Score.innerText = Score2;
    Player2Acc.innerText = 0;
    if (Score2 >= 50) {
      Modal2.classList.remove("none");
      Player1Box.classList.remove("line");
    }
  }
};

const Reset = () => {
  if (Player1Acc.classList.contains("accumulated")) {
    Player1Acc.innerText = AccumulatedValut;
    Player1Acc.classList.remove("accumulated");
    Player2Acc.classList.add("accumulated");
    Player1Box.classList.remove("line");
    Player2Box.classList.add("line");
  } else if (Player2Acc.classList.contains("accumulated")) {
    Player2Acc.innerText = AccumulatedValut;
    Player2Acc.classList.remove("accumulated");
    Player1Acc.classList.add("accumulated");
    Player2Box.classList.remove("line");
    Player1Box.classList.add("line");
  }

  AccumulatedValut = 0;
  Accumulated.innerText = AccumulatedValut;
};

OkBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.classList.contains("modal1-btn")) {
      Modal1.classList.add("none");
      Player1Box.classList.add("line");
    }
    if (e.target.classList.contains("modal2-btn")) {
      Modal2.classList.add("none");
      Player1Box.classList.add("line");
    }
    Player2Acc.classList.remove("accumulated");
    Player1Acc.classList.add("accumulated");
    AccumulatedValut = 0;
    Score = 0;
    Score1 = 0;
    Score2 = 0;
    DiceValute.innerText = 0;
    Player1Score.innerText = Score1;
    Player2Score.innerText = Score2;
  });
});
