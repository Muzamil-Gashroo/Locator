function getLocation() {
     if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(showPosition, showError);
     } else {
       document.getElementById("locationResult").innerHTML = "Geolocation is not supported by this browser.";
     }
   }

   function showPosition(position) {
     var latitude = position.coords.latitude;
     var longitude = position.coords.longitude;
     document.getElementById("locationResult").innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude;
   }

   function showError(error) {
     switch(error.code) {
       case error.PERMISSION_DENIED:
         document.getElementById("locationResult").innerHTML = "User denied the request for Geolocation.";
         break;
       case error.POSITION_UNAVAILABLE:
         document.getElementById("locationResult").innerHTML = "Location information is unavailable.";
         break;
       case error.TIMEOUT:
         document.getElementById("locationResult").innerHTML = "The request to get user location timed out.";
         break;
       case error.UNKNOWN_ERROR:
         document.getElementById("locationResult").innerHTML = "An unknown error occurred.";
         break;
     }
   }