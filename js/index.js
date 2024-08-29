
console.log("your index.js file is loaded correctly");
$( "button" ).hover(
  function() {
    $( this ).append( $( "<span> ***</span>" ) );
  }, function() {
    $( this ).find( "span" ).last().remove();
  }
);
 
$( "button.fade" ).hover(function() {
  $( this ).fadeOut( 100 );
  $( this ).fadeIn( 500 );
});

$("#myID").on("click", function(){
    console.log("you clicked on #myID")
});

$("#myID").on("click", function(){
    $(".fadeMe").fadeToggle("slow");
});
$(document).ready(function(){
    // Accordion
    $(".accordion").click(function(){
        $(this).toggleClass("active");
        $(this).next(".accordion-content").toggleClass("show");
    });

    // Modal
    var modal = $('#myModal');
    var btn = $('#myBtn');
    var span = $('.close');

    btn.click(function() {
        modal.show();
    });

    span.click(function() {
        modal.hide();
    });

    $(window).click(function(event) {
        if (event.target == modal[0]) {
            modal.hide();
        }
    });
});
