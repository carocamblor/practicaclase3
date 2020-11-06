window.addEventListener('load', function() {
    
    var form = document.querySelector('.contact-form')
    //var fullName = document.querySelector('#fullName')
    var email = document.querySelector('#email')
    var errorTelefono = document.querySelector('#errorTelefono')
    var errorMail = document.querySelector('#errorMail')

    /*
    form.addEventListener('submit', function(event){
        var errores = '';
        if (email.value === '') {
            
        }
    })*/

    email.addEventListener("blur", function(event){
        if (!email.value.includes('@')) {
            // alert('kjdaksj')
            errorMail.innerHTML = 'esto no es una direccion de mail'
            errorMail.style.display = 'block'
        }
    })

    email.addEventListener("blur", function(event){
        if (!email.value.includes('@')) {
            // alert('kjdaksj')
            errorMail.innerHTML = 'esto no es una direccion de mail'
            errorMail.style.display = 'block'
        }
    })
    
    

    /*
    
    email.addEventListener("blur", function(){
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(value)){
         alert("La dirección de email " + value + " es correcta.");
        } else {
         alert("La dirección de email es incorrecta.");
        }
      }
      

    //var phone = document.querySelector('#phone')
  //  var password = document.querySelector('#password')
    //var rePassword = document.querySelector('#rePassword')
/*
    form.addEventListener('submit', function(event){
        if (fullName.value == '') {
            event.preventDefault()
           // alert('todo mal')
            fullName.classList.add('is-invalid')
        }
    })*/
    
    var elementosForm = form.elements;
    var elementosDelFormEnArray = Array.from(elementosForm)
    elementosDelFormEnArray.pop();

    elementosDelFormEnArray.forEach(function(element) {
        element.addEventListener("blur", function(event){
            if (this.value == "") {
                this.classList.add('is-invalid');
            }
        })
        
    });


    /*

    elementosDelFormEnArray.forEach(element => {
        element.addEventListener("submit", function(){
            alert('dfjdk')
            if (this.value === "") {
                alert('hola')
                this.classList.add('is-invalid')
            }
        })
    });*/

})