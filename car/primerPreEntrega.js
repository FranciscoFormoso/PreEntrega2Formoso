//ejercicio de ciclo//


let entrar = parseInt(prompt ("Bienvenido/a vas a jugar con un while. Ingrese 1 si quiere entrar, ingrese 2 si no quiere entrar"))

ciclo: while (entrar == 1){
    alert("estas entrando a un ejemplo de un while")
    alert("en caso de que aceptes jugar de nuevo")
    alert("este juego se repetira siempre")

entrar = parseInt(prompt("¿Queres volver a jugar? Ingrese 1 si quiere entrar, ingrese 2 si no quiere entrar"))
    if (entrar == 2){
        alert("Decidiste no jugar por lo tanto este juego no se repetira por siempre")
        break ciclo;
    }
}


//ejercicio condicionales//

let cuadros = prompt("¿Cuál es tu cuadro favorito del Fútbol Uruguayo?").toLowerCase();

if (cuadros === "nacional") {
    alert("Como todo el mundo, preferís al cuadro más grande del Uruguay");
} else if (cuadros === "peñarol") {
    alert("No puedes elegir a Peñarol, porque Peñarol no existe");
} else {
    alert("No puedes elegir otro que no sea Nacional, ya que es el papá de todo el resto");
}







//calculadora de IVA//

let valorUsuario = parseInt(prompt ("Ingrese el valor que desea calcular"))
let valorFinal = valorUsuario * 1.22
alert ("El valor final del producto es" + " " + valorFinal)



//abstraccion: es resumir un grupo complejos de instrucciones con una palabra clave que generalemnte es una funcion


function musculosa(){

}
function vestuarioDia(clima){
    if(clima === "soleado"){
        short();
        
    } else if(clima === "frio"){
        alert("Abrigate, campera y pantalon")
    }else{
        alert("Paragua")
    }
}
vestuarioDia(clima);
