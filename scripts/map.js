
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
