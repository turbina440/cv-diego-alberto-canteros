/*function myMap() {
  var coord = {lat:-34.68818 ,lng: -58.56000};
var map = new google.maps.Map(document.getElementById("map"),{   
zoom:17, 
 mapTypeId: google.maps.MapTypeId.ROADMAP,
center:coord
 });
var marker=new google.maps.Marker({
 position:coord,
 map: map
 });

}*/


function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(-34.68818 , -58.56000),
    zoom: 15
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}