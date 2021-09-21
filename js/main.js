const places = [
          { place: 'Woking - Home', lat: 51.3173, long: -0.5578, w3w: 'solved.nests.crown'},
          { place: 'Whiritoa', lat: -37.28695, long: 175.9043, w3w: 'dives.perishes.beacon'},
          { place: 'Woking - ex-SAB House', lat: 51.3185, long: -0.5622, w3w: 'deals.tests.motor'},
          { place: 'Auckland NZ', lat: -36.85817, long: 174.6121, w3w: 'puts.behind.outraged'}, 
          { place: 'Brookwood - Work', lat: 51.3016, long: -0.6298, w3w: 'pile.meals.stocks'} ]

let Stadia_AlidadeSmoothDark = L.tileLayer(
  'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
  { maxZoom: 20, 
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'});


window.onload = function() {
  let map = L.map("mapDiv", {
    // center: [places[0].lat,places[0].long],
    center: [places[places.length-1].lat,places[places.length-1].long],
    zoom: 15,
  })

  map.addLayer(Stadia_AlidadeSmoothDark);

  places.forEach(p => L.marker([p.lat,p.long])
                       .bindPopup(`<b>${p.place}</b>  ///${p.w3w}`)
                       .addTo(map))
};