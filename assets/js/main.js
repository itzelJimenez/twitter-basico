
//alert("hola")
var counter = 0;
var $nam = $("#name");
var $printChar = $("#print");
var cargarPagina=function(){
	var $button = $("#enviar");
	var $textarea = $("#textarea");
	//Eventos
	$(document).click(counting);
	$button.click(send);
	$button.click(noCounting);
	$button.click(clear)
	$textarea.click(noCounting);
	$nam.click(noCounting);
	$textarea.click(charCount);
}

function counting(){
	counter +=1;
	var $printables = $("#cntClicks");
	$printables.innerText = "Contador de clicks: " + counter;
}

function send() {
	if(textarea.value != " " || $nam.value != " "){
		var $coments = $('#newComents');
	 	var line = document.createElement('hr');
		var container =  document.createElement('article');
		var nickName = document.createElement('label');
		var text = document.createElement('p');
		var txtNode = document.createTextNode(textarea.value);
		var nameNode = document.createTextNode("Por: " + $nam.value);
		nickName.append(nameNode);
		text.append(txtNode);
		container.append(line);
		container.append(nickName);
		container.append(text);
		$coments.append(container);
		//Botón eliminar
		var remove = document.createElement('input');
		remove.type = "button";
		remove.value = "eliminar";
		remove.onclick = function(){
			coments.remove($container)
		};
		container.append(remove)
	} else {
		alert("Por favor ingresa algo antes de enviar")
	}
}

function noCounting(){
	event.stopPropagation();
}

function charCount(){
	var numChar = textarea.value.length;
	$printChar.innerText = numChar;
}

function clear(){
	textarea.value = " ";
	$nam.value = " ";
}

$(document).ready(cargarPagina);