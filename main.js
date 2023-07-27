// FUNCIÓN FLECHA: Se utiliza para acciones específicas, se caracteriza por no poseer un nombre, y ser funciones que se guardan en variables y se ejecutan sin ser llamadas.
// También ocupan espacios de memoria constantes, por lo que su valor no varía.

const getHour = () => {
    // sentencias = instrucciones
    const date = new Date(); // creación de objeto date
    // console.log(date.getSeconds())
    const time = { // diccionario; tipo de array
                hora: date.getHours(), 
                minutos: date.getMinutes(), 
                segundos: date.getSeconds()
            }
    document.querySelector(".reloj").innerHTML = `${time.hora}:${time.minutos}:${time.segundos}` 
}

setInterval(getHour, 1000) // <= llama la función cada cierto tiempo