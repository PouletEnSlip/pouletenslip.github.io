window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

jQuery(function() {
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 60 ) { 
                $('#btnTop').css('right','15px');
            } else { 
                $('#btnTop').removeAttr('style');
            }
        });
    });
});

$('body').on({
    'touchmove': function(e) { 
        $('#btnTop').css('right','15px');
    }
});
