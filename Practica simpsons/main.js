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
  alert("me hicieron click")
  })
   
   var boton = ___________________;

   /* Asignarle evento a la variable boton */


}) 