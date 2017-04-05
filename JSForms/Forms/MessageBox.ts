/// <reference path="../html/div.ts" />
/// <reference path="utils.ts" />
namespace Forms {

    export class MessageBox extends Html.Div {
        private modalDialog: Html.Div;
        private modalContent: Html.Div;
        private modalHeader: Html.Div;
        private modalBody: Html.Div;
        private modalFooter: Html.Div;
        private txtCaption: HTMLElement;
        private txtText: HTMLElement;
        private dialogResult: DialogResult;

        private yes: () => void;
        Yes = (func: () => void): MessageBox => {
            this.yes = func;
            return this;
        }

        private no: () => void;
        No = (func: () => void): MessageBox => {
            this.no = func;
            return this;
        }

        Hide = (): void => {
            $(this.control).modal('hide');
        }

        ShowDialog = (): void => {
            $(this.control).modal({
                keyboard: false,
                backdrop: 'static'
            });
        }

        Resolve = (result: Forms.DialogResult): void => {
            this.dialogResult = result;
            switch (this.dialogResult) {
                case Forms.DialogResult.Yes:
                    if(this.yes) this.yes();
                    break;
                case Forms.DialogResult.No:
                    if(this.no) this.no();
                    break;
                default:
                    break;
            }
            this.Hide();
        }

        constructor(text: string, caption: string, buttons: Forms.MessageBoxButtons, icon: Forms.MessageBoxIcon) {
            super();

            this.dialogResult = Forms.DialogResult.None;

            $(this.control).addClass('modal fade');
            $(this.control).attr('tabindex', "-1");
            $(this.control).attr('role', "dialog");

            this.modalDialog = new Html.Div();
            $(this.modalDialog.control).addClass('modal-dialog');
            this.AddControl(this.modalDialog.control);

            this.modalContent = new Html.Div();
            $(this.modalContent.control).addClass('modal-content');
            this.modalDialog.AddControl(this.modalContent.control);

            this.modalHeader = new Html.Div();
            $(this.modalHeader.control).addClass('modal-header');
            this.modalContent.AddControl(this.modalHeader.control);

            this.modalBody = new Html.Div();
            $(this.modalBody.control).addClass('modal-body');
            this.modalContent.AddControl(this.modalBody.control);

            this.modalFooter = new Html.Div();
            $(this.modalFooter.control).addClass('modal-footer');
            this.modalContent.AddControl(this.modalFooter.control);

            this.txtCaption = <HTMLElement>$.parseHTML('<h4></h4>')[0];
            $(this.txtCaption).addClass("modal-title");
            $(this.txtCaption).text(caption);
            this.modalHeader.AddControl(this.txtCaption);

            this.txtText = <HTMLElement>$.parseHTML('<p></p>')[0];
            $(this.txtText).html(text);
            this.modalBody.AddControl(this.txtText);

            switch (buttons) {
                case Forms.MessageBoxButtons.OK:
                    var btn1 = new Button("OK");
                    btn1.Click = () => this.Resolve(Forms.DialogResult.OK) ;
                    this.modalFooter.AddControl(btn1.control);
                    break;
                case Forms.MessageBoxButtons.YesNo:
                    var btn1 = new Button("Yes");
                    btn1.Color = Forms.Color.Primary;
                    btn1.Click = () => this.Resolve(Forms.DialogResult.Yes);
                    this.modalFooter.AddControl(btn1.control);
                    var btn2 = new Button("No");
                    this.dialogResult = Forms.DialogResult.No;
                    btn2.Click = () => this.Resolve(Forms.DialogResult.No);
                    this.modalFooter.AddControl(btn2.control);
                    break;
            }

            ////Cambiar por fa
            switch (icon) {
                case Forms.MessageBoxIcon.None:
                    break;
                case Forms.MessageBoxIcon.Warning:
                    var icon1 = <HTMLElement>$.parseHTML('<span class="glyphicon glyphicon-warning-sign" aria-hidden="true" > </span> ')[0];
                    this.modalBody.AddControl(icon1);
                    break;
            }

            $(this.control).on('hidden.bs.modal', () => $(this.control).remove());
        }

        static Show(text: string, caption: string, buttons: Forms.MessageBoxButtons, icon: Forms.MessageBoxIcon): MessageBox {
            var frmModal = new MessageBox(text, caption, buttons, icon);
            frmModal.ShowDialog();
            return frmModal;
        }
    }
}