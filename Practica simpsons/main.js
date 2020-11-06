window.addEventListener('load', function() {

   var titulo = document.querySelector("#titulo");

   var saludo = document.querySelector("#saludo");

   var span = document.querySelector(".bienvenida span");;

   var bienvenida= document.querySelector(".bienvenida");

   var personajes= document.querySelector(".personajes");


   /* Evento para el título */
   titulo.addEventListener("mouseover", function(){
      var nombre= prompt("¿Cómo te llamas?");
      if (nombre=="") {saludo.innerHTML= ("¡Bienvenido a la pagina!")
         
      }else{saludo.innerHTML=(`¡Bienvenido ${nombre}!` )
      saludo.style.textTransform="uppercase";
      titulo.style.display="none";
      span.style.display="block"


      }

   })


   /* Evento para el span */
   span.addEventListener("click", function() {
   bienvenida.style.display="none";
   personajes.style.display="flex";


   })


   /* Capturar pesonajes */
   var bart= document.querySelector("#bart");
   var lisa= document.querySelector("#lisa");
   var homero= document.querySelector("#homero");
   var marge= document.querySelector("#marge");
   var maggie= document.querySelector("#maggie");
   var milhouse= document.querySelector("#milhouse");
   var burns= document.querySelector("#burns");
   var bobPatinio= document.querySelector("#bobPatinio");
   var flanders= document.querySelector("#flanders");
   var duffman= document.querySelector("#duffman");
   var gorgory= document.querySelector("#gorgory");
   var nelson= document.querySelector("#nelson");

   /* Asignarle a cada personaje su evento correspondiente, así como también su funcionalidad */

  bart.addEventListener("click", function(){
      this.classList.toggle('personaje-seleccionado');
  })

  lisa.addEventListener("dblclick", function() {
     this.classList.toggle('personaje-seleccionado');
  })

  homero.addEventListener("click", function() {
     this.classList.toggle('personaje-seleccionado');
  })

  marge.addEventListener("mouseover", function() {
     this.classList.toggle('personaje-seleccionado');
  })

  maggie.addEventListener("mouseout", function() {
     this.classList.toggle('personaje-seleccionado');
   })

   milhouse.addEventListener("click", function() {
      this.classList.toggle('personaje-seleccionado');
   })

   burns.addEventListener("mouseover", function() {
      this.classList.toggle('personaje-seleccionado');
   })

   bobPatinio.addEventListener("dblclick", function() {
      this.classList.toggle('personaje-seleccionado');
   })

   flanders.addEventListener("mouseover", function() {
      this.classList.toggle('personaje-seleccionado');
   })

   duffman.addEventListener("dblclick", function() {
      this.classList.toggle('personaje-seleccionado');
   })

   gorgory.addEventListener("mouseover", function() {
      this.classList.toggle('personaje-seleccionado');
   })

   nelson.addEventListener("click", function() {
      this.classList.toggle('personaje-seleccionado');
   })
   
   var boton = document.querySelector('.boton');

   /* Asignarle evento a la variable boton */

   boton.addEventListener('click', function(){
      var todosLosEleentosPintados = document.querySelectorAll('.personaje-seleccionado');
      for (let i = 0; i < todosLosEleentosPintados.length; i++) {
         const unPersonaje = todosLosEleentosPintados[i];
         
         console.log(unPersonaje.id)
      }
   })
}) 