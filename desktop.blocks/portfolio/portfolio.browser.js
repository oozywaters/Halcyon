/* global modules:false */

modules.define('portfolio', ['i-bem__dom'], function(provide, BEMDOM) {

BEMDOM.decl(this.name, {
  onSetMod: {
    'js': {
      'inited': function() {

      }
    }
  }
}, {
  live: function() {
    // this.liveInitOnBlockInsideEvent('ready', 'slider');
  }
});

provide(BEMDOM);

});

