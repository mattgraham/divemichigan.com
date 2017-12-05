$( document ).ready(function() {
  $('.js-select-nav').on( 'change', function() {
    var url = $(this).val();
    if ( url ) {
      window.location = url;
    }
  });
});
