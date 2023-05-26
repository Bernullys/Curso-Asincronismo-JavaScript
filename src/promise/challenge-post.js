import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function postData(urlApi, data) { // se publicara data en la API
    const response = fetch(urlApi, {
        method: "POST", //tiene que ir tal cual.
        mode: "cors", // es el permiso. Por defecto siempre estara cors.
        credentials: "same-origin", // es opcional.
        headers: {  // indica que lo que se envia es formato json.
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data) // convierte un objeto o valor de JS en una cadena de texto json.
    });
    return response;
}

const data = {      // esta estructura la indica la documentación de la API de como es el formato para hacer post
    "title": "Another New BADR Product",
    "price": 10,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }

  postData(`${API}/products`, data)     // se usa como una promesa y con los metodos .then podemos manipular la información.
    .then(response => response.json())
    .then(data => console.log(data));

    // la documentacion de la API nos indica como ver el objeto creado y postiado en la API.