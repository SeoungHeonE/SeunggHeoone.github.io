var map;

function initMap() {
    var seoul = { lat: 37.5642135, lng: 127.0016985 };
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: seoul
    });

    const malls = [
        { label: "A", name: "잠실종합운동장", lat: 37.51477, lng: 127.072749 },
        { label: "B", name: "송도달빛축제공원", lat: 37.4062167, lng: 126.6336354},
        { label: "C", name: "한화리조트 설악 쏘라노", lat: 38.2103634, lng: 128.5284815 },
        { label: "D", name: "한밭종합운동장", lat: 36.3162748, lng: 127.4320387 },
        { label: "E", name: "대구스타디움", lat: 35.8293777, lng: 128.6901172 },
        { label: "F", name: "광주여자대학교", lat: 35.163387, lng: 126.7986135},
        { label: "G", name: "부산 아시아드 보조경기장", lat: 35.1893022, lng: 129.0558741 },
        { label: "H", name: "제주종합경기장", lat: 33.4968667, lng: 126.5135942 },
    ];


    const bounds = new google.maps.LatLngBounds();
    const infowindow = new google.maps.InfoWindow();

    malls.forEach(({ label, name, lat, lng }) => {
        const marker = new google.maps.Marker({
            position: { lat, lng },
            label,
            map,
        });
        bounds.extend(marker.position);

        marker.addListener("click", () => {
            map.setZoom(15);
            
            map.panTo(marker.position);
            infowindow.setContent(name);
            infowindow.open({
                anchor: marker,
                map,
            });
        });
    });
    map.fitBounds(bounds);
};