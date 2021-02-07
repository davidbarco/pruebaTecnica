"use strict";

/* boton positivo */
const like= document.getElementById("like");
/* boton negativo */
const nolike= document.getElementById("noLike");
/* caja principal */
const principal= document.getElementById("principal");
/* caja de voto positivo */
const votoPositivo= document.getElementById("votoPositivo");
/* caja de voto negativo */
const votoNegativo = document.getElementById("votoNegativo");
/* boton de volver a votar desde positivo */
const volver= document.getElementById("Volver");
/* boton de volver a votar desde negativo */
const volverN= document.getElementById("VolverN");
/* para registrar los votos en las barras */
const barra1= document.getElementById("barra1");
const barra2 = document.getElementById("barra2");
const porcentaje1 = document.getElementById("porcentaje1");
const porcentaje2 = document.getElementById("porcentaje2");


localStorage.setItem("porcentaje1", "50")
localStorage.setItem("porcentaje2", "50")
/* funcion para votar en positivo */
like.addEventListener("click", function(){
   
    principal.classList.add("cerrarP");
    votoPositivo.classList.remove("positivo");
    
    let parseo1 = parseInt(localStorage.getItem("porcentaje1"));
    let valor1 =  parseo1 + 1;

    let parseo2 = parseInt(localStorage.getItem("porcentaje2"));
    let valor2 =  parseo2 - 1;
    
   /*  console.log(valor1)
    console.log(valor2) */
    let porcentajeBarra1 = barra1.style.width = valor1 + "%";
    let porcentajeBarra2 = barra2.style.width = valor2 + "%";
    
    localStorage.setItem("porcentaje1", porcentajeBarra1)
    localStorage.setItem("porcentaje2", porcentajeBarra2)
    
    porcentaje1.innerHTML= porcentajeBarra1;
    porcentaje2.innerHTML= porcentajeBarra2;
   
})
/* funcion para volver */
volver.addEventListener("click", function(){
    principal.classList.remove("cerrarP");
    votoPositivo.classList.add("positivo");
})
/* funcion para volver desde voto negativo */
volverN.addEventListener("click", function(){
    principal.classList.remove("cerrarP");
    votoNegativo.classList.add("negativo");
    
})
/* funcion para votar en negativo */
nolike.addEventListener("click", function(){

    principal.classList.add("cerrarP");
    votoNegativo.classList.remove("negativo");
    let parseo1 = parseInt(localStorage.getItem("porcentaje1"));
    let valor1 =  parseo1 - 1;

    let parseo2 = parseInt(localStorage.getItem("porcentaje2"));
    let valor2 =  parseo2 + 1;
    
    let porcentajeBarra1 = barra1.style.width = valor1 + "%";
    let porcentajeBarra2 = barra2.style.width = valor2 + "%";
    
    localStorage.setItem("porcentaje1", valor1)
    localStorage.setItem("porcentaje2", valor2)
    
    porcentaje1.innerHTML= porcentajeBarra1;
    porcentaje2.innerHTML= porcentajeBarra2;
    
})












