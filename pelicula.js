'use strict'

//console.log('Cargado JS')
class Pelicula{
  constructor(){
    //console.log('Se ha creado la pelicula')
    //this es el objeto que ejecuta el codigo
    this.titulo= 'Tiroteo en Mississippi'
    this.pueblo = new Pueblo('TodoPolvo','muy polvoriento, en mitad del desierto de Arizona')
    this.narrador = new Narrador()
    this.paco = new PersonajeBueno('Paco')
    this.maria = new PersonajeBueno('María')
    this.morgan = new PersonajeMalo('Morgan')


    this.iniciar()
  }
  iniciar(){
    document.write(`<h1>${this.titulo}</h1>`)
    document.write(`<p>${this.pueblo.nombre} era un pueblo ${this.pueblo.descripcion}</p>`)
    this.narrador.hablar('Era una soleada mañana')
    this.paco.hablar(`Hola ${this.maria.nombre}. Hoy hace un día espléndido.`)
    this.maria.hablar(`Hola ${this.paco.nombre}, la verdad es que sí.`)
    this.narrador.hablar('Ambos se miraron un instante y siguieron su camino...')
    this.morgan.hablar('Vaya pueblo de mierda')
    this.morgan.hablar('¡Eh tú! ¡Pringao! Dame tu caballo y la cartera')
    this.morgan.arma.disparar()
    this.narrador.hablar('Morgan disparó a Paco y al instante... murió')
    this.narrador.hablar('María intenta huir de la escena')
    this.morgan.arma.recargar()
    this.narrador.hablar('Morgan recarga el arma')
    this.morgan.arma.disparar()
    this.narrador.hablar('Pero María consiguió refugiarse del tiro y ahora se escabulle')
  }
}

class Pueblo{
  constructor(nombre, descripcion){
    this.nombre = nombre
    this.descripcion = descripcion
  }
}

class Narrador{
  hablar(texto){
    document.write(`<br>-${texto}.`)
  }
}

class Personaje{
  constructor(nombre){
    this.nombre = nombre
    this.arma = new Arma()
  }
  /*hablar(texto){
    document.write(`<p class=personaje><span>${this.nombre}:</span> ${texto}</p>`)
  }*/
}

class PersonajeBueno extends Personaje{
  hablar(texto){
    document.write(`<p class=bueno><span>${this.nombre}:</span> ${texto}</p>`)
  }
}

class PersonajeMalo extends Personaje{
  hablar(texto){
    document.write(`<p class=malo><span>${this.nombre}:</span>GRRRR... ${texto}</p>`)
  }
}

class Arma{
  disparar(){
    document.write('<p>¡¡PUM!!</p>')
  }
  recargar(){
    document.write('<p> ¡CLACK CLACK!</p>')
  }
}

new Pelicula()
