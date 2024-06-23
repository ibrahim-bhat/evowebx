
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });

    $(window).on('scroll', function(){
      function isScrollIntoView(elem, index) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(window).height()*.5;
        if(elemBottom <= docViewBottom && elemTop >= docViewTop) {
          $(elem).addClass('active');
        }
        if(!(elemBottom <= docViewBottom)) {
          $(elem).removeClass('active');
        }
        var MainTimelineContainer = $('#vertical-scrollable-timeline')[0];
        var MainTimelineContainerBottom = MainTimelineContainer.getBoundingClientRect().bottom - $(window).height()*.5;
        $(MainTimelineContainer).find('.inner').css('height',MainTimelineContainerBottom+'px');
      }
      var timeline = $('#vertical-scrollable-timeline li');
      Array.from(timeline).forEach(isScrollIntoView);
    });
  
  })(window.jQuery);


// poster offer 
document.addEventListener("DOMContentLoaded", function () {
  var offerBox = document.getElementById("offerBox");
  var closeButton = document.getElementById("closeButton");

  // Show the offer box
  offerBox.style.display = "block";

  // Close the offer box when close button is clicked
  closeButton.addEventListener("click", function () {
    offerBox.style.display = "none";
  });

  // Automatically close the offer box after 10 seconds
  setTimeout(function () {
    offerBox.style.display = "none";
  }, 20000000);
});


// checkout 
document.addEventListener("DOMContentLoaded", function () {
  const orderButtons = document.querySelectorAll(".order-now-button");
  const checkoutFormContainer = document.getElementById(
    "checkoutFormContainer"
  );

  orderButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      checkoutFormContainer.style.display = "block";
      checkoutFormContainer.scrollIntoView({ behavior: "smooth" });
    });
  });
});
