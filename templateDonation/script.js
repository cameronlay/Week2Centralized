var marker;
var marker1;
var marker2;
var bounceTimer;
var count = 2;

function myMap() {
    
    //maps
    var myCenter = new google.maps.LatLng(49.209631, -122.928385);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: myCenter,
        zoom: 10,
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
            
    //surrey
    var myCenter1 = new google.maps.LatLng(49.1977, -122.8487);
    marker = new google.maps.Marker({
        position:myCenter1,
        optimized:false
    });
    
    //covenant house
    var myCenter2 = new google.maps.LatLng(49.2754,-123.1265);
    marker1 = new google.maps.Marker({
        position:myCenter2,
        optimized:false
    });
    
    // langley
    var myCenter3 = new google.maps.LatLng(49.1074, -122.6596);
    marker2 = new google.maps.Marker({
        position:myCenter3,
        optimized:false
    });
    
    // quest food exchange
    var myCenter4 = new google.maps.LatLng(49.2207, -122.9303);
    marker3 = new google.maps.Marker({
        position:myCenter4,
        optimized:false
    });
    
    // outreach society
    var myCenter5 = new google.maps.LatLng(49.281123, -123.096309);
    marker4 = new google.maps.Marker({
        position:myCenter5,
        optimized:false
    });
    
    // richmond food bank
    var myCenter6 = new google.maps.LatLng(49.172892, -123.141725);
    marker5 = new google.maps.Marker({
        position:myCenter6,
        optimized:false
    });
    
    google.maps.event.addListener(marker, 'mouseover', function() {
        if (this.getAnimation() == null || typeof this.getAnimation() === 'undefined') {
            
            clearTimeout(bounceTimer);
            var this_marker = this;
             
            bounceTimer = setTimeout(function(){
                 this_marker.setAnimation(google.maps.Animation.BOUNCE);
            },500);
           
        }
    });
    
    google.maps.event.addListener(marker,'dblclick',function() {
        map.setZoom(map.getZoom() + count);
        map.setCenter(marker.getPosition());
    });
    
    
    google.maps.event.addListener(marker, 'mouseout', function() {
        
        if (this.getAnimation() != null) {
           this.setAnimation(null);
        }
        clearTimeout(bounceTimer);
        
        
    });
    google.maps.event.addListener(marker1, 'mouseover', function() {
        if (this.getAnimation() == null || typeof this.getAnimation() === 'undefined') {
            
            clearTimeout(bounceTimer);
            var this_marker = this;
             
            bounceTimer = setTimeout(function(){
                 this_marker.setAnimation(google.maps.Animation.BOUNCE);
            },500);
        }
    });
    
        google.maps.event.addListener(marker1,'dblclick',function() {
        map.setZoom(map.getZoom() + count);
        map.setCenter(marker1.getPosition());
    });
    
    google.maps.event.addListener(marker1, 'mouseout', function() {
        
        if (this.getAnimation() != null) {
           this.setAnimation(null);
        }
        clearTimeout(bounceTimer);
    }); 
    
    google.maps.event.addListener(marker2, 'mouseover', function() {
        if (this.getAnimation() == null || typeof this.getAnimation() === 'undefined') {
            
            clearTimeout(bounceTimer);
            var this_marker = this;
             
            bounceTimer = setTimeout(function(){
                 this_marker.setAnimation(google.maps.Animation.BOUNCE);
            },500);
        }
    });
    
        google.maps.event.addListener(marker2,'dblclick',function() {
        map.setZoom(map.getZoom() + count);
        map.setCenter(marker2.getPosition());
    });
    
    google.maps.event.addListener(marker2, 'mouseout', function() {
        
        if (this.getAnimation() != null) {
           this.setAnimation(null);
        }
        clearTimeout(bounceTimer);
        
    });
    
        google.maps.event.addListener(marker3, 'mouseover', function() {
        if (this.getAnimation() == null || typeof this.getAnimation() === 'undefined') {
            
            clearTimeout(bounceTimer);
            var this_marker = this;
             
            bounceTimer = setTimeout(function(){
                 this_marker.setAnimation(google.maps.Animation.BOUNCE);
            },500);
        }
    });
    
        google.maps.event.addListener(marker3,'dblclick',function() {
        map.setZoom(map.getZoom() + count);
        map.setCenter(marker3.getPosition());
    });
    
    google.maps.event.addListener(marker3, 'mouseout', function() {
        
        if (this.getAnimation() != null) {
           this.setAnimation(null);
        }
        clearTimeout(bounceTimer);
        
    });
    
        google.maps.event.addListener(marker4, 'mouseover', function() {
        if (this.getAnimation() == null || typeof this.getAnimation() === 'undefined') {
            
            clearTimeout(bounceTimer);
            var this_marker = this;
             
            bounceTimer = setTimeout(function(){
                 this_marker.setAnimation(google.maps.Animation.BOUNCE);
            },500);
        }
    });
    
        google.maps.event.addListener(marker4,'dblclick',function() {
        map.setZoom(map.getZoom() + count);
        map.setCenter(marker4.getPosition());
    });
    
    google.maps.event.addListener(marker4, 'mouseout', function() {
        
        if (this.getAnimation() != null) {
           this.setAnimation(null);
        }
        clearTimeout(bounceTimer);
        
    });

    
    google.maps.event.addListener(marker5, 'mouseover', function() {
        if (this.getAnimation() == null || typeof this.getAnimation() === 'undefined') {
            
            clearTimeout(bounceTimer);
            var this_marker = this;
             
            bounceTimer = setTimeout(function(){
                 this_marker.setAnimation(google.maps.Animation.BOUNCE);
            },500);
        }
    });
    
    google.maps.event.addListener(marker5,'dblclick',function() {
        map.setZoom(map.getZoom() + count);
        map.setCenter(marker5.getPosition());
    });
    
    google.maps.event.addListener(marker5, 'mouseout', function() {
        
        if (this.getAnimation() != null) {
           this.setAnimation(null);
        }
        clearTimeout(bounceTimer);
    });

    
    marker.setMap(map);
    marker1.setMap(map);
    marker2.setMap(map);
    marker3.setMap(map);
    marker4.setMap(map);
    marker5.setMap(map);
}







