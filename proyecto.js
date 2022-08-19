//import { Mesa } from "./mesa.js";
//let mesita = new Mesa(1)
//console.log(mesita.getnumber())

/*class Mesa{                             // UNA MESA TIENE 1 MOZO ASIGNADO

    constructor(numero) {
    this.numero = numero;

}

getnumber() {
    return this.numero
}
}


let mesa = new Mesa (47)
mesa.getnumber()
console.log(`La mesa tiene el numero ${mesa.getnumber()}`)

class Mozo{                                                             //1 MOZO TIENE MUCHAS MESAS ASIGNADAS

    constructor(nombre) {
    this.nombre = nombre;
    }

    getnombre() {
        return this.nombre
    }
}

let mozo = new Mozo (`Martin`)                                      //aca creo un nuevo mozo llamado Martin
mozo.getnombre()
console.log(`Esta mesa es atendida por ${mozo.getnombre()}`)        //mando a imprimir en consola al mozo Martin



class Restaurant{                                           //TIENE VARIOS MOSOS Y TIENE VARIAS MESAS
    constructor(nombre, mozo, mesa) {
        this.nombre = nombre
        this.mozo = mozo
        this.mesa = mesa
    }

    getnombre() {
        return this.nombre
    }

    getmozo () {
        return this.mozo
    }

    getmesa () {
        return this.mesa
    }
}

let restaurant = new Restaurant(`BurgerKing`, mozo, mesa)
console.log(`En el restaurante ${restaurant.getnombre()} me atendio el mozo ${restaurant.getmozo().getnombre()} en la mesa numero ${restaurant.getmesa().getnumber()}`)



class Auto {
    constructor (ruedas) {
        this.ruedas = ruedas;
    }

    getnumber(){
        return this.ruedas
    }
}

let auto = new Auto (4)
console.log(`el auto tiene ${auto.getnumber()} ruedas`)*/

class Mesa {
    constructor(numero, patas) {
        this.numero = numero
        this.patas = patas
    }

    getnumber(){
        return this.numero
    }

    getnumero() {
        return this.patas
    }
}

let mesa = new Mesa(2, 4)
console.log(`la mesa numero ${mesa.getnumber()} tiene ${mesa.getnumero()} patas`)


/*class Mozo{
    constructor(nombre, edad, años) {
        this.nombre = nombre
        this.edad = edad
        this.años = años
    }

    getnombre(){
        return this.nombre
    }

    getedad(){
        return this.edad
    }

    getaños(){
        return this.años
    }
}

let mozo = new Mozo (`Lucas`, 27, 7)
console.log(`El mozo de nombre ${mozo.getnombre()} y de edad ${mozo.getedad()} trabaja hace ${mozo.getaños()} años en el restaurante`)

class Auto {
    constructor(ruedas, ventilacion, faro) {
        this.ruedas = ruedas
        this.ventilacion = ventilacion
        this.faro = faro
    }

    getmovimiento(){
        return this.ruedas
    }

    getaire(){
        return this.ventilacion
    }

    getluces(){
        return this.faro
    }

}

let auto = new Auto(`4 ruedas`, true, `2 faros`);
console.log(`El auto Onix contiene ${auto.getmovimiento()}. Sera que trae ventilacion? La respuesta es ${auto.getaire()}. Alumbra el camino con ${auto.getluces()}`)
*/

class Mozo {
    constructor(nombre) {
        this.nombre = nombre
    }

    getnombre() {
        return this.nombre
    }
}

let nombre = new Mozo [`Martina`, `Juan`, `Enrique`, `Roberto`, `Lucas`]
    console.log(`los mosos son ${nombre.getnombre()}`)