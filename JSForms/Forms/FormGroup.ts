/// <reference path="../html/div.ts" />
/// <reference path="../html/label.ts" />
/// <reference path="../html/base.ts" />
namespace Forms {

    export class FormGroup extends Html.Div {
        private label: Html.Label;
        private input: Html.Base;

        constructor(value: string, input: Html.Base) {
            super();
            $(this.control).addClass('form-group');

            this.input = input;
            $(this.input.control).addClass('form-control');

            this.label = new Html.Label(value);
            this.label.For = this.input.Id;

            $(this.control).append($(this.label.control));
            $(this.control).append($(this.input.control));
        }

        get Label() {
            return this.label;
        }

        get Input() {
            return this.input;
        }
    }
} 