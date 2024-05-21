$(document).ready(function(){


	var scroll = new SmoothScroll('a[href*="#"]');

	var menu = "cerrado";


	$(".menu_boton").on("click",function(){
		// alert("haremos algo con el menu :-p");

		if(menu =="cerrado"){		
			$(".menu_mobile_opciones").removeClass("mmo_cerrado");	
			$(".menu_mobile_opciones").addClass("mmo_abierto");
			// $(".menu_mobile_opciones").css("transition", "width 2s, height 2s, transform 2s");
			menu = "abierto";
		}else{


			$(".menu_mobile_opciones").removeClass("mmo_abierto");	
			$(".menu_mobile_opciones").addClass("mmo_cerrado");

			 menu = "cerrado";
		}

	})

})