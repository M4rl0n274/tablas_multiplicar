function enviarTablas(){

    const tabla = document.getElementById('tabla').value;
    const resultadoDiv = document.getElementById('Resultado');


    let resultadoHTML  = "La tabla del " +tabla + " Es:" + "<br>"

    for (let i = 0 ; i<=10 ; i++){
        resultadoHTML  += tabla +" X " + i + " = " + tabla * i +"<br>";
    }
    
    resultadoDiv.innerHTML =  resultadoHTML;
 

    



}











