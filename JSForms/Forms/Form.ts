/// <reference path="../html/form.ts" />
/// <reference path="../html/fieldset.ts" />
/// <reference path="../html/legend.ts" />
namespace Forms {

    export class Form extends Html.Form{
        private fieldset: Html.Fieldset;
        private legend: Html.Legend;

        constructor() {
            super();
            this.fieldset = new Html.Fieldset();
            $(this.control).append($(this.fieldset.control));
        }

        set Text(value: string) {
            if (!this.legend) {
                this.legend = new Html.Legend();
                $(this.fieldset.control).append($(this.legend.control));
            }

            $(this.legend.control).text(value);
        }

        AddControl(value: HTMLElement): void {
            $(this.fieldset.control).append($(value));
        }

        AddFormGroup(value: string, input: Html.Base): void {
            var formGroup = new Forms.FormGroup(value, input);
            $(this.fieldset.control).append($(formGroup.control));
        }
    }
} 