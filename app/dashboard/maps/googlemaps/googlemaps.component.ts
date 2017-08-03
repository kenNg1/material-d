import { Component, OnInit } from '@angular/core';
import initMaps = require('../../../../assets/js/init/initMaps.js');

declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'vector-maps-cmp',
    templateUrl: './googlemaps.component.html'
})

export class GoogleMapsComponent implements OnInit{
    ngOnInit(){
        initMaps();
    }
}
