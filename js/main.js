const places = [
          { placename: 'Woking - Home', lat: 51.3173, long: -0.5578},
          { placename: 'Whiritoa', lat: -37.28695, long: 175.9043},
          { placename: 'Woking - ex-SAB House', lat: 51.3185, long: -0.5622},
          { placename: 'Auckland NZ', lat: -36.85817, long: 174.6121} ]

let Stadia_AlidadeSmoothDark = L.tileLayer(
  'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
  { maxZoom: 20, 
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'});


window.onload = function() {
  let map = L.map("mapDiv", {
    center: [places[0].lat,places[0].long],
    zoom: 15,
  })

  map.addLayer(Stadia_AlidadeSmoothDark);

  places.forEach(p => L.marker([p.lat,p.long]).bindPopup(p.placename).addTo(map))
};