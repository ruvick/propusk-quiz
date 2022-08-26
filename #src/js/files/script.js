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

  let as_all = document.querySelector(".q_steps .as_all.active");
  as_all.classList.remove("active")

  let as = document.querySelector(".q_steps .as" + step);
  as.classList.add("active")

  // document.querySelector(".q_steps .as").innerHTML = step;
}

function checkStep() {
  if (step == 1) {
    let list = document.getElementsByName('prop');

    for (var i = 0; i < list.length; i++) {
      if (list[i].checked == true) return true;
    }
  }

  if (step == 2) {
    return true;
  }

  if (step == 3) {
    let phone = q_tel.value;
    console.log(phone)
    if ((phone != "ВАШ ТЕЛЕФОН") && (phone.indexOf("_") < 0)) return true;
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

  if (step == stepCount) {
    q_next.style.display = "none"
    // q_send.style.display = "block"
    popupDescp.style.display = "none"
  } else {
    q_next.style.display = "flex"
    // q_send.style.display = "none"
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".q_steps .all");//.innerHTML = stepCount;

  let all_input = document.querySelectorAll(".options__input");

  for (let i=0; i<all_input.length; i++)
    all_input[i].onchange = (e) => {
      e.preventDefault();
      
      setTimeout(()=>{
        stepUp();
      }, 300);
    }

  q_next.onclick = (e) => {
    e.preventDefault();
    stepUp();
  }

  q_prev.onclick = (e) => {
    e.preventDefault();
    stepDown();
  }

  q_send.onclick = (e) => {
      e.preventDefault();
      console.log(step)
      if (!checkStep()) {
          alert("Заполние поле 'Телефон'");
          return;
      }

      let q_form = document.getElementById("q_form")
      var q_data = new FormData(q_form);

      console.log(q_data)

      var xhr = new XMLHttpRequest();

      xhr.onload = function(e) {

          if (xhr.status == 200) {
              // location.href = "/thanks.html"
              popup_open("thenks");
          } else {
              console.log(xhr.status)
              console.log(xhr.statusText)
              alert("При отправке произошла ошибка")
          }
          
      }
      
      xhr.onerror = function(msg) {
          console.log("eroroa" + xhr.statusText)
      }

      xhr.open('POST', "https://istmarket77.com/sender-quiz.php", true);
      xhr.send(q_data);
  }
});
