app.palmares = {
	pagina: 'palmares',

	init: function(){
		app.palmares.partidosOficialesDisputados();
		
	},

	partidosOficialesDisputados: function(){

		var divisiones = app.data.palmares.liga;
	
		for (var division in divisiones){

			var tableRow = $('<tr class="partidosOficiales-division-tr"></tr>');
			var voidRow = $('<tr class="voidTR"></tr>');		
			

			tableRow.append('<td class="voidTD"></td>');
			tableRow.append('<td class="headRow-cell">DIVISIÓN</td>');
			tableRow.append('<td class="partidosOficiales-division-celda">'+divisiones[division].division+'</td>');


			tableRow.append('<td class="headRow-cell">TEMPORADAS</td>');
			tableRow.append('<td class="partidosOficiales-temporada-celda">'+divisiones[division].temporadas+'</td>');

			tableRow.append('<td class="headRow-cell"> PARTIDOS JUGADOS </td>');
			tableRow.append('<td class="partidosOficiales-jugados-celda">'+divisiones[division].jugados+'</td>');

			tableRow.append('<td class="headRow-cell"> PARTIDOS GANADOS </td>');
			tableRow.append('<td class="partidosOficiales-ganados-celda">'+divisiones[division].ganados+'</td>');

			tableRow.append('<td class="headRow-cell"> PARTIDOS EMPATADOS </td>');
			tableRow.append('<td class="partidosOficiales-empatados-celda">'+divisiones[division].empatados+'</td>');


			tableRow.append('<td class="headRow-cell"> PARTIDOS PERDIDOS </td>');
			tableRow.append('<td class="partidosOficiales-perdidos-celda">'+divisiones[division].perdidos+'</td>');

			tableRow.append('<td class="headRow-cell"> GOLES A FAVOR</td>');
			tableRow.append('<td class="partidosOficiales-golesfavor-celda">'+divisiones[division].goles.aFavor+'</td>');

			tableRow.append('<td class="headRow-cell"> GOLES EN CONTRA </td>');
			tableRow.append('<td class="partidosOficiales-golescontra-celda">'+divisiones[division].goles.enContra+'</td>');


			tableRow.append('<td class="headRow-cell"> PUNTOS </td>');
			tableRow.append('<td class="partidosOficiales-puntos-celda">'+divisiones[division].puntos+'</td>');
			
			
			$('#partidosOficialesDisputados tbody').append(tableRow);	
			$('#partidosOficialesDisputados tbody').append(voidRow);		



			console.log(divisiones[division].division);
		}//for
	
	}//partidosOficialesDisputados();


}//palmares