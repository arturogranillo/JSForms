/// <reference path="base.ts" />
namespace Html {
    export class Label extends Base{

        constructor(value: string) {
            super('<label></label>');
            this.Text = value
        }

        get Text() {
            return $(this.control).text();
        }

        set Text(value: string) {
            $(this.control).text(value);
        }

        get For() {
            return $(this.control).attr('for');
        }

        set For(value: string) {
            $(this.control).attr('for', value);
        }
    }
} 