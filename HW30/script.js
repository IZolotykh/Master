const button = document.querySelector('button');
let numberSection = document.querySelector('.divNumber');

button.addEventListener('click', () => {
const userNumber = Number(window.prompt("Пожалуйста, введите число", ""));
const scndPage = window.frames[0].document.querySelector('body');
scndPage.innerText = userNumber;
numberSection.innerText = +scndPage.innerText + 1;
});

window.onbeforeunload = function() {
	return true;
};