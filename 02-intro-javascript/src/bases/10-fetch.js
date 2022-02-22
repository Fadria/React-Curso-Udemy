// Key necesaria para poder utilizar la API
const apiKey = "zqgveaEuOJcuBtT7wokIAJZ15Jd1I61o";

// Petición con la que obtendremos los datos
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

//  resp.json también es una promesa, por el que las encadenaremos
peticion
    .then( resp => resp.json())
    .then(({data}) => { // Obtenemos el campo data mediante la desestructuración
        // Obtenemos la url mediante la desestructuración
        const {url} = data.images.original;

        // Añadimos la imagen al HTML
        const img = document.createElement('img'); // Creamos un elemento img
        img.src = url; // Indicamos su url
        document.body.append(img); // Lo añadimos al body del HTML
    })
    .catch(console.warn); // En el caso de obtener un error informaremos de ello