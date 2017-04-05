/// <reference path="../html/tableheadercell.ts" />
namespace Forms {
    export class GridHeaderCell extends Html.TableHeaderCell{
        constructor(text: string) {
            super();
            this.Text = text;
        }
    }
}