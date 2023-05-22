# Curso-Asincronismo-JavaScript
Curso de Asincronismo con JavaScript

Conceptos claves: 
Callbacks Async Await Promises

Clase 3: Event Loop.

Aplicacion desarrollada por Philip Roberts: loupe : Demuestra graficamente como funciona asincronismo.
Explicación de Diego De Granda (muy buena): En Memory Heap es la memoria que tiene las variables y funciones exparcidas, ahi estan. El Call Stack en donde se ejecuta el codigo JS, pero si el Call Stack recibe una función asincrona que la ejecuta otra aplicacion como un web browser, el Call Stack se la envia para que la resuelva. Mientras tanto el Call Stack sigue resolviendo sus tareas. La funcion asincrona que se envio a otro lugar a ejecutarse, una vez resuelta entra en una zona llamada Callback queue en donde otra parte llamada Event Loop estara constantemente preguntando al Call Stack si ya termino sus tareas para entrgarle el resultado de la funcion asincrona. Asi el tiempo de la funcion asincrona sea cero, el Event Loop esperara a que el Call Stack termine sus tareas para entregar el resultado.
