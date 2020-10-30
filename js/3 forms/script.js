for (i = 0; i < 10; i++) {
	let form = document.createElement('form');
	form.id = 'formId' + i;
	form.name = 'formName' + i;
	document.body.append(form);
}

for (i = 0; i < 10; i++) {

	let textInput = document.createElement('input');
	textInput.type = 'text';
	textInput.name = 'textInput' + i;
	document.forms[i].append(textInput);

	let sendButton = document.createElement('input');
	sendButton.type = 'submit';
	sendButton.name = 'send' + i;
	sendButton.value = 'Отправить';
	document.forms[i].append(sendButton);
	sendButton.onmouseleave = function(){
		this.style.backgroundColor = "#fff";
	};	
	sendButton.onmouseenter = function(){
		this.style.backgroundColor = '#FFD547';
	};

	let selectInput = document.createElement('select');
	selectInput.name = 'select'+i;
	let option1 = new Option('Опция1', 'option1');
	let option2 = new Option('Опция2', 'option2');
	selectInput.append(option1);
	selectInput.append(option2);
	document.forms[i].append(selectInput);
	selectInput.onmouseleave = function(){
		this.style.backgroundColor = "#fff";
	};	
	selectInput.onmouseenter = function(){
		this.style.backgroundColor = '#FFD547';
	};

	let nameButton = document.createElement('input');
	nameButton.type = 'submit';
	nameButton.name = 'showName' + i;
	nameButton.value = 'Показать имя формы';
	nameButton.addEventListener('click', () => alert(nameButton.parentElement.name));
	document.forms[i].append(nameButton);
	nameButton.onmouseleave = function(){
		this.style.backgroundColor = "#fff";
	};	
	nameButton.onmouseenter = function(){
		this.style.backgroundColor = '#FFD547';
	};

	let ownButton = document.createElement('input');
	ownButton.type = 'submit';
	ownButton.name = 'showId' + i;
	ownButton.value = 'Принадлежность';
	ownButton.addEventListener('click', () => alert(ownButton.parentElement.id));
	document.forms[i].append(ownButton);
	ownButton.onmouseleave = function(){
		this.style.backgroundColor = "#fff";
	};	
	ownButton.onmouseenter = function(){
		this.style.backgroundColor = '#FFD547';
	};

	let clearButton = document.createElement('input');
	clearButton.type = 'submit';
	clearButton.name = 'clear' + i;
	clearButton.value = 'Очистить';
	clearButton.addEventListener('click', () => clearButton.parentElement.reset());
	document.forms[i].append(clearButton);
	clearButton.onmouseleave = function(){
		this.style.backgroundColor = "#fff";
	};	
	clearButton.onmouseenter = function(){
		this.style.backgroundColor = '#FFD547';
	};

	let fieldsCount = document.createElement('input');
	fieldsCount.type = 'submit';
	fieldsCount.name = 'fieldsCount' + i;
	fieldsCount.value = 'Показать количество полей';
	fieldsCount.addEventListener('click', () => alert(fieldsCount.parentElement.getElementsByTagName('input').length+1));
	document.forms[i].append(fieldsCount);
	fieldsCount.onmouseleave = function(){
		this.style.backgroundColor = "#fff";
	};	
	fieldsCount.onmouseenter = function(){
		this.style.backgroundColor = '#FFD547';
	};

}
for (i = 1; i <= 10; i++){
	let sendIcon = document.createElement('i');
	sendIcon.className = 'fa fa-envelope';
	document.querySelectorAll('input[name^=send]')[i-1].before(sendIcon);
	let showNameIcon = document.createElement('i');
	showNameIcon.className = 'fa fa-vcard';
	document.querySelectorAll('input[name^=showName]')[i-1].before(showNameIcon);
	let showIdIcon = document.createElement('i');
	showIdIcon.className = 'fa fa-user-circle';
	document.querySelectorAll('input[name^=showId]')[i-1].before(showIdIcon);
	let clearIcon = document.createElement('i');
	clearIcon.className = 'fa fa-eraser';
	document.querySelectorAll('input[name^=clear]')[i-1].before(clearIcon);
	let fieldsCountIcon = document.createElement('i');
	fieldsCountIcon.className = 'fa fa-pie-chart';
	document.querySelectorAll('input[name^=fieldsCount]')[i-1].before(fieldsCountIcon);
}

document.write('Имена всех нечётных форм: ');
for (let i = 0; i < 10; i++) {
	if (i % 2 !== 0) {
		document.write(document.forms[i].name + ', ');
	}
}
