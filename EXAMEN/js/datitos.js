function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;

    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function calcular(){
    const prestamo = document.getElementById('prestamo').value;
    const interes = document.getElementById('interes').value;
    const años = document.getElementById('años').value;
    const capitalizaciones = document.getElementById('capitalizacion').value;

 if(prestamo!=""){
        if(prestamo > 0){
            if(prestamo<=10000000){
                if(interes!=""){
                    if(interes > 0){
                        if(interes<=1){
                            if(años!=""){
                                if(años > 0){
                                    if(años<=20){
                                        if(capitalizaciones!=""){
                                            if(capitalizaciones > 0){
                                                if(capitalizaciones<=12){
                                                    let anios = años;
                                                    let numCapi = 12 / capitalizaciones;
                                                    let numPagos = numCapi*anios;
                                                    let monto = prestamo / numPagos;
                                                    let tasaMensual = interes / 12;
                                                    let InteresMensual = interes / numCapi;
                                                    let periodo = anios*numCapi;
                                                    let totalInteres = 0;
                                                    let totalPago = 0;
                                                    let totalCuota = 0;
                                                    let tiempo;
                                                    let intereses = 0;
                                                    let cuota = 0;
                                                    let saldoPendiente;
                                                    let fin;
                                                    let restante = prestamo;
                                                    let cuotaI = "";
                                                    let interesI = "";
                                                    let restanteI = "";
                                                    let montoI = "";

                                                    let CapitalFinal = prestamo*[(1+InteresMensual)**periodo];
                                                    document.getElementById("resultado").value = CapitalFinal;

                                                    for (let i = 1; i <= numPagos; i++) {
                                                        intereses = saldoPendiente * tasaMensual;
                                                        cuota = intereses + monto;
                                                        saldoPendiente = prestamo - monto;
                                                        restante  = saldoPendiente;

                                                        tiempo += i + 1 + "\n";
                                                        restanteI += "$" + restante.toFixed(2) + "\n";
                                                        montoI += "$" + monto.toFixed(2) + "\n";
                                                        cuotaI += "$" + cuota.toFixed(2) + "\n";
                                                        interesI += "$" + intereses.toFixed(2) + "\n";

                                                        totalInteres += intereses;
                                                        totalPago = monto * numPagos;
                                                        totalCuota += cuota;
                                                    }
                                                    document.getElementById("prestamo").textContent = restanteI;
                                                    document.getElementById("interes").textContent = interesI;
                                                    document.getElementById("pago").textContent = montoI;
                                                    document.getElementById("cuota").textContent = cuotaI;
                                                    document.getElementById("noPago").textContent = tiempo;
                                                    document.getElementById("restante").textContent = fin;
                                                    document.getElementById("totalIntereses").textContent =
                                                        "$" + totalInteres.toFixed(2);
                                                        document.getElementById("totalPago").textContent =
                                                        "$" + totalPago.toFixed(2);
                                                        document.getElementById("totalCuota").textContent =
                                                        "$" + totalCuota.toFixed(2);
                                                }
                                                else{
                                                    alert("El tiempo máximo de capitalizaciones anuales es de 12")
                                                }
                                            }
                                            else{
                                                alert("No puede capitalizar cada "+capitalizaciones+" meses")
                                            }
                                        }
                                        else{
                                            alert("Llene el campo del número de capitalizaciones")
                                        }
                                    }
                                    else{
                                        alert("El tiempo máximo de inversión es de 20 años")
                                    }
                                }
                                else{
                                    alert("No puede invertir durante "+años)
                                }
                            }
                            else{
                                alert("Llene el campo del tiempo de inversión")
                            }
                        }
                        else{
                            alert("No puede tener un interés del más del 100%")
                        }
                    }
                    else{
                        alert("No tener una tasa de interés de "+interes+"%")
                    }
                }
                else{
                    alert("Llene el campo del porcentaje de interés anual")
                }
            }
            else{
                alert("Está ingresando una cantidad de préstamo muy grande")
            }
        }
        else{
            alert("No puede pedir un préstamo de $"+prestamo)
        }
    }
    else{
        alert("Llene el campo del préstamo anual")
    }
}