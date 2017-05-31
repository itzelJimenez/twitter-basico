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
	var $printables = $(".count").find("span");
	var printablesNode = counter;
	$printables.text(printablesNode);
}

function send() {
	if(textarea.value != " " || $nam.value != " "){
		var $coments = $('#newComents');
		var $container =  $('<article/>', { 'class': 'card-panel hoverable blue lighten-4' });
		var $row1 =$('<div/>', {'class':'row'});
		var $row2 =$('<div/>', {'class': 'row'});
		var $textRow=$('<p/>');
		var $textComent = $('<p/>');
		var txtNode = " " +textarea.value;

		var $iconUser =  $('<i/>', { 'class': 'fa fa-user-circle  fa-2x grey-text' });
		var $nickName =$('<strong>	@Susanito : </strong>', {'class': 'grey-text'})
		$coments.append($container);
		//Botón eliminar
		var $smile= $('<a/>', { 'class': 'waves-effect  right' });
		var $iconSmile = $('<i/>', { 'class': 'fa fa-smile-o  fa-2x orange-text' });
		$smile.append($iconSmile);

		var $like = $('<a/>', { 'class': 'waves-effect  right count' });
		var $countLikes=$('<span/>',{'class': ''});
		var $iconLike = $('<i/>', { 'class': 'fa fa-heart  fa-2x red-text' });
		$like.append($iconLike);
		$like.append($countLikes);

		var $remove = $('<a/> ', { 'class': 'waves-effect right' });
		var buttonNode = $('<i/>', { 'class': 'fa fa-times  fa-2x' });;
		$remove.append(buttonNode);
		$remove.click(function(){
			$remove.parent().parent().parent().remove();
		});

		$container.append($row1);
		$container.append($row2);
		$row1.append($textRow);
		$textRow.append($iconUser);
		$textRow.append($nickName);
		$textRow.append($remove);
		$textRow.append($like);
		$textRow.append($smile);
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