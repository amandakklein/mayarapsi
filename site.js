$(document).ready(function() {
    // Função para adicionar a classe 'active' ao item do menu correspondente à seção visível na página
    $(window).on('scroll', function() {
      var scrollPos = $(window).scrollTop();
      $('.navbar-nav a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        var offset = 100; // ajuste conforme necessário
        if (refElement.position().top - offset <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('.navbar-nav a').removeClass("active");
          currLink.addClass("active");
        } else {
          currLink.removeClass("active");
        }
      });
    });
  });
  