/// <reference path="../html/listitem.ts" />
/// <reference path="../html/link.ts" />
namespace Forms {
    export class NavItem extends Html.ListItem {
        private link: Html.Link;

        constructor(text: string, link: string, active: boolean = false) {
            super();            
            this.link = new Html.Link(text, link);
            this.AddControl(this.link.control);
            this.Active = active;          
        }

        set Active(value: boolean) {
            if (value) {
                $(this.control).addClass("active");
            } else {
                $(this.control).removeClass("active");
            }
        }

        get Link() {
            return this.link;
        }
    }
}