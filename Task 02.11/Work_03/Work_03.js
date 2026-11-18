let pervyyUzel = document.querySelector("#pervyy-uzel");
let roditel = pervyyUzel.parentElement;

console.log("родитель узла:", roditel);
console.log("дочерние элементы родителя:", roditel.children);
console.log("первый дочерний:", roditel.firstElementChild);
console.log("последний дочерний:", roditel.lastElementChild);
console.log("следующий сосед:", roditel.nextElementSibling);

let blokDopolneniy = document.querySelector("#blok-dopolneniy");
console.log("предыдущий сосед блока дополнений:", blokDopolneniy.previousElementSibling);
