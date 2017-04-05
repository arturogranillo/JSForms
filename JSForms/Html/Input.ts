/// <reference path="base.ts" />
namespace Html {
    export abstract class Input extends Base{

        constructor(type: string = "text") {
            super('<input type="' + type + '">');

            var id = 'input-' + Math.floor((Math.random() * 1000) + 1).toString();
            $(this.control).attr('id', id);
        }

        get Placeholder() {
            return $(this.control).attr('placeholder');
        }

        set Placeholder(value: string) {
            $(this.control).attr('placeholder', value);
        }

        get Text() {
            return $(this.control).val();
        }

        set Text(value: string) {
            $(this.control).val(value);
        }

    }
}