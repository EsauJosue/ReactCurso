import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes"; 

describe('Pruebas de 08-imp-exp', () => {
  test('Prueba de la función getHeroeById debe retornar Heroe por ID',()=>{
    const id = 1;
    const heroe = getHeroeById(id);
    expect(heroe).toEqual({id: 1, name: 'Batman',owner: 'DC'})
  });
  test('getHeroeById debe retornar undefined si no existe el heroe',()=>{
    const id = 1000;
    const heroe = getHeroeById(id);
    expect(heroe).toBeFalsy();

  });
  test('getHeroesByOwner Debe retornar un arreglo con los héroes de DC',()=>{
    const owner = 'DC';
    const heroes = getHeroesByOwner( owner );
    console.log(heroes);
    expect(heroes.length).toBe(3);
    expect(heroes).toEqual(
        [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]
    )
    //Haciendo la evaluación desde la data
    expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))
    
  });
  test('getHeroesByOwner Debe retornar un arreglo con los héroes de Marvel',()=>{
    const owner = 'Marvel';
    const heroes = getHeroesByOwner( owner );
    console.log(heroes);
    expect(heroes.length).toBe(2);
    //Haciendo la evaluación desde la data
    expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))
    
  });
});
