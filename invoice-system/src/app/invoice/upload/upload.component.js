"use strict";var __decorate=this&&this.__decorate||function(e,o,t,n){var r,l=arguments.length,p=l<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,o,t,n);else for(var i=e.length-1;0<=i;i--)(r=e[i])&&(p=(l<3?r(p):3<l?r(o,t,p):r(o,t))||p);return 3<l&&p&&Object.defineProperty(o,t,p),p};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),dialog_component_1=require("./dialog/dialog.component"),UploadComponent=function(){function e(e,o){this.dialog=e,this.uploadService=o}return e.prototype.openUploadDialog=function(){this.dialog.open(dialog_component_1.DialogComponent,{width:"50%",height:"50%"})},__decorate([core_1.ViewChild(dialog_component_1.DialogComponent,{static:!1})],e.prototype,"dialogComponent",void 0),e=__decorate([core_1.Component({moduleId:module.id,selector:"app-upload",templateUrl:"upload.component.html",styleUrls:["upload.component.scss"]})],e)}();exports.UploadComponent=UploadComponent;