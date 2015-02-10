/* global modules:false */

modules.define('toggle-btn', ['i-bem__dom'], function(provide, BEMDOM) {

BEMDOM.decl(this.name, {
  onSetMod: {
    'js': {
      'inited':function() {
        // Init
      }
    }
  },
  _onClick: function() {
    this.emit('click');
    // console.log('toggle clicked');
    this.toggleMod('active');
  }
}, {
  live: function() {
    this.liveBindTo('click', function() {
      this._onClick();
    });
  }
});

provide(BEMDOM);

});

