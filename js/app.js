const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

// Datos para la busqueda
const datosBusqueda = {
    marca : '',
    year: '',
    minimo : '',
    maximo: '',
    puertas: '',
    transmision:'',
    color:''
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);

    generarAnio();
});

marca.addEventListener('change', e => {
    datosBusqueda.marca =  e.target.value;

    filtraAutos();
});

year.addEventListener('change', e => {
    datosBusqueda.year =  parseInt(e.target.value); 

    filtraAutos();
});

minimo.addEventListener('change', e => {
    datosBusqueda.minimo =  e.target.value;

    filtraAutos();
});

maximo.addEventListener('change', e => {
    datosBusqueda.maximo =  e.target.value;

    filtraAutos();
});

puertas.addEventListener('change', e => {
    datosBusqueda.puertas =  parseInt(e.target.value); 

    filtraAutos();
});

transmision.addEventListener('change', e => {
    datosBusqueda.transmision =  e.target.value;

    filtraAutos();
});

color.addEventListener('change', e => {
    datosBusqueda.color =  e.target.value;

    filtraAutos();
});

function mostrarAutos(autos) {
    limpiarHTML();

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

// lipiarHTLM
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function generarAnio() {
    for( let i= max; i >= min; i--){
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        year.appendChild(option);
    }
}

function filtraAutos(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtratMinimo).filter(filtrarMaximo).filter(filtrarPuerta).filter(filtrarTransmision).filter(filtrarColor);


    
   

    if (resultado.length) {
        mostrarAutos(resultado);
    }else{
        noResultado();
    }
}

function noResultado() {
   
    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('aleta', 'error');
    noResultado.textContent = 'No hay resultados de busqueda';
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto){
    const {marca} = datosBusqueda;
    if ( marca ) {
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto){
    const {year} = datosBusqueda;

    if ( year ) {
        return auto.year === year;
    }
    return auto
}

function filtratMinimo(auto){
    const {minimo} = datosBusqueda;

    if ( minimo ) {
        return auto.precio >= minimo;
    }
    return auto
}

function filtrarMaximo(auto){
    const {maximo} = datosBusqueda;

    if ( maximo ) {
        return auto.precio <= maximo;
    }
    return auto;
}

function filtrarPuerta(auto) {
    const {puertas} = datosBusqueda;

    if (puertas) {
        return auto.puertas === puertas;
    }
    return auto;
}

function filtrarTransmision(auto){
    const {transmision} = datosBusqueda;

    if ( transmision) {
        return auto.transmision === transmision;
    }
    return auto;
}


function filtrarColor(auto) {
    const {color} = datosBusqueda;

    if ( color ) {
        return auto.color === color;
    }

    return auto;
}
