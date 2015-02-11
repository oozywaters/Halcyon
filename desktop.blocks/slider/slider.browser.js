/* global modules:false */

modules.define('slider', ['i-bem__dom', 'flexslider'], function(provide, BEMDOM) {

BEMDOM.decl(this.name, {
  onSetMod: {
    'js': {
      'inited': function() {
        var _this = this;
        this.domElem.flexslider({
          animation: this.params.animation,
          directionNav: false,
          controlNav: true,
          touch: this.params.touch,
          pauseOnHover: true,
          start: function() {
            _this._onReady();
          }
        });
        // console.log('Slider Inited');
      }
    }
  },
  getDefaultParams: function() {
    return {
      animation: 'slide',
      touch: true
    };
  },
  _onReady: function() {
    this.emit('ready');
  }
});

provide(BEMDOM);

});
