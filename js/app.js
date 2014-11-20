var app = {

	navBarOpen:  true,

	init: function(){	
		var previousMovement = null;


		$(document).on('move', function(e){
			app.scroll(e);
		});

		$('.open-menu').on('tap', function(e){
			
			$(".nav-links").css({top: '160px'});
		});
	},//init()

	moveMenu: function(event){
		
		if (app.navBarOpen === true){

			$(".nav-bar").css({width: event.pageX});
		}else{

			if (event.startX < 50){
				$(".nav-bar").css({width: event.pageX});
			}
		}
	},//MoveMenu

	scroll: function(event){
			
	
		//el fallo que hace... Lo ahce por que si no levantas... sigue siendo el mismo movimiento!!
		var topPos = $(".nav-links").position().top;	
			if (event.pageY < app.previousMovement){

				( $(".nav-bar ul").animate({top: topPos-5+'px'},0) );
			}else{
			
					( $(".nav-bar ul").animate({top: topPos+5+'px'},0) );
			}

			app.previousMovement = event.pageY;
		
/*
		if (app.previousMovement != null){
			//Algún movimiento hay ya guardado!
			if (event.pageY > app.previousMovement){
				//sube

					
					app.previousMovement = event.pageX;
			}else{
				//baja
				( $(".nav-bar ul").animate({top: topPos-5+'px'},0) );
			
			}

		}else{
			app.previousMovement = event.pageY;

			if (event.startY > event.pageY){
			//Up
				( $(".nav-bar ul").animate({top: topPos-5+'px'},0) );		

				console.log("Up!");
			}else{
			//Down
				( $(".nav-bar ul").animate({top: topPos+5+'px'},0) );
			
		
			
			}
		}
	*/

	}//scroll();
}//app
