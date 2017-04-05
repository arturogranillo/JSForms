declare namespace Html {
    class Base {
        control: HTMLElement;
        constructor(type: string);
        Id: string;
        Jq: JQuery;
        Append(html: Base): void;
    }
}
declare namespace Html {
    class Button extends Base {
        constructor(type?: string);
    }
}
declare namespace Forms {
    class Button extends Html.Button {
        constructor(value: string);
        Click: () => void;
        Text: string;
        Size: Forms.Size;
        Color: Forms.Color;
        Enabled: boolean;
    }
}
declare namespace Html {
    class Nav extends Base {
        constructor();
    }
}
declare namespace Html {
    class Div extends Base {
        constructor();
        AddControl(value: HTMLElement): void;
    }
}
declare namespace Html {
    class ListItem extends Base {
        constructor();
        AddControl(value: HTMLElement): void;
    }
}
declare namespace Html {
    class UnorderedList extends Base {
        constructor();
        AddControl(value: ListItem): void;
    }
}
declare namespace Html {
    class Link extends Base {
        constructor();
        constructor(text: string, href: string);
        Text: string;
        Href: string;
    }
}
declare namespace Forms {
    class NavItem extends Html.ListItem {
        private link;
        constructor(text: string, link: string, active?: boolean);
        Active: boolean;
        Link: Html.Link;
    }
}
declare namespace Forms {
    class NavBar extends Html.Nav {
        private header;
        private items;
        constructor();
        AddLink(text: string, link: string, active?: boolean): Html.Link;
        activeOnClick: () => void;
    }
}
declare namespace Forms {
    class Panel extends Html.Div {
        private header;
        private body;
        private footer;
        constructor();
        constructor(title: string);
        constructor(title: string, color: Forms.Color);
        Color: Forms.Color;
        Text: string;
        AddControl(value: HTMLElement, fullWidth?: boolean): void;
    }
}
declare namespace Forms {
    class PanelForm extends Forms.Panel {
        private form;
        constructor();
        AddFormGroup(value: string, input: Html.Base): void;
    }
}
declare namespace Forms {
    class Cell extends Html.Div {
        constructor();
        constructor(size: number);
        constructor(size: number, offset: number);
        constructor(size: number, offset: number, screen: string);
    }
}
declare namespace Forms {
    class NavSubItem extends Html.ListItem {
        private link;
        private items;
        constructor(text: string);
        AddLink(text: string, link: string): void;
    }
}
declare namespace Forms {
    class Navs extends Html.UnorderedList {
        constructor();
        AddLink(text: string, link: string, active?: boolean): Html.Link;
        Justified: boolean;
    }
}
declare namespace Forms {
    class Pills extends Navs {
        constructor();
        Stacked: boolean;
    }
}
declare namespace Forms {
    class Tabs extends Navs {
        constructor();
    }
}
declare namespace Forms {
    class Container extends Html.Div {
        constructor();
    }
}
declare namespace Forms {
    class Utils {
        static SetColor(control: HTMLElement, color: Forms.Color, prefix?: string): void;
        static SetSize(control: HTMLElement, size: Forms.Size, prefix?: string): void;
    }
}
declare namespace Html {
    class Legend extends Base {
        constructor();
    }
}
declare namespace Html {
    class Fieldset extends Base {
        constructor();
    }
}
declare namespace Html {
    class TableBody extends Base {
        constructor();
    }
}
declare namespace Html {
    class TableHead extends Base {
        constructor();
    }
}
declare namespace Html {
    class Table extends Base {
        constructor();
    }
}
declare namespace Html {
    class Form extends Base {
        constructor();
    }
}
declare namespace Html {
    abstract class Input extends Base {
        constructor(type?: string);
        Placeholder: string;
        Text: string;
    }
}
declare namespace Html {
    class InputPassword extends Input {
        constructor();
    }
}
declare namespace Html {
    class InputDate extends Input {
        constructor();
    }
}
declare namespace Html {
    class InputNumber extends Input {
        constructor();
    }
}
declare namespace Html {
    class InputText extends Input {
        constructor();
    }
}
declare namespace Html {
    class Select extends Base {
        constructor();
    }
}
declare namespace Html {
    class TableCell extends Base {
        constructor();
        Text: string;
    }
}
declare namespace Html {
    class TableHeaderCell extends Base {
        constructor();
        Text: string;
    }
}
declare namespace Html {
    class TableRow extends Base {
        constructor();
    }
}
declare namespace Forms {
    class Form extends Html.Form {
        private fieldset;
        private legend;
        constructor();
        Text: string;
        AddControl(value: HTMLElement): void;
        AddFormGroup(value: string, input: Html.Base): void;
    }
}
declare namespace Html {
    class Label extends Base {
        constructor(value: string);
        Text: string;
        For: string;
    }
}
declare namespace Forms {
    class FormGroup extends Html.Div {
        private label;
        private input;
        constructor(value: string, input: Html.Base);
        Label: Html.Label;
        Input: Html.Base;
    }
}
declare namespace Forms {
    class GridColumn {
        Caption: string;
        FieldName: string;
        constructor(fieldname: string, caption?: string);
    }
}
declare namespace Forms {
    class GridRow extends Html.TableRow {
        Object: Object;
        constructor();
    }
}
declare namespace Forms {
    class GridHeaderCell extends Html.TableHeaderCell {
        constructor(text: string);
    }
}
declare namespace Forms {
    class GridCell extends Html.TableCell {
        constructor(text: string);
    }
}
declare namespace Forms {
    class GridControl extends Html.Table {
        private head;
        private body;
        private dataSource;
        private rows;
        private columns;
        private doubleClick;
        constructor();
        DoubleClick: () => void;
        DataSource: Array<any>;
        AddColumn(fieldname: string, caption?: string): void;
        GetFocusedRow(): Object;
    }
}
declare namespace Forms {
    class MessageBox extends Html.Div {
        private modalDialog;
        private modalContent;
        private modalHeader;
        private modalBody;
        private modalFooter;
        private txtCaption;
        private txtText;
        private dialogResult;
        private yes;
        Yes: (func: () => void) => MessageBox;
        private no;
        No: (func: () => void) => MessageBox;
        Hide: () => void;
        ShowDialog: () => void;
        Resolve: (result: DialogResult) => void;
        constructor(text: string, caption: string, buttons: Forms.MessageBoxButtons, icon: Forms.MessageBoxIcon);
        static Show(text: string, caption: string, buttons: Forms.MessageBoxButtons, icon: Forms.MessageBoxIcon): MessageBox;
    }
}
declare namespace Forms {
    class Row extends Html.Div {
        constructor();
    }
}
declare namespace Html {
    class Option extends Base {
        constructor(text: string, value?: string);
        Text: string;
        Value: string;
    }
}
declare namespace Forms {
    class ComboBox extends Html.Select {
        private dataSource;
        DisplayMember: string;
        ValueMember: string;
        constructor();
        DataSource: Array<any>;
        Text: string;
    }
}
declare namespace Forms {
    const enum Color {
        Default = 0,
        Primary = 1,
        Success = 2,
        Info = 3,
        Warning = 4,
        Danger = 5,
    }
    const enum Size {
        Block = 0,
        Large = 1,
        Default = 2,
        Small = 3,
        ExtraSmall = 4,
    }
    const enum MessageBoxButtons {
        OK = 0,
        YesNo = 4,
    }
    const enum MessageBoxIcon {
        None = 0,
        Error = 16,
        Hand = 16,
        Stop = 16,
        Question = 32,
        Exclamation = 48,
        Warning = 48,
        Information = 64,
        Asterisk = 64,
    }
    const enum DialogResult {
        None = 0,
        OK = 1,
        Yes = 6,
        No = 7,
    }
}
