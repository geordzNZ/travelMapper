const places = [
          { place: 'Woking - Home', lat: 51.3173, long: -0.5578, w3w: 'solved.nests.crown', icon: 'pin-yellow'},
          { place: 'Whiritoa', lat: -37.28695, long: 175.9043, w3w: 'dives.perishes.beacon', icon: 'pin-yellow'},
          { place: 'Woking - ex-SAB House', lat: 51.3185, long: -0.5622, w3w: 'deals.tests.motor', icon: 'pin-red1'},
          { place: 'Auckland NZ', lat: -36.85817, long: 174.6125, w3w: 'puts.behind.outraged', icon: 'pin-yellow'}, 
          { place: 'Brookwood - Work', lat: 51.3016, long: -0.6298, w3w: 'pile.meals.stocks', icon: 'pin-yellow'},
          { place: 'Woking - Rando 1', lat: 51.3160, long: -0.5522, w3w: 'TBC', icon: 'pin-red2'},
          { place: 'Woking - Rando 2', lat: 51.3170, long: -0.5522, w3w: 'TBC', icon: 'pin-red3'},
          { place: 'Woking - Rando 3', lat: 51.3180, long: -0.5522, w3w: 'TBC', icon: 'pin-black'},
          { place: 'Woking - Rando 4', lat: 51.3190, long: -0.5522, w3w: 'TBC', icon: ''}]

let Stadia_AlidadeSmoothDark = L.tileLayer(
  'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
  { maxZoom: 20, 
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'});


window.onload = function() {
  let map = L.map("mapDiv", {
    center: [places[0].lat,places[0].long],
    //center: [51.3173, -0.5578],
    //center: [places[places.length-1].lat,places[places.length-1].long],
    zoom: 15,
  })

  map.addLayer(Stadia_AlidadeSmoothDark);

  places.forEach(p => {
    let myIcon
    if (p.icon!=''){ myIcon = L.icon({ iconUrl: `./images/${p.icon}.png`, iconSize: [25, 25] }) }
    else { myIcon = L.icon({ iconUrl: `./images/pin-default.png`, iconSize: [25, 25] }) }
    
    return L.marker([p.lat,p.long],{opacity:1, title: `${p.place}  ///${p.w3w}`, icon: myIcon})
            .bindPopup(`<b>${p.place}</b>  ///${p.w3w}`)
            .addTo(map)})

places.forEach(p => {
  let placeDiv = document.createElement("div")
  let placeLeftColDiv = document.createElement("div")
  let placeRightColDiv = document.createElement("div")
  let placeHeaderDiv = document.createElement("div")
  let placeLatLongDiv = document.createElement("div")
  let placeW3WDiv = document.createElement("div")
  let placeIconDiv = document.createElement("div")
  let placeIconImg = document.createElement("img")

  placeHeaderDiv.innerText = `${p.place}`
  placeLatLongDiv.innerText = `Lat: ${p.lat} / Long: ${p.long}`
  placeW3WDiv.innerText = `w3w: ${p.w3w}`
  //placeIconDiv.innerText = `${p.icon}`

  if (p.icon!=''){ placeIconImg.src = `./images/${p.icon}.png` }
    else { placeIconImg.src = `./images/pin-default.png` }
  placeIconImg.width = 25
  placeIconImg.height = 25

  placeLeftColDiv.appendChild(placeHeaderDiv)
  placeLeftColDiv.appendChild(placeLatLongDiv)
  placeLeftColDiv.appendChild(placeW3WDiv)
  
  placeIconDiv.appendChild(placeIconImg)

  placeRightColDiv.appendChild(placeIconDiv)

  placeDiv.classList.add("placeDiv")
  placeHeaderDiv.classList.add("placeHeaderDiv")
  placeLatLongDiv.classList.add("placeLatLongDiv")
  placeW3WDiv.classList.add("placeW3WDiv")
  placeIconDiv.classList.add("placeIconDiv")
  placeRightColDiv.classList.add("placeRightColDiv")

  placeDiv.appendChild(placeLeftColDiv)
  placeDiv.appendChild(placeRightColDiv)

  document.getElementById("leftNav").appendChild(placeDiv)
})
};

//{ place: 'Woking - Home', lat: 51.3173, long: -0.5578, w3w: 'solved.nests.crown', icon: 'pin-yellow'},
