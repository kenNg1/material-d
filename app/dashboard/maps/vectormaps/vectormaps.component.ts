import { Component, OnInit } from '@angular/core';
import initVectorMap = require('../../../../assets/js/init/initVectorMap.js');

@Component({
    moduleId: module.id,
    selector: 'vector-maps-cmp',
    templateUrl: './vectormaps.component.html'
})

export class VectorMapsComponent implements OnInit{
    ngOnInit(){
        initVectorMap();
    }
}
