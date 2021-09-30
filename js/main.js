const places = [
  { placeId: 1, placeName: 'Woking', placeSubName: 'The Exchange', country: 'UK', lat: 51.3173, long: -0.5578, w3w: 'solved.nests.crown', icon: 'pin-yellow', tag: 'Home', default: true},
  { placeId: 2, placeName: 'Whiritoa', placeSubName: '', country: 'NZ', lat: -37.28695, long: 175.9043, w3w: 'dives.perishes.beacon', icon: 'pin-yellow', tag: '', default: false},
  { placeId: 3, placeName: 'Woking', placeSubName: 'ex-SAB House', country: 'UK', lat: 51.3185, long: -0.5622, w3w: 'deals.tests.motor', icon: 'pin-red1', tag: '', default: false},
  { placeId: 4, placeName: 'West Auckland', placeSubName: '', country: 'NZ', lat: -36.85817, long: 174.6125, w3w: 'puts.behind.outraged', icon: 'pin-yellow', tag: '', default: false}, 
  { placeId: 5, placeName: 'Brookwood', placeSubName: 'Hicom', country: 'UK', lat: 51.3016, long: -0.6298, w3w: 'pile.meals.stocks', icon: 'pin-yellow', tag: 'Work', default: false},
  { placeId: 6, placeName: 'Woking', placeSubName: 'Rando 1', country: 'UK', lat: 51.3160, long: -0.5522, w3w: 'TBC', icon: 'pin-red2', tag: '', default: false},
  { placeId: 7, placeName: 'Woking', placeSubName: 'Rando 2', country: 'UK', lat: 51.3170, long: -0.5522, w3w: 'TBC', icon: 'pin-red3', tag: '', default: false},
  { placeId: 8, placeName: 'Woking', placeSubName: 'Rando 3', country: 'UK', lat: 51.3180, long: -0.5522, w3w: 'TBC', icon: 'pin-black', tag: '', default: false},
  { placeId: 9, placeName: 'Woking', placeSubName: 'Rando 4', country: 'UK', lat: 51.3190, long: -0.5522, w3w: 'TBC', icon: '', tag: '', default: false},
  { placeId: 10, placeName: 'Woking', placeSubName: 'The Exchange', country: 'UK', lat: 51.3173, long: -0.5578, w3w: 'solved.nests.crown', icon: 'pin-yellow', tag: 'Home', default: false},
  { placeId: 11, placeName: 'Whiritoa', placeSubName: '', country: 'NZ', lat: -37.28695, long: 175.9043, w3w: 'dives.perishes.beacon', icon: 'pin-yellow', tag: '', default: false},
  { placeId: 12, placeName: 'Woking - ex-SAB House', placeSubName: '', country: 'UK', lat: 51.3185, long: -0.5622, w3w: 'deals.tests.motor', icon: 'pin-red1', tag: '', default: false},
  { placeId: 13, placeName: 'Auckland', placeSubName: '', country: 'NZ', lat: -36.85817, long: 174.6125, w3w: 'puts.behind.outraged', icon: 'pin-yellow', tag: '', default: false}, 
  { placeId: 14, placeName: 'Brookwood', placeSubName: '', country: 'UK', lat: 51.3016, long: -0.6298, w3w: 'pile.meals.stocks', icon: 'pin-yellow', tag: 'Work', default: false},
  { placeId: 15, placeName: 'Woking', placeSubName: 'Rando 1', country: 'UK', lat: 51.3160, long: -0.5522, w3w: 'TBC', icon: 'pin-red2', tag: 'Rando 1', default: false},
  { placeId: 16, placeName: 'Woking', placeSubName: 'Rando 2', country: 'UK', lat: 51.3170, long: -0.5522, w3w: 'TBC', icon: 'pin-red3', tag: 'Rando 2', default: false},
  { placeId: 17, placeName: 'Woking', placeSubName: 'Rando 3', country: 'UK', lat: 51.3180, long: -0.5522, w3w: 'TBC', icon: 'pin-black', tag: 'Rando 3', default: false},
  { placeId: 18, placeName: 'Woking', placeSubName: 'Rando 4', country: 'UK', lat: 51.3190, long: -0.5522, w3w: 'TBC', icon: '', tag: 'Rando 4', default: false},
  { placeId: 19, placeName: 'Auckland', placeSubName: '', country: 'NZ', lat: -36.85817, long: 174.6125, w3w: 'puts.behind.outraged', icon: 'pin-yellow', tag: '', default: false}]

  let Stadia_AlidadeSmoothDark = L.tileLayer(
    'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
      { maxZoom: 20, 
        attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'});

        let defaultPlace = places.filter(p=> p.default===true)
        let startLat = 0
        let startLong = 0
    
        if (defaultPlace.length===1) {
          startLat = defaultPlace[0].lat
          startLong = defaultPlace[0].long
        } else {
          startLat = places[places.length-1].lat
          startLong = places[places.length-1].long
        }
        
        let map = L.map("mapDiv", {
          center: [startLat,startLong],
          //center: [51.3173, -0.5578],
          //center: [places[places.length-1].lat,places[places.length-1].long],
          zoom: 15,
        })


// window.onload = function() {
  //ADD MAP
    map.addLayer(Stadia_AlidadeSmoothDark);
  //ADD MAP MARKERS
    addMapMarkers()
  //CREATE DIVS FOR THE NAV BAR
    addNavBarItems()
// };

function addNavBarItems(){
  places.forEach(p => {
    let placeDiv = document.createElement("div")
    let placeLeftColDiv = document.createElement("div")
    let placeRightColDiv = document.createElement("div")
    let placeHeaderDiv = document.createElement("div")
    let placeSubNameDiv = document.createElement("div")
    let placeW3WDiv = document.createElement("div")
    let placeIconImg = document.createElement("img")

    placeHeaderDiv.innerText = `${p.placeName} (${p.country})`
    placeSubNameDiv.innerText = `${p.placeSubName || ''}`
    placeW3WDiv.innerText = `w3w: ${p.w3w}`

    if (p.icon!=''){ placeIconImg.src = `./images/${p.icon}.png` }
      else { placeIconImg.src = `./images/pin-default.png` }
    placeIconImg.width = 25
    placeIconImg.height = 25
    placeIconImg.title = `Icon for ${p.placeName}`

    placeLeftColDiv.appendChild(placeHeaderDiv)
    placeLeftColDiv.appendChild(placeSubNameDiv)
    placeLeftColDiv.appendChild(placeW3WDiv)
    
    placeRightColDiv.appendChild(placeIconImg)

    placeDiv.classList.add("placeDiv")
    // if (p.tag==='Home') { placeDiv.classList.add("placeHome") }
    // if (p.tag==='Work') { placeDiv.classList.add("placeWork") }
    if (p.tag==='Home') {
      placeHeaderDiv.classList.add("placeHome")
      placeSubNameDiv.classList.add("placeHome")
      placeW3WDiv.classList.add("placeHome")
    }
    if (p.tag==='Work') {
      placeHeaderDiv.classList.add("placeHome")
      placeSubNameDiv.classList.add("placeHome")
      placeW3WDiv.classList.add("placeHome")
    }
    placeHeaderDiv.classList.add("placeHeaderDiv")
    placeSubNameDiv.classList.add("placeSubNameDiv")
    placeW3WDiv.classList.add("placeW3WDiv")
    placeRightColDiv.classList.add("placeRightColDiv")


    placeHeaderDiv.setAttribute('data-id', p.placeId)
    placeIconImg.setAttribute('data-id', p.placeId)

    placeHeaderDiv.addEventListener('click',clickedPlace)
    placeIconImg.addEventListener('click',clickedPlace)

    placeDiv.appendChild(placeLeftColDiv)
    placeDiv.appendChild(placeRightColDiv)

    document.getElementById("leftNav").appendChild(placeDiv)
  })
}

function addMapMarkers() {
  places.forEach(p => {
    let myIcon
    if (p.icon!=''){ myIcon = L.icon({ iconUrl: `./images/${p.icon}.png`, iconSize: [25, 25] }) }
    else { myIcon = L.icon({ iconUrl: `./images/pin-default.png`, iconSize: [25, 25] }) }
    
    return L.marker([p.lat,p.long],{opacity:1, title: `${p.placeName} (${p.country})  ///${p.w3w}`, icon: myIcon})
            .bindPopup(`<b>${p.place}</b>  ///${p.w3w}`)
            .addTo(map)})
}

function clickedPlace(e) {
  let selectedPlaceID = e.target.getAttribute('data-id')
  map.panTo([places[selectedPlaceID-1].lat, places[selectedPlaceID-1].long])
}