let minus = document.getElementById('minus');
let total = document.getElementById('total');
let plus = document.getElementById('plus');
let reset = document.getElementById('reset');
let data = 0;

plus.onclick = function () {
  if (data >= 0) {
    minus.style.display = "block";
  }
  total.innerHTML = ++data;
}
minus.onclick = function () {
  if (data <= 0) {
    minus.style.display = "block";
  } else {
    total.innerHTML = --data;
  }
}

reset.onclick = function ( ) {
  data = 0;
  total.innerHTML = 0;
}




