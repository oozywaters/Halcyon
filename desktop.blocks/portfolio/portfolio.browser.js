/* global modules:false */

modules.define('portfolio', ['i-bem__dom'], function(provide, BEMDOM) {

BEMDOM.decl(this.name, {
  onSetMod: {
    'js': {
      'inited': function() {
        console.log('Portfolio Inited');
        // var slider = this.findBlockInside('slider');
        // slider.on('ready', function() {
        //   console.log('readu');
        // });
      }
    }
  }
}, {
  live: function() {
    this.liveInitOnBlockInsideEvent('ready', 'slider');
  }
});

provide(BEMDOM);

});

