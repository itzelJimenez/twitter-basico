//alert("hola")
var counter = 0;
var button = document.getElementById("enviar");
var textarea = document.getElementById("textarea");
var nam = document.getElementById("name");
var printChar = document.getElementById("print");


function counting(){
	counter +=1;
	var printables = document.getElementById("cntClicks");
	printables.innerText = "Contador de clicks: " + counter;
}

function send() {
	if(textarea.value != " " || nam.value != " "){
		var coments = document.getElementById('newComents');
	 	var line = document.createElement('hr');
		var container =  document.createElement('article');
		var nickName = document.createElement('label');
		var text = document.createElement('p');
		var txtNode = document.createTextNode(textarea.value);
		var nameNode = document.createTextNode("Por: " + nam.value);
		nickName.appendChild(nameNode);
		text.appendChild(txtNode);
		container.appendChild(line);
		container.appendChild(nickName);
		container.appendChild(text);
		coments.appendChild(container);
		//Botón eliminar
		var remove = document.createElement('input');
		remove.type = "button";
		remove.value = "eliminar";
		remove.onclick = function(){
			coments.removeChild(container)
		};
		container.appendChild(remove)
	} else {
		alert("Por favor ingresa algo antes de enviar")
	}
}

function noCounting(){
	event.stopPropagation();
}

function charCount(){
	var numChar = textarea.value.length;
	printChar.innerText = numChar;
}

function clear(){
	textarea.value = " ";
	nam.value = " ";
}


//Eventos
document.addEventListener("click", counting);
button.addEventListener("click", send);
button.addEventListener("click", noCounting);
button.addEventListener("click", clear)
textarea.addEventListener("click", noCounting);
nam.addEventListener("click", noCounting);
textarea.addEventListener("keyup", charCount);


