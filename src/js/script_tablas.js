function enviarTablas() {
  const tabla = document.getElementById("tabla").value;
  const hasta = document.getElementById("hasta").value;
  const resultadoP = document.getElementById("resultado");
  const advertenciaP = document.getElementById("advertencia");

  if (hasta == null || hasta == 0) {
    let mensaje =
      "Recuerda que puedes especificar hasta que numero quieres la tabla";
    advertenciaP.innerHTML = mensaje;
  }

  let resultadoHTML =
    "<h2>Resultado</h2><br>" + "La tabla del " + tabla + " Es:" + "<br>";

  if (hasta == 0 || hasta >=1001) {
    for (let i = 0; i <= 10; i++) {
      resultadoHTML += tabla + " X " + i + " = " + tabla * i + "<br>";
    }
  } else {
    for (let i = 0; i <= hasta; i++) {
      resultadoHTML += tabla + " X " + i + " = " + tabla * i + "<br>";
    }
  }
  resultadoP.innerHTML = resultadoHTML;
}
