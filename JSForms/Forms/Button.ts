/// <reference path="../html/button.ts" />
namespace Forms {

    export class Button extends Html.Button {

        constructor(value: string) {
            super();
            $(this.control).addClass('btn');
            this.Text = value;
            this.Color = Forms.Color.Default;
            this.Enabled = true;
        }

        set Click(func: () => void) {
            $(this.control).click(func);
        }

        get Text() {
            return $(this.control).text();
        }

        set Text(value: string) {
            $(this.control).text(value);
        }

        set Size(value: Forms.Size) {
            Utils.SetSize(this.control, value, 'btn');
        }

        set Color(value: Forms.Color) {
            Utils.SetColor(this.control, value, 'btn');
        }

        get Enabled(): boolean {
            return $(this.control).prop('disabled');
        }

        set Enabled(value: boolean) {
            $(this.control).prop('disabled', !value);
        }
    }
}