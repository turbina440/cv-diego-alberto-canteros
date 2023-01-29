

function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(-34.68818 , -58.56000),
    zoom: 15
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}
