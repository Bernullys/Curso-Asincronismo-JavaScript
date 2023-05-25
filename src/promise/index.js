const promise = new Promise(function(resolve, reject){  // dos funciones dentro de promise (resolve, reject)
    resolve("Se resolvio")              // dentro de la funcion se hace el codigo que necesitemos.
});

const cows = 1;

const countCows = new Promise (function (resolve, reject){
    if (cows > 10) {
        resolve(`We have ${cows} cows in the farm`);
    } else {
        reject(`There are only ${cows} in the farm`);
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log("Finally the promise is over"));