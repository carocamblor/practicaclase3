window.addEventListener('load', function(){
    
    var apiKey = "mfXLwmWUeXozXAJQw84JPoMPgPrTkc84"

    var body = document.querySelector('body')
    var queryString = location.search
    var queryStringObj = new URLSearchParams(queryString)

    var gifSeleccionado = queryStringObj.get('id')

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=mfXLwmWUeXozXAJQw84JPoMPgPrTkc84&q=${gifSeleccionado}&limit=25&offset=0&rating=g&lang=en`)

    .then(function(response) {
    
      return response.json()
    
    })
    
    .then(function(data) { 
        body.innerHTML += `
        <img src="${data.data.images.original.url}" alt="">
        `
    })
    
    .catch(function(error) {
    
      console.log("Error: " + error);
    
    })

})