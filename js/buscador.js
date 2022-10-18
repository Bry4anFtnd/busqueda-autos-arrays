// crear los años
const years = document.createElement('option');
const max = new Date().getFullYear();
let min = max - 10;

for (let i = max; i > min; i--) {
  let option = document.createElement('option');
  option.value = i;
  option.innerText = i;
  document.querySelector('#year').appendChild(option);
}

function obtenerAutos() {
  return [
    {
      marca: 'BMW',
      modelo: 'Serie 3',
      year: 2012,
      precio: 30000,
      puertas: 4,
      color: 'Blanco',
      transmision: 'automatico',
    },
    {
      marca: 'Audi',
      modelo: 'A4',
      year: 2018,
      precio: 40000,
      puertas: 4,
      color: 'Negro',
      transmision: 'automatico',
    },
    {
      marca: 'Ford',
      modelo: 'Mustang',
      year: 2015,
      precio: 20000,
      puertas: 2,
      color: 'Blanco',
      transmision: 'automatico',
    },
    {
      marca: 'Audi',
      modelo: 'A6',
      year: 2010,
      precio: 35000,
      puertas: 4,
      color: 'Negro',
      transmision: 'automatico',
    },
    {
      marca: 'BMW',
      modelo: 'Serie 5',
      year: 2016,
      precio: 70000,
      puertas: 4,
      color: 'Rojo',
      transmision: 'automatico',
    },
    {
      marca: 'Mercedes Benz',
      modelo: 'Clase C',
      year: 2015,
      precio: 25000,
      puertas: 4,
      color: 'Blanco',
      transmision: 'automatico',
    },
    {
      marca: 'Chevrolet',
      modelo: 'Camaro',
      year: 2018,
      precio: 60000,
      puertas: 2,
      color: 'Rojo',
      transmision: 'manual',
    },
    {
      marca: 'Ford',
      modelo: 'Mustang',
      year: 2019,
      precio: 80000,
      puertas: 2,
      color: 'Rojo',
      transmision: 'manual',
    },
    {
      marca: 'Dodge',
      modelo: 'Challenger',
      year: 2017,
      precio: 40000,
      puertas: 4,
      color: 'Blanco',
      transmision: 'automatico',
    },
    {
      marca: 'Audi',
      modelo: 'A3',
      year: 2017,
      precio: 55000,
      puertas: 2,
      color: 'Negro',
      transmision: 'manual',
    },
    {
      marca: 'Dodge',
      modelo: 'Challenger',
      year: 2012,
      precio: 25000,
      puertas: 2,
      color: 'Rojo',
      transmision: 'manual',
    },
    {
      marca: 'Mercedes Benz',
      modelo: 'Clase C',
      year: 2018,
      precio: 45000,
      puertas: 4,
      color: 'Azul',
      transmision: 'automatico',
    },
    {
      marca: 'BMW',
      modelo: 'Serie 5',
      year: 2019,
      precio: 90000,
      puertas: 4,
      color: 'Blanco',
      transmision: 'automatico',
    },
    {
      marca: 'Ford',
      modelo: 'Mustang',
      year: 2017,
      precio: 60000,
      puertas: 2,
      color: 'Negro',
      transmision: 'manual',
    },
    {
      marca: 'Dodge',
      modelo: 'Challenger',
      year: 2015,
      precio: 35000,
      puertas: 2,
      color: 'Azul',
      transmision: 'automatico',
    },
    {
      marca: 'BMW',
      modelo: 'Serie 3',
      year: 2018,
      precio: 50000,
      puertas: 4,
      color: 'Blanco',
      transmision: 'automatico',
    },
    {
      marca: 'BMW',
      modelo: 'Serie 5',
      year: 2017,
      precio: 80000,
      puertas: 4,
      color: 'Negro',
      transmision: 'automatico',
    },
    {
      marca: 'Mercedes Benz',
      modelo: 'Clase C',
      year: 2018,
      precio: 40000,
      puertas: 4,
      color: 'Blanco',
      transmision: 'automatico',
    },
    {
      marca: 'Audi',
      modelo: 'A4',
      year: 2016,
      precio: 30000,
      puertas: 4,
      color: 'Azul',
      transmision: 'automatico',
    },
  ];
}

//nuevo objeto q almacenara los datos de los input datos para la busqueda
let datosBusqueda = {
  marca: '',
  year: '',
  minimo: '',
  maximo: '',
  puertas: '',
  transmision: '',
  color: '',
};

//Event listenner
const autos = obtenerAutos(); // al llamar esta variable es lo mismo q llamar a lo q retorna la funcion
document.addEventListener('DOMContentLoaded', () => {
  //cuando cargue el documentos se van a cargar todos los autos
  mostrarAutos(autos);
});

//event listenners para el formulario filtrado
const marca = document.querySelector('#marca');
marca.addEventListener('input', (e) => {
  //si hay algun cambio en los input
  datosBusqueda.marca = e.target.value;
  //llamar funcion filtrar autos q es la q se va a actaulizar cuendo esojamos una opcion dif en cada input
  filtrarAuto();
});

const year = document.querySelector('#year');
year.addEventListener('input', (e) => {
  //si hay algun cambio en los input
  datosBusqueda.year = Number(e.target.value);
  //llamar funcion filtrar autos q es la q se va a actaulizar cuendo esojamos una opcion dif en cada input
  filtrarAuto();
});

