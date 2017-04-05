/// <reference path="base.ts" />
namespace Html {
    export class Button extends Base {

        constructor(type: string = "button") {
            super('<button type="' + type + '"></button>');
        }
    }
}