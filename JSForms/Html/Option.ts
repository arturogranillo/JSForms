/// <reference path="base.ts" />
namespace Html {
    export class Option extends Base{

        constructor(text: string, value: string = '') {
            super('<option></option>');
            this.Text = text;
            this.Value = value;
        }

        get Text() {
            return $(this.control).text();
        }

        set Text(value: string) {
            $(this.control).text(value);
        }

        get Value() {
            return $(this.control).val();
        }

        set Value(value: string) {
            $(this.control).val(value);
        }
    }
} 