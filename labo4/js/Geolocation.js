/**
 * Created by Raphael on 2017-02-02.
 */



$(document).ready( function() {
    function getGeoloc(){
        navigator.geolocation.getCurrentPosition(updatePosition);
    }

    function updatePosition(position){
        $("#location-display").html(
            "Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
    }

    $("#refresh-geoloc-button").click(function (event) {
        getGeoloc();
    })
});



