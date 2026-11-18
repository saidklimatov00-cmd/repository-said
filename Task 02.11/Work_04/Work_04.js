let ssylka = document.querySelector("a");

console.log("куда ведёт ссылка:", ssylka.getAttribute("href"));

ssylka.setAttribute("href", "https://example.com");

console.log("атрибут href на месте?:", ssylka.hasAttribute("href"));

ssylka.removeAttribute("target");
