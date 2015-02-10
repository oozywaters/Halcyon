/* global modules:false */

modules.define('responsive', ['i-bem__dom'], function(provide, BEMDOM) {

BEMDOM.decl(this.name, {
  onSetMod: {
    'js': {
      'inited': function() {
        // Initialization
      }
    }
  },
  animate: function() {
    this.setMod(this.elem('pic'), 'animated', true);
  }
});

provide(BEMDOM);

});

