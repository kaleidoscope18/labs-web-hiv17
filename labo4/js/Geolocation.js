/**
 * Created by Raphael on 2017-02-02.
 */


function getGeoloc(){
    navigator.geolocation.getCurrentPosition(updatePosition);
}

function updatePosition(position){
    document.getElementById("location-display").textContent =
        "Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude;
}

document.getElementById("refresh-geoloc-button").onclick = getGeoloc;
