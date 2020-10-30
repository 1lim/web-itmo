let string = 'Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Non, rem.';
document.write(string);
document.write('<br> Длина строки: ' + string.length);
let wordCount = 0, spaceSymbol = ' ', position = 0;

while (true) {
	let foundPos = string.indexOf(spaceSymbol, position);
	wordCount++;
	if (foundPos == -1) break;
	position = foundPos + 1;
}
document.write('<br> Количество слов: ' + wordCount);

document.write('<br> Количество букв: ' + string.match(/\w/gmi).length);

let urlAddress = '' + window.location;

document.write('<br> URL этой страницы: ' + urlAddress);
let protocolPos = urlAddress.indexOf(':');
let protocol = urlAddress.slice(0, protocolPos);
document.write('<br> Протокол: ' + protocol);
document.write('<br> Имя файла и расширение: ' + window.location.pathname.slice(1));

let url = new URL(urlAddress);
let paramString = '' + url.searchParams;
document.write('<br>' + url.searchParams);

let paramObject = {};

let key, value, pos1 = 0, pos2 = 0, pos3 = 0;

while (true) {
	pos1 = paramString.indexOf('=', pos3);
	if (pos1 == -1) break;
	key = paramString.slice(pos3, pos1);
	pos2 = paramString.indexOf('&', pos1);
	if (pos2 == -1) pos2 = paramString.length;
	value = paramString.slice(pos1 + 1, pos2);
	pos3 = pos2 + 1;
	document.write('<br>' + key + ' => ' + value);
	paramObject[key] = value;
	if (pos2 == -1) break;
}
console.log(paramObject);
