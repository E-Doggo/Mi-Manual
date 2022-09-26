let buttonColor = document.querySelector("#color");
let buttonSelectores = document.querySelector("#selector");
let buttonClases = document.querySelector("#pseudoClases");
let buttonElementos = document.querySelector("#pseudoElementos");

buttonColor.addEventListener("click", (event) =>{
    event.preventDefault();
    $('#toChange').load("../txt's/colores.txt");
}) 

buttonSelectores.addEventListener("click", (event) =>{
    event.preventDefault();
    $('#toChange').load("../txt's/selectores.txt");
}) 

buttonClases.addEventListener("click", (event) =>{
    event.preventDefault();
    $('#toChange').load("../txt's/clases.txt");
}) 

buttonElementos.addEventListener("click", (event) =>{
    event.preventDefault();
    $('#toChange').load("../txt's/elementos.txt");
}) 