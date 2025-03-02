// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let friends = [] ; // Array de amigos 

function agregarAmigo(){
    var nombre = document.getElementById("amigo").value; 

    if (nombre.trim() == "") {
        alert("Por favor ingrese un nombre") ;
        return ; 
    }else{
    friends.push(nombre);
    actualizarLista(); 
    document.getElementById("amigo").value = "" ;  
    }
    
}

function actualizarLista(){
    var lista = document.getElementById("listaAmigos");
    lista.innerHTML = "" ; 
    for (let i = 0; i < friends.length; i++) {
        lista.innerHTML += "<li>"+friends[i]+"</li>";
    }
}

function sortearAmigo(){
    if (friends.length < 2) {
        alert("No hay suficientes amigos para sortear") ;
        return ; 
    } 
    else{
        var amigoSorteado = friends[Math.floor(Math.random() * friends.length)];
        document.getElementById("resultado").innerHTML = amigoSorteado ;
    }


    document.getElementById("resultado").innerHTML;
} 