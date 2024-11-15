//Desestructuración de objetos
const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
};

const { name:nombre, age:edad, key:clave } = person;

console.log(nombre);
console.log(edad);
console.log(clave);
