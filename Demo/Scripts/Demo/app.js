var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person() {
    }
    Person.All = function () {
        var people = new Array();
        var john = new Person();
        john.Id = 1;
        john.Name = "john";
        john.Country = "USA";
        people.push(john);
        var peter = new Person();
        peter.Id = 2;
        peter.Name = "peter";
        peter.Country = "UK";
        people.push(peter);
        var jane = new Person();
        jane.Id = 3;
        jane.Name = "jane";
        jane.Country = "USA";
        people.push(jane);
        return people;
    };
    return Person;
}());
var Country = (function () {
    function Country() {
    }
    Country.All = function () {
        var countries = new Array();
        var usa = new Country();
        usa.Id = 1;
        usa.Name = "USA";
        countries.push(usa);
        var uk = new Country();
        uk.Id = 2;
        uk.Name = "UK";
        countries.push(uk);
        var japan = new Country();
        japan.Id = 3;
        japan.Name = "JAPAN";
        countries.push(japan);
        return countries;
    };
    return Country;
}());
var App;
(function (App) {
    var FrmPerson = (function (_super) {
        __extends(FrmPerson, _super);
        function FrmPerson() {
            var _this = this;
            _super.call(this);
            this.InitializeComponent = function () {
                _this.Text = "Person info";
                var countries = Country.All();
                _this.txtName = new Html.InputText();
                _this.AddFormGroup("Name", _this.txtName);
                _this.txtCountry = new Forms.ComboBox();
                _this.txtCountry.DisplayMember = "Name";
                _this.txtCountry.ValueMember = "Id";
                _this.txtCountry.DataSource = countries;
                _this.AddFormGroup("Country", _this.txtCountry);
                _this.btnSave = new Forms.Button('Save');
                _this.btnSave.Color = 2;
                _this.AddControl(_this.btnSave.control);
                _this.btnSave.Click = _this.btnSave_Click;
                _this.btnCancel = new Forms.Button('Cancel');
                _this.btnCancel.Color = 5;
                _this.AddControl(_this.btnCancel.control);
                _this.btnCancel.Click = _this.btnCancel_Click;
            };
            this.LoadData = function (person) {
                _this.person = person;
                _this.txtName.Text = person.Name;
                _this.txtCountry.Text = person.Country;
            };
            this.btnSave_Click = function () {
                Forms.MessageBox.Show("¿Save changes?", "Person", 4, 0)
                    .Yes(function () {
                    _this.person.Name = _this.txtName.Text;
                    _this.person.Country = _this.txtCountry.Text;
                    _this.parent.Update(_this.person);
                });
            };
            this.btnCancel_Click = function () {
                _this.parent.Update(_this.person);
            };
            this.InitializeComponent();
        }
        Object.defineProperty(FrmPerson.prototype, "Parent", {
            set: function (parent) {
                this.parent = parent;
            },
            enumerable: true,
            configurable: true
        });
        return FrmPerson;
    }(Forms.Form));
    App.FrmPerson = FrmPerson;
})(App || (App = {}));
function Initialize() {
    var menu = new Forms.NavBar();
    var cmdPersons = menu.AddLink("Person", "#");
    var cmdSales = menu.AddLink("Sales", "#");
    menu.AddLink("Report", "#");
    document.body.appendChild(menu.control);
    var container = new Forms.Container();
    document.body.appendChild(container.control);
    var row2 = new Forms.Row();
    container.AddControl(row2.control);
    var cell12 = new Forms.Cell(12);
    row2.AddControl(cell12.control);
    var frmPersonList = new App.FrmPersonList();
    frmPersonList.Jq.hide();
    var frmSalesList = new App.FrmSalesList();
    frmSalesList.Jq.hide();
    cell12.Append(frmPersonList);
    cell12.Append(frmSalesList);
    cmdSales.Jq.click(function () {
        frmPersonList.Jq.hide();
        frmSalesList.Jq.show();
    });
    cmdPersons.Jq.click(function () {
        frmSalesList.Jq.hide();
        frmPersonList.Jq.show();
    });
}
window.onload = function () {
    Initialize();
};
var App;
(function (App) {
    var FrmSalesList = (function (_super) {
        __extends(FrmSalesList, _super);
        function FrmSalesList() {
            var _this = this;
            _super.call(this);
            this.InitializeComponent = function () {
                _this.Text = "Sales";
                _this.people = Person.All();
                _this.gdPeople = new Forms.GridControl();
                _this.AddControl(_this.gdPeople.control, true);
                _this.gdPeople.AddColumn("Id");
                _this.gdPeople.AddColumn("Name");
                _this.gdPeople.AddColumn("Country");
                _this.gdPeople.DataSource = _this.people;
                _this.gdPeople.DoubleClick = _this.gdPeople_DoubleClick;
                _this.btnNew = new Forms.Button('New');
                _this.AddControl(_this.btnNew.control);
                _this.btnNew.Color = 4;
                _this.btnNew.Click = _this.btnNew_Click;
            };
            this.gdPeople_DoubleClick = function () {
                var person = _this.gdPeople.GetFocusedRow();
                _this.showFrmPerson(person);
            };
            this.btnNew_Click = function () {
                _this.showFrmPerson(new Person());
            };
            this.showFrmPerson = function (person) {
                $(_this.control).hide();
                _this.frmPerson = new App.FrmPerson();
                _this.frmPerson.Parent = _this;
                _this.frmPerson.LoadData(person);
                $(_this.control).parent().append(_this.frmPerson.control);
            };
            this.Update = function (person) {
                if (_this.people.indexOf(person) < 0) {
                    _this.people.push(person);
                }
                _this.gdPeople.DataSource = _this.people;
                $(_this.frmPerson.control).hide();
                $(_this.control).show();
            };
            this.InitializeComponent();
        }
        return FrmSalesList;
    }(Forms.Panel));
    App.FrmSalesList = FrmSalesList;
})(App || (App = {}));
var App;
(function (App) {
    var FrmPersonList = (function (_super) {
        __extends(FrmPersonList, _super);
        function FrmPersonList() {
            var _this = this;
            _super.call(this);
            this.InitializeComponent = function () {
                _this.Text = "List of persons";
                _this.people = Person.All();
                _this.gdPeople = new Forms.GridControl();
                _this.AddControl(_this.gdPeople.control, true);
                _this.gdPeople.AddColumn("Id");
                _this.gdPeople.AddColumn("Name");
                _this.gdPeople.AddColumn("Country");
                _this.gdPeople.DataSource = _this.people;
                _this.gdPeople.DoubleClick = _this.gdPeople_DoubleClick;
                _this.btnNew = new Forms.Button('New');
                _this.AddControl(_this.btnNew.control);
                _this.btnNew.Color = 4;
                _this.btnNew.Click = _this.btnNew_Click;
            };
            this.gdPeople_DoubleClick = function () {
                var person = _this.gdPeople.GetFocusedRow();
                _this.showFrmPerson(person);
            };
            this.btnNew_Click = function () {
                _this.showFrmPerson(new Person());
            };
            this.showFrmPerson = function (person) {
                $(_this.control).hide();
                _this.frmPerson = new App.FrmPerson();
                _this.frmPerson.Parent = _this;
                _this.frmPerson.LoadData(person);
                $(_this.control).parent().append(_this.frmPerson.control);
            };
            this.Update = function (person) {
                if (_this.people.indexOf(person) < 0) {
                    _this.people.push(person);
                }
                _this.gdPeople.DataSource = _this.people;
                $(_this.frmPerson.control).hide();
                $(_this.control).show();
            };
            this.InitializeComponent();
        }
        return FrmPersonList;
    }(Forms.Panel));
    App.FrmPersonList = FrmPersonList;
})(App || (App = {}));
//# sourceMappingURL=app.js.map