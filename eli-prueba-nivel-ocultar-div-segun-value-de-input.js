

//------- mostrar si o no preguntas 49 a 58 en Prueba de Nivel-----//

var haPasado40 = false;

function mostrarPreguntas(){
	var minAcertadas = 40;
	var minPregunta = 49;
	var maxPregunta = 59;
	
	// Si ya ha pasado por los 40, no se debe esconder / mostrar, por lo que evitamos que siga si ha pasado
	if(haPasado40)
		return false;
	
	// Obtiene el valor del input Total
	var total = $("#total").val();
	
	// Si el total es mayor al mínimo, mostramos
	if(total >= minAcertadas){
		haPasado40 = true;
		
		// Recorremos las preguntas a mostrar, las mostramos, ocultamos mensaje de 48 preguntas y mostramos felicitaciones mas de 40
		for(i=minPregunta;i<maxPregunta;i++){
			$(".rsform-block-r" + i).show();
			$(".rsform-block-felicita48").show(); 
			$(".rsform-block-gracias48").hide();
		}
	} else {
		// Recorremos las preguntas a ocultar, las ocultamos,  mostramos mensaje de 48 preguntas y ocultamos felicitaciones mas de 40
		for(i=minPregunta;i<maxPregunta;i++){
			$(".rsform-block-r" + i).hide();
			$(".rsform-block-felicita48").hide();
			$(".rsform-block-gracias48").show();
		}
	}
}

// Esperamos a que cargue la página
$( document ).ready(function() {
	// Inicializamos al principio
	mostrarPreguntas();
	
	// Para cada cambio de radio button, mostramos u ocultamos
    $("input[type=radio].rsform-radio").change(function() {
	   mostrarPreguntas(); 
	});
});

//-------------------fin preguntas ------------------//




// esta función es para la paginación, para que vaya al top del formulario al click siguiente/anterior 
function rsfp_showPage(thePage) {
  RSFormProUtils.removeClass(thePage, 'formHidden');
  window.scrollTo(0, findPos(document.getElementById('userForm')));
}
 
function findPos(obj) {
  var curtop = -200;
   if (obj.offsetParent) {
    do {
        curtop += obj.offsetTop;
       } while (obj = obj.offsetParent);
   return [curtop];
   }
}
