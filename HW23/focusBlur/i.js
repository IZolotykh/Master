const form = document.getElementById('textForm');

form.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';    
}, true);

form.addEventListener('blur', (event) => {
  event.target.style.background = '';    
}, true);