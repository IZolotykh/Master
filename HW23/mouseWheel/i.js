function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.0001;

  scale = Math.min(Math.max(.125, scale), 4);

  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('div');
el.onwheel = zoom;

const elem = document.querySelector('p');
elem.onwheel = zoom;