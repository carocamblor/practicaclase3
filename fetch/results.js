window.addEventListener('load', function(){
    
    var apiKey = "mfXLwmWUeXozXAJQw84JPoMPgPrTkc84"

    
    var searchResults = document.querySelector('.search-results ul')
    var queryString = location.search
    var queryStringObj = new URLSearchParams(queryString)

    var gifBuscado = queryStringObj.get('q')

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=mfXLwmWUeXozXAJQw84JPoMPgPrTkc84&q=${gifBuscado}&limit=25&offset=0&rating=g&lang=en`)

    .then(function(response) {
    
      return response.json()
    
    })
    
    .then(function(data) { 
      for (let i = 0; i < data.data.length; i++) {
        const element = data.data[i];
        console.log(element)
          searchResults.innerHTML += `
          <li>
            <a href="detallesgifs.html">${element.title}</a>
            <img src="${element.images.original.url}" alt="">
          </li>
          `
      }
    })
    
    .catch(function(error) {
    
      console.log("Error: " + error);
    
    })

})