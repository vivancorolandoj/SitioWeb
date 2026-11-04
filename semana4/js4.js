//Lista de los precios de los productos
const PRECIOS = {
    'Pan frances': 0.30,
    'Pan de yema': 0.50,
    'Chancay': 0.60,
    'Torta de chocolate': 45.00,
}

//Recuperar los objetos del HTML
const selector = document.querySelector('#producto')
const precio = document.querySelector('#precio')

//Implementacion del evento 'change'
selector.addEventListener('change', (evento) => {
    const nombre = evento.target.value
    if(nombre === ''){
        precio.textContent = 'Elige un producto.'
        return
    }
    precio.textContent = `${nombre}: S/. ${PRECIOS[nombre].toFixed(2)} por unidad`
})