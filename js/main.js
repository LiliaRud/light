$('#search-field').click(function() {
    $(this).animate({right: "0", width: "260px"}, 500);
    $(this).css("cursor", "text");
});
$("#search-field").blur(function(){
    $(this).animate({right: "0", width: "45px"}, 500);
    $(this).css("cursor", "pointer");
});

$('#slideshow0').flexslider({
	animation: 'slide',
	controlNav: false,
	prevText: '',
	nextText: '',
	animationLoop: true,
	itemWidth: 1140});


$(function() {
    $('.catalog-opener').click(function(event) {
        $('.catalog-nav').toggle();
        $('.catalog-opener').toggleClass('closed');
    });
    $(document).click(function (event) {
        if ($(event.target).closest('.catalog-nav').length == 0 && $(event.target).attr('class') != 'catalog-opener') {
            $('.catalog-nav').hide();
            $('.catalog-opener').addClass('closed');
        }
    });
});

$('.filters-select').selectpicker();

$(document).ready(function() {
    $('.thumbnails').magnificPopup({
        type:'image',
        delegate: 'a',
        gallery: {
            enabled:true
        }
    });
});

$(function() {
  $(".quantity").append('<div class="inc input_quantity-btn">+</div><div class="dec input_quantity-btn">-</div>');
  $(".input_quantity-btn").on("click", function() {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
        if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 0;
        }
    }
    $button.parent().find("input").val(newVal);
  });
});