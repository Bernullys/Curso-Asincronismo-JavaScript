import fetch from "node-fetch";     // fetch por defecto es una promesa por eso no se agrega la sintaxis de new Promise
const API = "https://api.escuelajs.co/api/v1";
// ahora vamos a generar una funcion que va a recibir como argumento la url de la API (osea la constante API). Para que retorne el llamado del paquete fetch, el cual es una promesa y podremos usar sus metodos.
function fetchData(urlApi) {
    return fetch(urlApi);
};
// // Ahora hacemos los llamados que queremos.
// fetchData(`${API}/products`)
//     .then(response => response.json()) // se define una funcion responce que devuelve el objeto json del argumento que estamos llamando.
//     .then(products => {                // ahora lo queremos mostrar.
//         console.log(products);
//     })
//     .then(() => {                       // se pueden seguir anidando los .then con lo que queramos hacer.
//         console.log("Hello")
//     })
//     .catch(error => console.log(error)); // tambien tenemos el catch.

// ojo para que este codigo funcione, se debe agregar el paquete en la descripcion del package.json -- "type": "module"


// De aqui en adelante es otro ejemplo:

fetchData(`${API}/products`)    //Primera solicitud
    .then(response => response.json())  //Transforma lo que estamos recibiendo a un objeto json
    .then(products => {
        console.log(products);
        return fetchData(`${API}/products${products[0].id}`); // segundo llamado... Para llamar un producto en particular en la siguiente petición. El primer elemento que esta regresando la primera solicitud.
    })
    .then(response => response.json())
    .then(product => {
        console.log(product.title);
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    })
    .catch(error => console.log(error))
    .finally(() => console.log("Finalmente termino"));
