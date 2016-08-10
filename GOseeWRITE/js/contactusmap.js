function initialize()
{
	var location = new google.maps.LatLng(15.7833,75.1167);

	var mapOptions = {
		center: location,
		zoom: 10
	};

	var mapElement = document.getElementById("right_content");

	var map = new google.maps.Map(mapElement, mapOptions);

	var marker = new google.maps.Marker({
		position: location,
		map: map,
		animation: google.maps.Animation.BOUNCE
	});


	var windowContent = '<div id="contact-detail"><sup><img src="images/contact.jpg" alt="contact" /></div>';

	var infowindow = new google.maps.InfoWindow({
        content: windowContent
    });

    google.maps.event.addListener(marker, 'click', function(){
        infowindow.open(map, marker);
    });
}

google.maps.event.addDomListener(window, 'load', initialize);