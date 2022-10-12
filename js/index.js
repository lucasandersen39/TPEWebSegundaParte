document.addEventListener("DOMContentLoaded",function(){

    let botonMenu=document.querySelector("#idBtn-menu");
    botonMenu.addEventListener("click", desplegarMenu);


    function desplegarMenu(){
        let nav=document.querySelector("#idUlNav");
        
        nav.classList.toggle("mostrar");

    }
});