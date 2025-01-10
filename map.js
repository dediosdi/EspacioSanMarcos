// Inicializar el mapa centrado en las coordenadas proporcionadas
var map = L.map('map').setView([-35.44360474843392, -60.88616172348991], 18); // Coordenadas que me proporcionaste

// Usar una capa gris clara de CartoDB Positron
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CartoDB</a>',
  maxZoom: 19
}).addTo(map);

// Crear un marcador inicial en las coordenadas proporcionadas
var marcador = L.marker([-35.44360474843392, -60.88616172348991]).addTo(map)
  .bindPopup("Espacio San Marcos")
  .openPopup();

// Añadir un evento para cambiar la ubicación del marcador al hacer clic en el mapa
map.on('click', function(e) {
  // Obtener las coordenadas del lugar donde el usuario hizo clic
  var coords = e.latlng;

  // Actualizar la posición del marcador
  marcador.setLatLng(coords);

  // Actualizar el contenido del popup con las nuevas coordenadas
  marcador.setPopupContent("Ubicación seleccionada: " + coords.lat.toFixed(4) + ", " + coords.lng.toFixed(4));
});

