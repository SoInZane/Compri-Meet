var addressOne = "";
var addressTwo = "";

//  Find midpoint between two coordinates points

// Define radius function
if (typeof (Number.prototype.toRad) === "undefined") {
    Number.prototype.toRad = function () {
        return this * Math.PI / 180;
    }
}

// Define degrees function
if (typeof (Number.prototype.toDeg) === "undefined") {
    Number.prototype.toDeg = function () {
        return this * (180 / Math.PI);
    }
}

// Define middle point function
function middlePoint(lat1, lng1, lat2, lng2) {
	
    // Longitude difference
    var dLng = (lng2 - lng1).toRad();

    // Convert to radians
    lat1 = lat1.toRad();
    lat2 = lat2.toRad();
    lng1 = lng1.toRad();

    var bX = Math.cos(lat2) * Math.cos(dLng);
    var bY = Math.cos(lat2) * Math.sin(dLng);
    var lat3 = Math.atan2(Math.sin(lat1) + Math.sin(lat2), Math.sqrt((Math.cos(lat1) + bX) * (Math.cos(lat1) + bX) + bY * bY));
    var lng3 = lng1 + Math.atan2(bY, Math.cos(lat1) + bX);

    // Return result
    return [lng3.toDeg(), lat3.toDeg()];
}

//var midPoint = middlePoint(35.1495, 90.0490, 36.1627, 86.7816);
//document.getElementById("longitude").innerHTML = "Longitude : "+midPoint[0];
//document.getElementById("latitude").innerHTML = "Latitude : "+midPoint[1];
//console.log(middlePoint(35.1495, 90.0490, 36.1627, 86.7816));

function getLatLong(address) {
    //code or Places API call
    var API_key = "AIzaSyBMdV8r0zSS5mDV7jyOBh1pjBlLSLqrhfA"
    address = "114%20Northcrest%20Commons%20Cir%20Nashville%20TN";
    var location = "36.16785,-86.77816";
    //ajax call
    var queryURL = "https://geocoder.api.here.com/6.2/geocode.json?searchtext=114%20Northcrest%20Commons%20Cir%20Nashville%20TN&app_id=y6vNNavqmOIg2Qln308m&app_code=3cpZDQ3h70lnf5pf7tlncg&gen=8";
    //"https://places.api.here.com/places/v1/discover/search?app_id=y6vNNavqmOIg2Qln308m&app_code=3cpZDQ3h70lnf5pf7tlncg&at=36.16785,-86.77816&q=114%20Northcrest%20Commons%20Cir%20Nashville%20TN"
    //var queryURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" + address + "&inputtype=textquery&fields=place_id,formatted_address,geometry&key=" + API_key;
    
    $.ajax({
        url: queryURL,
        //crossDomain: true,
        //dataType: "json",
        // headers: {
        //     "host": "local",
        //     "api-key": API_key,
        //     "content-type": "application/Compri-meet"
        // },
        method: "GET"
      }).then(function (response) {
        var results = response.data;
        console.log(JSON.stringify(response));
        console.log("Lat is: " + JSON.stringify(response.Response.View[0].Result[0].Location.NavigationPosition[0].Latitude));
        //from google places api: results.candidates.geometry.location.lat
      });
}

getLatLong("");