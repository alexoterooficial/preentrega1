// Misión: Pedirle al usuario la cantidad inicial de dinero que invirtió, pedirle la tasa de interés y pedirle el plazo en el que el monto inicial estará invertido (en días). Después, darle un resultado de cuánto habrá aumentado su dinero en ese plazo.

const iniciarCalculadora = () => {
    let seguirCalculando = true;
    alert("¡Te doy la bienvenida a tu calculadora de interés en inversiones!");

    while (seguirCalculando) {
        let dineroInvertidoInicial;

        // Solicitar y validar la cantidad inicial de dinero invertido
        while (true) {
            dineroInvertidoInicial = prompt('Por favor, ingresa la cantidad inicial que invertiste (o escribe "salir" para terminar)');
            
            if (dineroInvertidoInicial === null || dineroInvertidoInicial.trim() === '') {
                alert('Por favor, ingresa un valor válido.');
            } else {
                dineroInvertidoInicial = dineroInvertidoInicial.trim().toLowerCase();
                
                if (dineroInvertidoInicial === 'salir') {
                    seguirCalculando = false;
                    alert("¡Gracias por usar nuestra calculadora! Vuelve pronto.");
                    return; // Salir de la función y terminar el programa
                } else if (!isNaN(parseFloat(dineroInvertidoInicial))) {
                    dineroInvertidoInicial = parseFloat(dineroInvertidoInicial);
                    break; // Salir del bucle interno si la entrada es válida
                } else {
                    alert('Eso no es un número válido.');
                }
            }
        }

        if (!seguirCalculando) break; // Si el usuario eligió salir, termina el programa

        let tasaDeInteres;

        // Solicitar y validar la tasa de interés
        while (true) {
            tasaDeInteres = prompt('Ingresa la tasa de interés anual (%):');
            
            if (tasaDeInteres === null || tasaDeInteres.trim() === '' || isNaN(parseFloat(tasaDeInteres))) {
                alert('Por favor, ingresa una tasa de interés válida.');
            } else {
                tasaDeInteres = parseFloat(tasaDeInteres) / 100; // Convertir porcentaje a decimal
                break; // Salir del bucle interno si la entrada es válida
            }
        }

        let plazoEnDias;

        // Solicitar y validar el plazo en días
        while (true) {
            plazoEnDias = prompt('Ingresa el plazo en días que estará invertido el dinero:');
            
            if (plazoEnDias === null || plazoEnDias.trim() === '' || isNaN(parseInt(plazoEnDias))) {
                alert('Por favor, ingresa un plazo en días válido.');
            } else {
                plazoEnDias = parseInt(plazoEnDias);
                break; // Salir del bucle interno si la entrada es válida
            }
        }

        // Calcular el aumento del dinero
        let aumento = dineroInvertidoInicial * (1 + tasaDeInteres * plazoEnDias / 365);
        aumento = aumento.toFixed(2); // Redondear a dos decimales
        
        alert(`Después de ${plazoEnDias} días, tu dinero aumentará a ${aumento}`);
    }
}

iniciarCalculadora();
