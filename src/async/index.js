// vamos a hacer una promesa y lo que queremos es validar que va a ser resuelta y luego haremos el llamado de la promesa.
const aAsyncFunction = () => { // esto es una funcion que la vamos a hacer asincronica
    return new Promise((resolve, reject) => { // retornara una promesa con la funcion anonima 
        (true)
            ? setTimeout(() => resolve("Asyncronicccc"), 2000)      //esto es una condicion ternaria
            : reject( new Error("Errorrrrrrr"));
    });
}

// ahora se construira una funcion que va a utilizar el concepto de async y await 
const anotherFunction = async () => { // async es una palabra reservada y dentro podemos utilizar el await
    const something = await aAsyncFunction(); // aAsyncFunction nos esta regresando una promesa. Por lo tanto se espera a que se resuelva la promesa para mostrar el codigo de esta funcion.
    console.log(something); // something es el codigo que tendra que esperar a que se resuelva la promesa.
    console.log("Test hello"); // este print es para verificar el funcionamiento
}

console.log("Beforeeeeee");
anotherFunction();
console.log("Afterrrrr")