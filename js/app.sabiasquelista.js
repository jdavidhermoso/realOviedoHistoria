app.sabiasquelista = {
	pagina: 'sabiasquelista',

	init: function() {

		$('.loading-logo').css({display:'block'}); 
		$('.loading-text').css({display:'block'});    

		//Si ya hemos cargado el archivo app.data.sabíasque.json... lo usamos. Si no, lo pedimos
		if (app.data.sabiasque) {	

			//app.sabiasquelista.showSelectedStory(0);

			app.sabiasquelista.showStoriesList();

			$(".sabiasquestory").on('tap', function(){

				
				app.sabiasquelista.showSelectedStory($(this)[0].id);
			});	


			$(".backToList").on('tap', function() {
							
				app.sabiasquelista.init();
			});


		} else {
			requestData = $.ajax("http://www.juandavidhermoso.es/realoviedohistoria/app/js/data/app.data.sabiasque.json", {       
		        "type": "POST",
		            success: function() {

		            	//TODO: Logo cargando...
		            	
		            	                   

		            },
		        });

		        requestData.done(
		            function(data) { 
		            	
		            	datos = JSON.parse(data);             	

		              	app.data.sabiasque = {};
		              	app.data.sabiasque = datos  

		        

		              	//Current amount of random stories.
				       	var storiesLength = app.data.sabiasque.length;			

				       	app.sabiasquelista.showStoriesList();


						$(".sabiasquestory").on('tap', function(){
							
							app.sabiasquelista.showSelectedStory($(this)[0].id);
						});

						$(".backToList").on('tap', function() {
							
							app.sabiasquelista.init();
						});

						
		        	
		              	
		              	
		    }); //.done 


		}//ajax				
		
	},//init

	showStoriesList:function() {
		$(".backToList").hide();
		$("#sabiasquelista .sabiasquelista-content").empty();
		$("#sabiasquelista .sabiasquelista-content ").append('<ul class="sabiasque-storylist"></ul>');
	
		
	
		 for (var i=0, z= app.data.sabiasque.length; i<z;i++ ) {		 	

			$("#sabiasquelista .sabiasquelista-content ul").append('<li class="sabiasquestory" id="'+i+'" >'+app.data.sabiasque[i].titulo+'</li>');
			
		}; 

		$(".sabiasquelista-content").css({ opacity: 1}, 2000);

	},
	showSelectedStory:function(story) {
		$(".backToList").show();

		$("#sabiasquelista .sabiasquelista-content").empty();


		


		//Ponemos el <h1>
		$("#sabiasquelista .sabiasquelista-content").append('<h1>'+app.data.sabiasque[story].titulo+'</h1>');
		$("#sabiasquelista .sabiasquelista-content").append(app.data.sabiasque[story].texto);

		for (var img in app.data.sabiasque[story].imagenes){
			$("#sabiasquelista .sabiasquelista-content").append('<figure class="img img-long" ><img src="./img/sabiasque/'+app.data.sabiasque[story].imagenes[img].foto+'" /><figcaption>'+app.data.sabiasque[story].imagenes[img].piedefoto+'</figcaption></figure>');
			
		}//for

		$("#sabiasquelista .sabiasquelista-content").css({ opacity: 1}, 2000);	

		

	}

}