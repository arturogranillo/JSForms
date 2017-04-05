/// <reference path="../jsforms/jsforms.d.ts" />
declare class Person {
    Id: number;
    Name: string;
    Country: string;
    static All(): Array<Person>;
}
declare class Country {
    Id: number;
    Name: string;
    static All(): Array<Country>;
}
declare namespace App {
    interface IObserver {
        Update(object: any): void;
    }
}
declare namespace App {
    class FrmPerson extends Forms.Form {
        private txtName;
        private txtCountry;
        private btnSave;
        private btnCancel;
        private parent;
        private person;
        constructor();
        InitializeComponent: () => void;
        LoadData: (person: Person) => void;
        btnSave_Click: () => void;
        btnCancel_Click: () => void;
        Parent: IObserver;
    }
}
declare function Initialize(): void;
declare namespace App {
    class FrmSalesList extends Forms.Panel implements IObserver {
        private gdPeople;
        private btnNew;
        private people;
        private frmPerson;
        constructor();
        InitializeComponent: () => void;
        gdPeople_DoubleClick: () => void;
        btnNew_Click: () => void;
        showFrmPerson: (person: Person) => void;
        Update: (person: Person) => void;
    }
}
declare namespace App {
    class FrmPersonList extends Forms.Panel implements IObserver {
        private gdPeople;
        private btnNew;
        private people;
        private frmPerson;
        constructor();
        InitializeComponent: () => void;
        gdPeople_DoubleClick: () => void;
        btnNew_Click: () => void;
        showFrmPerson: (person: Person) => void;
        Update: (person: Person) => void;
    }
}
