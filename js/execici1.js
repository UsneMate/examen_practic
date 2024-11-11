
let cadena ="";
let caracter = "";
let novacadena = [];

function procesarCadena(){

    let contador = 0;
    //guardem el contingut en variables, tant de la cadena de text com del caràcter
    cadena = document.getElementById("cadena").value;
    caracter = document.getElementById("caracter").value;

    //convertim la cadena de text a minuscules
    cadena.toLowerCase();
    //trec els espais a la cadena
    cadena.split();

    //recorro l'array i si trobo el caracter a la paraula en cada posició
    //guardo la parual en una altra cadena
    for (let i = 0; i < cadena.length; i++) {
        if(cadena[i].search(caracter) == true){
            novacadena = cadena[i].push;
        }
    }
    console.log(novacadena);

}