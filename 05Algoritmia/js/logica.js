//problema1


//problema2


//problema3
function problema3(){
    //primero necesitamos definir un alfabeto
    var alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 
    'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    //Vamos a obtener la entrada de los datos
    var p3_input = document.querySelector('#p3-input').value;

    //Lo que necesitamos es separar todo por comas
    var p3_palabras = p3_input.split(',');

    //Necesitamos una función que se encargue de recuperar cada palabra 
    //Hay que eliminar los espacios
    p3_palabras = p3_palabras.map(function(palabras){return palabras.replace(/\s/g, '').toUppercase();});

    //Toca calcular los caracteres únicos
    var p3_respuesta = '';

    //Haremos una funcion que se encargue de calcular que contienen el arreglo y 
    //separar cada caracter y contarlo 
    p3_palabras.array.forEach(function(palabra, i){
        var letras_unicas = [];
        var palabra_array = palabra.split('');

        //debo iterar el alfabeto
        alfabeto.forEach(function(letra, j){
            //itero cada palabra
            palabra_array.forEach(function(letras_palabras, k){
                //comprobar que la letra esté dentro del alfabeto
                if(letras_palabras == letra){
                    //si la letra no la hemos contado la agregamos a un array
                    //para contar las letras únicas
                    if(letras_unicas.indexOf(letra)<0){
                        letras_unicas.push(letra);
                    }
                }
            });
        });
        //vamos a contar la salida
        p3_res += 'Palabra: ' + palabra + ' = ' + letras_unicas.length + '\n';
    });
    //imprimir salida
    document.querySelector('#p3-output').textContent = p3_res;
}
