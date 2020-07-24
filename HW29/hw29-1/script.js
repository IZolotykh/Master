const form = document.getElementById('textForm');

form.addEventListener('focus', (event) => {
  event.target.style.background = 'lightblue';    
}, true);

form.addEventListener('blur', (event) => {
  event.target.style.background = '';    
}, true);


const button = document.querySelector('button');

button.addEventListener('click', buttonClick());

function buttonClick() {
  let values = document.querySelectorAll('input');
  for (let i = 0; i < values.length; i++) {
    if (values[i].type === 'text')
        document.cookie = `${values[i].name}=${values[i].value}`;
    else
        document.cookie = `${values[i].name}=${values[i].checked}`;
  }
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : '';
}


window.onload = function() {
  let values = document.querySelectorAll('input');
  for (let i = 0; i < values.length; i++) {
    if (values[i].type === 'text')
      values[i].setAttribute('value', getCookie(values[i].name));
    else {
      if (getCookie(values[i].name) === 'true')
        values[i].setAttribute('checked', getCookie(values[i].name));
    }
  }
};
