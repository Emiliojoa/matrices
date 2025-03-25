const prompt = require('prompt-sync')();

const lista = [];

while (true) {  
    const name = prompt('Ingrese el nombre: ');
    const lastName = prompt('Ingrese el apellido: ');
    const dni = prompt('Ingrese el DNI: ');
    const tel = [];

    while (true) { 
        const telefono = prompt("Ingrese un número de teléfono: ");
        tel.push(telefono);
        const respuesta = prompt("¿Desea ingresar otro teléfono? (s/n): ").toLowerCase();
        if (respuesta === "n") {
            break;
        }
    }

    lista.push([name, lastName, dni, tel]);

    const respuesta = prompt("¿Desea ingresar otro usuario? (s/n): ").toLowerCase();
    if (respuesta === "n") {
        break;
    }
}

console.log(lista);