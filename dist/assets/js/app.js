"use strict";
const root = $(".root");
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  switch (state.window) {
    case null:
              wrapper.append(Header());
			  wrapper.append(sectionNews());
			  wrapper.append(sectionWorld());
			  wrapper.append(sectionTech());
			  wrapper.append(sectionEdu());
			  wrapper.append(sectionOpinion());
			  wrapper.append(Footer());
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
"use stric";


const Footer = () => {

	const footer = $('<footer></footer>');
	 


(()=>{

	footer.append($('<div class="container"></div>'));
	
	footer.children().append($('<div class="column"></div>'));
	footer.find('.column').append($('<div class="footerBlock"></div>'));
	footer.find('.column').find('.footerBlock').append('<img src="assets/images/logo-footer.png" class="footerBlock__img"></img>');
	footer.find('.column').find('.footerBlock').append('<address class="footerBlock__adrress">Editado por Laboratoria Av. José Pardo #601 Lima 1 Peru Copyright Laboratoria.la Todos los derechos reservdos</address>');


	
})();

	
	


 return footer;





}
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
			column2.find('.menu').children().find('.menu__link').eq(i).attr('href',i);
			column2.find('.menu').children().find('.menu__link').eq(i).on('click',(e)=>{
				e.preventDefault();
			})
		
		})
	
		
	
})();





return column2

}

"use strict";

const sectionNews = () => {

	const sectionNoticias = $('<section id="noticias"></section>')	
		  sectionNoticias.append('<div class="container"></div>');
		  sectionNoticias.children().append('<div class="column"></div>');
		  sectionNoticias.children().append('<div class="column"></div>');
		  sectionNoticias.children().append('<div class="container"></div>');
		  sectionNoticias.children().append('<div class="container"></div>');
		
		 
		  sectionNoticias.children().children().first().append('<div class="newsBlock1"></div>');
		  sectionNoticias.children().children().first().append('<h3 class="newsBlock1__tittle">Lo último</h3>');
		  sectionNoticias.children().children().first().append('<div class="newsBlock1__img"></div>');
		  sectionNoticias.children().children().first().append('<p class="newsBlock1__article">Noticia1</p>');	
		  sectionNoticias.children().children().first().next().append('<div class="newsBlock2"></div>');
		  sectionNoticias.children().children().first().next().append('<h3 class="newsBlock2__tittle"></h3>');
		  sectionNoticias.children().children().first().next().append('<div class="newsBlock2__img"></div>');
		  sectionNoticias.children().children().first().next().append('<p class="newsBlock2__article"></p>');

		  sectionNoticias.children().children().first().next().next().append('<div class="column movil-45"></div>');
		  sectionNoticias.children().children().first().next().next().append('<div class="column movil-55"></div>');
		  sectionNoticias.children().children().first().next().next().children().append('<div class="newsBlock3"></div>');
		  sectionNoticias.children().children().first().next().next().children().children().first().append('<div class="newsBlock3__img">Imagen3</div>');
		  sectionNoticias.children().children().first().next().next().children().children().last().append('<p class="newsBlock3__article">Noticia3</p>');

		  sectionNoticias.children().children().first().next().next().next().append('<div class="column movil-45"></div>');
		  sectionNoticias.children().children().first().next().next().next().append('<div class="column movil-55"></div>');
		  sectionNoticias.children().children().first().next().next().next().children().append('<div class="newsBlock4"></div>');
		  sectionNoticias.children().children().first().next().next().next().children().children().first().append('<div class="newsBlock4__img">Imagen4</div>')
		  sectionNoticias.children().children().first().next().next().next().children().children().last().append('<p class="newsBlock4__article">Imagen4</p>')




	return sectionNoticias
};

'use strict';

