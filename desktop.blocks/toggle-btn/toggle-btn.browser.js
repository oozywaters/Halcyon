/* global modules:false */

modules.define('toggle-btn', ['i-bem__dom'], function(provide, BEMDOM) {

BEMDOM.decl(this.name, {
  onSetMod: {
    'js': {
      'inited':function() {
        this.bindTo('click', this._onClick);
      }
    }
  },
  _onClick: function() {
    this.emit('click');
    // console.log('toggle clicked');
    this.toggleMod('active');
  }
});

provide(BEMDOM);

});

