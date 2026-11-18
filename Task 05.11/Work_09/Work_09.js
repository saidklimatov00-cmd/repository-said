let knopkaObychnaya = document.querySelector("#obychnaya-funkciya");
let knopkaStrelochnaya = document.querySelector("#strelochnaya-funkciya");

knopkaObychnaya.addEventListener("click", function(sobytie) {
    console.log("Обычная this:", this);
    console.log("Обычная event.currentTarget:", sobytie.currentTarget);
});

knopkaStrelochnaya.addEventListener("click", (sobytie) => {
    console.log("Стрелочная this:", this);
    console.log("Стрелочная event.currentTarget:", sobytie.currentTarget);
});
