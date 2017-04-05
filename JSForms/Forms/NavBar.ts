/// <reference path="../html/nav.ts" />
/// <reference path="../html/div.ts" />
/// <reference path="../html/unorderedlist.ts" />
/// <reference path="navitem.ts" />
/// <reference path="../html/link.ts" />
namespace Forms {
    export class NavBar extends Html.Nav {
        private header: Html.Div;
        private items: Html.UnorderedList;

        constructor() {
            super();
            this.Jq.addClass('navbar');
            this.Jq.addClass('navbar-default');

            this.header = new Html.Div();
            this.header.Jq.addClass('navbar-header');
            this.Append(this.header);

            this.items = new Html.UnorderedList();
            this.items.Jq.addClass('nav');
            this.items.Jq.addClass('navbar-nav');
            this.Append(this.items);
        }

        AddLink(text: string, link: string, active: boolean = false): Html.Link {
            var item = new NavItem(text, link, active);
            item.Jq.click(this.activeOnClick);
            this.items.Append(item);
            return item.Link;
        }

        activeOnClick = (): void => {
            this.items.Jq.find('li').removeClass("active");
            this.items.Jq.find(':hover').addClass("active");
        }
    }
}