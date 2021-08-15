console.log("hi")

// //////////////////////////////////////////////
// Base Maps
// //////////////////////////////////////////////

var OpenStreetMap_Mapnik = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }
);

var OpenStreetMap_BlackAndWhite = L.tileLayer(
  "http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png",
  {
    maxZoom: 18,
    attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }
);

  var OpenStreetMap_HOT = L.tileLayer(
    "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
    {
      maxZoom: 19,
      attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
    }
  );

  var OpenTopoMap = L.tileLayer(
    "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    {
      maxZoom: 17,
      attribution:
      'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    }
  );

  var Esri_WorldImagery = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      attribution:
      "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
      maxZoom: 17
    }
  );



// //////////////////////////////////////////////
// Overlay Maps
// //////////////////////////////////////////////
 var OpenInfraMap_Power = L.tileLayer(
    "https://tiles-{s}.openinframap.org/power/{z}/{x}/{y}.png",
    {
      maxZoom: 18,
      attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://www.openinframap.org/about.html">About OpenInfraMap</a>'
    }
  );

  var OpenInfraMap_Telecom = L.tileLayer(
    "https://tiles-{s}.openinframap.org/telecoms/{z}/{x}/{y}.png",
    {
      maxZoom: 18,
      attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://www.openinframap.org/about.html">About OpenInfraMap</a>'
    }
  );

  var OpenInfraMap_Petroleum = L.tileLayer(
    "https://tiles-{s}.openinframap.org/petroleum/{z}/{x}/{y}.png",
    {
      maxZoom: 18,
      attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://www.openinframap.org/about.html">About OpenInfraMap</a>'
    }
  );

  var OpenInfraMap_Water = L.tileLayer(
    "https://tiles-{s}.openinframap.org/water/{z}/{x}/{y}.png",
    {
      maxZoom: 18,
      attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://www.openinframap.org/about.html">About OpenInfraMap</a>'
    }
  );

  var OpenSeaMap = L.tileLayer(
    "https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png",
    {
      attribution:
      'Map data: &copy; <a href="http://www.openseamap.org">OpenSeaMap</a> contributors'
    }
  );

  var OpenPtMap = L.tileLayer("http://openptmap.org/tiles/{z}/{x}/{y}.png", {
    maxZoom: 17,
    attribution:
    'Map data: &copy; <a href="http://www.openptmap.org">OpenPtMap</a> contributors'
  });

  var OpenRailwayMap = L.tileLayer(
    "https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png",
    {
      maxZoom: 19,
      attribution:
      'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> | Map style: &copy; <a href="https://www.OpenRailwayMap.org">OpenRailwayMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    }
  );

  var OpenFireMap = L.tileLayer(
    "http://openfiremap.org/hytiles/{z}/{x}/{y}.png",
    {
      maxZoom: 19,
      attribution:
      'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> | Map style: &copy; <a href="http://www.openfiremap.org">OpenFireMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    }
  );

  var SafeCast = L.tileLayer(
    "https://s3.amazonaws.com/te512.safecast.org/{z}/{x}/{y}.png",
    {
      maxZoom: 16,
      attribution:
      'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> | Map style: &copy; <a href="https://blog.safecast.org/about/">SafeCast</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    }
  );

  var Hydda_RoadsAndLabels = L.tileLayer(
    "https://{s}.tile.openstreetmap.se/hydda/roads_and_labels/{z}/{x}/{y}.png",
    {
      maxZoom: 18,
      attribution:
      'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }
  );
  var Stamen_TonerHybrid = L.tileLayer(
    "https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.{ext}",
    {
      attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: "abcd",
      minZoom: 0,
      maxZoom: 20,
      ext: "png"
    }
  );
  var Stamen_TonerLines = L.tileLayer(
    "https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lines/{z}/{x}/{y}{r}.{ext}",
    {
      attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: "abcd",
      minZoom: 0,
      maxZoom: 20,
      ext: "png"
    }
  );
  var Stamen_TonerLabels = L.tileLayer(
    "https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.{ext}",
    {
      attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: "abcd",
      minZoom: 0,
      maxZoom: 20,
      ext: "png"
    }
  );

  var Stamen_TopOSMFeatures = L.tileLayer(
    "https://stamen-tiles-{s}.a.ssl.fastly.net/toposm-features/{z}/{x}/{y}{r}.{ext}",
    {
      attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: "abcd",
      minZoom: 0,
      maxZoom: 20,
      ext: "png",
      bounds: [[22, -132], [51, -56]],
      opacity: 0.9
    }
  );

  var OpenWeatherMap_Clouds = L.tileLayer(
    "http://{s}.tile.openweathermap.org/map/clouds/{z}/{x}/{y}.png?appid={apiKey}",
    {
      maxZoom: 19,
      attribution:
      'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
      apiKey: "<insert your api key here>",
      opacity: 0.5
    }
  );

  var OpenWeatherMap_Pressure = L.tileLayer(
    "http://{s}.tile.openweathermap.org/map/pressure/{z}/{x}/{y}.png?appid={apiKey}",
    {
      maxZoom: 19,
      attribution:
      'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
      apiKey: "<insert your api key here>",
      opacity: 0.5
    }
  );

  var OpenWeatherMap_Wind = L.tileLayer(
    "http://{s}.tile.openweathermap.org/map/wind/{z}/{x}/{y}.png?appid={apiKey}",
    {
      maxZoom: 19,
      attribution:
      'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
      apiKey: "<insert your api key here>",
      opacity: 0.5
    }
  );



// //////////////////////////////////////////////
// Leaflet Setup
// //////////////////////////////////////////////
window.onload = function() {
  var map = L.map("map", {
    center: [-27.743040084838867, 23.01875114440918],
    zoom: 13,
    // Values are x and y here instead of lat and long elsewhere.
    maxBounds: [[-120, -220], [120, 220]],
    layers: [OpenStreetMap_Mapnik, 
             OpenStreetMap_BlackAndWhite,
             OpenStreetMap_HOT,
             OpenTopoMap,
             Esri_WorldImagery,
             OpenInfraMap_Power,
             OpenInfraMap_Telecom,
             OpenInfraMap_Petroleum,
             OpenInfraMap_Water,
             OpenSeaMap,
             OpenRailwayMap
       
            ]
  });

  var baseMaps = {
    "OSM Mapnick": OpenStreetMap_Mapnik,
    "OSM Black & White": OpenStreetMap_BlackAndWhite,
    "OpenStreetMap_HOT": OpenStreetMap_HOT,
    "OpenTopoMap": OpenTopoMap,
    "Esri_WorldImagery": Esri_WorldImagery
  };

  var overlayMaps = {
    Power: OpenInfraMap_Power,
    Telecom: OpenInfraMap_Telecom,
    Petroleum: OpenInfraMap_Petroleum,
    Water: OpenInfraMap_Water,
    Sea: OpenSeaMap,
    Railway: OpenRailwayMap
  };

  L.control.layers(baseMaps, overlayMaps).addTo(map);

 

  map.addLayer(OpenStreetMap_Mapnik);
};

/*
* Workaround for 1px lines appearing in some browsers due to fractional transforms
* and resulting anti-aliasing.
* https://github.com/Leaflet/Leaflet/issues/3575
*/
(function() {
  var originalInitTile = L.GridLayer.prototype._initTile;
  L.GridLayer.include({
    _initTile: function(tile) {
      originalInitTile.call(this, tile);

      var tileSize = this.getTileSize();

      tile.style.width = tileSize.x + 1 + "px";
      tile.style.height = tileSize.y + 1 + "px";
    }
  });
})();

