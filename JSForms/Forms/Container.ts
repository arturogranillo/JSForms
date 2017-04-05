/// <reference path="../html/div.ts" />
namespace Forms {
    export class Container extends Html.Div {
        constructor() {
            super();
            $(this.control).addClass('container');
        }
    }
}