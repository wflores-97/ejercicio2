function calcularNota(){
    let notaFinal;
    let nota1= parseFloat(document.getElementById("txtNota1").value);
    let nota2= parseFloat(document.getElementById("txtNota2").value);
    let nota3= parseFloat(document.getElementById("txtNota3").value);

    if (nota1>30 || nota2>30 || nota3>40){
        Swal.fire({
            text: "Las notas ingresadas exceden los valores máximos permitidos.",
            icon: "warning"
          });
    }

    notaFinal=nota1+nota2+nota3;

    if(notaFinal<60){
        Swal.fire({
            text: "Su nota es: " + notaFinal + " puntos. ¡Ha reprobado!",
            icon: "info"
        });
    }else if(notaFinal<80){
        Swal.fire({
            text: "Su nota es: " + notaFinal + " puntos. ¡Es bueno!",
            icon: "info"
        });
    }else if(notaFinal<90){
        Swal.fire({
            text: "Su nota es: " + notaFinal + " puntos. ¡Es muy Bueno!",
            icon: "info"
        });
    }else{
        Swal.fire({
            text: "Su nota es: " + notaFinal + " puntos. ¡Es sobresaliente!",
            icon: "info"
        });
    }
    

}

function limpiar(){
    document.getElementById("txtNota1").value="";
    document.getElementById("txtNota2").value="";
    document.getElementById("txtNota3").value="";
}