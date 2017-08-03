import { Component, OnInit } from '@angular/core';
import initSliders = require('../../../../assets/js/init/initSliders.js');
import initDatetimepickers = require('../../../../assets/js/init/initDatetimepickers.js');

declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'extendedforms-cmp',
    templateUrl: 'extendedforms.component.html'
})

export class ExtendedFormsComponent implements OnInit{
    ngOnInit() {
        // $.getScript('../../../../assets/js/plugins/bootstrap-switch-tags.js');
        // $.getScript('../../../../assets/js/plugins/bootstrap-selectpicker.js');
        $.getScript('../../../../assets/js/plugins/bootstrap-datetimepicker.js');
        $.getScript('../../../../assets/js/plugins/jquery.tagsinput.js');

        // Init Tags Input
        // if($(".tagsinput").length != 0){
        //     $(".tagsinput").tagsInput();
        // }

        //  Init Bootstrap Select Picker
        if($(".selectpicker").length != 0){
            $(".selectpicker").selectpicker();
        }
        initDatetimepickers();
        initSliders();

    }
}
