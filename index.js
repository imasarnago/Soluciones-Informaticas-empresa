const enviarBtn = document.getElementById("enviar-btn")
const summary = document.querySelector("#summary");
const form1 = document.querySelector("#form1");
const form2 = document.querySelector("#form2");
//const emailInput = document.querySelector(".email-input");
const tituloReclamo = document.getElementById("titulo-reclamo")
const cambiaColor = document.getElementById("cambiaColor")


function subirForm(event) {
  event.preventDefault()
  let email = document.querySelector("#exampleFormControlInput1").value;
  let texto = document.querySelector("#exampleFormControlTextarea1").value;

  if (email === "" || texto === ""){
    alert("Los campos son requeridos")
  }else {
    summary.innerHTML = `Email: ${email}<br> Comentario: ${texto}`;
  
    // ocultar el primer paso y mostrar el segundo paso
    form1.style.display = "none";
    form2.style.display = "block";
    tituloReclamo.style.display = "none"
    cambiaColor.style.color = "#ffc300"
  }

}


$(document).ready(function () {

  // La siguiente función me convierte a PDF el resúmen de los datos ingresados por el usuario
  
  $("#printSummary").click(function () {
    var printContents = $("#summaryContent").html(); 
    w = window.open(); //Abro una nueva ventana
    w.document.write(printContents); 
    w.print(); //Imprimo
    return true;
  });
})


function enviarForm2(event) {
  event.preventDefault()
  alert ("Se registraron los datos correctamente")
  $("#errores").empty()
  $("#errores").remove()
} 


$("#enviar-2").click(function(){
  const errores = []
  if($(".seleccionar1").val() === "Seleccionar") {
    //console.log("Hola")
    errores.push("Hay un error. Complete los campos si quiere enviar el formulario")
  }
  if (errores.length > 0) {
   alert("Hay errores")
   $("#errores").css("padding","10px")
   $("#errores").css("background-color","black")
   $("#errores").css("color","red")
   $("#errores").empty()
   errores.forEach(function (elemento){
    $("#errores").append(elemento )
    
   }) 
  }
  else {
    $("#form4").submit()
  }
})


