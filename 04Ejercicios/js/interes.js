function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;

    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function interes(formulario){
    var valor = document.getElementById("cantidad").value;
    var resul = parseInt(valor);

    if(resul > 0){
        if(resul <= 1000000000){
            var interes = resul * 0.02;
        var total = resul + interes;
        document.getElementById("cantidadi").value = "$"+total;
        
        }
        else{
            alert("$"+resul+" es mucho dinero")
        formulario.cantidad.focus();
        return false;
        }
    }
    else{
        alert("No puede invertir $"+resul)
        formulario.cantidad.focus();
        return false;
    }
    
}

function borrard(){
    document.getElementById("cantidad").value = "";
    document.getElementById("cantidadi").value = "";
}