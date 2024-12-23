nv.winHeight = $(window).height();
nv.winWidth = $(window).width();

if (nv.winHeight > 600 && nv.winWidth > 1280) {
  const containerWidth = $(".container").width();
  const leftWidth = $(".card_middle").width();
  const leftHeight = $(".card_middle").height();

  $(".card_details").css({
    width: containerWidth - (leftWidth + 80),
    left: leftWidth + 80,
    height: leftHeight - 30,
  });
}

$(".menu-item").on("click", function () {
  /* const navLink = this.attr('data-id');
  const parentLi = $(this); */

  const navLink = $(this).attr("data-id");
  $(document)
    .find("[data-id=" + navLink + "]")
    .addClass("active")
    .siblings()
    .removeClass("active");
  $(document)
    .find(".card_details_content." + navLink + "")
    .show()
    .siblings()
    .hide();
});
