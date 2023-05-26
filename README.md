# Curso-Asincronismo-JavaScript
Curso de Asincronismo con JavaScript

Conceptos claves: 
Callbacks Async Await Promises

Clase 3: Event Loop.

Aplicacion desarrollada por Philip Roberts: loupe : Demuestra graficamente como funciona asincronismo.
Explicación de Diego De Granda (muy buena): En Memory Heap es la memoria que tiene las variables y funciones exparcidas, ahi estan. El Call Stack en donde se ejecuta el codigo JS, pero si el Call Stack recibe una función asincrona que la ejecuta otra aplicacion como un web browser, el Call Stack se la envia para que la resuelva. Mientras tanto el Call Stack sigue resolviendo sus tareas. La funcion asincrona que se envio a otro lugar a ejecutarse, una vez resuelta entra en una zona llamada Callback queue en donde otra parte llamada Event Loop estara constantemente preguntando al Call Stack si ya termino sus tareas para entrgarle el resultado de la funcion asincrona. Asi el tiempo de la funcion asincrona sea cero, el Event Loop esperara a que el Call Stack termine sus tareas para entregar el resultado.


Clase 5: Configuración.

Pagina de documentación: JavaScript MDN
Herramienta: fakeapi.platzi.com  - Code Runner

Clase 6: Que son los Callbacks

Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.
Tambien puede o no recibir los argumentos de la funcion que esta siendo llamada. Ojo cuando se pasa la funcion como argumento no se colocan los parentesis, solo el nombre de la funcion.
setTimeout recibe una funcion, el tiempo y los argumentos que necesite. En principio ya es un callback.

Clase 8: XMLHTTPRequest

En esta clase se va a implementar codigo para hacer multiples llamados a una API utilizando callback.
Para implementar esto tenemos que instalar el paquete xmlhttprequest para que funcione en la terminal, porque normalmente este paquete lo tienen los navegadores pero para hacerlo en la terminal se necesita.
npm install xmlhttprequest          Ojo: en la carpeta del proyecto.

XMLHTTPRequest es un objeto de JS que permite hacer peticiones hacia servicios en la nube (URLs o APIs). Es un paquete que hay que instalar en el proyecto.

Existen 5 estados en un llamado XMLHTTPRequest:
    0   Se ha inicializado.
    1   Loading.
    2   Loaded.
    3   Procesamiento si existe alguna descarga.
    4   Complete.

Metodos y propiedades de XMLHTTPRequest:
    xmlhttp.opnen()             Prepara la peticion para ser enviada tomando tres parametros: protocolo, url, asincrono(true).
    xmlhttp.readyState          Retorna el estado de la petición.
    xmlhttp.onreadystatechange  Un eventHandler que es llamado cuando la propiedad readyState cambia.
    xmlhttp.status              Retorna el estado de la respuesta de la petición (200, 400, 500).
    xmlhttp.send()              Envía la petición.

Caracteristicas del protocolo http:
Verbos: indican acciones que estan asociadas a peticiones y recursos, es decir, sirven para la manipulacion de recursos cliente/servidor. Los Verbos http son:
    GET         Solicitan un recurso.
    HEAD        Solicitan un recurso pero sin retornar información, la estructura de esta petición es igual que get tanto es su headers como status. Es util cuando vamos a utilizar API, para comprobar si lo que vamos a enviar esta correcto y puede ser procesado.
    POST        Sirve para la creación de recursos en el servidor.
    PUT         Actualiza por completo un recurso, reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.
    PATCH       Actualiza parcialmente un recurso.
    DELATE      Elimina un recurso.

Los codigos de estado del servidor:
El código de estado (status code) sirve para describir el estado de la petición hecha al servidor.
    1xx     Indican que la petición fue recibida por el servidor, pero está siendo procesada por el servidor.
    2xx     Indican que la petición fue recibida, aceptada y procesada correctamente.
    3xx     Indican que hay que tomar acciones adicionales para completar la solicitud.
    4xx     Indican errores del lado del cliente que hizo mal una solicitud.
    5xx     Indican errores del servidor. Suelen aparecer cuando existe un fallo en la ejecución en el servidor.

Los códigos más comunes a la hora de interactuar con una API son:
    200     OK                      Indica que todo está correcto.
    201     Created                 Todo está correcto cuando se hizo una solicitud POST, el recurso se creó y se guardó correctamente.
    204     No Content              Indica que la solicitud se completó correctamente pero no devolvió información Este es común cuando se hacen peticiones con el verbo DELETE.
    400     Bad Request             Indica que algo está mal en la petición (no encontró algo).
    401     Unauthorized            Significa que antes de hacer una solicitud al servidor nos debemos autenticar.
    403     Forbidden               Indica que no tenemos acceso a ese recurso aunque se esté autenticado.
    404     Not Found               Indica que no existe el recurso que se está intentando acceder.
    500     Internal Server Error   Indica que algo falló, es un error que retorna el servidor cuando la solicitud no pudo ser procesada.


Clase 9: Fetch Data --- Todo explicado en el archivo de la clase.

Clase 10: Callback hell --- explicacion del llamado de la api, utilizando callback anidado. Ademas se cambio el script en el package.json para ejecutar el codigo haciendo este comando: npm run aCallbackFunction.

Clase 11: Promise --- Que son las promesas --- Es una funcion que recive dos funciones. Y despues de hecha cuando se ejecuta se utiliza then para recibir el resolve y catch para tomar el reject. Y al final se usa finally para dar un mensaje de que la promesa se realizo.

Es algo que va a pasar. Pero cuando? Ahora de una vez, en un rato o algun tiempo ó nunca.
Las promesas tienen tres estados: Pendiente: cuando se esta ejecutando. Cumplido: ha regresado la información deseada. Rechazado.


Clase 13:   Fetch

Haciendo soliditudes a la API con promesas. Hay que instalar node-fetch en la misma carpeta del archivo no la root. Importar node-fetch (es una clase que esta formada con promesas).
OJO: se importa para poder correrlo en nuestra consola porque cuando se utiliza en la web, los navegadores tienen el fetch incluido.


Clase 14: Fetch POST: crear productos en la API --- Ojo: la documentacion de la API dice la manera.
