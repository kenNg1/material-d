import { Component, OnInit } from '@angular/core';
import initWizard = require('../../../../assets/js/init/initWizard.js');

declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'wizard-cmp',
    templateUrl: 'wizard.component.html'
})

export class WizardComponent implements OnInit{

    ngOnInit(){
        $.getScript('../../../assets/js/plugins/jquery.bootstrap-wizard.js');
        initWizard();
    }
}
