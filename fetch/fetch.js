window.onload = function(){
  var apiKey = "mfXLwmWUeXozXAJQw84JPoMPgPrTkc84"  
fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`)

.then(function(response) {

  return response.json()

})

.then(function(data) {

  console.log(data);
  var nombre = data.title;
  var url = data.url
  var gifSeleccionado= document.querySelector (".gif")
  gifSeleccionado.innerHTML = contenido
  var contenido =`<img src="${url}" alt="el gif">`
 

})

.catch(function(error) {

  console.log("Error: " + error);

})
fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25&rating=g)`
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  data.forEach(element => {
    var divTrending= document.querySelector(".trending")
    divTrending.innerHTML= 
  });
})
.catch(function(error) {
  console.log("Error: " + error);
})



}