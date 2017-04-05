/// <reference path="panel.ts" />
namespace Forms {
    export class PanelForm extends Forms.Panel {
        private form: Forms.Form;

        constructor() {
            super();
            this.form = new Forms.Form();
            this.AddControl(this.form.control);
        }

        AddFormGroup(value: string, input: Html.Base): void {
            this.form.AddFormGroup(value, input);
        }
    }
}