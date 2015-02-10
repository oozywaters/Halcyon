/* global modules:false */

modules.define('swag', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

BEMDOM.decl(this.name, {
  onSetMod: {
    'js': {
      'inited': function() {
        // Init
      }
    }
  }
}, {
  live: function() {
    this.liveBindTo('arrow-btn', 'click', function() {
      var swag = this.domElem;
      $('html,body').animate({
        scrollTop: swag.offset().top + swag.outerHeight()
      }, 2000);
    });
  }
});

provide(BEMDOM);

});

