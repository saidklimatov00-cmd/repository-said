const elementPoId = document.getElementById('glavnyy-zagolovok');
console.log("элемент по id:", elementPoId);

const elementPoKlassu = document.getElementsByClassName('punkt-reglamenta');
console.log("элементы по классу:", elementPoKlassu);

const elementPoTegu = document.getElementsByTagName('li');
console.log("элементы по тегу:", elementPoTegu);

const pervyyCherezSelektor = document.querySelector('p');
console.log("первый абзац через селектор:", pervyyCherezSelektor);

const vseCherezSelektor = document.querySelectorAll('p');
console.log("все абзацы через селектор:", vseCherezSelektor);
