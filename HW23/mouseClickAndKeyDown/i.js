document.addEventListener('keydown', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}

document.addEventListener('click', () => {alert('Ho-ho-ho! Merry Christmas!!! Теперь ты точно у нас под "колпаком", дружочек!!!')});

const button = document.querySelector('button');

button.addEventListener('click', () => {alert('Даже не пытайся!!!')});