//alert("hola")
var counter = 0;
var $nam = $("#name");
var $printChar = $("#print");
var cargarPagina=function(){
	var $button = $("#enviar");
	var $textarea = $("#textarea");
	//Eventos
	$(document).click(counting);
	$button.click(function(e){
		e.preventDefault();
	});
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
	var printablesNode = counter;
	$printables.append(printablesNode + ",");
}

function send() {
	if(textarea.value != " " || $nam.value != " "){
		var $coments = $('#newComents');
		var container =  $('<article/>', { 'class': 'card-panel hoverable blue lighten-4' });
		var text = $('<p/>');
		var txtNode = textarea.value;
		var nameNode = "Por: " + $nam.value;
		text.append(txtNode);
		$coments.append(container);
		//Botón eliminar
		var remove = $('<a/>', { 'class': 'waves-effect waves-light blue btn right' });
		var buttonNode = "x"
		remove.append(buttonNode);
		remove.click(function(){
			remove.parent().remove();
		});
		container.append(remove);
		container.append(text);
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