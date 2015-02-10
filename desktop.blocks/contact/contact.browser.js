/* global modules:false */

modules.define('contact', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

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
    this.liveBindTo('up-btn', 'click', function() {
      $('html,body').animate({
        scrollTop: 0
      }, 2000);
    });
  }
});

provide(BEMDOM);

});

