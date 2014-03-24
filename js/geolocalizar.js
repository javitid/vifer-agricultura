var map, lat, lng, latIni, lngIni;

$(function(){

  function enlazarMarcador(e){

   // muestra ruta entre marcas anteriores y actuales
    map.drawRoute({
      origin: [lat, lng],  // origen en coordenadas anteriores
      // destino en coordenadas del click o toque actual
      destination: [e.latLng.lat(), e.latLng.lng()],
      travelMode: 'driving',
      strokeColor: '#000000',
      strokeOpacity: 0.6,
      strokeWeight: 5
    });

    lat = e.latLng.lat();   // guarda coords para marca siguiente
    lng = e.latLng.lng();

    map.addMarker({ lat: lat, lng: lng});  // pone marcador en mapa
  };

  function geolocalizar(){
    GMaps.geolocate({
      success: function(position){
        latIni = position.coords.latitude;  // guarda coords en lat y lng
        lngIni = position.coords.longitude;
        lat = latIni;
        lng = lngIni;

        map = new GMaps({  // muestra mapa centrado en coords [lat, lng]
          el: '#map',
          lat: latIni,
          lng: lngIni,
          click: enlazarMarcador,
          tap: enlazarMarcador
        });
        map.addMarker({ lat: latIni, lng: lngIni});  // marcador en [lat, lng]
      },
      error: function(error) { alert('Geolocalización falla: '+error.message); },
      not_supported: function(){ alert("Su navegador no soporta geolocalización"); },
    });
  };

 function compactar(){
   // borra todas las rutas y todos los marcadores
   map.removePolylines();
   map.removeMarkers();

   // muestra ruta entre la posicion inicial y la última vez que se tocó el mapa
    map.drawRoute({
      origin: [latIni, lngIni],
      destination: [lat, lng],
      travelMode: 'driving',
      strokeColor: '#000000',
      strokeOpacity: 0.6,
      strokeWeight: 5
    });

    map.addMarker({ lat: latIni, lng: lngIni});
    map.addMarker({ lat: lat, lng: lng});
 };

  $("#compactar").on('click', compactar);
  geolocalizar();
});