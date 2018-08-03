indicadores = null

$(function(){
//Quiero recuperar los indicadores actual de la API 
//Quiero dibujar los valores en la tabla

	$.ajax({
		url:"https://mindicador.cl/api"	
	})
	.then(function(data){
		indicadores = data;
		$("#usd_valor").text(data.dolar.valor);
		$("#eur_valor").text(data.euro.valor);
		$("#uf_valor").text(data.uf.valor);
		$("#utm_valor").text(data.utm.valor);
		console.log(data);		
	})
	$(".convert").submit(function(e){
		e.preventDefault();
		var input = $(this).find("#input").val();
		var divisa = $(this).find("#divisa").val();
		console.log(divisa);
		var result = indicadores[divisa].valor * input;
		$(this).find("#respuesta").text(result)
	})
	

})