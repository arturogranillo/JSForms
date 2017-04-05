/// <reference path="../html/tablecell.ts" />
namespace Forms {
    export class GridCell extends Html.TableCell{
        constructor(text: string) {
            super();
            this.Text = text;
        }
    }
}