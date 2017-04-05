/// <reference path="../html/table.ts" />
/// <reference path="../html/tablehead.ts" />
/// <reference path="../html/tablebody.ts" />
/// <reference path="gridrow.ts" />
/// <reference path="gridheadercell.ts" />
/// <reference path="gridcell.ts" />
namespace Forms {
    export class GridControl extends Html.Table {
        private head: Html.TableHead;
        private body: Html.TableBody;

        private dataSource: Array<any>;
        private rows: Array<GridRow>;
        private columns: Array<GridColumn>;
        private doubleClick: () => void;

        constructor() {
            super();
            this.head = new Html.TableHead();
            this.body = new Html.TableBody();

            this.Append(this.head);
            this.Append(this.body);

            this.Jq.addClass('table');
            this.Jq.addClass('table-hover');

            this.dataSource = new Array<any>();
            this.rows = new Array<GridRow>();
            this.columns = Array<GridColumn>();
        }

        set DoubleClick(func: () => void) {
            this.doubleClick = func;
            for (var i = 0; i < this.rows.length; i++) {
                this.rows[i].Jq.dblclick(func);
            }
        }

        get DataSource() {
            return this.dataSource;
        }

        set DataSource(value: Array<any>) {
            this.dataSource = value;

            ///Clear
            this.head.Jq.empty();
            this.body.Jq.empty();

            ////Header
            var rowHeader = new GridRow();
            for (var i = 0; i < this.columns.length; i++) {
                var headerColumn = new GridHeaderCell(this.columns[i].Caption);
                rowHeader.Append(headerColumn);
            }
            $(this.head.control).append(rowHeader.control);

            ////Data
            for (var i = 0; i < this.dataSource.length; i++) {
                var row = new GridRow();
                for (var j = 0; j < this.columns.length; j++) {
                    var column = new GridCell(this.DataSource[i][this.columns[j].FieldName]);
                    row.Append(column);
                }
                row.Object = this.dataSource[i];
                this.rows.push(row);
                $(this.body.control).append(row.control);
            }
            this.DoubleClick = this.doubleClick;
        }

        AddColumn(fieldname: string, caption?: string): void {
            var column = new GridColumn(fieldname, caption);
            this.columns.push(column);
        }

        GetFocusedRow(): Object {
            for (var i = 0; i < this.rows.length; i++) {
                if (this.rows[i].Jq.is(':hover')) {
                    return this.rows[i].Object;
                }
            }
        }
    }
}