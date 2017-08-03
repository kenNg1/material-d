import { Component, OnInit } from '@angular/core';
import initChartsPage = require('../../../assets/js/init/initChartsPage.js');

@Component({
    moduleId: module.id,
    selector: 'charts-cmp',
    templateUrl: 'charts.component.html'
})

export class ChartsComponent implements OnInit{
    ngOnInit(){
        initChartsPage();
    }
}
