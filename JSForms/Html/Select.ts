/// <reference path="base.ts" />
namespace Html {
    export class Select extends Base{

        constructor() {
            super('<select></select>');

            var id = 'input-' + Math.floor((Math.random() * 1000) + 1).toString();
            $(this.control).attr('id', id);
        }
    }
} 