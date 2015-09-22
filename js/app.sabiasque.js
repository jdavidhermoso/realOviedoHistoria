app.sabiasque = {
	pagina: 'sabiasque',

	init: function(){
		$('.loading-logo').css({display:'block'}); 
		$('.loading-text').css({display:'block'}); 
		
	
		 requestData = $.ajax("http://www.juandavidhermoso.es/realoviedohistoria/app/js/data/app.data.sabiasque.json", {       
        "type": "POST",
            success: function() {

            	//TODO: Logo cargando... 


                              

            },
        });

        requestData.done(
            function(data) { 
            	//console.log(datos);
            	datos = JSON.parse(data);


              	console.log(datos.length);

              	app.data.sabiasque = {};
              	app.data.sabiasque = datos  

        

              	 //Current amount of random stories.
		       	var storiesLength = app.data.sabiasque.length;
				app.sabiasque.showRandomStory(storiesLength);
        	
              	
              	
        }); //.done 

      

		$(".reload-page").on('tap', function(){


			app.sabiasque.showRandomStory(app.data.sabiasque.length);
		});
				
		
	},//init

	showRandomStory:function(storiesLength) {
		//console.log(length);
	
		//It gets a random number for show the story!

		
		var randomStory = 	Math.floor((Math.random() * storiesLength));

		

		//Ever the last story. Useful for triying the new  stories.
		//var randomStory = app.data.sabiasque.length-1;
	

		$("#sabiasque .sabiasque-content").empty();

		

		//Ponemos el <h1>
		$("#sabiasque .sabiasque-content").append('<h1>'+app.data.sabiasque[randomStory].titulo+'</h1>');
		$("#sabiasque .sabiasque-content").append(app.data.sabiasque[randomStory].texto);

		for (var img in app.data.sabiasque[randomStory].imagenes){
			$("#sabiasque .sabiasque-content").append('<figure class="img img-long" ><img src="./img/sabiasque/'+app.data.sabiasque[randomStory].imagenes[img].foto+'" /><figcaption>'+app.data.sabiasque[randomStory].imagenes[img].piedefoto+'</figcaption></figure>');
			
		}//for

		$(".sabiasque-content").css({ opacity: 1}, 2000);	

 
		// DEPRECATED BY BAD PERFORMANCE


		//The main idea was to show different stories, as in a roulette, and stop in one of them. Like that, people would realize that there are many stories for reading, going out randomly.

		/*

		$("#sabiasque .sabiasque-content").css({
    		opacity:0.2});	

		var randomStory = 	Math.floor((Math.random() * app.data.sabiasque.length));
		console.log(randomStory); 

		$("#sabiasque .sabiasque-content").empty();

		//Ponemos el <h1>
		$("#sabiasque .sabiasque-content").append('<h1>'+app.data.sabiasque[randomStory].titulo+'</h1>');
		$("#sabiasque .sabiasque-content").append(app.data.sabiasque[randomStory].texto);

		for (var img in app.data.sabiasque[randomStory].imagenes){
			$("#sabiasque .sabiasque-content").append('<figure class="img img-long" ><img src="./img/sabiasque/'+app.data.sabiasque[randomStory].imagenes[img].foto+'" /><figcaption>'+app.data.sabiasque[randomStory].imagenes[img].piedefoto+'</figcaption></figure>');
			console.log(app.data.sabiasque[randomStory].imagenes[img].piedefoto);
		}//for

		$(".sabiasque-content").animate({
    		opacity: 1}, 2000);	

		

		*/
	}//randomStory

}