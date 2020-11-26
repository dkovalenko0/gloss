$('.slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    customPaging: function (slider, i) {
        var thumb = $(slider.$slides[i]).data('thumb');
        return '<a class="dot"></a>';
    },
});