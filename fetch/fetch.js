window.onload = function(){
    
fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`)

.then(function(response) {

  return response.json()

})

.then(function(data) {

  console.log(data);
  var nombre = `${this.title}`
  var url = `${this.url}`

})

.catch(function(error) {

  console.log("Error: " + error);

})

}