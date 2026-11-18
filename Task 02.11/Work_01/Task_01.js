const glavnyyZagolovok = document.getElementById('glavnyy-zagolovok');
console.log("заголовок этапа:", glavnyyZagolovok);

const blokDetaley = document.getElementById('blok-detaley');
console.log("блок с деталями:", blokDetaley);

const opisaniyaEtapa = document.getElementsByClassName('opisanije-etapa');
console.log("пункты по этапу:", opisaniyaEtapa);

const punktyPlana = document.getElementsByTagName('li');
console.log("этапы работ:", punktyPlana);

const pervyyPunkt = document.querySelector('li');
console.log("первый этап:", pervyyPunkt);

const vseAbzacy = document.querySelectorAll('p');
console.log("все абзацы:", vseAbzacy);

const vseOpisaniya = document.querySelectorAll('.opisanije-etapa');
console.log("абзацы по этапу:", vseOpisaniya);
