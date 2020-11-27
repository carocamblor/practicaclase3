window.onload = function () {
    
    var section = document.querySelector('section')

    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=e57721559c7ea59e5e81582798c16c18&language=en-US`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
    
            for (let i = 0; i < data.genres.length; i++) {
                var genero = data.genres[i];
    
                section.innerHTML +=
                `
                <h1>${genero.name}</h1>

                <div class="uk-position-relative uk-visible-toggle uk-light uk-height-medium slider" uk-slider="sets: true" tabindex="-1" uk-slider>

                <ul id="${genero.id}" class="uk-slider-items uk-height-1-1 uk-grid">
                </ul>

                <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
                <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
    
                </div>
                `

                fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${genero.id}`)
                .then(function (response) {
                    return response.json()
                })
                .then(function (data) {
                    console.log(data);
            
                    for (let i = 0; i < data.results.length; i++) {
                        var pelicula = data.results[i];
                        
                        var ul = document.querySelector(`#${genero.id}`);
            
                        ul.innerHTML +=
                        `
                        <li>
                            <a href="movies_detail.html"> 
                                <div class="uk-panel">
                                    <img src="${imgURL + pelicula.poster_path}" alt="${pelicula.title}">
                            </a>
                        </li>`
                    };
    
                    })
                    .catch(function (error) {
                        console.log(`el error fue ${error}`)
                    })
                }

    
        })
        .catch(function (error) {
            console.log(`el error fue ${error}`)
        })
    
}
