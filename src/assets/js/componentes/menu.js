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
			column2.find('.menu').children().find('.menu__link').eq(i).attr('href',i);
			column2.find('.menu').children().find('.menu__link').eq(i).on('click',(e)=>{
				e.preventDefault();
			})
		
		})
	
		
	
})();





return column2

}