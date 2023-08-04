let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = '3193f0b6167b2030d79bda265f2acd75'
let difKelvin = 273.15


document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value;
    if (ciudad) {
        fetchDatosClima(ciudad);
    }

})

function fetchDatosClima(ciudad) {
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
        .then(data => data.json())
        .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data) {
    /*     console.log(data); */
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''

    // Igualamos los valores en constantes que se obtienen de la IP 
    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const humedad = data.main.humidity
    const descripcion = data.weather[0].description
    const icono = data.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre},${paisNombre}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura - difKelvin)}°C `

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es: ${humedad} % `

    const iconoinfo = document.createElement('img')
    iconoinfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripción metereológica es: ${descripcion}`

    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(iconoinfo);
    divDatosClima.appendChild(temperaturaInfo);
    divDatosClima.appendChild(humedadInfo);
    divDatosClima.appendChild(descripcionInfo);

}


