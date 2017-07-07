"use strict";
const root = $(".root");
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  switch (state.window) {
    case null:
              wrapper.append(Header());
      break;
   
}


  root.append(wrapper);

}


const state = {
  window:null,
  noticiasPortada:null
 
}


$( _ => {

  const root = $(".root");
  render(root);
  state.doRender = render.bind(null,root);




});

"use strict";
const Header = () => {
	
	const header = $('<header></header>');
	 header.empty();


(()=>{

	header.append($('<div class="container"></div>'));
	header.children().empty();
	header.children().append($('<div class="column"></div>'));
	header.find('.column').append($('<div class="header"></div>'));
	header.children().append(menuMobile());
	header.find('.column').find('.header').append('<img class="header__logo" src="assets/images/logoicon.png">');
	header.find('.column').find('.header').append('<img class="header__menu" src="assets/images/menu.png">');
	header.find('.column').find('.header').find('.header__menu').on('click',()=>{
		$('.menu').slideToggle();
	})
	

	
})();

	
	


 return header;
	
}

'use strict';
const menuOptions = ["Lo último","Opinión","Cultura","Perú","Tecnología","Mundo","Economia","LifeStyle","Deporte"];

const menuMobile = () => {
	
	

	const column2 = $("<div class='column'></div>");

	(()=>{

		column2.append('<div id="mostrar-menu"></div>');
		column2.append('<ul class="menu"></ul>');
		column2.find('.menu').append('<li class="menu__item">');
		column2.find('.menu').append('<li class="menu__item">');
		column2.find('.menu').append('<li class="menu__item">');
		column2.find('.menu').append('<li class="menu__item">');
		column2.find('.menu').append('<li class="menu__item">');
		column2.find('.menu').append('<li class="menu__item">');
		column2.find('.menu').append('<li class="menu__item">');
		column2.find('.menu').append('<li class="menu__item">');
		column2.find('.menu').append('<li class="menu__item">');
		column2.find('.menu__item').append('<a href="#" class="menu__link"></a>');

		$.each(menuOptions,(i,val)=>{
			column2.find('.menu').children().find('.menu__link').eq(i).text(val);
		})
	
		
	
})();





return column2

}

"use strict";

$.getJSON("/api/news/", 
	function (response) {
	state.noticiasPortada = response;
	console.log(state.noticiasPortada);

	


});




