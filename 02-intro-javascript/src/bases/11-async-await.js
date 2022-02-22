// CÓDIGO USANDO PROMESAS
//const getImagenPromesa = () => new Promise( resolve => resolve("https://asadasd.com")) 
//getImagenPromesa().then(console.log);

// CÓDIGO USANDO ASYNC - AWAIT
const getImagen = async() => {
    try {
        // Key necesaria para poder utilizar la API
        const apiKey = "zqgveaEuOJcuBtT7wokIAJZ15Jd1I61o";

        // Petición con la que obtendremos los datos, usamos await para esperar a la respuesta antes de seguir ejecutando código
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

        // Esperamos a obtener los datos y obtenemos el campo data
        const {data} = await resp.json();

        // Obtenemos la url mediante la desestructuración
        const {url} = data.images.original;

        // Añadimos la imagen al HTML
        const img = document.createElement('img'); // Creamos un elemento img
        img.src = url; // Indicamos su url
        document.body.append(img); // Lo añadimos al body del HTML        
    } catch (error) {
        console.error(error);
    }
}

// Llamamos a una función asíncrona
getImagen();