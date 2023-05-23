const XMLHTTPRequest = require("xmlhttprequest");
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi, aCallbackFunction) {

    let xhttp = new XMLHTTPRequest();
    xhttp.open("GET", urlApi, true);
    
    xhttp.onreadystatechange = function (aEvent) {

        if (xhttp.readyState === 4) {

            if(xhttp.status ===2000){

                aCallbackFunction(null, JSON.parse(xhttp.responseText));
            }

        } else {

            const error = new Error("Error en este enlace" + urlApi)
            return aCallbackFunction(error, null);
        } 
    } 

    xhttp.send();
}

