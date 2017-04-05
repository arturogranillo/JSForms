/// <reference path="base.ts" />
/// <reference path="listitem.ts" />
namespace Html {
    export class UnorderedList extends Base {

        constructor() {
            super('<ul></ul>');
        }

        AddControl(value: ListItem): void {
            $(this.control).append($(value.control));
        }
    }
}