// /* global modules:false */

modules.define('mylist__item', ['i-bem__dom'], function(provide, BEMDOM) {

BEMDOM.decl({ block: 'mylist', elem: 'item' }, {
  onSetMod: {
    // 'js': {
    //   'inited': function() {
    //     console.log('Inited');
    //     // this.domElem.css({ visibility: 'hidden' });
    //   }
    // },
    'animated': function() {
      var _this = this;
      this.domElem.css({
        visiblity: 'visible',
        'animation-name': _this.params.animation,
        'animation-delay': _this.params.delay
      });
      // console.log(this.params);
    }
  }
});

provide(BEMDOM);

});