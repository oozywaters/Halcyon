/* global modules:false */

modules.define('nav', ['i-bem__dom'], function(provide, BEMDOM) {

BEMDOM.decl(this.name, {
  onSetMod: {
    'js': {
      'inited': function() {
        // Init
      }
    }
  },
  toggle: function() {
    this.domElem.slideToggle();
  }
});

provide(BEMDOM);

});