const nombre   = 'Franco';
const apellido = 'Peralta';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

// console.log(nombreCompleto);

export function getSaludo(nombre = 'Laureano') {
    return 'Hola ' + nombre + '!';
}

// console.log(`Este es un texto: ${ getSaludo(nombre) }`);