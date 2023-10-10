let colocacao = 4
switch (colocacao) {
    case 1: console.log("Primeiro Lugar disparado")
        break    
    case 2: console.log("Segundo  Lugar")
        break   
    case 3: case 4: console.log("Premio de participacao")
        break
    default:
        console.log("Nao subiu ao podio")
        break
}




const objs1 = [...document.getElementsByClassName("m")]   // esta forma de mudar a classe percorrento todas com o mesmo nome, uso de spread ...
objs1.forEach(Element => { Element.innerHTML = "testedeCLASSE" });
console.log(objs1) // para mostrar dentro do console



document.getElementById("B").innerHTML = "TesteID"; // uma das formas de mudar o id, mas somente 1 por linha




let b2 = document.getElementById("C") // uma das formas de mudar o id, mas somente 1 por linha
    b2.innerHTML="TesteID2"






