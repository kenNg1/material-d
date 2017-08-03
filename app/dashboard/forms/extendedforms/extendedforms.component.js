"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var initSliders = require('../../../../assets/js/init/initSliders.js');
var initDatetimepickers = require('../../../../assets/js/init/initDatetimepickers.js');
var ExtendedFormsComponent = (function () {
    function ExtendedFormsComponent() {
    }
    ExtendedFormsComponent.prototype.ngOnInit = function () {
        // $.getScript('../../../../assets/js/plugins/bootstrap-switch-tags.js');
        // $.getScript('../../../../assets/js/plugins/bootstrap-selectpicker.js');
        $.getScript('../../../../assets/js/plugins/bootstrap-datetimepicker.js');
        $.getScript('../../../../assets/js/plugins/jquery.tagsinput.js');
        // Init Tags Input
        // if($(".tagsinput").length != 0){
        //     $(".tagsinput").tagsInput();
        // }
        //  Init Bootstrap Select Picker
        if ($(".selectpicker").length != 0) {
            $(".selectpicker").selectpicker();
        }
        initDatetimepickers();
        initSliders();
    };
    ExtendedFormsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'extendedforms-cmp',
            templateUrl: 'extendedforms.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ExtendedFormsComponent);
    return ExtendedFormsComponent;
}());
exports.ExtendedFormsComponent = ExtendedFormsComponent;
//# sourceMappingURL=extendedforms.component.js.map