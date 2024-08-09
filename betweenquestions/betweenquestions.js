//the hard part...
//we need to track the location of the user and compare it to the nextlocation cookie.
//If the difference is less then 40 we can ask the question


function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

let distance = 1000
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(showPosition);
    } else {
      console.log('No data sorry, gelocation is not supported');
    }
  }
  
  function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude)

    //d=√((x_2-x_1)²+(y_2-y_1)²)
    let lat1 = position.coords.latitude;
    let long1 = position.coords.longitude;

    let nextlocation = getCookie("NextLocation");

    let lat2 = nextlocation.split("-")[0];
    let long2 = nextlocation.split("-")[1];

    //latitude and longitude will be getting from the cookie

    distance = Math.sqrt(Math.pow(lat2 - lat1 ,2) + Math.pow(long2 - long1, 2)) * 111320; // convert to meters
    console.log(distance)

    if (distance < 40) {
      // activate here!
      console.log("You're within 40 meters! Ask the question...");
      setCookie("Onlocation", true, 1)
      window.location.href = "../levels/";
    }
  }

