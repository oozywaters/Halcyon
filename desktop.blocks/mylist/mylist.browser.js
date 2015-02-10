/* global modules:false */

modules.define('mylist', ['i-bem__dom'], function(provide, BEMDOM) {

BEMDOM.decl(this.name, {
  onSetMod: {
    'js': {
      'inited': function() {
        // Init function
      }
    }
  },
  animate: function() {
    this.setMod(this.elem('item'), 'animated', true);
  }
});

provide(BEMDOM);

});