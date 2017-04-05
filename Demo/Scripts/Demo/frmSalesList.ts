/// <reference path="dal.ts" />
/// <reference path="../jsforms/jsforms.d.ts" />
/// <reference path="observer.ts" />
namespace App {
    export class FrmSalesList extends Forms.Panel implements IObserver{
        private gdPeople: Forms.GridControl;
        private btnNew: Forms.Button;
        private people: Array<Person>;
        private frmPerson: App.FrmPerson;

        constructor() {
            super();
            this.InitializeComponent();
        }

        InitializeComponent = (): void => {

            this.Text = "Sales";

            ////dal
            this.people = Person.All();

            ////Grid
            this.gdPeople = new Forms.GridControl();
            this.AddControl(this.gdPeople.control, true);
            this.gdPeople.AddColumn("Id");
            this.gdPeople.AddColumn("Name");
            this.gdPeople.AddColumn("Country");
            this.gdPeople.DataSource = this.people;
            this.gdPeople.DoubleClick = this.gdPeople_DoubleClick;

            ////Button New
            this.btnNew = new Forms.Button('New');
            this.AddControl(this.btnNew.control);
            this.btnNew.Color = Forms.Color.Warning;
            this.btnNew.Click = this.btnNew_Click;
        }

        gdPeople_DoubleClick = (): void => {
            var person = <Person>this.gdPeople.GetFocusedRow();
            this.showFrmPerson(person);
        }

        btnNew_Click = (): void => {
            this.showFrmPerson(new Person());
        }

        showFrmPerson = (person :Person): void => {
            $(this.control).hide();
            this.frmPerson = new App.FrmPerson();
            this.frmPerson.Parent = this;
            this.frmPerson.LoadData(person);
            $(this.control).parent().append(this.frmPerson.control);
        }

        Update = (person: Person): void => {
            if (this.people.indexOf(person) < 0) {
                this.people.push(person);
            }
            this.gdPeople.DataSource = this.people;
            $(this.frmPerson.control).hide();
            $(this.control).show();           
        }
    }
}