function bounceMarker(x) {
    if (x == 'm') {
            clearTimeout(bounceTimer);
             
            bounceTimer = setTimeout(function(){
                 marker.setAnimation(google.maps.Animation.BOUNCE);
            },500);
}
    else if(x == 'm1'){
            clearTimeout(bounceTimer);
             
            bounceTimer = setTimeout(function(){
                 marker1.setAnimation(google.maps.Animation.BOUNCE);
            },500);
    }         
  
    else if(x == 'm2') {
           clearTimeout(bounceTimer);
             
            bounceTimer = setTimeout(function(){
                 marker2.setAnimation(google.maps.Animation.BOUNCE);
            },500);
    }        
    else if(x == 'm3') {
           clearTimeout(bounceTimer);
             
            bounceTimer = setTimeout(function(){
                 marker3.setAnimation(google.maps.Animation.BOUNCE);
            },500);
    }
    else if(x == 'm4') {
            clearTimeout(bounceTimer);
     
            bounceTimer = setTimeout(function(){
                marker4.setAnimation(google.maps.Animation.BOUNCE);
            },500);
    }
    else if(x == 'm5') {
            clearTimeout(bounceTimer);
     
            bounceTimer = setTimeout(function(){
                marker5.setAnimation(google.maps.Animation.BOUNCE);
            },500);
       
    }
}


function stopBounce() {
    
    if (marker.getAnimation() != null) {
           marker.setAnimation(null);
    }
    
    if (marker1.getAnimation() != null) {
           marker1.setAnimation(null);
    }
    if (marker2.getAnimation() != null) {
           marker2.setAnimation(null);
    }
    if (marker3.getAnimation() != null) {
           marker3.setAnimation(null);
    }
    if (marker4.getAnimation() != null) {
           marker4.setAnimation(null);
    }
    if (marker5.getAnimation() != null) {
           marker5.setAnimation(null);
    }
    clearTimeout(bounceTimer);
    
}







