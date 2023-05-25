const fetch = require("node-fetch");
//import fetch from "node-fetch";     // fetch por defecto es una promesa por eso no se agrega la sintaxis de new Promise
//const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const API = "https://api.escuelajs.co/api/v1";

// ahora vamos a generar una funcion que va a recibir como argumento la url de la API (osea la constante API). Para que retorne el llamado del paquete fetch, el cual es una promesa y podremos usar sus metodos.


// function fetchData(urlApi) {
//     return fetch(urlApi);
// };

// Ahora hacemos los llamados que queremos.

fetch(`${API}/products`)
    .then(response => response.json()) // se define una funcion responce que devuelve el objeto json del argumento que estamos llamando.
    .then(products => {                // ahora lo queremos mostrar.
        console.log(products);
    })
    .then(() => {                       // se pueden seguir anidando los .then con lo que queramos hacer.
        console.log("Hello")
    })
    .catch(error => console.log(error)); // tambien tenemos el catch.

// ojo para que este codigo funcione, se debe agregar el paquete en la descripcion del package.json -- "type": "module"
