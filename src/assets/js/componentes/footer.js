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