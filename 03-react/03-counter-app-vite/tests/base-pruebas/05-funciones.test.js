import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Puebas en 05-funciones', () => {
  test('getUser debe retornar un objeto',()=>{
    const testUser = {
        uid: 'ABC123',
        username: 'El_Papi1502'
    };
    const user = getUser();
    // console.log(user);
    expect( testUser ).toEqual( user);

  });
  test('getUsuarioActivo debe de retornar un objeto', ()=>{
    const nombre = "Josue";
    const user = getUsuarioActivo(nombre);
    expect( user ).toEqual({
        uid: 'ABC567',
        username: nombre
    })
    });
})


