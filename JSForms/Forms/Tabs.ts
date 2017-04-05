/// <reference path="navs.ts" />
namespace Forms {
    export class Tabs extends Navs {
        constructor() {
            super();
            $(this.control).addClass('nav-tabs');
        }
    }
}