let zagolovokOtcheta = document.querySelector("#zagolovok-otcheta");

document.querySelector("#cvet-teksta")
.addEventListener("click", function() {
    zagolovokOtcheta.style.color = "darkred";
});

document.querySelector("#fon-stranicy")
.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightgray";
});
