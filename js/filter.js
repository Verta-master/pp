//Range sliders
$( function() {
  $( "#slider-range-sum" ).slider({
    range: "max",
    min: 0,
    max: 1000000,
    value: "",
    slide: function( event, ui ) {
      $( "#amount" ).val( ui.value + " ₽" );
    }
  });
  $( "#amount" ).val( $( "#slider-range-sum" ).slider( "value" ) + " ₽");
  
  $( "#slider-range-days" ).slider({
    range: "max",
    min: 1,
    max: 500,
    value: "",
    slide: function( event, ui ) {
      $( "#amount2" ).val( ui.value + " дней");
    }
  });
  $( "#amount2" ).val( $( "#slider-range-days" ).slider( "value" ) + " дней");
} );