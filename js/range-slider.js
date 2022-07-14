$( function() {
  $( "#slider-range-max" ).slider({
    range: "max",
    min: 1,
    max: 1000000,
    value: "",
    slide: function( event, ui ) {
      $( "#amount" ).val( ui.value );
    }
  });
  $( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );
  
  $( "#slider-range-max2" ).slider({
    range: "max",
    min: 1,
    max: 1000000,
    value: "",
    slide: function( event, ui ) {
      $( "#amount2" ).val( ui.value );
    }
  });
  $( "#amount2" ).val( $( "#slider-range-max2" ).slider( "value" ) );
} );