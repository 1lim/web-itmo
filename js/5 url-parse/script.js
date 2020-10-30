let u = new URL('http://a:b@example.com:890/path/wah@t/foo.js?foo=bar&bingobang=&king=kong@kong.com#foobar/bing/bo@ng?bang');
// u = new URL('https://vk.com/im?peers=c1&sel=562921986');
document.write('<i><u>Link:</u></i> ' + u.href + '<br>');
document.write('<i><u>Protocol:</u></i> ' + u.protocol + '<br>');
document.write('<i><u>Username:</u></i> ' + u.username + '<br>');
document.write('<i><u>Password:</u></i> ' + u.password + '<br>');
document.write('<i><u>Host:</u></i> ' + u.host + '<br>');
document.write('<i><u>Hostname:</u></i> ' + u.hostname + '<br>');
document.write('<i><u>Port:</u></i> ' + u.port + '<br>');
document.write('<i><u>Pathname:</u></i> ' + u.pathname + '<br>');
document.write('<i><u>Search:</u></i> ' + u.search + '<br>');
document.write('<i><u>Hash:</u></i> ' + u.hash + '<br>');

let indexOfDot = u.hostname.indexOf('.');
let lastIndexOfSlash = u.pathname.lastIndexOf('/');
let file = (lastIndexOfSlash !== 0) ? u.pathname.slice(lastIndexOfSlash+1) : '';
let fileDotIndex = file.indexOf('.');

let urlObject = {
	protocol: u.protocol,
	domainname: u.hostname.slice(0,indexOfDot),
	domain: u.hostname.slice(indexOfDot+1),
	port: u.port,
	path: (lastIndexOfSlash !== 0) ? u.pathname.slice(0, lastIndexOfSlash) : u.pathname,
	file: file.slice(0, fileDotIndex),
	extension: file.slice(fileDotIndex+1),
}
urlObject.parameters = []; let key = {}; //let type;

for(let [name, value] of u.searchParams) {
  key = new Param(name, value, value);
  urlObject.parameters.push(key);
 };

console.log(urlObject);

function Param(name, value, type){
	this.name = name;
	this.value = value;
	this.type = typeof(type);
}