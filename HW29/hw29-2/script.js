const form = document.getElementById('textForm');

form.addEventListener('focus', (event) => {
  event.target.style.background = 'lightblue';    
}, true);

form.addEventListener('blur', (event) => {
  event.target.style.background = '';    
}, true);

document.querySelector('button').addEventListener('click', onSubmit);

window.onload = function() {
  if (localStorage.length) {
    let values = document.querySelectorAll('input');
    for (let i = 0; i < values.length; i++) {
      if (values[i].type === 'text')
        values[i].setAttribute('value', localStorage[values[i].name]);
      else {
        if (localStorage[values[i].name] === 'true')
          values[i].setAttribute('checked', localStorage[values[i].name]);
      }
    }
  }
};

function onSubmit() {
  let values = document.querySelectorAll('input');
  for (let i = 0; i < values.length; i++) {
    if (values[i].type === 'text')
        localStorage.setItem(values[i].name, values[i].value);
    else
        localStorage.setItem(values[i].name, values[i].checked);
  }
}