/// <reference path="base.ts" />
namespace Html {
    export class TableHeaderCell extends Base{
        constructor() {
            super('<th></th>');
        }

        get Text() {
            return this.Jq.text();
        }

        set Text(value: string) {
            this.Jq.text(value);
        }
    }
}