const sectionWorld = () => {

	const sectionMundo = $('<section id="world"></section>')

		  sectionMundo.append('<div class="container"></div>');

		  sectionMundo.children().append('<div class="column"></div>');
		  sectionMundo.children().append('<div class="column"></div>');
		  sectionMundo.children().append('<div class="column"></div>');
		  sectionMundo.children().append('<div class="column"></div>');

		  sectionMundo.children().children().first().append('<div class="worldBlock1"></div>');
		  sectionMundo.children().children().first().children().append('<h3 class="worldBlock1__tittle">Mundo</h3>');
		  sectionMundo.children().children().first().children().append('<div class="worldBlock1__img"></div>');
		  sectionMundo.children().children().first().children().append('<p class="worldBlock1__article"></p>');

		  sectionMundo.children().children().first().next().append('<div class="column movil-45"></div>');
		  sectionMundo.children().children().first().next().append('<div class="column movil-55"></div>');
		  sectionMundo.children().children().first().next().children().append('<div class="worldBlock2"></div>');
		  sectionMundo.children().children().first().next().children().children().first().append('<div class="worldBlock2__img"></div>');
		  sectionMundo.children().children().first().next().children().children().last().append('<p class="worldBlock2__article"></p>');



		  sectionMundo.children().children().first().next().next().append('<div class="column movil-45"></div>');
		  sectionMundo.children().children().first().next().next().append('<div class="column movil-55"></div>');
		  sectionMundo.children().children().first().next().next().children().append('<div class="worldBlock3"></div>');
		  sectionMundo.children().children().first().next().next().children().children().first().append('<div class="worldBlock3__img">Imagen3</div>');
		  sectionMundo.children().children().first().next().next().children().children().last().append('<p class="worldBlock3__article">Noticia3</p>');

		  sectionMundo.children().children().first().next().next().next().append('<div class="column movil-45"></div>');
		  sectionMundo.children().children().first().next().next().next().append('<div class="column movil-55"></div>');
		  sectionMundo.children().children().first().next().next().next().children().append('<div class="wordlBlock4"></div>');
		  sectionMundo.children().children().first().next().next().next().children().children().first().append('<div class="worldBlock4__img">Imagen4</div>')
		  sectionMundo.children().children().first().next().next().next().children().children().last().append('<p class="worldBlock4__article">Imagen4</p>')
	
	return sectionMundo
};



'use strict';

const sectionTech = () => {

	const sectionTec = $('<section id="tech"></section>')

		  sectionTec.append('<div class="container"></div>');

		  sectionTec.children().append('<div class="column"></div>');
		  sectionTec.children().append('<div class="column"></div>');
		  sectionTec.children().append('<div class="column"></div>');
		  sectionTec.children().append('<div class="column"></div>');

		  sectionTec.children().children().first().append('<div class="techBlock1"></div>');
		  sectionTec.children().children().first().children().append('<h3 class="techBlock1__tittle">Tecnología</h3>');
		  sectionTec.children().children().first().children().append('<div class="techBlock1__img"></div>');
		  sectionTec.children().children().first().children().append('<p class="techBlock1__article"></p>');

		  sectionTec.children().children().first().next().append('<div class="column movil-45"></div>');
		  sectionTec.children().children().first().next().append('<div class="column movil-55"></div>');
		  sectionTec.children().children().first().next().children().append('<div class="techBlock2"></div>');
		  sectionTec.children().children().first().next().children().children().first().append('<div class="techBlock2__img"></div>');
		  sectionTec.children().children().first().next().children().children().last().append('<p class="techBlock2__article"></p>');



		  sectionTec.children().children().first().next().next().append('<div class="column movil-45"></div>');
		  sectionTec.children().children().first().next().next().append('<div class="column movil-55"></div>');
		  sectionTec.children().children().first().next().next().children().append('<div class="techBlock3"></div>');
		  sectionTec.children().children().first().next().next().children().children().first().append('<div class="techBlock3__img">Imagen3</div>');
		  sectionTec.children().children().first().next().next().children().children().last().append('<p class="techBlock3__article">Noticia3</p>');

		  
	return sectionTec
};



'use strict';

