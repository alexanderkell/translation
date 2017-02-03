(function($){
  $(function(){
    $('.button-collapse').sideNav({
        menuWidth: 240, // Default is 240
        closeOnClick: false // Closes side-nav on <a> clicks, useful for Angular/Meteor
        }
    );
    $('.collapsible').collapsible();
    $(".parallax").parallax();
    $("select").material_select();
    $(".modal-trigger").leanModal();
      



  }); // end of document ready
})(jQuery); // end of jQuery name space