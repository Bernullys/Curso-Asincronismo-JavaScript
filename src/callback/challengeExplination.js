const XMLHTTPRequest = require("xmlhttprequest").XMLHttpRequest; // require esta importando el paquete. Se pone el paquete en una variable.
const API = "https://api.escuelajs.co/api/v1"; // se hace otra constanque que sepa que vamos a llamar una API (en mayusculas significa que no va a cambiar nunca). Se le asigna la ruta donde se ubica la API.

// se crea una funcion que reciba la direccion de la API y reciba tambien el callback que va a hacer las solicitudes de información a la API:
function fetchData(urlApi, aCallbackFunction) {
    // dentro de esta funcion se construye el llamado de xhttp
    let xhttp = new XMLHTTPRequest();    // Ojo esto es instanciar a una clase (viene con el paquete). Ahora se pueden usar sus metodos.
    xhttp.open("GET", urlApi, true);     // Prepara la peticion para ser enviada tomando tres parametros: protocolo, url, asincrono(true).
    xhttp.onreadystatechange = function (event) {   // escucha los estados para saber cuando esta disponible la información.
                                                    // la funcion evalua el estado en que se encuentra.
        if (xhttp.readyState === 4) {               // dice si se completo la llamada en el estado 4. Llamado o REQUEST
            if(xhttp.status ===200){               // evalua si el estado es correcto con 200. RESPONSE
                aCallbackFunction(null, JSON.parse(xhttp.responseText)); // JSON.parse organizara el texto que se recibe con xhttp.responseText y lo transforma a formato json osea un objeto.
            } else {    // si entra un error en el llamado o request.
                const error = new Error("Error en este enlace" + urlApi)
                return aCallbackFunction(error, null);  // esto retornara en caso de error(el mensaje y null).                                                           //el 1° parametro es en caso de error pero como se verifico se deja null
            } 
        } 
    }    
    xhttp.send();   // para que se ejecute todo.
}
// todo esto hasta aqui es la funcion principal para hacer el llamado.

// ahora se va a hacer el llamado de la funcion, pasarle el callback 

fetchData(`${API}/products`, function (error1, data1) { // se ingresan los dos parametros de la funcion que hicimos aCallbackFunction // se obtienen los datos en data1
    if (error1) return console.error(error1);   // se valida si ocurre un error, en tal caso para y muestra el error
    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2) { // se ingresa a otro link de la api y se corre de nuevo la funcion aCallbackFunction, se valida el error y si no hay se tienen los datos de data1
        if (error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3) {
            if (error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);

        });
    });
});
