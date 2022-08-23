// 'use strict';
// document.addEventListener('DOMContentLoaded', () => {
// });

let step = 1
let stepCount = 3
let popupDescp = document.querySelector(".popup__descp");

function toStep() {
  let selected = document.querySelector(".q_blk.active");
  selected.classList.remove("active")

  let tosl = document.querySelector(".q_blk.step" + step);
  tosl.classList.add("active")

  // let as = document.querySelector(".q_steps .as");
  // as.classList.add("active")

  // document.querySelector(".q_steps .as").innerHTML = step;
}

function checkStep() {
  if (step == 1) {
    let list = document.getElementsByName('prop[]');

    for (var i = 0; i < list.length; i++) {
      if (list[i].checked == true) return true;
    }
  }

  if (step == 2) {
    return true;
  }

  if (step == 3) {
    // let phone = q_tel.value;
    // if ((phone != "") && (phone.indexOf("_") < 0)) return true;
    return true;
  }

  return false;
}

function stepUp() {
  if (!checkStep()) {
    alert("Заполние поля");
    return;
  }

  if (step == stepCount)
    return;

  step++
  toStep()

  if (step == stepCount) {
    q_next.style.display = "none"
    // q_send.style.display = "block"
    popupDescp.style.display = "none"
  } else {
    q_next.style.display = "flex"
    // q_send.style.display = "none"
  }
}

function stepDown() {
  if (step == 1) return;
  step--
  toStep()
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".q_steps .all");//.innerHTML = stepCount;

  q_next.onclick = (e) => {
    e.preventDefault();
    stepUp();
  }

  q_prev.onclick = (e) => {
    e.preventDefault();
    stepDown();
  }

  // q_send.onclick = (e) => {
  //   e.preventDefault();
  //   if (!checkStep()) {
  //     alert("Заполние поле 'Телефон'");
  //     return;
  //   }
  // }
});
