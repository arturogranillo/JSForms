/// <reference path="base.ts" />
namespace Html {
    export class TableCell extends Base {
        constructor() {
            super('<td></td>');
        }

        get Text() {
            return this.Jq.text();
        }

        set Text(value: string) {
            this.Jq.text(value);
        }
    }
}