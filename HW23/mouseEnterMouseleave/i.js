let enterEventCount = 0;
let leaveEventCount = 0;
const mouseTarget = document.getElementById('mouseTarget');
const unorderedList = document.getElementById('unorderedList');

mouseTarget.addEventListener('mouseenter', e => {
  mouseTarget.style.border = '5px dotted red';
  mouseTarget.style.backgroundColor = 'orange';
  enterEventCount++;
  addListItem(' ');
  addListItem('Отлично! Новая коробка! Коробок в заказе: ' + enterEventCount + '.');
});

mouseTarget.addEventListener('mouseleave', e => {
  mouseTarget.style.border = '1px solid #333';
  mouseTarget.style.backgroundColor = 'white';
  leaveEventCount++;
  addListItem('Поздравляю!!! Пиццы много не бывает! Коробок в заказе: ' + leaveEventCount+0 + '.');
});

function addListItem(text) {
  
  let newTextNode = document.createTextNode(text);
  let newListItem = document.createElement("li");
  newListItem.appendChild(newTextNode);
  unorderedList.appendChild(newListItem);  
}