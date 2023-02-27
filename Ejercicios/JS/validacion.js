function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;

    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function validarL(e){
    var teclado = (document.all)? e.keyCode : e.which;

    if(teclado == 8) return true;
    var patron = /[A-Za-z]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function ejercicio1(){
    var valor = document.getElementById("inversion").value;
    var inversion = parseFloat(valor);
    var valormeses = document.getElementById("duracion").value;
    var tiempo = parseInt(valormeses);

    if(inversion > 0){
        if(inversion <= 1000000000){
            if(tiempo > 0){
                if(tiempo <= 36){
                    var ganancia = inversion * 0.08;
                    var operacion = inversion + ganancia;
                    var total = operacion;
                    document.getElementById("resultado1").value = "$"+total;
                }
                else{
                    alert("Solo puede invertir durante 36 meses")
                    return false;
                }
            }
            else{
                alert("No puede tener ganancias en 0 meses")
                return false;
            }
        }
        else{
            alert("$"+inversion+" es mucho dinero")
            return false;
        }
    }
    else{
        alert("No puede invertir $"+inversion)
        return false;
    }
}

function ejercicio2(){
    var salario = document.getElementById("sueldo").value;
    var sueldob = parseFloat(salario);

    if(sueldob > 0){
        if(sueldob <= 1000000000){
            var pago = sueldob * 5;
            var extra = 0.1 * pago;
            var sueldof = pago + extra;
            var impuestos = 0.12 * sueldof;
            var total2 = sueldof - impuestos;
            document.getElementById("result").value = "$"+total2;
        }
        else{
            alert("Digame donde trabaja para ganar $"+sueldob+" dinero")
            return false;
        }
    }
    else{
        alert("No puede ganar $"+sueldob+" y si de verdad gana eso, demande a su jefe")
        return false;
    }
}

function ejercicio3(){
    var productoin = document.getElementById("nombre").value;
    var tipo = document.getElementById("tipo").value;
    var precio = document.getElementById("precio").value;
    var valor = parseInt(precio);

    var papas = valor*0.02;
    var pastelito = valor*0.1;
    var lacteo = valor*0.075;

    if (precio > 0){
        if(precio < 1000)
        {
            tipo = tipo.toLowerCase();
            switch(tipo){
                case "papas":
                    document.getElementById("descuento").value = "Sus papas "+productoin+" costarán $"+(valor-papas);
                break;

                case "pastelito":
                    document.getElementById("descuento").value = "Su pastelito "+productoin+" costará $"+(valor-pastelito);
                break;

                case "lacteo":
                    descuento = precio*0.075;
                    precioFinal = precio - descuento;
                    document.getElementById("descuento").value = "Su lácteo "+productoin+" costará $"+(valor-lacteo);
                break;

                default:
                    document.getElementById("descuento").value = "Su producto "+productoin+" no tiene descuento";
                break;        
                }
            }
            else{
                alert("El producto no cuesta tanto >:(");
                return false;
            }
        }
        else{
            alert("El producto no es gratis");
            return false;
            }
}

function ejercicio4(){
    var primer = document.getElementById("primerP").value;
    var primerP = parseFloat(primer);
    var segundo = document.getElementById("segundoP").value;
    var segundoP = parseFloat(segundo);
    var tercer = document.getElementById("tercerP").value;
    var tercerP = parseFloat(tercer);
    var examen = document.getElementById("examen").value;
    var examenF = parseFloat(examen);
    var trabajo = document.getElementById("trabajo").value;
    var trabajoF = parseFloat(trabajo);

    if(10 >= primerP && primerP >= 0){
        if(10 >= segundoP && segundoP >= 0){
            if(10 >= tercerP && tercerP >= 0){
                if(10 >= examenF && examenF >= 0){
                    if(10 >= trabajoF && trabajoF >= 0){
                        var promedio1 = (primerP+segundoP+tercerP)/3;
                        var promedioParciales = promedio1*0.55;
                        var promedioExamen = examenF*0.30;
                        var promedioTrabajo = trabajoF*0.15;
                        var CaliFinal = promedioParciales+promedioExamen+promedioTrabajo;
                        document.getElementById("calificacionFinal").value = "Tu calificación final es de "+CaliFinal;
                    }
                    else{
                        alert("Ingrese una calificación válida en el trabajo final");
                        return false;
                    }

                }
                else{
                    alert("Ingrese una calificación válida en el examen final");
                    return false;
                }
            }
            else{
                alert("Ingrese una calificación válida en el tercer parcial");
                return false;
            }
        }
        else{
            alert("Ingrese una calificación válida en el segundo parcial");
            return false;
        }
    }
    else{
        alert("Ingrese una calificación válida en el primer parcial");
        return false;
    }
}

function ejercicio5(){
    var mujeres = document.getElementById("muj").value;
    var hombres = document.getElementById("hom").value;

    let lector = /\D/;

    if(lector.test(mujeres)){
        alert("Ingrese una cantidad entera en el número de mujeres");
        return false;
    }
    else{
        if(lector.test(hombres)){
            alert("Ingrese una cantidad válida en el número de hombres");
            return false;
        }
        else{
            var muj = parseInt(mujeres);
            var hom = parseInt(hombres);
            if(100 >= muj && muj >= 0){
                if(100 >= hom && hom >= 0){

                    var total = muj+hom;
                    var pormuj = (muj / total)*100;
                    var porhom = (hom / total)*100;
                    
                    document.getElementById("porcentaje1").value = "El porcentaje de hombres es de "+porhom+"%";
                    document.getElementById("porcentaje2").value = "El porcentaje de mujeres es de "+pormuj+"%";
                    document.getElementById("porcentajetotal").value = "De un grupo de "+total+" personas";
                }
                else{
                    alert("Ingrese una cantidad válida de hombres")
                }
            }
            else{
                alert("Ingrese una cantidad válida de mujeres")
            }
        }
    }
}

function ejercicio6(){
    
}

function ejercicio7(){
    
}

function ejercicio8(){
    
}

function ejercicio9(){
    
}

function ejercicio10(){
    
}