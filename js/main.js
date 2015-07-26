
init_jssor_slider1 = function (containerId) {

var options = {
    $DragOrientation: 3,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)
    $SlideDuration: 500,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500

        $ArrowNavigatorOptions: {                       //[Optional] Options to specify and enable arrow navigator or not
        $Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
        $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
        $AutoCenter: 2,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
        $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
        }
};

var jssor_slider1 = new $JssorSlider$(containerId, options);
};

$('#nav').affix({
      offset: {
        top: $('#home').height()
      }
});


$(document).ready(function(){

/* smooth scrolling sections */
$('a[href*=#]:not([href=#]):not(.accordion-section-title)').click(function() { //i've placed an extra :not() in there so it doesn't mess up the accordion
    var SCROLL_DURATION = 500;
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 50
        }, SCROLL_DURATION);
        return false;
      }
    }
});
    
var circles = $('.circle');
var opacity = 1;
for (var i=0;i<circles.length;i++){
    circles[i].style.opacity = opacity
    opacity -= 0.15;
}

	function close_accordion_section() {
		jQuery('.accordion .accordion-section-title').removeClass('active');
		jQuery('.accordion .accordion-section-content').slideUp(300).removeClass('open');
	}

	jQuery('.accordion-section-title').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if(jQuery(e.target).is('.active')) {
			close_accordion_section();
		}else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Open up the hidden content panel
			jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
		}

		e.preventDefault();
	});
    
    jQuery("#initial").addClass('active');
    jQuery(".accordion #accordion-1").slideDown(300).addClass('open');
    
    init_jssor_slider1("slider1_container");

    
});


google.maps.event.addDomListener(window, 'load', init);

function init() {
console.log(true);
// Basic options for a simple Google Map
// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 11,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(40.6700, -73.9400), // New York

    // How you would like to style the map. 
    // This is where you would paste any style found on Snazzy Maps.
    styles: [	{"featureType":"all",		"stylers":[			{"saturation":0},			{"hue":"#e7ecf0"}		]	},	{"featureType":"road",		"stylers":[			{"saturation":-70}		]	},	{"featureType":"transit",		"stylers":[			{"visibility":"off"}		]	},	{"featureType":"poi",		"stylers":[			{"visibility":"off"}		]	},	{"featureType":"water",		"stylers":[			{"visibility":"simplified"},			{"saturation":-60}		]	}]
};

// Get the HTML DOM element that will contain your map 
// We are using a div with id="map" seen below in the <body>
var mapElement = document.getElementById('map');

// Create the Google Map using our element and options defined above
var map = new google.maps.Map(mapElement, mapOptions);

// Let's also add a marker while we're at it
var marker = new google.maps.Marker({
    position: new google.maps.LatLng(40.6700, -73.9400),
    map: map,
    title: 'Snazzy!'
});

}
