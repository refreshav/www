function initMap() {
    var mapNode = document.getElementById('map'),
        location = document.getElementById('location');

    if (mapNode && location) {

        var map = new google.maps.Map(mapNode, {
                zoom: 16,
                center: {lat: -34.397, lng: 150.644},
                styles: [{"featureType":"administrative","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"visibility":"off"}]},{"featureType":"road.local","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"water","stylers":[{"color":"#84afa3"},{"lightness":52}]},{"stylers":[{"saturation":-17},{"gamma":0.36}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#3f518c"}]}]
            }),
            geocoder = new google.maps.Geocoder();

        var address = location.innerText;

        if (address.indexOf('Acadia Entrepreneurship Centre Rural Innovation Centre') !== -1) {
            address = '45.088470, -64.368316';
        }

        geocoder.geocode({'address': address}, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {

                location.innerHTML = '<a href="http://maps.google.com/?q=' + encodeURIComponent(results[0].geometry.location) + '" target="_blank">' + location.innerText + '</a>';

                map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                    title: location.innerText
                });
            } else {
                mapNode.style.display = 'none';
            }
        });
    }
}

Foundation.Abide.defaults['validators']['checkbox_limit'] =
    function($el, required, parent) {
        var group = parent.closest('.checkbox-group');
        var min = group.attr('data-validator-min');
        var checked = group.find(':checked').length;
        if (checked >= min) {
            // clear label highlight
            group.find('label').each(function() {
                $(this).removeClass('is-invalid-label');
            });
            // clear checkbox error
            group.find(':checkbox').each(function() {
                $(this).removeClass('is-invalid-input').removeAttr('data-invalid');
            });
            group.find('small.form-error').hide();
            return true;
        } else {
            // label highlight
            group.find('label').each(function() {
                $(this).addClass('is-invalid-label');
            });
            // checkbox error
            group.find(':checkbox').each(function() {
                $(this).addClass('is-invalid-input').attr('data-invalid');
            });
            group.find('small.form-error').show();
            return false;
        }
    };

$(document).foundation();

$('#signupPopup').on('closed.zf.reveal', function() {
    localStorage.tried = true;
    alert('I\'ll try to not take this personally.  If you change your mind, the mailing list sign up is at the bottom of every page.');
});

if (!localStorage.tried) {
    setTimeout(function() {
        $('#signupPopup').foundation('open');
    }, 30000);
}
