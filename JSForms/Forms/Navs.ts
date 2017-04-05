/// <reference path="../html/unorderedlist.ts" />
/// <reference path="navitem.ts" />
namespace Forms {
    export class Navs extends Html.UnorderedList {
        constructor() {
            super();
            $(this.control).addClass('nav');
        }

        AddLink(text: string, link: string, active: boolean = false): Html.Link {
            var item = new NavItem(text, link, active);
            this.AddControl(item);
            return item.Link;
        }

        set Justified(value: boolean) {
            if (value) {
                $(this.control).addClass("nav-justified");
            } else {
                $(this.control).removeClass("nav-justified");
            }
        }
    }
}