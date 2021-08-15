import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes', () => {
  test('Debe de retornar un héroe por id', () => {
    
    const id = 1
    const heroe = getHeroeById(id)

    const heroeData = heroes.find(h => h.id === id)

    expect(heroe).toEqual(heroeData)
    
  });

  test('Debe de retornar un undefined si héroe no existe', () => {
    
    const id = 10
    const heroe = getHeroeById(id)

    expect(heroe).toBe(undefined)

  });

  // Debe de retornar un arreglo con los héroes de DC
  // toEqual al arreglo filtrado
  test('Debe de retornar un arreglo con los héroes de DC', () => {

    const owner = 'DC'
    const heroes = getHeroesByOwner(owner)

    const heroOwner = heroes.filter(h => h.owner === owner)

    expect(heroes).toEqual(heroOwner)
    
  });

  test('Debe de retornar un arreglo con los héroes de Marvel', () => {
    
    const owner = 'Marvel'
    const heroes = getHeroesByOwner(owner)


    expect(heroes.length).toBe(2)

  });

});