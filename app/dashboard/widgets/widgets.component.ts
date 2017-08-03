import { Component, OnInit } from '@angular/core';
import initTooltips = require('../../../assets/js/init/initTooltips.js');

@Component({
    moduleId: module.id,
    selector: 'widgets-cmp',
    templateUrl: 'widgets.component.html'
})

export class WidgetsComponent implements OnInit{
    ngOnInit(){
        initTooltips();
    }

}
