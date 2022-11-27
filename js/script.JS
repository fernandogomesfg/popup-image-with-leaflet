//mapa inicializado
var map = L.map('map').setView([-25.953724, 32.588711], 16);

//camada osm
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})
osm.addTo(map);

//marcador
L.marker([-25.953724, 32.588711])
    .addTo(map)
    .bindPopup('<img src="../img/geo.jpg" style="width: 250px;">')