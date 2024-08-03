const boton = document.querySelector("#boton")

boton.onclick = function(){
    let num1 = document.querySelector("#input1").value
    let num2 = document.querySelector("#input2").value
    let num3 = document.querySelector("#input3").value
    let clave = num1 + num2 + num3
    if(clave == "911"){
        document.querySelector("#salida").innerHTML="Password 1 Correcto"
        document.querySelector("#salida").style="color: green; font-weight: bold"
    }
    else if(clave == "714"){
        document.querySelector("#salida").innerHTML="Password 2 es correcto"
        document.querySelector("#salida").style="color: blue; font-weight: bold"
    }
    else{
        document.querySelector("#salida").innerHTML="Password Incorrecto"
        document.querySelector("#salida").style="color: red; font-weight: bold"
    }
}

