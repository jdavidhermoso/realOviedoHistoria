var app = {
	navBarOpen:  false,
	paginaActual: 'sabiasque',
	rutas: {},

	enroutador: function(){
		//Recorre todos los módulos de la app, 
		for (var propiedad in app){
			if (app[propiedad].hasOwnProperty('pagina')){

				//Mete el objeto entero, dentro del array app.rutas.
				app.rutas[app[propiedad].pagina.substring(0)] = app[propiedad];
				console.log(app.rutas[propiedad]);
			}//if
		}//for
	},//enroutador

	init: function(){	
		//var dataUrl = ;
		var url = 'http://juandavidhermoso.es/realoviedohistoria/app/js/data/app.data.php';


		//Desactivo la transición de navegación por defecto.
		 $.mobile.defaultPageTransition = 'none';	

		 //I inits jQuery mobile panel.
		 $("[data-role='panel']").enhanceWithin().panel();
		
		var previousMovement = null;		

		$('.nav-bar').on('move', function(e){
			app.scroll(e);			
		});	//scroll listener

		$('.open-menu').on('tap', function(e){	

			$(".nav-links").css({top: '160px'});

			if (app.navBarOpen == true) {
				console.log('está abierto!');
				$('.opaque').css({display:'none'});			
			};
		});

		$(".nav-bar").on('panelbeforeopen', function(){

			navBarOpen = true;

			$('div.ui-content.article').css({padding:'0px'});

			$('.body').css({overflow:'hidden'});

			$('.opaque').css({display:'block'});

		});//panel before open

		$(".nav-bar").on('panelbeforeclose',function(){
			navBarOpen= false;
			$('.body').css({overflow:'auto'});
			$('div.ui-content.article').css({padding:'1em'});
			$('.opaque').css({display:'none'});
		}); //panel close

		$(document).on('pagecreate',':jqmData(role="page")', function(){
			if ($.isEmptyObject(app.rutas) ){
				//si el objeto rutas está vacío... ejecuta el enroutador.
				app.enroutador();								
			}

			if (app.rutas.hasOwnProperty(this.id) ){				
				app.rutas[this.id].init();
			}
		});//pagecreate

		$(document).on('pagecontainerbeforeshow', function(event, ui) {			
			
			var fromPage = ui.prevPage[0] || null;
			var toPage = ui.toPage[0] || null;		

			if (toPage !== null || fromPage !== null){
			
				if ( (app.hasOwnProperty(toPage.id) )  ){				
					
						/*
							quitar la clase current del enlace de la página anterior, 
							y ponerla en el enlace de la página actual.
						*/

						/* Me falta eliminar la clase de la pgaina anterior. Por que si no... Se van acumulando. */
						app.currentPage = toPage.id;
						console.log(toPage.id);
						
						$(".nav-links li").removeClass('current');
						$("#link-"+app.currentPage).addClass('current');								

				}//if
			}//if

			
			//rememberEdu = Aviso de dónde vienen los datos de la app.
			if (localStorage.getItem("rememberEdu")){
				//Show or hide .rememberEdu
				$('.rememberEdu').hide();
				
			}else{
				$('.rememberEdu').show();				
			}


			$(".rememberEdu").on('tap', function() {
				$('.rememberEdu').hide();

				localStorage.setItem("rememberEdu",true);

			});


			
		}); //pagecontainerbeforeshow

                       

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

	/*
		¿Que he hecho?
		He creado una variable previousMovement que lo que hace es almacenar la posición actual. ¿Para qué?
		Para que al volver a lanzar el evento 'move' compare la posición guardada (es decir, la inmediatamente anterior), con
		la posición actual. De esa manera, puedo saber si el usuario sube o baja el dedo.
		Antes no hacía esto, y claro... Lo que hacía era comparar el punto de inicio, con el actual. Aparentemente parece que así estaría bien, pero NO, por que si el usuario a medio movimiento cambia la dirección del dedo, hace un extraño. 
		ES DECIR:
		Empieza el movimiento en la posición 200. Y en la posición 400 cambia la dirección del dedo. Hasta llegar a la posición 199 no podría saber si el usuario ha cambiado de dirección.

	*/		

			
	
		
			if (event.pageY < app.previousMovement){					

				//Bottom position of the links list inside de panel
				var navLinksBottom = parseInt($('.nav-links').css('top').split('p',1)[0]) + parseInt($('.nav-links')[0].clientHeight) ;

				
				if (navLinksBottom > (parseInt($('.nav-links')[0].clientHeight / 2) ) ) {
					$(".nav-links").css({top: '-=10px'});				
				}		
			}else if(event.pageY > app.previousMovement){

				console.log($('.nav-links').css('top') );

				//I remove 'px' from the CSS top property of the $('.nav-links');
				if ( ( $('.nav-links').css('top').split("p",1)[0] ) < 160 ){
 
					$(".nav-links").css({top: '+=10px'})

				}
			}

			app.previousMovement = event.pageY;
		
	}//scroll();
}//app