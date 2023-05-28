import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";
// vamos a hacer una async y await con funcion tipica.
// vamos a buscar la información con fetch

async function fetchData(urlApi) {  // esta funcion va por los datos y luego espera a transformarlos 
    const response = await fetch(urlApi); // recordemos que fetch utiliza la logica de las promesas.
    const data = await response.json();     // aqui nos entregara un objeto que podemos iterar.
    return data;
}

const anotherFunction = async ( urlApi ) => {   // Esta funcion se encarga de hacer las peticiones a todos los productos, a uno especifico y despues mostrar una caracteristica
    try {
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
        console.log(products);
        console.log(product.title);
        console.log(category.name);
    } catch (error) {
        console.log(error);
    }
}
anotherFunction(API);