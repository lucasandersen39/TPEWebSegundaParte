document.addEventListener("DOMContentLoaded", function () {
    "uses strict"
    let botonMenu = document.querySelector("#idBtn-menu");
    botonMenu.addEventListener("click", desplegarMenu);
    //asigno a listaBarberos la lista listaDeBarberos generada en datos.js
    //donde se encuentran cargados los turnos de cada barbero
    let listaTurnos = [];
    listaTurnos = listaDeTurnos;
    let barberos = ["Nicolas", "Ernesto", "Pedro"];
    /*Ordena el arreglo de turnos de forma ascendente */
    listaTurnos.sort(function (item1, item2) {
        if (item1.fecha > item2.fecha)
            return 1;
        else
            if (item1.fecha == item2.fecha && item1.hora > item2.hora)
                return 1;
            else
                return -1;
        if (item1.fecha < item2.fecha)
            return -1;
        return 0;
    });

    /*Setea la fecha del input date con la fecha de hoy 
    y actualiza la tabla con los turnos del dia de la fecha */
    armarTHead(barberos);
    let porFecha = document.querySelector("#idFechaTurno");
    porFecha.value = fechaActual();
    cargarTurnos(buscarPorFecha(listaTurnos, porFecha.value), barberos);

    let btnFiltro = document.querySelector("#idBotonFiltro");
    btnFiltro.addEventListener("click", function () {
        let selBarbero = document.querySelector("#idSelectBarbero");
        let selHora = document.querySelector("#idSelectHora");
        let arrAux;
        let listBarberos = barberos;
        arrAux = buscarPorFecha(listaTurnos, porFecha.value);
        if (selBarbero.value != "vacio") {
            arrAux = buscarPorBarbero(arrAux, selBarbero.value);
            listBarberos = [];
            listBarberos[0] = selBarbero.value;
        }
        if (selHora.value != "vacio")
            arrAux = buscarPorHora(arrAux, selHora.value);
        limpiarTHead();
        armarTHead(listBarberos);
        console.log(arrAux.length);
        cargarTurnos(arrAux, listBarberos);
    });
    let tBodyTabla = document.querySelector("#idTbodyTabla");
    tBodyTabla.addEventListener("click", (event) => {
        console.log(event.target.classList.toggle("seleccionada"));
        let horid = event.target.id.split('-');
        console.log(horid[0]);
        console.log(horid[1]);
        let formulario = document.querySelector("#idFormulario");
        formulario.classList.toggle("desplegar");
    });

    /*Funcion que muestra u oculta el menu en mobile*/
    function desplegarMenu() {
        let nav = document.querySelector("#idUlNav");
        nav.classList.toggle("mostrar");
    }

    /**
     * Obtiene la fecha de hoy por medio de la libreria Date
     * @returns La fecha de hoy formateada en AAAA/MM/DD
     */
    function fechaActual() {
        const hoy = new Date();
        let fecha = hoy.getFullYear() + "-" + (hoy.getMonth() + 1) + "-" + hoy.getDate();
        return fecha;
    }

    function cargarTurnos(turnos, listaBarberos) {
        limpiarTabla();
        let bodyTable = document.querySelector("#idTbodyTabla");
        for (let hora = 10; hora <= 18; hora++) {
            let fila = document.createElement("tr");
            fila.appendChild(crearColumna(hora));
            bodyTable.appendChild(fila);
            for (let i = 0; i < listaBarberos.length; i++) {
                if (estaDisponible(listaBarberos[i], hora, turnos))
                    fila.appendChild(crearColumna("Disponible", "celdaDisponible", hora, listaBarberos[i]));
                else
                    fila.appendChild(crearColumna("Reservado", "celdaReservada", hora, listaBarberos[i]));
                bodyTable.appendChild(fila);
            }
        }
    }
    function crearColumna(dato, estilo, h, n) {
        let col = document.createElement("td");
        col.textContent = dato;
        col.classList.add(estilo);
        col.id = "" + h + "-" + n;
        return col;
    }

    function estaDisponible(nombre, hora, turnos) {
        let estaDisponible = true;
        let i = 0;
        while (i < turnos.length && estaDisponible)
            if (turnos[i].barbero == nombre && turnos[i].hora == hora)
                estaDisponible = false;
            else
                i++;
        return estaDisponible;
    }

    function armarTHead(arBarberos) {
        let theadT = document.querySelector("#idTheadTabla");
        let fila = document.createElement("tr");
        fila.appendChild(crearColumna("Barbero"));
        theadT.appendChild(fila);
        for (let i = 0; i < arBarberos.length; i++) {
            fila.appendChild(crearColumna(arBarberos[i]));
            theadT.appendChild(fila);
        }
    }

    /**
     * Elimina todos los nodos de la tabla
     */
    function limpiarTabla() {
        let bodyT = document.querySelector("#idTbodyTabla");
        while (bodyT.firstChild)
            bodyT.removeChild(bodyT.firstChild);
    }

    function limpiarTHead() {
        let headT = document.querySelector("#idTheadTabla");
        while (headT.firstChild)
            headT.removeChild(headT.firstChild);
    }

    function buscarPorFecha(arreglo, fecha) {
        let arregloAux = [];
        for (let i = 0; i < arreglo.length; i++) {
            if (arreglo[i].fecha == fecha)
                arregloAux.push(arreglo[i]);
        }
        return arregloAux;
    }

    function buscarPorBarbero(arreglo, nombre) {
        let arregloAux = [];
        for (let i = 0; i < arreglo.length; i++) {
            if (arreglo[i].barbero == nombre)
                arregloAux.push(arreglo[i]);
        }
        return arregloAux;
    }

    function buscarPorHora(arreglo, hora) {
        let arregloAux = [];
        for (let i = 0; i < arreglo.length; i++) {
            if (arreglo[i].hora == hora)
                arregloAux.push(arreglo[i]);
        }
        return arregloAux;
    }


    /*CAPTCHA */

    let formulario = document.querySelector("#idFormulario");
    let fecha = document.querySelector("#idFechaTurno");

    //La funcion Math.random me genera un numero random entre 0 y 1 sin incluir el 1
    //Le sumamos 1 para incluir el numero max entre los posibles resultados al aplicarle el floor
    function numeroAleatorio(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }

    //Genera una cadena de texto de tamaño cantLetras
    //define un arreglo con las letras disponibles
    //genera un numero aleatorio entre 0 y el tamaño del arreglo usando la funcion numeroAleatorio
    //va concatenando la cadena con la nueva letra generada


    function armarPalabra(cantLetras) {
        let letras = 'abcdefghijklmnopqrstuvwxyz';
        let cadena = '';
        for (let i = 1; i <= cantLetras; i++) {
            let numeroRandomLetras = numeroAleatorio(0, letras.length - 1);
            let letra = letras.charAt(numeroRandomLetras);
            cadena = cadena.concat(letra);
        }
        return cadena;
    }

    //Genera un captcha de un tamaño especificado y lo inserta en turnos.html
    function generarCaptcha() {
        let textoCaptcha = document.querySelector("#idTextoCaptcha");
        //recupero la cadena aleatoria
        let cadena = armarPalabra(5);
        //Añade la cadena aleatoria al <p>
        textoCaptcha.innerHTML = cadena;
    }
 
    //Crea una lista de forma dinamica con los datos ingresados por el usuario
    //y lo inserta debajo del form en la pagina de turnos
    function mostrarResumenTurno() {
        let divInfoTurno = document.querySelector("#infoConfirmaTurno");
        let nombre = document.querySelector("#idInputNombre");
        let apellido = document.querySelector("#idInputApellido");
        let barbero = document.querySelector("#idSelectBarbero");
        let hora = document.querySelector("#idSelectHora");

        let lista = document.createElement("ul");
        //se aplica un estilo a la lista que muestra los datos de la reserva con firmada
        lista.classList.add("listaReservaTurno");
        let elementoLista = document.createElement("li");
        elementoLista.classList.add("elementoListaReserva");
        let info = document.createTextNode("Nombre: " + nombre.value);
        elementoLista.appendChild(info);
        lista.appendChild(elementoLista);

        let elementoLista2 = document.createElement("li");
        elementoLista2.classList.add("elementoListaReserva");
        let info2 = document.createTextNode("Apellido: " + apellido.value);
        elementoLista2.appendChild(info2);
        lista.appendChild(elementoLista2);

        let elementoLista3 = document.createElement("li");
        elementoLista3.classList.add("elementoListaReserva");
        let info3 = document.createTextNode("Fecha: " + fecha.value + " Hora: " + hora.value);
        elementoLista3.appendChild(info3);
        lista.appendChild(elementoLista3);

        let elementoLista4 = document.createElement("li");
        elementoLista4.classList.add("elementoListaReserva");
        let info4 = document.createTextNode("Barbero: " + barbero.value);
        elementoLista4.appendChild(info4);
        lista.appendChild(elementoLista4);

        let h3 = document.createElement("h3");
        let encabezado = document.createTextNode("Reserva confirmada");
        h3.appendChild(encabezado);
        divInfoTurno.appendChild(h3);
        divInfoTurno.appendChild(lista);
        //se aplica un estilo al div que contiene la confirmacion del turno
        divInfoTurno.classList.add("divInfoTurno");
    }
    //Imprime en la pagina un mensaje de que el captcha es incorrecto
    function errorCaptchaIngresado() {
        let divInfoTurno = document.querySelector("#infoConfirmaTurno");
        divInfoTurno.classList.add("divInfoTurno");
        divInfoTurno.innerHTML = "Captcha Incorrecto";
    }
    //Retorna true si todos los campos requeridos estan completos
    function validarTodosLosCampos() {
        let nombre = document.querySelector("#idInputNombre");
        let apellido = document.querySelector("#idInputApellido");
        let codigoDeArea = document.querySelector("#idCodigoArea");
        let numeroTelefono = document.querySelector("#idNumeroTelefono");
        let barbero = document.querySelector("#idSelectBarbero");
        let hora = document.querySelector("#idSelectHora");

        if ((nombre.value != "") && (apellido.value != "") && (codigoDeArea.value != "") &&
            (numeroTelefono.value != "") && (barbero.value != "") && (hora.value != "") && (fecha.value != "")) {
            return true;
        }
        else {
            return false;
        }
    }

    function agendarTurno(){
        let nombre = document.querySelector("#idInputNombre");
        let apellido = document.querySelector("#idInputApellido");
        let codigoDeArea = document.querySelector("#idCodigoArea");
        let numeroTelefono = document.querySelector("#idNumeroTelefono");
        let barbero = document.querySelector("#idSelectBarbero");
        let hora = document.querySelector("#idSelectHora");
        let turnoNuevo;
        turnoNuevo.barbero=barbero;
        

    }
    //Pregunta si todos los campos requeridos estan completos
    //Si lo estan, valida que el captcha sea correcto
    //Si es correco imprime un resumen del turno dado
    //Si no es correcto avisa que es incorrecto y genera un nuevo captcha
    function validarFormulario(evento) {
        let textoCaptcha = document.querySelector("#idTextoCaptcha");
        let inputIngresaCaptcha = document.querySelector("#idInputIngresaCaptcha");

        //evento.preventDefault() evita que se envie el form ya que aun no tenemos destino
        evento.preventDefault();
        if (validarTodosLosCampos())
            if (textoCaptcha.textContent == inputIngresaCaptcha.value) {
                mostrarResumenTurno();
                agendarTurno();
                //formulario.submit() se encargaria de enviar el form cuando los datos sean correctos
                //formulario.submit();
            }
            else {
                errorCaptchaIngresado();
                generarCaptcha();
            }
    }
    //carga el captcha al cargarse la pagina
    window.addEventListener("load", generarCaptcha);
    //carga la tabla con valores random al seleccionar una fecha en el input date id="idFechaTurno"
    //fecha.addEventListener("change", completarTabla);
    //Capta el evento que lanza el boton de enviar formulario
    formulario.addEventListener("submit", validarFormulario);

});