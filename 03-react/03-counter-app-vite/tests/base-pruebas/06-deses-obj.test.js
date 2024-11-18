import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Prueba deL archivo useContext', () => {
  test('Prueba de la función usContext',()=>{
    const testUser = {
        nombreClave: '18112024',
        anios: '40',
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }    
    }
    const User = usContext();
  expect(testUser).toEqual(User);

  });
})
