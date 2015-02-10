var map;
var markers = [];

//----------------------------------
function loadmap() {

    var defaultLatLng = new google.maps.LatLng(25.872366, 45.378174);
    drawMap(defaultLatLng);
//    if (navigator.geolocation) {
//        function success(pos) {
//            // Location found, show map with these coordinates

//            drawMap(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
//        }
//        function fail(error) {
//            drawMap(defaultLatLng);  // Failed to find location, show default map
//        }
//        // Find the users current position.  Cache the location for 5 minutes, timeout after 6 seconds
//        navigator.geolocation.getCurrentPosition(success, fail, { maximumAge: 300000, enableHighAccuracy: true, timeout: 6000 });
//    }
//    else {

//        drawMap(defaultLatLng);  // No geolocation support, show default map
//    }
}

//==================
function drawMap(latlng) {
 
    var myOptions =
        {
            zoom: 6,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        map = new google.maps.Map(document.getElementById("showmap"), myOptions);

        deleteMarkers();
        var lan = new google.maps.LatLng(26.448768, 50.118165); // dammam woman
        var name = "المعهد السعودي للسيدات- الدمام";
        var phone = "0501772517";
        addMarker(lan, name, phone, 'الدمام', '2.png');

        lan = new google.maps.LatLng(21.522430, 39.156571); // dammam woman
        name = "المعهد السعودي للسيدات- الحمراء";
        phone = "0503751064";
        addMarker(lan, name, phone, 'الحمراء', '2.png');


        lan = new google.maps.LatLng(24.778870, 46.748350); // dammam woman
        name = "المعهد السعودي للسيدات- الرياض";
        phone = "0560268749";
        addMarker(lan, name, phone, 'الرياض', '2.png');

        lan = new google.maps.LatLng(21.522064, 39.157359); // dammam woman
        name = "معهد جدة الدولي للتدريب- الحمرا";
        phone = "0530038814";
        addMarker2(lan, name, 'حسين', phone, 'عبد السلام', '0530376714', 'الحمراء', '1.png');

        lan = new google.maps.LatLng(21.561756, 39.201732); // dammam woman
        name = "معهد جدة الدولي للتدريب- التحلية";
        
        phone = "0556366613";
        addMarker2(lan, name, 'عادل الشبراوي', phone, 'حسن سرور', '0534292940', 'التحلية', '1.png');


        lan = new google.maps.LatLng(24.485402, 39.575434); // dammam woman
        name = "معهد جدة الدولي للتدريب- المدينة المنورة";

        phone = "0556399903";
        addMarker2(lan, name, 'انس الزغبي ', phone, 'نور عبدالسلام ', '0551527767', 'المدينة المنورة', '1.png');
        showMarkers();

    }

    // Add a marker to the map and push to the array.
    function addMarker(location,name,jawal,pno,shap) {
        var pos =  new google.maps.LatLng(21.511862, 39.190702);
        var contentString = '<div id="content" >' +
         '<h3 style="color:#000"><a href="tel:'+jawal+'">'+name+'</a>   </h3>' +
         '</div>';

        var marker = new MarkerWithLabel({
            position: location,
            draggable: false,
            raiseOnDrag: false,
            map: map,
            icon:shap,
            labelContent:pno,
            labelAnchor: new google.maps.Point(22, 0),
            labelClass: "labels" // the CSS class for the label
        });
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });
        markers.push(marker);
    }


    //====================

    // Add a marker to the map and push to the array.
    function addMarker2(location,title, name1, jawal1,name2,jawal2, pno,shape) {
        
        var contentString = '<div id="content" >' +
         '<h2 style="color:#000">' + title + '   </h2>' +
         '<h3 style="color:#000"><a href="tel:' + jawal1 + '">' + name1 + '</a>   </h3>' +
         '<h3 style="color:#000"><a href="tel:' + jawal2 + '">' + name2 + '</a>   </h3>' +
         '</div>';

        var marker = new MarkerWithLabel({
            position: location,
            draggable: false,
            raiseOnDrag: false,
            map: map,
            icon: shape,
            labelContent: pno,
            labelAnchor: new google.maps.Point(22, 0),
            labelClass: "labels" // the CSS class for the label
        });
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });
        markers.push(marker);
    }

    // Sets the map on all markers in the array.
    function setAllMap(map) {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
        }
    }

    // Removes the markers from the map, but keeps them in the array.
    function clearMarkers() {
        setAllMap(null);
    }

    // Shows any markers currently in the array.
    function showMarkers() {
        setAllMap(map);
    }

    // Deletes all markers in the array by removing references to them.
    function deleteMarkers() {
        clearMarkers();
        markers = [];
    }


    //=================
    function record() {

        window.location = "userregister.html";

    }