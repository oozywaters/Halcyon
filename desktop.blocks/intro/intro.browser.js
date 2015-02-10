/* global modules:false */

modules.define('intro', ['i-bem__dom', 'waypoints'], function(provide, BEMDOM) {

// window.jQuery = window.$ = $;


BEMDOM.decl(this.name, {
  onSetMod: {
    'js': {
      'inited': function() {
        // var wp = this.findElem('in');
        // var intro = this;

        // var waypoint = new Waypoint({
        //   element: wp,
        //   handler: function() {
        //     wp.css('visibility', 'visible');
        //     intro.setMod(wp, 'animated', true);
        //   },
        //   offset: '75%'
        // });
      }
    }
  },
  animate: function() {
    var inElem = this.elem('in');
    this.setMod(inElem, 'animated', true);
  }
}, {
  // live: function() {
  //   var wp = this.findElem('in');
  //   this.liveBindTo(this, 'onscroll', function(e) {
  //     console.log('intro clicked');
  //   });
  // }
});

provide(BEMDOM);

});

