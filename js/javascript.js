var numerosDistintos = [1,2,3,4,5,6,7,8,9,10]

console.log(numerosDistintos)

var meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']

console.log(meses)

console.log(meses[0], meses[1], meses[2], meses[3], meses[4], meses[5], meses[6], meses[7], meses[8], meses[9], meses[10], meses[11])

console.log(meses[5])

var pelisfav = ['cars','dumbo','it','it 2']

console.log("una de mis peliculas favoritas es: " + pelisfav[1])

var hobbies = []

hobbies[2] = 'leer'
hobbies[5] = 'netflix'

console.log(hobbies)

/* objetos literales */

var ironMan = {
    nombre: "Iron Man",
    equipo: "Avengers",
    poderes: ['Volar', 'Lanzar misiles', 'Disparar láser'],
    energia: 100,
};

console.log(ironMan)

var pais = {
    nombre: 'Francia',
    habitantes: 100,
    actividad:
        {
            ganaderia: true,
            agricultura: false
            
        }
}

console.log(pais.actividad.agricultura)
console.log(pais.habitantes)
console.log(`En ${pais.nombre} hay ${pais.habitantes} habitantes.`)

var fecha = {
    dia: 9,
    mes: 4,
    anio: 2002
}
console.log(fecha)
console.log(`${fecha.dia}/${fecha.mes}/${fecha.anio}`)

var yo = {
    nombre: 'caro',
    apellido: 'camblor',
    edad: 18,
    hobby: 'netflix',
    animalPreferido: 'gatito'
}

var miAmigo = {
    nombre: 'carlitos',
    apellido: 'escobar',
    edad: 17,
    hobby: 'futbol',
    animalPreferido: 'leon'
}