import { Component, OnInit} from '@angular/core';

declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'validationform-cmp',
    templateUrl: 'validationforms.component.html'
})

export class ValidationFormsComponent implements OnInit{

    ngOnInit(){
        $.getScript('../../../../assets/js/core/jquery.validate.min.js');
        $('#registerFormValidation').validate();
        $('#loginFormValidation').validate();
        $('#allInputsFormValidation').validate();
    }
}
