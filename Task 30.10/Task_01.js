const kanalPervyy = ['kolya', 'sveta', 'kolya', 'grigoriy', 'nastya'];
const kanalVtoroy = ['sveta', 'kolya', 'artem', 'nastya', 'sveta'];

const unikalnyePervogo = new Set(kanalPervyy);
console.log("кто подписан на первый:", unikalnyePervogo);

console.log("сколько их:", unikalnyePervogo.size);

console.log("есть ли грыга:", unikalnyePervogo.has('grigoriy'));

const vsePodpischiki = new Set([...kanalPervyy, ...kanalVtoroy]);

console.log("вообще все люди:", [...vsePodpischiki]);
