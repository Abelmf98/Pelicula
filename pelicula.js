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
    this.narrador.hablar('Pero María consiguió refugiarse del disparo')
    this.narrador.hablar('María se refugia tras unas cajas y ecuentra algo...')
    this.maria.arma.disparar()
    this.morgan.arma.disparar()
    this.morgan.hablar('¡Deja de esconderte maldita sabandija! No me gustan los forasteros como vosotros, ¿sabes?')
    this.narrador.hablar('De repente se origina un tira y afloja entre armas de fuego, María dispara pero..')
    this.maria.hablar('¡Maldito insensato, pagarás por lo que has hecho!... Espera.. ¿¡Qué!?')
    this.maria.arma.atascar()
    this.narrador.hablar('María se encuentra en graves problemas... el arma se le ha atascado')
    this.morgan.hablar('¡No tienes escapataria, Ríndete...!')
    this.narrador.hablar('Morgan se acerca confiado cuando de repente...')
    this.maria.hablar('¡Toma esto....!')
    this.maria.arma.golpear()
    this.morgan.hablar('Agggghh.....')
    this.narrador.hablar('María golpea con todas sus fuerzas el arma contra el rostro de Morgan')
    this.narrador.hablar('Morgan cae al suelo')
    this.maria.hablar('¡Más te vale no levantarte, Escoria...!')
    this.narrador.hablar('María aprovecha la situación para cargar con el cuerpo de Paco y huir de la escena')
    this.narrador.hablar('¿Continuará...?')

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
    document.write('<p>¡¡PIUM!!</p>')
  }
  recargar(){
    document.write('<p> ¡CLACK CLACK!</p>')
  }
  atascar(){
    document.write('<p>¡TIC..TIC</p>')
  }
  golpear(){
    document.write('<p>¡¡CATAPUM!!</p>')
  }
}

new Pelicula()
