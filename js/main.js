/*!
 * CV - Bootstrap Theme (http://themewagon.com.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */


//Testimonial


$(function() {
    $('.text-testimonial').hide();
    $('#testimonial-1').show( "slow" );
    $('.client').on('click', function(e){
        e.preventDefault();
        var testimonial = $(this).data('testimonial_id');
        $('.text-testimonial').hide();
        $('#'+testimonial).show( "slow" );
        $('.client').removeClass('redmark');
        $(this).addClass('redmark');
    });
    
    var expOff = 1;
    $(window).scroll(function(){
       if (_scrollSpy('#experience')) {
           if (expOff) {
               $.each($('.progress-bar'), function(index, val){
                   var startW = 1;
                   var w = $(val).data('w');
                   while (startW < w) {
                       $(val).css('width', startW+"%");   
                       startW = startW + 1;
                   }                   
               });
           }
       }
    });
});

var _scrollSpy = function(element){
    var top = $(element).offset().top,
        heightE = $(element).outerHeight(),
        heightW = $(window).height(),
        scrollW = $(this).scrollTop();        
    if (scrollW > (top+heightE-heightW)) {
        return true;        
    } else {
        return false;
    }
}


