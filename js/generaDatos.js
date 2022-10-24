    let cNom=61;
    
        for (let i=1;i<31;i++){
        console.log("{\"barbero\""+":"+"\"Pedro\""+",");
        console.log("\"fecha\""+":"+"\"2022-"+numeroAleatorio(10,10)+"-"+numeroAleatorio(25,30)+"\",");
        console.log("\"hora\""+":"+"\""+numeroAleatorio(10,18)+"\",");
        console.log("\"sucursal\""+":"+"\"Centro\",");
        console.log("\"cliente\""+":{");
        console.log("\"nombre\""+":"+"\""+("Nombre"+cNom)+"\",");
        console.log("\"apellido\""+":"+"\""+("Apellido"+cNom)+"\",");
        console.log("\"telefono\""+":"+numeroAleatorio(430000,590000));    
           cNom++; 
            console.log("}");
            console.log("},");
}


function numeroAleatorio(min,max){
    return Math.floor((Math.random()*(max-min+1))+min);
}
