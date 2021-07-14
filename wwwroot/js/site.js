// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

    
    function initMap() {

        fetch("https://ipinfo.io/json?token=5b1c9ba962808b").then(
            (response) => response.json()
        ).then(
            (jsonResponse) => {
                let coor = jsonResponse.loc.split(',');
                console.log(coor[0], coor[1]);
                var options = {
                    zoom: 13,
                    center: { lat: 13.69, lng: -89.19 }
                }
                var map = new google.maps.Map(document.getElementById("map"), options);


                var marker = new google.maps.Marker({
                    position: { lat: parseFloat(coor[0]), lng: parseFloat(coor[1]) },
                    map: map
                });

                var infoWindow = new google.maps.InfoWindow({
                    content: "<h1>Hi " + jsonResponse.ip + "</h1>" 
                });

                marker.addListener("click", function () {
                    infoWindow.open(map, marker);
                });
                
            }
        )

        
    }


<script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCAAYElExXcXft2Wp6h5dj3DZ55qQkszbk&callback=initMap">
</script>