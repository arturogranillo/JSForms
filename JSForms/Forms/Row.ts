/// <reference path="../html/div.ts" />
namespace Forms {
    export class Row extends Html.Div {
        constructor() {
            super();
            $(this.control).addClass('row');
        }
    }
}