const minimo = document.querySelector('#minimo');
minimo.addEventListener('input', (e) => {
  //si hay algun cambio en los input
  datosBusqueda.minimo = Number(e.target.value);
  //llamar funcion filtrar autos q es la q se va a actaulizar cuendo esojamos una opcion dif en cada input
  filtrarAuto();
});

const maximo = document.querySelector('#maximo');
maximo.addEventListener('input', (e) => {
  //si hay algun cambio en los input
  datosBusqueda.maximo = Number(e.target.value);
  //llamar funcion filtrar autos q es la q se va a actaulizar cuendo esojamos una opcion dif en cada input
  filtrarAuto();
});

const puertas = document.querySelector('#puertas');
puertas.addEventListener('input', (e) => {
  //si hay algun cambio en los input
  datosBusqueda.puertas = Number(e.target.value);
  //llamar funcion filtrar autos q es la q se va a actaulizar cuendo esojamos una opcion dif en cada input
  filtrarAuto();
});

const transmision = document.querySelector('#transmision');
transmision.addEventListener('input', (e) => {
  //si hay algun cambio en los input
  datosBusqueda.transmision = e.target.value;
  //llamar funcion filtrar autos q es la q se va a actaulizar cuendo esojamos una opcion dif en cada input
  filtrarAuto();
});

const color = document.querySelector('#color');
color.addEventListener('input', (e) => {
  //si hay algun cambio en los input
  datosBusqueda.color = e.target.value;
  //llamar funcion filtrar autos q es la q se va a actaulizar cuendo esojamos una opcion dif en cada input
  filtrarAuto();
});

function limpiarHtml() {
  const contenedor = document.querySelector('#resultado');

  //limpiar resultados anteriores
  while (contenedor.firstChild) {
    //mientras haya algo impreso
    contenedor.removeChild(contenedor.firstChild); //se pone first child pq abajo estamos poniendo appenChild, tonces
    // para q no se actualice abajo hay q ir remoiendo el primero
  }
}

function mostrarAutos(autos) {
  limpiarHtml();
  //leer el elemento resultado
  const contenedor = document.querySelector('#resultado');

  //construir el html
  autos.forEach((auto) => {
    const autosHTML = document.createElement('p');
    autosHTML.innerHTML = `
            <p> ${auto.marca} -  ${auto.modelo} - ${auto.year} - ${auto.puertas} Puertas - Transmision: ${auto.transmision} - Precio: $${auto.precio} - Color: ${auto.color}</p>      `;
    contenedor.appendChild(autosHTML);
  });
}

//funciom para filtrar la lista segun la opcion q demos en el input
function filtrarAuto() {
  //aca volvemos a llamar la funcion obtenerAutos para poder pitarlos todos otra ve y filtrarlos segun los cambios
  const resultado = obtenerAutos()
    .filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo)
    .filter(filtrarPuertas)
    .filter(filtrarTransmision)
    .filter(filtrarColor); //el codigo q normalemnte filtra lo vamos a meter en esa funcion filtrarMarca,
  if (resultado.length) {
    mostrarAutos(resultado);
  } else {
    noResultado();
  }
}

function noResultado() {
  limpiarHtml();

  const noResultado = document.createElement('div');
  noResultado.classList.add('alerta', 'error');
  noResultado.appendChild(document.createTextNode('No hay resultados'));
  document.querySelector('#resultado').appendChild(noResultado);
}

function filtrarMarca(auto) {
  // esto es lo mismo q   .filter(auto => {})  pero se hace con funcion por aparte
  if (datosBusqueda.marca) {
    return auto.marca === datosBusqueda.marca; //esto es lo q se devuelve a arriba en la variable resultado
  } else {
    return auto;
  }
}

function filtrarYear(auto) {
  if (datosBusqueda.year) {
    return auto.year === datosBusqueda.year; //esto es lo q se devuelve a arriba en la variable resultado
  } else {
    return auto;
  }
}

function filtrarMinimo(auto) {
  if (datosBusqueda.minimo) {
    return auto.precio >= datosBusqueda.minimo; //esto es lo q se devuelve a arriba en la variable resultado
  } else {
    return auto;
  }
}

function filtrarMaximo(auto) {
  if (datosBusqueda.maximo) {
    return auto.precio <= datosBusqueda.maximo; //esto es lo q se devuelve a arriba en la variable resultado
  } else {
    return auto;
  }
}

function filtrarPuertas(auto) {
  if (datosBusqueda.puertas) {
    return auto.puertas === datosBusqueda.puertas; //esto es lo q se devuelve a arriba en la variable resultado
  } else {
    return auto;
  }
}

function filtrarTransmision(auto) {
  if (datosBusqueda.transmision) {
    return auto.transmision === datosBusqueda.transmision; //esto es lo q se devuelve a arriba en la variable resultado
    //
  } else {
    return auto;
  }
}

function filtrarColor(auto) {
  if (datosBusqueda.color) {
    return auto.color === datosBusqueda.color; //esto es lo q se devuelve a arriba en la variable resultado
  } else {
    return auto;
  }
}

fle;
