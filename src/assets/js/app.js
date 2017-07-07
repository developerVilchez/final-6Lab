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