import '@testing-library/jest-dom'

import { getSaludo } from '../../base/02-template-string'

describe('Pruebas en 02-template-string.js', () => {
  test('getSaludo debe retornar hola + nombre + !', () => {
    const nombre = 'Fernando'
    const saludo = getSaludo(nombre)
    expect(saludo).toBe('Hola ' + nombre + '!')
  });

  // getSaludo debe de retornar Hola Carlos! si no hay argumento de nombre
  test('Retornar argumento por default sino tiene nombre', () => {
    const saludo = getSaludo()
    expect(saludo).toBe('Hola Carlos!')
  });
});