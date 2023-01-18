

var btns = $('.rating'); //creates an array of buttons with class name 'rating'










// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
    $(btns[i]).click(function() {

      
      var ratings = document.getElementsByClassName("active"); //checks the elements with 'active' class name

      

        if (ratings.length > 0) { //if there's any elements with class name 'active'
            $(ratings).removeClass('active'); //removes the class name 'active' from those elements
        } 
  
      // Add the active class to the current/clicked button
      $(this).addClass('active'); 
     
     
    }); 
  }
          
//END

$(".rating").click(function() {
    var rat = $(this).html();
    

$('.submit-button').click(function() {

    $(".evaluation").hide(); 
    $(".thank-you").show(); 
    $("#rating").text(rat);

    });


}); 


           

$(function() {
    $('.submit-button').hover(function(){
        $(this).addClass('hovered');
    },
    function(){
        $(this).removeClass('hovered');
    });
});


   



   
  $('.rating').mouseenter(function() {
    $(this).addClass('rating-hovered');
        });
        $('.rating').mouseleave(function() {
        $(this).removeClass('rating-hovered');
    });


