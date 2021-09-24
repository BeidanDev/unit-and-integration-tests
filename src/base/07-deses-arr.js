const personajes = ['Asta','Noelle','Yami'];
const [ , , p3 ] = personajes;

export const retornaArreglo = () =>{
    return ['ABC', 123];
}

// const [letras, numeros] = retornaArreglo();

// Tarea
// 1. El primer valor del arr se llamará nombre
// 2. Se llamará setNombre
const usState = (valor) => {
    return [valor, () => { console.log('Hola Mundo') }];
}