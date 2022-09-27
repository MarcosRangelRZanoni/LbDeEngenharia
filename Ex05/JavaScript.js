let btnAdicionar = document.getElementById("btnAdicionar");
let valores = document.getElementById("valores");
let campoValor = document.querySelector('.campoValor');
campoValor.focus();
let elementos = [];
let elementoOL = document.createElement("OL");
elementoOL.id = "minhaLista";
let p = document.getElementById("valores");
let elementLI = document.createElement("LI");

btnAdicionar.addEventListener("click", function () {
    let valor = document.getElementById("valor").value;
    elementos.push(valor);
    // ordenar o array
    console.log(elementos);
   
   
    elementos.forEach(element => {
        let textNode = document.createTextNode(element);
        elementLI.appendChild(textNode);

        elementoOL.appendChild(elementLI);
        campoValor.value = '';
        campoValor.focus();
    });
    p.appendChild(elementoOL);
}); 