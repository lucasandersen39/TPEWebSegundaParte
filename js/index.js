document.addEventListener("DOMContentLoaded",function(){

    let botonMenu=document.querySelector("#idBtn-menu");
    botonMenu.addEventListener("click", desplegarMenu);

    let porFecha=document.querySelector("#idFechaTurno");
    porFecha.value=fechaActual();
    actualizarTableFecha(porFecha.value);

    porFecha.addEventListener("change",function(){
        console.log("EVENTO DATE"+porFecha.value);
        actualizarTableFecha(porFecha.value);
    });
    
    function desplegarMenu(){
        let nav=document.querySelector("#idUlNav");
        nav.classList.toggle("mostrar");
    }

    function fechaActual(){
        const hoy = new Date();
        let fecha=hoy.getFullYear()+"-"+(hoy.getMonth()+1)+"-"+hoy.getDate();
        return fecha;
    }

    function actualizarTableFecha(fechaAc){
        limpiarTabla();
        for (let i = 0; i < listaBarberos.length; i++){
            let listTurnos=listaBarberos[i].turnos;
            for (let j=0;j<listTurnos.length;j++){
                console.log(listTurnos[j].fecha);
                if (listTurnos[j].fecha==fechaAc)
                    imprimirTurno(listTurnos[j], listaBarberos[i].nombre);
        }
    }
    }
    function actualizarTableBarbero(barber){
        limpiarTabla();
        for (let i=0;i<listaBarberos.length;i++)
            if (listaBarberos[i].nombre==barber)
                cargarTurnos(listaBarberos[i].nombre,listaBarberos[i].turnos);
    }

    function cargarBarberos() {
        limpiarTabla();
        for (let i = 0; i < listaBarberos.length; i++)
            cargarTurnos(listaBarberos[i].nombre, listaBarberos[i].turnos)
    }

    function cargarTurnos(nombre, turnos) {
        for (let i = 0; i < turnos.length; i++) {
            imprimirTurno(turnos[i],nombre);
        }
    }
    function imprimirTurno(turno,nombre) {
        let bodyTable = document.querySelector("#idTbodyTabla");
        let fila = document.createElement("tr");
        fila.appendChild(crearColumna(nombre));
        bodyTable.appendChild(fila);
        fila.appendChild(crearColumna(turno.fecha));
        bodyTable.appendChild(fila);
        fila.appendChild(crearColumna(turno.hora));
        bodyTable.appendChild(fila);
        fila.appendChild(crearColumna(turno.cliente.nombre));
        bodyTable.appendChild(fila);
        fila.appendChild(crearColumna(turno.cliente.apellido));
        bodyTable.appendChild(fila);
        fila.appendChild(crearColumna(turno.cliente.telefono));
        bodyTable.appendChild(fila);
        console.log("AGREGA FILA");
    }
    function crearColumna(dato) {
        let col = document.createElement("td");
        col.textContent = dato;
        return col;
    }
/* */
    function limpiarTabla(){
        let bodyT=document.querySelector("#idTbodyTabla");
        while (bodyT.firstChild)
            bodyT.removeChild(bodyT.firstChild);
    }
});