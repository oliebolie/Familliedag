//This script is the main script for tracking the location. When this script is runned the location is tracked in the cookie

function getLocation() {
if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
} else {
    x.innerHTML = "Geolocation is not supported by this browser.";
}
}

function showPosition(position) {
    setCookie("Latitude", position.coords.latitude, 1);
    setCookie("Longitude", position.coords.longitude, 1);
}
while (1 == 1){
    getLocation();
    setTimeout(1000);
}