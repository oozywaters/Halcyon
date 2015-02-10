/* global modules:false */

modules.define('page', ['i-bem__dom', 'waypoints'], function(provide, BEMDOM) {

BEMDOM.decl(this.name, {
  onSetMod: {
    'js': {
      'inited': function() {

        console.log('Initialization Here');
        // var chan = BEM.channel('some');
        // console.log(BEMDOM);

        this._responsive = this.findBlockInside('responsive');
        this._portfolio = this.findBlockInside('portfolio');
        this._team = this.findBlockInside('team');

        var intro = this.findBlockInside('intro');
        var featuresList = this.findBlockInside('features').findBlockInside('mylist');
        var iphone = this._responsive;

        var portfolioList = this._portfolio.findBlocksInside('mylist');
        var teamList = this._team.findBlocksInside('mylist');

        var wp1 = new Waypoint({
          element: intro.elem('in'),
          handler: function() {
            intro.animate();
          },
          offset: '75%'
        });

        var wp2 = new Waypoint({
          element: featuresList.domElem,
          handler: function() {
            featuresList.animate();
          },
          offset: '75%'
        });

        var wp3 = new Waypoint({
          element: iphone.elem('pic'),
          handler: function() {
            iphone.animate();
          },
          offset: '55%'
        });

        var wp4 = new Waypoint({
          element: portfolioList[0].domElem,
          handler: function() {
            console.log('wp4 reached');
            portfolioList.forEach(function(item) {
              item.animate();
            });
          },
          offset: '75%'
        });

        var wp5 = new Waypoint({
          element: teamList[0].domElem,
          handler: function() {
            console.log('wp5 reached');
            teamList.forEach(function(item) {
              item.animate();
            });
          },
          offset: '75%'
        });

        // this._initSliders();
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

