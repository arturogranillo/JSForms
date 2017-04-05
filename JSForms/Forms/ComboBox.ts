/// <reference path="../html/select.ts" />
/// <reference path="../html/option.ts" />
namespace Forms {
    export class ComboBox extends Html.Select {
        private dataSource: Array<any>;
        DisplayMember: string;
        ValueMember: string;

        constructor() {
            super();
        }

        get DataSource() {
            return this.dataSource;
        }

        set DataSource(value: Array<any>) {
            this.dataSource = value;

            for (var i = 0; i < this.DataSource.length; i++) {
                var option = new Html.Option(this.DataSource[i][this.DisplayMember], this.DataSource[i][this.ValueMember]);
                $(this.control).append($(option.control));
            }
        }

        get Text() {
            return $(this.control).children("option:selected").text();
        }

        set Text(value: string) {
            for (var i = 0; i < this.DataSource.length; i++) {
                if (this.DataSource[i][this.DisplayMember] === value) {
                    $(this.control).val(this.DataSource[i][this.ValueMember]);
                }
            }
        }
    }
} 