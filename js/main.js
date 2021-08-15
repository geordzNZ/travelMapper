const currLatLong = [51.3173, -0.5578]
const NZLatLong = [-37.28695, 175.9043]

let Stadia_AlidadeSmoothDark = L.tileLayer(
  'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
  { maxZoom: 20, 
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'});


window.onload = function() {
  let map = L.map("mapDiv", {
    center: currLatLong,
    zoom: 15,
  })

  map.addLayer(Stadia_AlidadeSmoothDark);
  L.marker(currLatLong).addTo(map);
  L.marker(NZLatLong).addTo(map);
};