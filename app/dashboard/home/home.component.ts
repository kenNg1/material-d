import { Component, OnInit } from '@angular/core';
import initVectorMap = require('../../../assets/js/init/initVectorMap.js');
import initCharts = require('../../../assets/js/init/charts.js');
import initAniCharts = require('../../../assets/js/init/initAniCharts.js');
import initTooltips= require('../../../assets/js/init/initTooltips.js');
import initNotify= require('../../../assets/js/init/notify.js');

@Component({
    moduleId: module.id,
    selector: ' home-cmp ',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit{
    ngOnInit(){
        initCharts();
        initVectorMap();
        initNotify();
        initAniCharts();
        initTooltips();
    }
}
