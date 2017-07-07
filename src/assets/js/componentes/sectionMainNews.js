"use strict";

$.getJSON("/api/news/", 
	function (response) {
	state.noticiasPortada = response;
	console.log(state.noticiasPortada);

	


});

