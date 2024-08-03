let sticker1 = document.querySelector("#input1")
let sticker2 = document.querySelector("#input2")
let sticker3 = document.querySelector("#input3")

sticker1.onchange = function(){
    sumar()
}

sticker2.onchange = function(){
    sumar()
}

sticker3.onchange = function(){
    sumar()
}

function sumar(){
    let suma = parseInt(sticker1.value) + parseInt(sticker2.value) + parseInt(sticker3.value)
    let parrafo = document.querySelector("#salida")
    
    if(suma == 0){
        parrafo.innerHTML="Debes ingresar alguna cantidad de stickers"
        parrafo.style="color: black; font-weight: medium"
    }
    else if(suma<=10){
        parrafo.innerHTML="Llevas "+suma+" stickers"
        parrafo.style="color: black; font-weight: medium"
    }
    else{
        parrafo.innerHTML="Llevas demasiados stickers!!"
        parrafo.style="color: red; font-weight: bold"
    }
}