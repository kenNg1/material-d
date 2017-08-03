import { Component, OnInit } from '@angular/core';
import initFullCalendar = require('../../../assets/js/init/initFullCalendar.js');

@Component({
    moduleId: module.id,
    selector: 'calendar-cmp',
    templateUrl: 'calendar.component.html'
})

export class CalendarComponent implements OnInit{
    ngOnInit(){
        initFullCalendar();
    }
}
