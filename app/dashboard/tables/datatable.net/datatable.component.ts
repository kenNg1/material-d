import { Component, OnInit } from '@angular/core';
import initDataTable = require('../../../../assets/js/init/initDataTable.js');

@Component({
    moduleId: module.id,
    selector: 'data-table-cmp',
    templateUrl: 'datatable.component.html'
})

export class DataTableComponent implements OnInit{
    ngOnInit(){
        initDataTable();
    }
}
