
function enviarTablas(){
    
    const tabla = document.getElementById('tabla').value;
    const resultadoDiv = document.getElementById('Resultado');
    const hasta = document.getElementById('hasta').value;

    let resultadoHTML  ="<h2>Resultado</h2><br>"+ "La tabla del " +tabla + " Es:" + "<br>"

    if(hasta == 0){
        for (let i = 0 ; i<=10 ; i++){
                resultadoHTML  += tabla +" X " + i + " = " + tabla * i +"<br>";
        }
    }else{ 
        for (let i = 0 ; i<=hasta ; i++){
                resultadoHTML  += tabla +" X " + i + " = " + tabla * i +"<br>";
        }
    }
    resultadoDiv.innerHTML =  resultadoHTML;

}
