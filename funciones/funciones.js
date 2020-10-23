window.onload = function(){
/*
console.log('hola')

function bienvenida(nombre){
    var nombreRegistrado = "caro"
    if (nombre == nombreRegistrado) {
        console.log(`Bienvenido ${nombre}`)
    }else{
        console.log(`sori no`)
    }
}

bienvenida("caro")

var num = parseInt(prompt("ingrese un numero"));

function medallaSegunPuesto(num){
    var rank;
    switch (num) {
        case 1:
            rank = 'oro'
            break;
        case 2:
            rank = 'plata'
            break;
        case 3:
            rank = 'bronce'
            break;
        default:
            rank = 'nada'
    } 
    return rank
}

alert(medallaSegunPuesto(num))

var numero = parseInt(prompt("ingrese un numero"));

function signo(numero){
    if (numero > 0) {
        return 1
    }else if (numero < 0){
        return -1
    }else{
        return 0
    }
}
*//*

//console.log(signo(numero))

var num1 = 8
var num2 = 4

if (num1 > num2) {
    console.log(`el numero mayor es ${num1}`)
}else if (num2 > num1){
    console.log(`el numero mayor es ${num2}`)
}

var edad = parseInt(prompt("ingrese su edad"));

function esMayor(edad){
    if(edad > 18){
        console.log('eres mayor')
    }else{
        console.log('menor')
    }
}

esMayor(edad)*/

function holaMundo(lenguaje){
    switch (lenguaje) {
        case "en":
            return "hello"
            break;
        case "fr":
            return "salut"
            break;
        default:
            return "hola"
            break;
    }

}

var lenguaje = "en"

var saludo = document.querySelector('#saludo')
    saludo.innerHTML = holaMundo(lenguaje)

var dinero = 1000
var gastos = 200
var premio = 3000

function actualizaDinero(dinero,gastos,premio){
    console.log(`cantidad inicial de dinero: ${dinero}`)
    console.log(`luego de restar los gastos de ${gastos}, la nueva cantidad de dinero es ${dinero - gastos}`)
    console.log(`Luego de obtener el premio de ${premio}, la cantidad de dinero es: ${premio + dinero - gastos}.`)
}

actualizaDinero(dinero,gastos,premio)

function sumaRestaMulti(a,b,c){
    console.log(`Los números ingresados son ${a}, ${b} y ${c}. Su suma es ${a+b+c}, su resta es ${-a-b-c}, y su multiplicación es ${a*b*c}`)
}

sumaRestaMulti(1,2,3)

function calcPerro(edad){
    console.log(`¡Tu perrito tiene ${edad*7} años perrunos!`)
}

calcPerro(7)

}