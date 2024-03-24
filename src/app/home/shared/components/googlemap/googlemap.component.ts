import { Component, OnInit } from '@angular/core';
interface Location {
  lat: number;
  lng: number;
  name: string; // optional: additional information about the location
}

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.scss']
})
export class GooglemapComponent implements OnInit{

  constructor() {}

  ngOnInit(): void {}

  display: any;
  locations: Location[] = [
    { lat: 22.2736308, lng: 70.7512555, name: 'Location 1' },
    { lat: 22.5, lng: 71, name: 'Location 2' },
    // Add more locations as needed
  ];

  center: google.maps.LatLngLiteral = {
    lat: 22.2736308,
    lng: 70.7512555
  };
  zoom = 6;

  /*------------------------------------------
  --------------------------------------------
  moveMap()
  --------------------------------------------
  --------------------------------------------*/
  moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.center = (event.latLng.toJSON());
  }

  /*------------------------------------------
  --------------------------------------------
  move()
  --------------------------------------------
  --------------------------------------------*/
  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
  }
}
