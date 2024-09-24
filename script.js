"use strict";
// please do not delete the 'use strict' line above
// 開始時間
let startTime;
// 停止時間
let stopTime = 0;
// タイムアウトID
let buttonMoveID;
// Bar　の削れID
let barDeclineID;

const button = document.getElementById("color-button");
const body = document.body;
const bar = document.querySelector(".conditionBar");
const h3 = document.querySelector("h3");

// click event
button.addEventListener("click", changeColor);
button.addEventListener("click", barDecline);
// bar width 追加処理
button.addEventListener("click", () => {
  const bar = document.querySelector(".conditionBar");
  let barWidth =
    Number(
      document.querySelector(".conditionBar").style.width.replace("px", "")
    ) + 20;
  bar.style.width = `${barWidth}px`;
});

button.addEventListener("click", () => {
  const barWidth = Number(
    document.querySelector(".conditionBar").style.width.replace("px", "")
  );
  if (barWidth >= 200) {
    const popup = document.querySelector(".popup");
    popup.style.visibility = "visible";
    clearTimeout(buttonMoveID);
    clearTimeout(barDeclineID);
  } else if (barWidth <= 0) {
    clearTimeout(buttonMoveID);
    clearTimeout(barDeclineID);
  } else {
    console.log("click!!Go Go!!");
  }
});

// function
// backgroundColor change + button move
function changeColor() {
  h3.style.visibility = "visible";
  clearTimeout(buttonMoveID);
  document.body.style.backgroundColor = color();
  buttonMovement();
}

/**
 *
 * @returns rgba(r,g,b,a)の形の文字列を返す
 */
function color() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const a = Math.random() * 1;
  console.log(`rgba(${r},${g},${b},${a})`);

  return `rgba(${r},${g},${b},${a})`;
}
// ボタンのpositionをランダムに移動
function buttonMovement() {
  const button = document.getElementById("color-button");
  const top = Math.floor(Math.random() * 100);
  const left = Math.floor(Math.random() * 100);
  button.style.top = `${top}%`;
  button.style.left = `${left}%`;
  buttonMoveID = setTimeout(buttonMovement, 1000);
}

// bar width observation
function barDecline() {
  clearTimeout(barDeclineID);
  const bar = document.querySelector(".conditionBar");
  let barWidth = Number(
    document.querySelector(".conditionBar").style.width.replace("px", "")
  );
  barWidth = barWidth - 0.1;
  bar.style.width = `${barWidth}px`;
  barDeclineID = setTimeout(barDecline, 100);
}

// popup close
function popupClose() {
  const popup = document.querySelector(".popup");
  popup.style.visibility = "hidden";
}
