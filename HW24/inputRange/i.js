
function rotate(value) {  /* создаем функцию для изменения значения стиля элемента с id = test, с отображением результата изменения в элементе с id = result и поддержкой ранних версий браузера */
  document.getElementById('testBlock').style.webkitTransform = "rotate(" + value + "deg)"; /* поддержка ранних версий браузера */
  document.getElementById('testBlock').style.msTransform = "rotate(" + value + "deg)"; /* поддержка ранних версий браузера */
  document.getElementById('testBlock').style.MozTransform = "rotate(" + value + "deg)"; /* поддержка ранних версий браузера */
  document.getElementById('testBlock').style.transform = "rotate(" + value + "deg)";
  /*document.getElementById('result').innerHTML = value + "deg";*/
  }


function change() {
  let rng = document.getElementById('size');
  let div = document.getElementById('testBlock');
  div.style.width = rng.value+'px';
  div.style.height = rng.value+'px';
}


  