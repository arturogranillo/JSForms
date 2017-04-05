/// <reference path="../html/listitem.ts" />
/// <reference path="../html/unorderedlist.ts" />
namespace Forms {
    export class NavSubItem extends Html.ListItem {
        private link: Html.Link;
        private items: Html.UnorderedList;

        constructor(text: string) {
            super();

            $(this.control).addClass('dropdown');

            this.link = new Html.Link(text, "#");
            $(this.link.control).addClass("dropdown-toggle");
            $(this.link.control).attr("data-toggle", "dropdown");
            $(this.link.control).attr("aria-haspopup", "true");
            $(this.link.control).attr("aria-expanded", "false");
            $(this.link.control).append("<span class='caret'></span>");
            this.AddControl(this.link.control);  

            this.items = new Html.UnorderedList();
            $(this.items.control).addClass("dropdown-menu");
            this.AddControl(this.items.control);
        }

        AddLink(text: string, link: string): void {
            var item = new NavItem(text, link);
            this.items.AddControl(item);
        }
    }
}