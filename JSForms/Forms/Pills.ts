/// <reference path="navs.ts" />
namespace Forms {
    export class Pills extends Navs {
        constructor() {
            super();
            $(this.control).addClass('nav-pills');
        } 

        set Stacked(value: boolean) {
            if (value) {
                $(this.control).addClass("nav-stacked");
            } else {
                $(this.control).removeClass("nav-stacked");
            }
        }
    }
}