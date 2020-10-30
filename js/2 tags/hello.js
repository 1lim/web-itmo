let anchors = document.querySelectorAll('a[href^="#"]');
let links = document.querySelectorAll('a')
document.write('<br> Количество анкоров: ' + anchors.length);
document.write('<br> Количество ссылок: ' + (links.length - anchors.length));
let q = document.querySelectorAll('a[href="#one"]');
console.log(q);
document.write('<br> Содержимое первого анкора: ' + document.getElementById('firstanchor').innerHTML);
let images = document.querySelectorAll('img');
document.write('<br> Количество изображений: ' + images.length);
document.write('<br> Ширина первой картинки: ' + Array.from(images)[0].width + ' px');
let imageMaxWidth = 0;
for (let i = 0; i <= images.length - 1; i++) {
	currentWidth = Array.from(images)[i].width;
	if (currentWidth > imageMaxWidth) imageMaxWidth = currentWidth;
}
document.write('<br> Максимальная ширина картинки: ' + imageMaxWidth + ' px');
let imageHeightSum = 0;
for (let i = 0; i < images.length; i++) {
	imageHeightSum += Array.from(images)[i].height;
}
document.write('<br> Сумма высот всех картинок: ' + imageHeightSum + ' px');