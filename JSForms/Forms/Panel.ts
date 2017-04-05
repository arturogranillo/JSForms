/// <reference path="../html/div.ts" />
namespace Forms {
    export class Panel extends Html.Div {
        private header: Html.Div;
        private body: Html.Div;
        private footer: Html.Div;

        constructor();
        constructor(title: string);
        constructor(title: string, color: Forms.Color);
        constructor(title: string = "", color: Forms.Color = Forms.Color.Default) {
            super();

            $(this.control).addClass('panel');

            ////header
            this.header = new Html.Div();
            $(this.header.control).addClass('panel-heading');
            super.AddControl(this.header.control);
            ////body
            this.body = new Html.Div();
            $(this.body.control).addClass('panel-body');
            super.AddControl(this.body.control);

            this.Color = color;
            this.Text = title;
            $(this.header.control).html(title);
        }

        set Color(value: Forms.Color) {
            Utils.SetColor(this.control, value, 'panel');
        }

        set Text(value: string) {
            $(this.header.control).html(value);
        }

        AddControl(value: HTMLElement, fullWidth: boolean = false): void {
            if (fullWidth && ($(value).hasClass('table') || $(value).hasClass('list-group'))) {
                $(this.body.control).after($(value));
            }
            else {
                $(this.body.control).append($(value));
            }
        }
    }
}