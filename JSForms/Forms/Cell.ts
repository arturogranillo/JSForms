/// <reference path="../html/div.ts" />
namespace Forms {
    export class Cell extends Html.Div {
        constructor();
        constructor(size: number);
        constructor(size: number, offset: number);
        constructor(size: number, offset: number, screen: string);
        constructor(size: number = 4, offset: number = 0, screen: string = "md") {
            super();
            $(this.control).addClass("col-" + screen + "-" + size.toString());
            if (offset != 0) {
                $(this.control).addClass("col-" + screen + "-offset-" + offset.toString());
            }
        }
    }
}