/*
JavaScript es un lenguaje que posee un paradigma 
orientado a objetos y funciones, por tal motivo presenta
una particularidad que es: 

No tipado
No existe int, float, string, ni char, ni nada :(

Todo es var -> Variable
de acuerdo al estándar ES6 se manejan 3 tipos de variable

VAR 
LET es una variable de tipo "Protected" (Solo en el fragmento
    donde se declara, por lo que es local y no se puede
    invocar en otro lado)
CONST es un valor constante (No se cambia ni se sobreescribe)

*/

function validar(formulario){
    if(formulario.nombre.value.length <= 3){
        alert("Favor de ingresar más de 3 carácteres en el campo nombre");
        formulario.nombre.focus();//posiciona el puntero
        return false;
    }

    var checarABC = "qwertyuiopasdfghjklñzxcvbnm" + "QWERTYUIOPASDFGHJKLÑZXCVBNM" + "áéíóú" + "ÁÉÍÓÚ";

    var cadenaNombre = formulario.nombre.value;

//alert(cadenaNombre);

    var todoesvalido = true;

    for(var i = 0; i < cadenaNombre.length; i++){
        var caracteres = cadenaNombre.charAt(i);
        for(var j = 0; j < checarABC.length; j++){
            if(caracteres == checarABC.charAt(j)){
                break;
            }
        }
        if(j==checarABC.length){
            todoesvalido = false;
            break;
        }
    }
    if(!todoesvalido){
        alert("Ingresa solo letras en el campo de nombre");
        formulario.nombre.focus();
        return false;
    }

    var edad = parseInt(formulario.edad.value);

    //alert(edad);

    if((edad < 0) || (edad >= 99)){
        alert("Favor de ingresar una edad válida de entre 0 y 99 años");
        formulario.edad.focus();//posiciona el puntero
        return false;
    }

    var checarABC = "0123456789";

    var cadenaNombre = formulario.edad.value;

//alert(cadenaNombre);

    var todoesvalido = true;

    for(var i = 0; i < cadenaNombre.length; i++){
        var caracteres = cadenaNombre.charAt(i);
        for(var j = 0; j < checarABC.length; j++){
            if(caracteres == checarABC.charAt(j)){
                break;
            }
        }
        if(j==checarABC.length){
            todoesvalido = false;
            break;
        }
    }
    if(!todoesvalido){
        alert("Ingresa solo números en el campo de edad");
        formulario.edad.focus();
        return false;
    }

    //es para obtener el campo del correo
    var email = formulario.correo.value;

    //Vamos a crear una expresión regular
    var prueba = /([Aa-Zz]+[0-9]+\.){10}\@([Aa-Zz]+[0-9]){8}\.([Aa-Zz]+[0-9]){3}/g;
    alert("Email "+(prueba.test(email) ? " " : "no ") + "válido");
    formulario.correo.focus();
    return prueba.test;

}









