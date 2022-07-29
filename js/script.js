$(function () {
  const wow = new WOW();
  wow.init();

  const spMaxWidth = 1199;
  const closeHeaderMenu = () => {
    $(".js-hamburger").removeClass("is-active");
    $(".js-header_sp_nav__container").removeClass("is-active");
  };
  const smoothScroll = (event) => {
    event.preventDefault();
    const speed = 500;
    const targetId = $(event.currentTarget).attr("href");
    const headerHight = $(".js-header").innerHeight();
    const position = $(targetId).offset().top - headerHight;
    $("body,html").animate({ scrollTop: position }, speed);
  };

  $(window).resize(() => {
    if ($("body").innerWidth() > spMaxWidth) closeHeaderMenu();
  });
  $(".js-hamburger").on("click", (event) => {
    $(event.currentTarget).toggleClass("is-active");
    $(".js-header_sp_nav__container").toggleClass("is-active");
  });
  $(".js-header_nav__link").on("click", (event) => {
    smoothScroll(event);
  });
  $(".js-header_sp_nav__link").on("click", (event) => {
    closeHeaderMenu();
    smoothScroll(event);
  });
});
