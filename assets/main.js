//alert("hola")
var counter = 0;
var button = document.getElementById("enviar");
var textarea = document.getElementById("textarea");
var perritos = document.getElementById("name");
var print = document.getElementById("print");
function counting(){
	counter +=1;
	var printables = document.getElementById("cntClicks");
	printables.innerText = "Contador de clicks: " + counter;
	}

function submit(e) {
	e.preventDefault();
	alert("funciona chidoliro")
}

function noCounting(){
	event.stopPropagation();
}

function charCount(){
	var numChar = textarea.value.length;
	print.innerText = numChar;

}

//funcion borrar, obtener codigo ascci de borrar, y disminuir el contador.
//Eventos
document.addEventListener("click", counting);
button.addEventListener("click", submit);
button.addEventListener("click", noCounting);
textarea.addEventListener("click", noCounting);
perritos.addEventListener("click", noCounting);
textarea.addEventListener("keypress", charCount)
