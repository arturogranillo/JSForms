declare namespace Forms {
    class Button {
        control: HTMLButtonElement;
        private text;
        private size;
        private color;
        private enabled;
        constructor(value: string);
        Click: () => void;
        Text: string;
        Size: Forms.Size;
        Color: Forms.Color;
        Enabled: boolean;
    }
}
declare namespace Forms {
    class Div {
        control: HTMLElement;
        constructor();
        AddControl(value: HTMLElement): void;
    }
}
declare namespace Forms {
    class Cell extends Div {
        constructor();
        constructor(size: number);
        constructor(size: number, offset: number);
    }
}
declare namespace Forms {
    class Container extends Div {
        constructor();
    }
}
declare namespace Forms {
    class Form {
        control: HTMLElement;
        private fieldset;
        private legend;
        private text;
        constructor(value: string);
        Text: string;
        AddControl(value: HTMLElement): void;
    }
}
declare namespace Forms {
    class Label {
        control: HTMLElement;
        private for;
        private text;
        constructor(value: string);
        Text: string;
        For: string;
    }
}
declare namespace Forms {
    class Input {
        control: HTMLElement;
        private id;
        constructor();
        Id: string;
        Placeholder: string;
        Text: string;
    }
}
declare namespace Forms {
    class FormGroup {
        control: HTMLElement;
        private label;
        private input;
        constructor(value: string);
        Label: Label;
        Input: Input;
        Text: string;
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
    class GridControl {
        control: HTMLElement;
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
    const enum Color {
        Default = 0,
        Primary = 1,
        Success = 2,
        Info = 3,
        Warning = 4,
        Danger = 5,
        Link = 6,
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
declare namespace Forms {
    class MessageBox extends Div {
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
    class Row extends Div {
        constructor();
    }
}
declare namespace Forms {
    class SelectOption {
        control: HTMLElement;
        private text;
        constructor(value: string);
        Text: string;
    }
}
declare namespace Forms {
    class Select {
        control: HTMLElement;
        private dataSource;
        DisplayMember: string;
        ValueMember: string;
        constructor();
        DataSource: Array<any>;
        Text: string;
    }
}
declare namespace Forms {
    class TableCell {
        control: HTMLElement;
        private text;
        constructor(text: string);
        Text: string;
    }
}
declare namespace Forms {
    class TableHeaderColumn {
        control: HTMLElement;
        private text;
        constructor(value: string);
        Text: string;
    }
}
declare namespace Forms {
    class TableHeaderRow {
        control: HTMLElement;
        private columns;
        constructor();
        AddColumn(value: TableHeaderColumn): void;
    }
}
declare namespace Forms {
    class TableRow {
        control: HTMLElement;
        Object: Object;
        private columns;
        constructor();
        AddColumn(value: TableCell): void;
    }
}
