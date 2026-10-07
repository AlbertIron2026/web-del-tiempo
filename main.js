// URL del tiempo con tu ciudad y la API KEY personalizada
// mejor poner unidades en metrica

const urlTiempo =
  "https://api.openweathermap.org/data/2.5/weather?q=barcelona,es&appid=(tu_api_key)&units=metric&lang=es";

// pillar los contenedores de html:
const ciudad = document.getElementById("ciudad");
const descripcion = document.getElementById("descripcion");
// tambien se puede usar querySelector()
const temperatura = document.querySelector("#temperatura");
const humedad = document.querySelector("#humedad");
const icono = document.querySelector("#icono");

fetch(urlTiempo)
  .then((respuesta) => respuesta.json())
  .then((data) => {
    console.log(data); //todos los datos
    console.log(data.name); //es la ciudad
    console.log(data.weather[0].description); //nubes etc
    console.log(data.main); //datos principales: temperatura, humedad...
    console.log(data.main.temp, "ºC"); // temperatura
    console.log(data.main.humidity, "%"); //humedad
    console.log(data.weather[0].icon); //nombre del icono (04d), no su url
    let nombreIcono = data.weather[0].icon;
    //https://openweathermap.org/img/wn/04d@2x.png
    // como seria en template literals?
    let urlIcono =`https://openweathermap.org/img/wn/${nombreIcono}@2x.png`;
    console.log("url icono:", urlIcono);

    // ***** ver los datos en pantalla en los divs correspondientes *****
    ciudad.innerText = data.name;
    descripcion.innerText = data.weather[0].description;
    temperatura.innerText = data.main.temp + "ºC";
    humedad.innerText = data.main.humidity + "%";
    // imagen. Si en HTML es un img, asignar el src
    // <img src="" id="imagen"> hariamos: imagen.src= urlIcono

    // si es un div, crear todo <img> aqui:
    icono.innerHTML = ` <img src=${urlIcono} width="90">`
  })
  .catch((error) => {
    console.log(error);
    const seccion = document.querySelector("section");
    seccion.style.display = "none";
  });
