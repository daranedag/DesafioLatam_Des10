let imgPropia = document.querySelector("#imagen1");
let mostrar = false;

imgPropia.onclick = function(){
    if(!mostrar){ 
        imgPropia.style.border = "2px solid #ff0000";
    }
    else{
        imgPropia.style.border = "0px solid #ff0000";
    }
    mostrar = !mostrar;
}