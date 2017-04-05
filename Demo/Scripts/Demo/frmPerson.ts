/// <reference path="dal.ts" />
/// <reference path="../jsforms/jsforms.d.ts" />
/// <reference path="observer.ts" />
namespace App {
    export class FrmPerson extends Forms.Form {
        private txtName: Html.InputText;
        private txtCountry: Forms.ComboBox;
        private btnSave: Forms.Button;
        private btnCancel: Forms.Button;
        private parent: IObserver;
        private person: Person;

        constructor() {
            super();
            this.InitializeComponent();
        }

        InitializeComponent = (): void => {

            this.Text = "Person info";

            ////dal
            var countries = Country.All();

            ////Text
            this.txtName = new Html.InputText();
            this.AddFormGroup("Name", this.txtName);

            ////Select
            this.txtCountry = new Forms.ComboBox();
            this.txtCountry.DisplayMember = "Name";
            this.txtCountry.ValueMember = "Id";
            this.txtCountry.DataSource = countries;
            this.AddFormGroup("Country", this.txtCountry);

            ////Button Save
            this.btnSave = new Forms.Button('Save');
            this.btnSave.Color = Forms.Color.Success;
            this.AddControl(this.btnSave.control);
            this.btnSave.Click = this.btnSave_Click;

            ////Button Save
            this.btnCancel = new Forms.Button('Cancel');
            this.btnCancel.Color = Forms.Color.Danger;
            this.AddControl(this.btnCancel.control);
            this.btnCancel.Click = this.btnCancel_Click;
        }

        LoadData = (person: Person): void => {
            this.person = person;
            this.txtName.Text = person.Name;
            this.txtCountry.Text = person.Country;
        }

        btnSave_Click = (): void => {
            Forms.MessageBox.Show("¿Save changes?", "Person", Forms.MessageBoxButtons.YesNo, Forms.MessageBoxIcon.None)
                .Yes((): void => {
                    this.person.Name = this.txtName.Text;
                    this.person.Country = this.txtCountry.Text;
                    this.parent.Update(this.person);
                });
        }

        btnCancel_Click = (): void => {
            this.parent.Update(this.person);
        }

        set Parent(parent: IObserver) {
            this.parent = parent;
        }
    }
}