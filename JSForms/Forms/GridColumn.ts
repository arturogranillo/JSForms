namespace Forms {
    export class GridColumn {
        Caption: string;
        FieldName: string;

        constructor(fieldname: string, caption?: string) {
            this.FieldName = fieldname;
            this.Caption = caption && caption || fieldname;
        }
    }
}