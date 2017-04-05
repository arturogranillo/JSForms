/// <reference path="base.ts" />
namespace Html {
    export class ListItem extends Base {

        constructor() {
            super('<li></li>');
        }

        AddControl(value: HTMLElement): void {
            $(this.control).append($(value));
        }
    }
}