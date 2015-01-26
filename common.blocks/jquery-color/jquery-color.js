modules.define('jquery-color', ['jquery'], function(provide, $){
    var jQuery = $,
        window = {jQuery: jQuery};
    /*borschik:include:../../libs/jquery-color/jquery.color.js*/
    provide($);
});