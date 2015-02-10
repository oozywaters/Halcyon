/* global modules:false */

modules.define('overlay', ['i-bem__dom'], function(provide, BEMDOM) {

BEMDOM.decl(this.name, {
  beforeSetMod: {
    'hover': {
      true: function(){
        return !this.hasMod('hover');
      }
    }
  },
  onSetMod: {
    'js': {
      'inited': function() {
        if (Modernizr.touch) {
          this.bindTo('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            this.setMod('hover');
          });

          var closeOverlay = this.findElem('fx-close');
          closeOverlay.css({ display: 'block' });

          this.bindTo(closeOverlay, 'click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            if(this.hasMod('hover')) this.setMod('hover', false);
          });

        } else {

          this.bindTo('mouseenter', function() {
            this.setMod('hover');
          });
          this.bindTo('mouseleave', function() {
            this.setMod('hover', false);
          });
        }
      }
    }
  }
});

provide(BEMDOM);

});

