import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from "rxjs/Observable"
import { Observable } from 'rxjs';

@Component({
  selector: 'app-flight-plan',
  templateUrl: './flight-plan.component.html',
  styleUrls: ['./flight-plan.component.scss']
})
export class FlightPlanComponent implements OnInit {
  private location: google.maps.LatLng = new google.maps.LatLng(55.9413212, -3.0652533);
   path:Array<google.maps.LatLng>;
  obsrv:new Observable(observer=>observer.next)
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  constructor() { }
  ngOnInit() {
    this.initLocation();
  }
  initLocation() {
    let retrieve: any = localStorage.getItem('location');
    if (retrieve !== null) {
      try {
        retrieve = JSON.parse(retrieve)
      }
      catch (e) {
        this.defaultLocation();
        return;
      };
      this.location = new google.maps.LatLng(parseFloat(retrieve.lat), parseFloat(retrieve.lng));
    }
    else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        localStorage.setItem('location',JSON.stringify(this.location));
      });
    }
    else {
      this.defaultLocation();
      return;
    }
    this.initMap();
  };
  defaultLocation() {
    this.location = new google.maps.LatLng(55.9413212, -3.0652533);
    alert('couldnt find your location, so we picked up another place');
    this.initMap();
  }
  initMap() {
    let mapProp = {
      center: this.location,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    let marker = new google.maps.Marker({
      position:this.location,
      animation:google.maps.Animation.BOUNCE
      });
    marker.setMap(this.map);
    let flightPath = new google.maps.Polyline({
      path:this.path,
      strokeColor:"#0000FF",
      strokeOpacity:0.8,
      strokeWeight:2
    });
  }
updatePath(newLocation:google.maps.LatLng){
  this.path.push(JSON.parse(JSON.stringify(newLocation)));
}
}