const sectionEdu = () => {

	const sectionTeach = $('<section id="teach"></section>')

		  sectionTeach.append('<div class="container"></div>');

		  sectionTeach.children().append('<div class="column"></div>');
		  sectionTeach.children().append('<div class="column"></div>');
		  sectionTeach.children().append('<div class="column"></div>');
		  sectionTeach.children().append('<div class="column"></div>');
		  sectionTeach.children().append('<div class="column"></div>');


		  sectionTeach.children().children().first().append('<div class="teachBlock1"></div>');
		  sectionTeach.children().children().first().children().append('<h3 class="teachBlock1__tittle">Educación</h3>');
		  sectionTeach.children().children().first().children().append('<div class="teachBlock1__img"></div>');
		  sectionTeach.children().children().first().children().append('<p class="teachBlock1__article"></p>');


		  sectionTeach.children().children().first().next().append('<div class="teachBlock2"></div>');
		  sectionTeach.children().children().first().next().children().append('<div class="teachBlock2__img"></div>');
		  sectionTeach.children().children().first().next().children().append('<p class="teachBlock2__article"></p>');


		  
		  sectionTeach.children().children().first().next().next().append('<div class="column movil-45"></div>');
		  sectionTeach.children().children().first().next().next().append('<div class="column movil-55"></div>');
		  sectionTeach.children().children().first().next().next().children().append('<div class="teachBlock3"></div>');
		  sectionTeach.children().children().first().next().next().children().children().first().append('<div class="teachBlock3__img"></div>');
		  sectionTeach.children().children().first().next().next().children().children().last().append('<p class="teachBlock3__article"></p>');

		  sectionTeach.children().children().first().next().next().next().append('<div class="column movil-45"></div>');
		  sectionTeach.children().children().first().next().next().next().append('<div class="column movil-55"></div>');
		  sectionTeach.children().children().first().next().next().next().children().append('<div class="teachBlock4"></div>');
		  sectionTeach.children().children().first().next().next().next().children().children().first().append('<div class="teachBlock4__img"></div>');
		  sectionTeach.children().children().first().next().next().next().children().children().last().append('<p class="teachBlock4__article"></p>');


		  sectionTeach.children().children().first().next().next().next().next().append('<div class="column movil-45"></div>');
		  sectionTeach.children().children().first().next().next().next().next().append('<div class="column movil-55"></div>');
		  sectionTeach.children().children().first().next().next().next().next().children().append('<div class="teachBlock5"></div>');
		  sectionTeach.children().children().first().next().next().next().next().children().children().first().append('<div class="teachBlock5__img"></div>');
		  sectionTeach.children().children().first().next().next().next().next().children().children().last().append('<p class="teachBlock5__article"></p>');
	
	return sectionTeach
};

'use strict';

const sectionOpinion = () => {

	const sectionView = $('<section id="view"></section>')

		  sectionView.append('<div class="container"></div>');

		  sectionView.children().append('<div class="column"></div>');
		  sectionView.children().append('<div class="column"></div>');
		  sectionView.children().append('<div class="column"></div>');
		  sectionView.children().append('<div class="column"></div>');
		  sectionView.children().append('<div class="column"></div>');


		  sectionView.children().children().first().append('<div class="viewBlock1"></div>');
		  sectionView.children().children().first().children().append('<h3 class="viewBlock1__tittle">Opinion</h3>');
		  sectionView.children().children().first().children().append('<div class="viewBlock1__img"></div>');
		  sectionView.children().children().first().children().append('<p class="viewBlock1__article"></p>');


		  sectionView.children().children().first().next().append('<div class="viewBlock2"></div>');
		  sectionView.children().children().first().next().children().append('<div class="viewBlock2__img"></div>');
		  sectionView.children().children().first().next().children().append('<p class="viewBlock2__article"></p>');


		  
		  sectionView.children().children().first().next().next().append('<div class="column movil-45"></div>');
		  sectionView.children().children().first().next().next().append('<div class="column movil-55"></div>');
		  sectionView.children().children().first().next().next().children().append('<div class="viewBlock3"></div>');
		  sectionView.children().children().first().next().next().children().children().first().append('<div class="viewBlock3__img"></div>');
		  sectionView.children().children().first().next().next().children().children().last().append('<p class="viewBlock3__article"></p>');

		  sectionView.children().children().first().next().next().next().append('<div class="column movil-45"></div>');
		  sectionView.children().children().first().next().next().next().append('<div class="column movil-55"></div>');
		  sectionView.children().children().first().next().next().next().children().append('<div class="viewBlock4"></div>');
		  sectionView.children().children().first().next().next().next().children().children().first().append('<div class="viewBlock4__img"></div>');
		  sectionView.children().children().first().next().next().next().children().children().last().append('<p class="viewBlock4__article"></p>');


		  sectionView.children().children().first().next().next().next().next().append('<div class="column movil-45"></div>');
		  sectionView.children().children().first().next().next().next().next().append('<div class="column movil-55"></div>');
		  sectionView.children().children().first().next().next().next().next().children().append('<div class="viewBlock5"></div>');
		  sectionView.children().children().first().next().next().next().next().children().children().first().append('<div class="viewBlock5__img"></div>');
		  sectionView.children().children().first().next().next().next().next().children().children().last().append('<p class="viewBlock5__article"></p>');
	
	return sectionView
};






$.getJSON("/api/news/", 
	function (response) {
	state.noticiasPortada = response;
	console.log(state.noticiasPortada);


	$.each(state.noticiasPortada,(i,val)=>{
		console.log(val.title);

		$('body').find('p').eq(i).text(val.title);
		$('body').find('h3').eq(i).attr('id',i);
	    $('body').find('h3').eq(i).on('click',(e)=>{
			e.preventDefault();

		})	
			


	})



});

'use strict'

