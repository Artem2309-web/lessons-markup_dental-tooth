// Означает ф-ция, уоторая будет віполняться после загрузки документа
$(document).ready(function() {
  // ф-ция открітия меню
  $('.hamburger').on('click', function() {
    $('.mobile-menu').addClass('is-active')
  });

  // ф-ция закрітия меню
  $('.mobile-menu-close').on('click', function() {
    $('.mobile-menu').removeClass('is-active')
  })
});