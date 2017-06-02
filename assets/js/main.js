//IIFEImmediatly Invoked Function Expression
(function(){
var counter = 0;
var newResult=0;
var $buttonSend = $("#enviar");
var $textarea = $("#textarea");
var $areaComents = $("#areaComents");
var $accountantChar = $('#accountantChar');
var $max_letras = 140;
var cargarPagina=function(){
	//Eventos
	$(document).on("click", ".count", counting);
	$buttonSend.click(function(e){
		e.preventDefault();
	});
	$buttonSend.click(send);
	$buttonSend.click(noCounting);
	$buttonSend.click(clear)
	$textarea.keyup(validation);
	$textarea.keyup(charCount);
	$textarea.click(charCount);
	$(".button-collapse").sideNav();
}
var validation=function(){

	if($(this).val().trim().length>0){
		$buttonSend.removeAttr("disabled");
	} else {
			$buttonSend.attr("disabled", true);
	}
};
var counting = function(){
	counter +=1;
	var $printables = $(this).find("span");
	var printablesNode = counter;
	$printables.text(printablesNode);
}
var send = function() {
	if($textarea.val() !=0){
		var $coments = $('#newComents');
		var $container =  $('<section/>', { 'class': 'card-panel hoverable blue lighten-4' });
		var $row1 =$('<div/>', {'class':'row'});
		var $row2 =$('<div/>', {'class': 'row'});
		var $textRow=$('<div/>');
		var $textComent = $('<p/>', {'class': 'col s10 offset-s1 p-adjust'});
		var txtNode = " " +textarea.value;
		//imagen de usuario
		var $iconUser =  $('<span/>');
		var $linkUser = $('<a/>');
		var $imgUser = $('<img>',{'class': 'responsive-img circle col s12'});
		$imgUser.attr('src', 'assets/imgs/itzel.ico');
		$linkUser.append($imgUser);
		$iconUser.append($linkUser);
		//Nombre de Usuario
		var $nickName =$('<a/>');
		var name = "@ixpyMoonlight:";
		$nickName.append(name);
		//Contenedor elementos usuario
		var $elementsUser = $('<span/>',{'class': 'valign-wrapper col s6 m7 l8'});
		$elementsUser.append($iconUser);
		$elementsUser.append($nickName);
		//Agregando fecha de publicación
		var $spanTime = $('<span/>',{'class': 'valign-wrapper col s1 hide-on-small-only hide-on-down'});
		var $time = getTime();
		$spanTime.append($time);
		//Botón emoticon
		var $emoticos = $('<span/>', {'class': 'fixed-action-btn horizontal right'});
		var $smile= $('<a/>', { 'class': 'waves-effect '});
		var $iconSmile = $('<i/>', { 'class': 'fa fa-smile-o  fa-2x orange-text' });
		$smile.append($iconSmile);
		$emoticos.append($smile);
		//Anidación UL
		var $ul =$('<ul/>');
			//Anidación LI's
			//Li 1
		var $emoticon1 = $('<li/>');
		var $contEmotic1 = $ ('<a/>',{'class': 'btn-floating'});
		var $iconEmotic1 = $ ('<i/>',{'class': 'fa fa-smile-o fa-2x orange-text'});
		$contEmotic1.append($iconEmotic1);
		$emoticon1.append($contEmotic1);
		$ul.append($emoticon1);
			//Li 2
		var $emoticon2 = $('<li/>');
		var $contEmotic2 = $ ('<a/>',{'class': 'btn-floating'});
		var $iconEmotic2 = $ ('<i/>',{'class': 'fa fa-frown-o fa-2x blue-text'});
		$contEmotic2.append($iconEmotic2);
		$emoticon2.append($contEmotic2);
		$ul.append($emoticon2);
			//LI 3
		var $emoticon3 = $('<li/>');
		var $contEmotic3 = $ ('<a/>',{'class': 'btn-floating'});
		var $iconEmotic3 = $ ('<i/>',{'class': 'fa fa-meh-o fa-2x black-text'});
		$contEmotic3.append($iconEmotic3);
		$emoticon3.append($contEmotic3);
		$ul.append($emoticon3);
		//anidación UL
		$emoticos.append($ul);

		//botón like
		var $likes = $('<span/>', {'class': 'fixed-action horizontal right'});
		var $like = $('<a/>', { 'class': 'waves-effect count' });
		var $countLikes=$('<span/>',{'class': ''});
		var $iconLike = $('<i/>', { 'class': 'fa fa-heart  fa-2x red-text' });
		$like.append($iconLike);
		$like.append($countLikes);
		$likes.append($like);
		//botón eliminar
		var $delete = $('<span/>', {'class': 'fixed-action horizontal right'});
		var $remove = $('<a/> ', { 'class': 'waves-effect' });
		var buttonNode = $('<i/>', { 'class': 'fa fa-times  fa-2x' });;
		$remove.append(buttonNode);
		$remove.click(function(){
			$remove.parent().parent().parent().parent().parent().remove();
		});
		$delete.append($remove);
		//contenedor botones 
		var $elementsButtons = $('<span/>',{'class': 'col s6 m3'});
		$elementsButtons.append($delete);
		$elementsButtons.append($likes);
		$elementsButtons.append($emoticos);
		//Anidación de elementos
		$coments.prepend($container);
		$container.append($row1);
		$container.append($row2);
		$row1.append($textRow);
		$textRow.append($elementsUser);
		$textRow.append($spanTime)
		$textRow.append($elementsButtons);
		$row2.append($textComent);
		$textComent.append(txtNode);
	} else {
		alert("Por favor ingresa algo antes de enviar");
	}
}
var noCounting = function(){

	event.stopPropagation();
}
var charCount = function(){
	var texto = $textarea.val().length;
	var result = $max_letras - texto;
	console.log(result);
	$accountantChar.text(result);
	if (result<=20){
		$textarea.addClass('textarea-underline_red');	
	}else{$textarea.removeClass('textarea-underline_red');}
	if(result>20&&result<40){
		$textarea.addClass('textarea-underline_orange');
	}else{$textarea.removeClass('textarea-underline_orange');}
	if(result<0){
		$buttonSend.attr("disabled", true);
	}
}
var clear = function(){
	$textarea.val("");
	$accountantChar.text($max_letras);
	$textarea.removeClass('textarea-underline_red');
	$textarea.removeClass('textarea-underline_orange');
}
var getTime = function(){
	var now = new Date();
	var hours = (now.getHours() < 10 ? "0" + now.getHours() : now.getHours());
	var minuts = (now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes());
	var time = hours+':'+ minuts;
	return time;
}
$(document).ready(cargarPagina);
}) ();
