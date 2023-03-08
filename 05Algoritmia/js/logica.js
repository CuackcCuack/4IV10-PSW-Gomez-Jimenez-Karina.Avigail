//Problema1
function problema1(){
    var valores = document.getElementById("p1-input").value;
    var split = valores.split(' ').reverse();
    var resultado = '';

    split.forEach(function (palabras, i){

        if(i != 0 || i != split.length) resultado += ' ';
        resultado += palabras;
    });

    document.querySelector('#p1-output').textContent = resultado;
}

//Problema 2
function problema2()
{
    //valores en x
    var x1 = document.querySelector('#p2--x1').value;
    var x2 = document.querySelector('#p2--x2').value;
    var x3 = document.querySelector('#p2--x3').value;
    var x4 = document.querySelector('#p2--x4').value;
    var x5 = document.querySelector('#p2--x5').value;
    //valores en y
    var y1 = document.querySelector('#p2--y1').value;
    var y2 = document.querySelector('#p2--y2').value;
    var y3 = document.querySelector('#p2--y3').value;
    var y4 = document.querySelector('#p2--y4').value;
    var y5 = document.querySelector('#p2--y5').value;

    var v1 = [x1, x2, x3, x4, x5];
    var v2 = [y1, y2, y3, y4, y5];

    v1 = v1.sort(function (v1, v2)
    {
        return v2-v1;
    });

    v2 = v2.sort(function (v1, v2)
    {
        return v2-v1;
    });
    
    v2 = v2.reverse();

    var resultado = 0;

    for(var i = 0; i < v1.length; i++)
    {
        resultado += v1[i] * v2[i];
    }

    document.querySelector('#p2-output').textContent = 'El mínimo producto escalar de los vectores es: '+ resultado;
}

//Problema3
function problema3()
{
    //primero necesitamos definir un alfabeto
    var alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    //Vamos a obtener la entrada de los datos
    var p3_input= document.querySelector('#p3-input').value;

    //Lo que necesitamos es separar todo por comas
    var p3_palabras= p3_input.split(',');
    
    //Necesitamos una función que se encargue de recuperar cada palabra 
    //Hay que eliminar los espacios
    p3_palabras=p3_palabras.map(function(palabras)
    {
        return palabras.replace(/\s/g, '').toUpperCase();
    });
    
    //Toca calcular los caracteres únicos
    var p3_res='';
    
    //Haremos una funcion que se encargue de calcular que contienen el arreglo y 
    //separar cada caracter y contarlo 
    p3_palabras.forEach(function(palabra, i)
    {
    var letras_unicas = [];
    var palabra_array= palabra.split('');

        //debo iterar el alfabeto
            alfabeto.forEach(function (letra, j)
            {
                //itero cada palabra
                palabra_array.forEach(function(letras_palabras, k)
                {
                    //comprobar que la letra este dentro del alfabeto
                    if(letras_palabras==letra)
                    {
                        //si la letra no la hemos contado la agregamos a un array
                        //para contar las letras únicas
                        if(letras_unicas.indexOf(letra)<0)
                        {
                            letras_unicas.push(letra);

                        }
                    }
                });
            });
            //vammos a contar la salida 
            p3_res+= 'Palabras: ' + palabra + '='+ letras_unicas.length +' \n';
        });
   //imprimir salida
   document.querySelector('#p3-output').textContent =p3_res;
}
