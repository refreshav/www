function initMap() {
    var mapNode = document.getElementById('map'),
        address = document.getElementById('location');

    if (mapNode && address) {

        var map = new google.maps.Map(mapNode, {
                zoom: 16,
                center: {lat: -34.397, lng: 150.644},
                styles: [{"featureType":"administrative","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"visibility":"off"}]},{"featureType":"road.local","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"water","stylers":[{"color":"#84afa3"},{"lightness":52}]},{"stylers":[{"saturation":-17},{"gamma":0.36}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#3f518c"}]}]
            }),
            geocoder = new google.maps.Geocoder();

        geocoder.geocode({'address': address.innerText}, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {

                address.innerHTML = '<a href="http://maps.google.com/?q=' + encodeURIComponent(results[0].geometry.location) + '" target="_blank">' + address.innerText + '</a>';

                map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                    title: address.innerText
                });
            } else {
                mapNode.style.display = 'none';
            }
        });
    }
}

$(document).foundation();
