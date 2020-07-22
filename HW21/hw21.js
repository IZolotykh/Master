// Домашнее задание # 21, выполнил: Золотых Илья.

// Задание 1: Функция, возвращающая объект, и меняющая местами ключ <-> значение.
// исходный объект должен остаться неизменным.
// Уровень 1: Работа с конкретныйм объектом и конкретными его свойствами

const firstObject = {
  'one': 'number',
};

function resolve1(inputObject) {
 let temp = {
   'number': 'one',
 }
 return temp;
};

const result1 = resolve1(firstObject);
console.log(result1); // ожидаемый результат { 'number': 'one' }
console.log(firstObject); // ожидаемый результат { 'one': 'number' }


// Уровень 2: Работа с любым объектом БЕЗ вложенных объектов внутри
// и любым количеством свойствам
// Данный объект. Должен остаться неизменным
const secondObject = {
  'apple': 'fruit',
  'potato': 'vegetable',
  'strawberry': 'berry',
};



function resolve2(inputObject) {
  let tempor = Object.keys(secondObject);
    
  let tempor2 = Object.values(secondObject);
   
  let obj = {};
  for(let i = 0; i < tempor2.length; i++) {
    obj[tempor2[i]] = tempor[i];
  }
  
  return obj;
};

const result2 = resolve2(secondObject);
console.log(secondObject); 
// ожидаемый результат: { 'apple': 'fruit', 'potato': 'vegetable', 'strawberry': 'berry' }

console.log(result2);
// ожидаемый результат { 'fruit': 'apple', 'vegetable': 'potato', 'berry': 'strawberry' }


// Задание 2. Написать функцию, возвращающую век, соответствующий данному году
// Использовать Глобальный объект Math

const year = 1905;
centuryFromYear(year); // 20

function centuryFromYear(year) {
  let a = year/100;
  let b = Math.ceil(a);
  console.log(b);
};

const year2 = 1700;
centuryFromYear(year2); // 17.

function centuryFromYear(year2) {
  let a = year2/100;
  let b = Math.ceil(a);
  console.log(b);
};