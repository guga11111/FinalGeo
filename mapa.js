var info2 = "<h1>Deli Pollo</h1>"

        function iniciaMapa() {
            var propiedades = {
                center: {
                    lat: 16.8638,
                    lng: -99.8816
                },
                zoom: 9
            };
            const mapa = document.getElementById("map")
            const map = new google.maps.Map(mapa, propiedades)
              
                let propiedadesMarcador2 = {
                    position: {
                        lat: 18.9649084,
                        lng: -99.2278018
                    },
                    map,
                    title: "Marcardor 2"
                }
                const marcador2 = new google.maps.Marker(propiedadesMarcador2);

                map.setCenter(propiedadesMarcador2.position)
                const infowindow2 = new google.maps.InfoWindow({
                    content: info2
                })
                marcador2.addListener("click", () => {
                    infowindow2.open(map, marcador2);
                })
        }