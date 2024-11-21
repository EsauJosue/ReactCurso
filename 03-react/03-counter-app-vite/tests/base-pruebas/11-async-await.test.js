import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Pruebas en 11-async-await.js', () => {
  test('getImagen debe retornar el url de la imagen', async() => {
    const url = await getImagen();
    console.log(url);
    expect(url.includes('https://')).toBe(true);
  })
})
