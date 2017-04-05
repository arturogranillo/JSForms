/// <reference path="base.ts" />
namespace Html {
    export class Div extends Base {

        constructor() {
            super('<div></div>');
        }

        AddControl(value: HTMLElement): void {
            $(this.control).append($(value));
        }
    }
}