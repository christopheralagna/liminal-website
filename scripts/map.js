/*
function initMap() {
  const headSpace = { lat: 35.19391220610381, lng: -111.64980189203136 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: headSpace,
    mapId: '1b35a3a4366c83c8'
  });
  const marker = new google.maps.Marker({
    position: headSpace,
    map: map,
  });
}
*/

// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCfUgvPpZmCSQ5zrv3ZtmcAuIZts07mxBY&map_ids=1b35a3a4366c83c8&callback=initMap&libraries=&v=weekly';
script.defer = true;

// Attach your callback function to the `window` object
window.initMap = function() {
  const headSpace = { lat: 35.19391220610381, lng: -111.64980189203136 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: headSpace,
    mapId: '1b35a3a4366c83c8',
    mapTypeControl: false,
    streetViewControl: false,
  });
  const marker = new google.maps.Marker({
    position: headSpace,
    map: map,
  });
};

// Append the 'script' element to 'head'
document.head.appendChild(script);
