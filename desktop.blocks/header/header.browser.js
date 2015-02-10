/* global modules:false */

modules.define('header', ['i-bem__dom'], function(provide, BEMDOM) {

BEMDOM.decl(this.name, {
  onSetMod: {
    'js': {
      'inited': function() {
        // Init
      }
    }
  },
  _toggleNav: function() {
    var nav = this.findBlockInside('nav');
    nav.toggle();
  }
}, {
  live: function() {
    this.liveInitOnBlockInsideEvent('click', 'toggle-btn', function() {
      this._toggleNav();
    });
  }
});

provide(BEMDOM);

});