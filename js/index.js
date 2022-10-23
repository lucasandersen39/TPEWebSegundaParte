document.addEventListener("DOMContentLoaded", function () {
    "uses strict";
    
    let botonMenu = document.querySelector("#idBtn-menu");
    botonMenu.addEventListener("click", desplegarMenu);
  
      /* TURNOS ADMINISTRADOR */
      let btnAdmin=document.querySelector("#button-admin");
      let btnUsuario=document.querySelector("#button-usuario");
  
      btnAdmin.addEventListener("ckick",function(){
          let articleUsuario=dpcument.querySelector(".principal-turnos");
          articleUsuario.classList.toggle(".oculto");
          let articleAdmin=document.querySelector(".pincipal-turnos-adm");
          articleAdmin.classList.toggle(".oculto");
      });
      
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

    let inputFecha=document.querySelector("#idFechaTurno");
    inputFecha.addEventListener("change",buscarTurnos);
    let inputBarbero=document.querySelector("#idSelectBarbero");
    inputBarbero.addEventListener("change",buscarTurnos);
    /**
     * Busca todos los turnos que cumplan con las condiciones.
     * Primero filtra el arreglo de turnos de acuerdo a la fecha seleccionada,
     * Luego filtra el resultado del fultrado anterior por los barberos seleccionados en el input barbero
     * arma el THead de la tabla y carga los elementos que hayan cumplido con las 2 anteriores condiciones
     */
    function buscarTurnos(){
        let selBarbero = document.querySelector("#idSelectBarbero");
        let arrAux;
        let listBarberos = [...barberos];
        arrAux = buscarPorFecha(listaTurnos, porFecha.value);
        
        if (selBarbero.value != "vacio") {
            arrAux = buscarPorBarbero(arrAux, selBarbero.value);
            listBarberos = [];
            listBarberos[0] = selBarbero.value;
        }
        limpiarTHead();
        armarTHead(listBarberos);
        console.log("Tamaño de arrAux "+arrAux.length);
        cargarTurnos(arrAux, listBarberos);
    }

    let tBodyTabla = document.querySelector("#idTbodyTabla");
    tBodyTabla.addEventListener("click", (event) => {
        let datosReserva = event.target.id.split('-');
        console.log(event.target.classList.value);
        let formulario = document.querySelector("#idFormulario");
        if (event.target.classList.value == "celdaDisponible") {
            borrarInfoTurno();
            formulario.classList.add("desplegar");
            document.querySelector("#idReservaBarbero").innerHTML = datosReserva[1];
            document.querySelector("#idReservaHora").innerHTML = datosReserva[0];
            document.querySelector("#idReservaFecha").innerHTML = armarFecha(porFecha.value);
        }
        else
            formulario.classList.remove("desplegar");
    });
    /**
     * Formatea una fecha dada en formato DD/MM/AAAA
     * @param {} fecha fecha que se obtiene del input date
     * @returns Retorna un string con los valores de la fecha invertidos
     */
    function armarFecha(fecha) {
        let datos = fecha.split('-');
        return (datos[2] + "-" + datos[1] + "-" + datos[0]);
    }
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
            fila.appendChild(crearColumna(hora+"hs"));
            bodyTable.appendChild(fila);
            for (let i = 0; i < listaBarberos.length; i++) {
                if (estaDisponible(listaBarberos[i], hora, turnos))
                    fila.appendChild(crearColumna("Disponible", "celdaDisponible", hora, listaBarberos[i]));
                else
                    fila.appendChild(crearColumna("Reservado", "celdaReservada", hora , listaBarberos[i]));
                bodyTable.appendChild(fila);
            }
        }
    }
    /**
     * Crea una celda para agregar a la tabla de turnos
     * @param {*} dato Dato que se quiere agregar en la celda
     * @param {*} estilo Estilo que se quiere dar a la celda
     * @param {*} h Hora que se usa para formar el id del elemento
     * @param {*} n Nombre del barbero usado para generar el id del elemento
     * @returns Retorna una celda ya ingresada y formateada
     */
    function crearColumna(dato, estilo, h, n) {
        let col = document.createElement("td");
        col.textContent = dato;
        col.classList.add(estilo);
        col.id = "" + h + "-" + n;
        return col;
    }
    /**
     * Recorre el arreglo de los turnos y verifica si un turno con un barbero en una fecha y hora dada existe
     * @param {*} nombre Nombre del barbero 
     * @param {*} hora Hora del turno que estamos verificando si se encuentra disponible
     * @param {*} turnos Arreglo de turnos 
     * @returns Retorn true si no se encuentra en el arreglo de turno, false si ya existe
     */
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
    /**
     * Arma el THead de la tabla de turnos del cliente con los valores pasados en el arreglo arBArbero
     * @param {*} arBarberos Arreglo con los nombres de los barberos que queremos añadir en las columnas de la tabla
     */
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
    /**
     * Elimina todos los campos del THead para poder generar uno THead nuevo
     */
    function limpiarTHead() {
        let headT = document.querySelector("#idTheadTabla");
        while (headT.firstChild)
            headT.removeChild(headT.firstChild);
    }
    /**
     * Busca en el arreglo todos los turnos que tengan la misma fecha que fecha
     * @param {*} arreglo Arreglo de turnos
     * @param {*} fecha Fecha por la que se quiere filtrar
     * @returns Retorna un arreglo con todos los turnos que tienen la misma fecha
     */
    function buscarPorFecha(arreglo, fecha) {
        let arregloAux = [];
        for (let i = 0; i < arreglo.length; i++) {
            if (arreglo[i].fecha == fecha)
                arregloAux.push(arreglo[i]);
        }
        return arregloAux;
    }
    /**
     * Busca en el arreglo todos los turnos que esten asignados a un barbero dado
     * @param {*} arreglo Arreglo de turnos donde se desea buscar por barbero
     * @param {*} nombre Barbero por el cual se desea buscar los turnos
     * @returns Retorna un arreglo con todos los turnos que cumplan con la condicion dada
     */
    function buscarPorBarbero(arreglo, nombre) {
        let arregloAux = [];
        for (let i = 0; i < arreglo.length; i++) {
            if (arreglo[i].barbero == nombre)
                arregloAux.push(arreglo[i]);
        }
        return arregloAux;
    }

    

    /*CAPTCHA */

    let formulario = document.querySelector("#idFormulario");
    let fecha = document.querySelector("#idFechaTurno");
    let botonExpress=document.querySelector("#idBotonExpress");
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
    function mostrarResumenTurno(nuevoTurno) {
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
        let info = document.createTextNode("Nombre: " + nuevoTurno.cliente.nombre);
        elementoLista.appendChild(info);
        lista.appendChild(elementoLista);

        let elementoLista2 = document.createElement("li");
        elementoLista2.classList.add("elementoListaReserva");
        let info2 = document.createTextNode("Apellido: " + nuevoTurno.cliente.apellido);
        elementoLista2.appendChild(info2);
        lista.appendChild(elementoLista2);

        let elementoLista3 = document.createElement("li");
        elementoLista3.classList.add("elementoListaReserva");
        let info3 = document.createTextNode("Fecha: " + nuevoTurno.fecha + "/  Hora: " + nuevoTurno.hora+"hs");
        elementoLista3.appendChild(info3);
        lista.appendChild(elementoLista3);

        let elementoLista4 = document.createElement("li");
        elementoLista4.classList.add("elementoListaReserva");
        let info4 = document.createTextNode("Barbero: " + nuevoTurno.barbero);
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

    function borrarInfoTurno(){
        let divInfoTurno = document.querySelector("#infoConfirmaTurno");
        while (divInfoTurno.firstChild)
            divInfoTurno.removeChild(divInfoTurno.firstChild);
    }

    //Imprime en la pagina un mensaje de que el captcha es incorrecto
    function errorCaptchaIngresado() {
        let divInfoTurno = document.querySelector("#infoConfirmaTurno");
        divInfoTurno.classList.add("divInfoTurno");
        divInfoTurno.innerHTML = "Captcha Incorrecto";
    }
    
    function cerrarForm(){
        document.querySelector("#idInputNombre").value="";
        document.querySelector("#idInputApellido").value="";
        document.querySelector("#idNumeroTelefono").value="";
        document.querySelector("#idInputIngresaCaptcha").value="";
        generarCaptcha();
        let formulario = document.querySelector("#idFormulario");
        formulario.classList.remove("desplegar");
    }

    function crearTurnoJson(barb, fec, hor, nomCli, apCli, telCli) {
        let nuevoTurno = {
            "barbero": barb,
            "fecha": fec,
            "hora": hor,
            "cliente": {
                "nombre": nomCli,
                "apellido": apCli,
                "telefono": telCli,
            }
        };
        return nuevoTurno;
    }

    function agendarTurno() {
        let bar = document.querySelector("#idReservaBarbero").textContent;
        let fe = armarFecha(document.querySelector("#idReservaFecha").textContent);
        let hor = document.querySelector("#idReservaHora").textContent;
        let nCli = document.querySelector("#idInputNombre").value;
        let apCli = document.querySelector("#idInputApellido").value;
        let tCli = parseInt(document.querySelector("#idNumeroTelefono").value);
        let nuevoTurno=crearTurnoJson(bar, fe, hor, nCli, apCli, tCli);
        listaTurnos.push(nuevoTurno);
        cargarTurnos(buscarPorFecha(listaTurnos, porFecha.value), barberos);
        mostrarResumenTurno(nuevoTurno);
        cerrarForm();
    }

    //Pregunta si todos los campos requeridos estan completos
    //Si lo estan, valida que el captcha sea correcto
    //Si es correco imprime un resumen del turno dado
    //Si no es correcto avisa que es incorrecto y genera un nuevo captcha
    function validarFormulario(evento) {
        let textoCaptcha = document.querySelector("#idTextoCaptcha");
        let inputIngresaCaptcha = document.querySelector("#idInputIngresaCaptcha");

        evento.preventDefault();
        if (textoCaptcha.textContent == inputIngresaCaptcha.value) {         
            agendarTurno();
        }
        else {
            errorCaptchaIngresado();
            generarCaptcha();
        }
    }
    //carga el captcha al cargarse la pagina
    window.addEventListener("load", generarCaptcha);
    //Capta el evento que lanza el boton de enviar formulario
    formulario.addEventListener("submit", validarFormulario);
    botonExpress.addEventListener("click",agendarTurnoExpress);
});