"use strict";

var XMLHTTPRequest = require("xmlhttprequest");
var API = "https://api.escuelajs.co/api/v1";
function fetchData(urlApi, aCallbackFunction) {
  var xhttp = new XMLHTTPRequest();
  xhttp.open("GET", urlApi, true);
  xhttp.onreadystatechange = function (aEvent) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 2000) {
        aCallbackFunction(null, JSON.parse(xhttp.responseText));
      }
    } else {
      var error = new Error("Error en este enlace" + urlApi);
      return aCallbackFunction(error, null);
    }
  };
  xhttp.send();
}