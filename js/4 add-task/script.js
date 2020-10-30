let a = document.createElement('a');
a.href = 'http://firstlink.qq';
a.innerHTML = 'текст ссылки';
// document.body.prepend(a);

let b = document.createElement('a');
b.href = 'http://firstlink.qq';
b.innerHTML = 'текст ссылки';

let c = document.createElement('a');
c.href = 'http://firstlink.qq';
c.innerHTML = 'текст ссылки';

let d = document.createElement('a');
d.href = 'http://firstlink.qq';
d.innerHTML = 'текст ссылки';

let e = document.createElement('a');
e.href = 'http://firstlink.qq';
e.innerHTML = 'текст ссылки';

let f = document.createElement('a');
f.href = 'http://firstlink.qq';
f.innerHTML = 'текст ссылки';

let g = document.createElement('a');
g.href = 'http://secondlink.qq';
g.innerHTML = 'другой текст ссылки';

let h = document.createElement('a');
h.href = 'http://secondlink.qq';
h.innerHTML = 'другой текст ссылки';

let i = document.createElement('a');
i.href = 'http://secondlink.qq';
i.innerHTML = 'другой текст ссылки';

let j = document.createElement('a');
j.href = 'http://thirdlink.qq';
j.innerHTML = 'совсем другой текст ссылки';

let linksArray = [a, b, c, d, e, f, g, h, i, j];
let table = document.createElement('table');
document.body.prepend(table);
let count1=0, count2=0, count3=0;
for (i = 0; i < 10; i++) {
	if (linksArray[i].href == "http://firstlink.qq/") {
		count1++;
	} else if (linksArray[i].href == 'http://secondlink.qq/') {
		count2++;
	} else if (linksArray[i].href == 'http://thirdlink.qq/') {
		count3++;
	}
}

for (let i = 0; i < linksArray.length; i++) {
	let tr = document.createElement('tr');
	table.appendChild(tr);
	let td1 = document.createElement('td');
	td1.innerHTML = linksArray[i].innerHTML;
	tr.appendChild(td1);
	let td2 = document.createElement('td');
	td2.innerHTML = linksArray[i].href;
	tr.appendChild(td2);
}



