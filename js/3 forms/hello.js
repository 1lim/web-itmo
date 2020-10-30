document.write('Имена всех чётных форм: <br>')
for (let i = 1; i < 10; i = i + 2) {
	document.write(document.forms[i].getAttribute('name') + '<br>');
}

let newOption1 = new Option('Рассрочка', 'plan');
document.getElementById('q1').append(newOption1);
let newOption2 = new Option('Кредит', 'credit');
document.getElementById('q1').append(newOption2);
newOption2.selected = true;

let newTd = document.createElement('td');
newTd.innerHTML = '<input name = "newInput" type="text"></input>'
document.querySelector('form[name="two"] > table > tr').append(newTd);
console.log(document.querySelector('form[name="two"]'));
let newInput = document.createElement('input');
document.getElementById('two')
document.body.append(newTd);

