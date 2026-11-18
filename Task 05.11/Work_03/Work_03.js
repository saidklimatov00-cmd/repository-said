let perechenEtapov = document.querySelector("#perechen-etapov");

let etapPervyy = document.createElement("li");
etapPervyy.textContent = "Согласование";

let etapVtoroy = document.createElement("li");
etapVtoroy.textContent = "Разработка";

let etapTretiy = document.createElement("li");
etapTretiy.textContent = "Сдача";

perechenEtapov.append(etapPervyy, etapVtoroy, etapTretiy);
