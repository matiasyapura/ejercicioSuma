let btnEnv = document.getElementById("btnEnviar");

let rotulo = document.getElementById("rotulo");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let dato = document.getElementById("dato");
let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");

rotulo.innerHTML = "Ingrese 1er numero:  ";
//… funcionalidad de ingreso de datos …
rotulo1.innerHTML = "Ingrese 2do numero: ";

rotulo2.innerHTML = "Ingrese 3do numero: ";

btnEnv.addEventListener("click", () => {
  // TU CODIGO VA AQUI, POR EJEMPLO:
  console.log("El 1er numero es ", dato.value);
  console.log("El 2er numero es ", dato1.value);
  console.log("El 3er numero es ", dato2.value);

  let resultado: number =
    Number(dato.value) + Number(dato1.value) + Number(dato2.value);

  console.log("el resultado es ", resultado);
});
