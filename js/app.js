const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const resultado = document.querySelector('#resultado');

// crear los anios
const years = document.createElement('option');
const max = new Date().getFullYear();
const min = max - 10;

for( let i= max; i > min; i--){
    const option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);
});

function mostrarAutos() {
    autos.forEach(auto => {
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio}
            Color: ${color}


        `

        // insertar en el HTML
        resultado.appendChild(autoHTML);
    });
}