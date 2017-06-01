//alert("hola")
var counter = 0;
var $nam = $("#name");
var $printChar = $("#print");
var cargarPagina=function(){
	var $button = $("#enviar");
	var $textarea = $("#textarea");
	//Eventos
	$(document).on("click", ".count", counting);
	$button.click(function(e){
		e.preventDefault();
	});
	$button.click(send);
	$button.click(noCounting);
	$button.click(clear)
	$textarea.click(noCounting);
	$nam.click(noCounting);
	$textarea.click(charCount);
	$(".button-collapse").sideNav();
}

function counting(){
	counter +=1;
	var $printables = $(this).find("span");
	var printablesNode = counter;
	$printables.text(printablesNode);
}

function send() {
	if(textarea.value != " " || $nam.value != " "){
		var $coments = $('#newComents');
		var $container =  $('<section/>', { 'class': 'card-panel hoverable blue lighten-4' });
		var $row1 =$('<div/>', {'class':'row'});
		var $row2 =$('<div/>', {'class': 'row'});
		var $textRow=$('<div/>');
		var $textComent = $('<p/>', {'class': 'col s10 offset-s1'});
		var txtNode = " " +textarea.value;
		//imagen de usuario
		var $iconUser =  $('<span/>');
		var $imgUser = $('<img>',{'class': 'responsive-img circle col s12'});
		$imgUser.attr('src', 'assets/imgs/itzel.ico');
		$iconUser.append($imgUser);
		//Nombre de Usuario
		var $nickName =$('<a/>');
		var name = "@ixpyMoonlight:";
		$nickName.append(name);
		$coments.append($container);
		//Contenedor elementos usuario
		var $elementsUser = $('<span/>',{'class': 'valign-wrapper col s6'});
		$elementsUser.append($iconUser);
		$elementsUser.append($nickName);
		//Botón emoticon
		var $smile= $('<a/>', { 'class': 'waves-effect  right' });
		var $iconSmile = $('<i/>', { 'class': 'fa fa-smile-o  fa-2x orange-text' });
		$smile.append($iconSmile);
		//botón like
		var $like = $('<a/>', { 'class': 'waves-effect  right count' });
		var $countLikes=$('<span/>',{'class': ''});
		var $iconLike = $('<i/>', { 'class': 'fa fa-heart  fa-2x red-text' });
		$like.append($iconLike);
		$like.append($countLikes);
		//botón eliminar
		var $remove = $('<a/> ', { 'class': 'waves-effect right' });
		var buttonNode = $('<i/>', { 'class': 'fa fa-times  fa-2x' });;
		$remove.append(buttonNode);
		$remove.click(function(){
			$remove.parent().parent().parent().parent().remove();
		});
		//contenedor botones 
		var $elementsButtons = $('<span>');
		$elementsButtons.append($remove);
		$elementsButtons.append($like);
		$elementsButtons.append($smile);
		//Anidación de elementos
		$container.append($row1);
		$container.append($row2);
		$row1.append($textRow);
		$textRow.append($elementsUser);
		$textRow.append($elementsButtons);
		$row2.append($textComent);
		$textComent.append(txtNode);
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