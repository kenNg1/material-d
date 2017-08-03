import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'notifications-cmp',
    templateUrl: 'notifications.component.html'
})
export class NotificationsComponent implements OnInit{
    ngOnInit(){
        // We put modals out of wrapper to working properly
        $('.modal').appendTo("body");
    }
}
