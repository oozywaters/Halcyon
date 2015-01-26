/* global modules:false */

modules.define('logo', ['i-bem__dom'], function(provide, BEMDOM) {

BEMDOM.decl(this.name, {
  onSetMod: {
    'js': {
      'inited': function() {
        // var title = this.elem('title');
        // title.addClass('animated fadeInDown');
      }
    }
  }
});

provide(BEMDOM);

});