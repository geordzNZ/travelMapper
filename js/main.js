let currLatLong = [51.3173, -0.5578]


let Stadia_AlidadeSmoothDark = L.tileLayer(
  'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
  { maxZoom: 20, 
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'});


window.onload = function() {
  var map = L.map("mapDiv", {
    center: currLatLong,
    zoom: 10,
  })

  map.addLayer(Stadia_AlidadeSmoothDark);
};