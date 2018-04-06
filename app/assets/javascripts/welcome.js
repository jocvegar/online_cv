var addSmoothScroll = function () {
    let scrollLink = $('.js_scroll');

    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000 );
    });
}

document.addEventListener("turbolinks:load", function () {
    addSmoothScroll();
    $('body').on("reLoadJS", addSmoothScroll);
});