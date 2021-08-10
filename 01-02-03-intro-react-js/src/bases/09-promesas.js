import { getHeroeById } from "../data/heroes"

// const promesa = new Promise((resolve, reject) => {
//   setTimeout( () => {
//     const heroe = getHeroeById(2)
//     resolve(heroe) 
//   }, 2000)
// })

// promesa.then((heroe) => {
//   console.log('heroe', heroe)
// })

const getHeroeByIdAsync = id => {

  return new Promise((resolve, reject) => {
    setTimeout( () => {
      const heroe = getHeroeById(id)
      if (heroe) {
        resolve(heroe)
      } else {
        reject('No se pudo encontrar el heroe') 
      }
    }, 2000)
  })

}

getHeroeByIdAsync(4).then(console.log).catch(console.error)