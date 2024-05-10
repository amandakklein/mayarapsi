$(document).ready(function(){
    var hash = window.location.hash;
    $('.navbar-nav a[href="'+hash+'"]').addClass('active');

});