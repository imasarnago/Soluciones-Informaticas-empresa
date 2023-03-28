const enviarBtn = document.getElementById("enviar-btn")
const summary = document.querySelector("#summary");
const form1 = document.querySelector("#form1");
const form2 = document.querySelector("#form2");
const tituloReclamo = document.getElementById("titulo-reclamo")
const cambiaColor = document.getElementById("cambiaColor")



enviarBtn.addEventListener("click", function() {
    let email = document.querySelector("#exampleFormControlInput1").value;
    let texto = document.querySelector("#exampleFormControlTextarea1").value;
    
    summary.innerHTML = `Email: ${email}<br> Comentario: ${texto}`;
    
    // ocultar el primer paso y mostrar el segundo paso
    form1.style.display = "none";
    form2.style.display = "block";
    tituloReclamo.style.display = "none"
    cambiaColor.style.color = "#ffc300"
  });
