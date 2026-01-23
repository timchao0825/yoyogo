$(document).ready(() => {
  // Hamburger menu toggle
  $('#hamburger').click(function () {
    $(this).toggleClass('mobile-menu-open');
    $('.mobile-content').toggleClass('menu-open');
  });
});
