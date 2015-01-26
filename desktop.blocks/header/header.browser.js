/* global modules:false */

modules.define('header', ['i-bem__dom'], function(provide, BEMDOM) {

BEMDOM.decl(this.name, {
  onSetMod: {
    'js': {
      'inited': function() {
        var toggle = this.findBlockInside('toggle-btn');
        var nav = this.findBlockInside('navigation');
        toggle.on('click', function() {
          nav.domElem.slideToggle();
        });
      }
    }
  },
  onClick: function() {
    console.log('click' + this.domElem);
  }
});

provide(BEMDOM);

});