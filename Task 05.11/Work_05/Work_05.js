let polePorucheniya = document.querySelector("#pole-porucheniya");
let knopkaDobavleniya = document.querySelector("#knopka-dobavleniya");
let spisokPorucheniy = document.querySelector("#spisok-porucheniy");
let schetchik = document.querySelector("#schetchik");

knopkaDobavleniya.addEventListener("click", function() {
    let tekstPorucheniya = polePorucheniya.value;
    
    if (tekstPorucheniya !== "") {
        let novoePoruchenie = document.createElement("li");
        novoePoruchenie.textContent = tekstPorucheniya;
        
        let knopkaSnyatiya = document.createElement("button");
        knopkaSnyatiya.textContent = "Снять";
        
        knopkaSnyatiya.addEventListener("click", function() {
            novoePoruchenie.remove();
            obnovitSchetchik();
        });
        
        novoePoruchenie.append(knopkaSnyatiya);
        spisokPorucheniy.append(novoePoruchenie);
        
        polePorucheniya.value = "";
        obnovitSchetchik();
    }
});

function obnovitSchetchik() {
    let vsePorucheniya = document.querySelectorAll("#spisok-porucheniy li");
    schetchik.textContent = "Поручений: " + vsePorucheniya.length;
}
