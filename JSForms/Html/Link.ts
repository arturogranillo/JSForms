/// <reference path="base.ts" />
namespace Html {
    export class Link extends Base{

        constructor();
        constructor(text: string, href: string)
        constructor(text?: string, href?: string) {
            super('<a></a>');

            if (text != null) {
                this.Text = text;
            }

            if (href != null) {
                this.Href = href;
            }
        }

        set Text(value: string) {
            $(this.control).text(value);
        }

        set Href(value: string) {
            $(this.control).attr("href", value);
        }
    }
}