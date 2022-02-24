// Nombre del test
test( "Debe de ser true", () => {
    const isActive = false;

    // Si es falso lanzaremos un error que aparecerá por consola
    if(!isActive) {
        throw new Error("No está activo");
    }
})