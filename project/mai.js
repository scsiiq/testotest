//создаем переменные, которые будут получать данные от пользователя
var money = "Ваш бюджет на месяц?";
var time = "Введите дату в формате YYYY-MM-DD";

//создаем объект, который будет содержать такие данные
var appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
}

//выводим на экран вопросы для ввода ответа, и в конце считает рассчет бюджета
appData.budget = prompt(money);
appData.timeData = prompt(time);
appData.optionalExpenses.article = prompt('Введите обязательную статью расходов в этом месяце');
appData.optionalExpenses.howMany = prompt('Во сколько обойдется?');

alert("Ваш бюджет на 1 день равняется " + appData.budget / 30);

console.log(appData.budget);
console.log(appData.timeData);
console.log(appData.optionalExpenses.article);
console.log(appData.optionalExpenses.howMany);
