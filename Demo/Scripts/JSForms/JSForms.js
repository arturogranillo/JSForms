var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Html;
(function (Html) {
    var Base = (function () {
        function Base(type) {
            this.control = $.parseHTML(type)[0];
        }
        Object.defineProperty(Base.prototype, "Id", {
            get: function () {
                return $(this.control).attr('id');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Base.prototype, "Jq", {
            get: function () {
                return $(this.control);
            },
            enumerable: true,
            configurable: true
        });
        Base.prototype.Append = function (html) {
            this.Jq.append(html.Jq);
        };
        return Base;
    }());
    Html.Base = Base;
})(Html || (Html = {}));
var Html;
(function (Html) {
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button(type) {
            if (type === void 0) { type = "button"; }
            _super.call(this, '<button type="' + type + '"></button>');
        }
        return Button;
    }(Html.Base));
    Html.Button = Button;
})(Html || (Html = {}));
var Forms;
(function (Forms) {
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button(value) {
            _super.call(this);
            $(this.control).addClass('btn');
            this.Text = value;
            this.Color = 0;
            this.Enabled = true;
        }
        Object.defineProperty(Button.prototype, "Click", {
            set: function (func) {
                $(this.control).click(func);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "Text", {
            get: function () {
                return $(this.control).text();
            },
            set: function (value) {
                $(this.control).text(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "Size", {
            set: function (value) {
                Forms.Utils.SetSize(this.control, value, 'btn');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "Color", {
            set: function (value) {
                Forms.Utils.SetColor(this.control, value, 'btn');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "Enabled", {
            get: function () {
                return $(this.control).prop('disabled');
            },
            set: function (value) {
                $(this.control).prop('disabled', !value);
            },
            enumerable: true,
            configurable: true
        });
        return Button;
    }(Html.Button));
    Forms.Button = Button;
})(Forms || (Forms = {}));
var Html;
(function (Html) {
    var Nav = (function (_super) {
        __extends(Nav, _super);
        function Nav() {
            _super.call(this, '<nav></nav>');
        }
        return Nav;
    }(Html.Base));
    Html.Nav = Nav;
})(Html || (Html = {}));
var Html;
(function (Html) {
    var Div = (function (_super) {
        __extends(Div, _super);
        function Div() {
            _super.call(this, '<div></div>');
        }
        Div.prototype.AddControl = function (value) {
            $(this.control).append($(value));
        };
        return Div;
    }(Html.Base));
    Html.Div = Div;
})(Html || (Html = {}));
var Html;
(function (Html) {
    var ListItem = (function (_super) {
        __extends(ListItem, _super);
        function ListItem() {
            _super.call(this, '<li></li>');
        }
        ListItem.prototype.AddControl = function (value) {
            $(this.control).append($(value));
        };
        return ListItem;
    }(Html.Base));
    Html.ListItem = ListItem;
})(Html || (Html = {}));
var Html;
(function (Html) {
    var UnorderedList = (function (_super) {
        __extends(UnorderedList, _super);
        function UnorderedList() {
            _super.call(this, '<ul></ul>');
        }
        UnorderedList.prototype.AddControl = function (value) {
            $(this.control).append($(value.control));
        };
        return UnorderedList;
    }(Html.Base));
    Html.UnorderedList = UnorderedList;
})(Html || (Html = {}));
var Html;
(function (Html) {
    var Link = (function (_super) {
        __extends(Link, _super);
        function Link(text, href) {
            _super.call(this, '<a></a>');
            if (text != null) {
                this.Text = text;
            }
            if (href != null) {
                this.Href = href;
            }
        }
        Object.defineProperty(Link.prototype, "Text", {
            set: function (value) {
                $(this.control).text(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Link.prototype, "Href", {
            set: function (value) {
                $(this.control).attr("href", value);
            },
            enumerable: true,
            configurable: true
        });
        return Link;
    }(Html.Base));
    Html.Link = Link;
})(Html || (Html = {}));
var Forms;
(function (Forms) {
    var NavItem = (function (_super) {
        __extends(NavItem, _super);
        function NavItem(text, link, active) {
            if (active === void 0) { active = false; }
            _super.call(this);
            this.link = new Html.Link(text, link);
            this.AddControl(this.link.control);
            this.Active = active;
        }
        Object.defineProperty(NavItem.prototype, "Active", {
            set: function (value) {
                if (value) {
                    $(this.control).addClass("active");
                }
                else {
                    $(this.control).removeClass("active");
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NavItem.prototype, "Link", {
            get: function () {
                return this.link;
            },
            enumerable: true,
            configurable: true
        });
        return NavItem;
    }(Html.ListItem));
    Forms.NavItem = NavItem;
})(Forms || (Forms = {}));
var Forms;
(function (Forms) {
    var NavBar = (function (_super) {
        __extends(NavBar, _super);
        function NavBar() {
            var _this = this;
            _super.call(this);
            this.activeOnClick = function () {
                _this.items.Jq.find('li').removeClass("active");
                _this.items.Jq.find(':hover').addClass("active");
            };
            this.Jq.addClass('navbar');
            this.Jq.addClass('navbar-default');
            this.header = new Html.Div();
            this.header.Jq.addClass('navbar-header');
            this.Append(this.header);
            this.items = new Html.UnorderedList();
            this.items.Jq.addClass('nav');
            this.items.Jq.addClass('navbar-nav');
            this.Append(this.items);
        }
        NavBar.prototype.AddLink = function (text, link, active) {
            if (active === void 0) { active = false; }
            var item = new Forms.NavItem(text, link, active);
            item.Jq.click(this.activeOnClick);
            this.items.Append(item);
            return item.Link;
        };
        return NavBar;
    }(Html.Nav));
    Forms.NavBar = NavBar;
})(Forms || (Forms = {}));
var Forms;
(function (Forms) {
    var Panel = (function (_super) {
        __extends(Panel, _super);
        function Panel(title, color) {
            if (title === void 0) { title = ""; }
            if (color === void 0) { color = 0; }
            _super.call(this);
            $(this.control).addClass('panel');
            this.header = new Html.Div();
            $(this.header.control).addClass('panel-heading');
            _super.prototype.AddControl.call(this, this.header.control);
            this.body = new Html.Div();
            $(this.body.control).addClass('panel-body');
            _super.prototype.AddControl.call(this, this.body.control);
            this.Color = color;
            this.Text = title;
            $(this.header.control).html(title);
        }
        Object.defineProperty(Panel.prototype, "Color", {
            set: function (value) {
                Forms.Utils.SetColor(this.control, value, 'panel');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Panel.prototype, "Text", {
            set: function (value) {
                $(this.header.control).html(value);
            },
            enumerable: true,
            configurable: true
        });
        Panel.prototype.AddControl = function (value, fullWidth) {
            if (fullWidth === void 0) { fullWidth = false; }
            if (fullWidth && ($(value).hasClass('table') || $(value).hasClass('list-group'))) {
                $(this.body.control).after($(value));
            }
            else {
                $(this.body.control).append($(value));
            }
        };
        return Panel;
    }(Html.Div));
    Forms.Panel = Panel;
})(Forms || (Forms = {}));
var Forms;
(function (Forms) {
    var PanelForm = (function (_super) {
        __extends(PanelForm, _super);
        function PanelForm() {
            _super.call(this);
            this.form = new Forms.Form();
            this.AddControl(this.form.control);
        }
        PanelForm.prototype.AddFormGroup = function (value, input) {
            this.form.AddFormGroup(value, input);
        };
        return PanelForm;
    }(Forms.Panel));
    Forms.PanelForm = PanelForm;
})(Forms || (Forms = {}));
var Forms;
(function (Forms) {
    var Cell = (function (_super) {
        __extends(Cell, _super);
        function Cell(size, offset, screen) {
            if (size === void 0) { size = 4; }
            if (offset === void 0) { offset = 0; }
            if (screen === void 0) { screen = "md"; }
            _super.call(this);
            $(this.control).addClass("col-" + screen + "-" + size.toString());
            if (offset != 0) {
                $(this.control).addClass("col-" + screen + "-offset-" + offset.toString());
            }
        }
        return Cell;
    }(Html.Div));
    Forms.Cell = Cell;
})(Forms || (Forms = {}));
var Forms;
(function (Forms) {
    var NavSubItem = (function (_super) {
        __extends(NavSubItem, _super);
        function NavSubItem(text) {
            _super.call(this);
            $(this.control).addClass('dropdown');
            this.link = new Html.Link(text, "#");
            $(this.link.control).addClass("dropdown-toggle");
            $(this.link.control).attr("data-toggle", "dropdown");
            $(this.link.control).attr("aria-haspopup", "true");
            $(this.link.control).attr("aria-expanded", "false");
            $(this.link.control).append("<span class='caret'></span>");
            this.AddControl(this.link.control);
            this.items = new Html.UnorderedList();
            $(this.items.control).addClass("dropdown-menu");
            this.AddControl(this.items.control);
        }
        NavSubItem.prototype.AddLink = function (text, link) {
            var item = new Forms.NavItem(text, link);
            this.items.AddControl(item);
        };
        return NavSubItem;
    }(Html.ListItem));
    Forms.NavSubItem = NavSubItem;
})(Forms || (Forms = {}));
var Forms;
(function (Forms) {
    var Navs = (function (_super) {
        __extends(Navs, _super);
        function Navs() {
            _super.call(this);
            $(this.control).addClass('nav');
        }
        Navs.prototype.AddLink = function (text, link, active) {
            if (active === void 0) { active = false; }
            var item = new Forms.NavItem(text, link, active);
            this.AddControl(item);
            return item.Link;
        };
        Object.defineProperty(Navs.prototype, "Justified", {
            set: function (value) {
                if (value) {
                    $(this.control).addClass("nav-justified");
                }
                else {
                    $(this.control).removeClass("nav-justified");
                }
            },
            enumerable: true,
            configurable: true
        });
        return Navs;
    }(Html.UnorderedList));
    Forms.Navs = Navs;
})(Forms || (Forms = {}));
var Forms;
(function (Forms) {
    var Pills = (function (_super) {
        __extends(Pills, _super);
        function Pills() {
            _super.call(this);
            $(this.control).addClass('nav-pills');
        }
        Object.defineProperty(Pills.prototype, "Stacked", {
            set: function (value) {
                if (value) {
                    $(this.control).addClass("nav-stacked");
                }
                else {
                    $(this.control).removeClass("nav-stacked");
                }
            },
            enumerable: true,
            configurable: true
        });
        return Pills;
    }(Forms.Navs));
    Forms.Pills = Pills;
})(Forms || (Forms = {}));
var Forms;
(function (Forms) {
    var Tabs = (function (_super) {
        __extends(Tabs, _super);
        function Tabs() {
            _super.call(this);
            $(this.control).addClass('nav-tabs');
        }
        return Tabs;
    }(Forms.Navs));
    Forms.Tabs = Tabs;
})(Forms || (Forms = {}));
var Forms;
(function (Forms) {
    var Container = (function (_super) {
        __extends(Container, _super);
        function Container() {
            _super.call(this);
            $(this.control).addClass('container');
        }
        return Container;
    }(Html.Div));
    Forms.Container = Container;
})(Forms || (Forms = {}));
var Forms;
(function (Forms) {
    var Utils = (function () {
        function Utils() {
        }
        Utils.SetColor = function (control, color, prefix) {
            if (prefix === void 0) { prefix = ''; }
            if (prefix != '') {
                prefix = prefix + '-';
            }
            $(control).removeClass(prefix + 'default');
            $(control).removeClass(prefix + 'primary');
            $(control).removeClass(prefix + 'success');
            $(control).removeClass(prefix + 'info');
            $(control).removeClass(prefix + 'warning');
            $(control).removeClass(prefix + 'danger');
            $(control).removeClass(prefix + 'link');
            switch (color) {
                case 0:
                    $(control).addClass(prefix + 'default');
                    break;
                case 1:
                    $(control).addClass(prefix + 'primary');
                    break;
                case 2:
                    $(control).addClass(prefix + 'success');
                    break;
                case 3:
                    $(control).addClass(prefix + 'info');
                    break;
                case 4:
                    $(control).addClass(prefix + 'warning');
                    break;
                case 5:
                    $(control).addClass(prefix + 'danger');
                    break;
            }
        };
        Utils.SetSize = function (control, size, prefix) {
            if (prefix === void 0) { prefix = ''; }
            if (prefix != '') {
                prefix = prefix + '-';
            }
            $(control).removeClass(prefix + 'lg');
            $(control).removeClass(prefix + 'sm');
            $(control).removeClass(prefix + 'xs');
            $(control).removeClass(prefix + 'block');
            switch (size) {
                case 1:
                    $(control).addClass(prefix + 'lg');
                    break;
                case 3:
                    $(control).addClass(prefix + 'sm');
                    break;
                case 4:
                    $(control).addClass(prefix + 'xs');
                    break;
                case 0:
                    $(control).addClass(prefix + 'block');
                    break;
            }
        };
        return Utils;
    }());
    Forms.Utils = Utils;
})(Forms || (Forms = {}));
var Html;
(function (Html) {
    var Legend = (function (_super) {
        __extends(Legend, _super);
        function Legend() {
            _super.call(this, '<legend></legend>');
        }
        return Legend;
    }(Html.Base));
    Html.Legend = Legend;
})(Html || (Html = {}));
var Html;
(function (Html) {
    var Fieldset = (function (_super) {
        __extends(Fieldset, _super);
        function Fieldset() {
            _super.call(this, '<fieldset></fieldset>');
        }
        return Fieldset;
    }(Html.Base));
    Html.Fieldset = Fieldset;
})(Html || (Html = {}));
var Html;
(function (Html) {
    var TableBody = (function (_super) {
        __extends(TableBody, _super);
        function TableBody() {
            _super.call(this, '<tbody></tbody>');
        }
        return TableBody;
    }(Html.Base));
    Html.TableBody = TableBody;
})(Html || (Html = {}));
var Html;
(function (Html) {
    var TableHead = (function (_super) {
        __extends(TableHead, _super);
        function TableHead() {
            _super.call(this, '<thead></thead>');
        }
        return TableHead;
    }(Html.Base));
    Html.TableHead = TableHead;
})(Html || (Html = {}));
var Html;
(function (Html) {
    var Table = (function (_super) {
        __extends(Table, _super);
        function Table() {
            _super.call(this, '<table></table>');
        }
        return Table;
    }(Html.Base));
    Html.Table = Table;
})(Html || (Html = {}));
var Html;
(function (Html) {
    var Form = (function (_super) {
        __extends(Form, _super);
        function Form() {
            _super.call(this, '<form></form>');
        }
        return Form;
    }(Html.Base));
    Html.Form = Form;
})(Html || (Html = {}));
var Html;
(function (Html) {
    var Input = (function (_super) {
        __extends(Input, _super);
        function Input(type) {
            if (type === void 0) { type = "text"; }
            _super.call(this, '<input type="' + type + '">');
            var id = 'input-' + Math.floor((Math.random() * 1000) + 1).toString();
            $(this.control).attr('id', id);
        }
        Object.defineProperty(Input.prototype, "Placeholder", {
            get: function () {
                return $(this.control).attr('placeholder');
            },
            set: function (value) {
                $(this.control).attr('placeholder', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Input.prototype, "Text", {
            get: function () {
                return $(this.control).val();
            },
            set: function (value) {
                $(this.control).val(value);
            },
            enumerable: true,
            configurable: true
        });
        return Input;
    }(Html.Base));
    Html.Input = Input;
})(Html || (Html = {}));
var Html;
(function (Html) {
    var InputPassword = (function (_super) {
        __extends(InputPassword, _super);
        function InputPassword() {
            _super.call(this, "password");
        }
        return InputPassword;
    }(Html.Input));
    Html.InputPassword = InputPassword;
})(Html || (Html = {}));
var Html;
(function (Html) {
    var InputDate = (function (_super) {
        __extends(InputDate, _super);
        function InputDate() {
            _super.call(this, "date");
        }
        return InputDate;
    }(Html.Input));
    Html.InputDate = InputDate;
})(Html || (Html = {}));
var Html;
(function (Html) {
    var InputNumber = (function (_super) {
        __extends(InputNumber, _super);
        function InputNumber() {
            _super.call(this, "number");
        }
        return InputNumber;
    }(Html.Input));
    Html.InputNumber = InputNumber;
})(Html || (Html = {}));
var Html;
(function (Html) {
    var InputText = (function (_super) {
        __extends(InputText, _super);
        function InputText() {
            _super.call(this, "text");
        }
        return InputText;
    }(Html.Input));
    Html.InputText = InputText;
})(Html || (Html = {}));
var Html;
(function (Html) {
    var Select = (function (_super) {
        __extends(Select, _super);
        function Select() {
            _super.call(this, '<select></select>');
            var id = 'input-' + Math.floor((Math.random() * 1000) + 1).toString();
            $(this.control).attr('id', id);
        }
        return Select;
    }(Html.Base));
    Html.Select = Select;
})(Html || (Html = {}));
var Html;
(function (Html) {
    var TableCell = (function (_super) {
        __extends(TableCell, _super);
        function TableCell() {
            _super.call(this, '<td></td>');
        }
        Object.defineProperty(TableCell.prototype, "Text", {
            get: function () {
                return this.Jq.text();
            },
            set: function (value) {
                this.Jq.text(value);
            },
            enumerable: true,
            configurable: true
        });
        return TableCell;
    }(Html.Base));
    Html.TableCell = TableCell;
})(Html || (Html = {}));
var Html;
(function (Html) {
    var TableHeaderCell = (function (_super) {
        __extends(TableHeaderCell, _super);
        function TableHeaderCell() {
            _super.call(this, '<th></th>');
        }
        Object.defineProperty(TableHeaderCell.prototype, "Text", {
            get: function () {
                return this.Jq.text();
            },
            set: function (value) {
                this.Jq.text(value);
            },
            enumerable: true,
            configurable: true
        });
        return TableHeaderCell;
    }(Html.Base));
    Html.TableHeaderCell = TableHeaderCell;
})(Html || (Html = {}));
var Html;
(function (Html) {
    var TableRow = (function (_super) {
        __extends(TableRow, _super);
        function TableRow() {
            _super.call(this, '<tr></tr>');
        }
        return TableRow;
    }(Html.Base));
    Html.TableRow = TableRow;
})(Html || (Html = {}));
var Forms;
(function (Forms) {
    var Form = (function (_super) {
        __extends(Form, _super);
        function Form() {
            _super.call(this);
            this.fieldset = new Html.Fieldset();
            $(this.control).append($(this.fieldset.control));
        }
        Object.defineProperty(Form.prototype, "Text", {
            set: function (value) {
                if (!this.legend) {
                    this.legend = new Html.Legend();
                    $(this.fieldset.control).append($(this.legend.control));
                }
                $(this.legend.control).text(value);
            },
            enumerable: true,
            configurable: true
        });
        Form.prototype.AddControl = function (value) {
            $(this.fieldset.control).append($(value));
        };
        Form.prototype.AddFormGroup = function (value, input) {
            var formGroup = new Forms.FormGroup(value, input);
            $(this.fieldset.control).append($(formGroup.control));
        };
        return Form;
    }(Html.Form));
    Forms.Form = Form;
})(Forms || (Forms = {}));
var Html;
(function (Html) {
    var Label = (function (_super) {
        __extends(Label, _super);
        function Label(value) {
            _super.call(this, '<label></label>');
            this.Text = value;
        }
        Object.defineProperty(Label.prototype, "Text", {
            get: function () {
                return $(this.control).text();
            },
            set: function (value) {
                $(this.control).text(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Label.prototype, "For", {
            get: function () {
                return $(this.control).attr('for');
            },
            set: function (value) {
                $(this.control).attr('for', value);
            },
            enumerable: true,
            configurable: true
        });
        return Label;
    }(Html.Base));
    Html.Label = Label;
})(Html || (Html = {}));
var Forms;
(function (Forms) {
    var FormGroup = (function (_super) {
        __extends(FormGroup, _super);
        function FormGroup(value, input) {
            _super.call(this);
            $(this.control).addClass('form-group');
            this.input = input;
            $(this.input.control).addClass('form-control');
            this.label = new Html.Label(value);
            this.label.For = this.input.Id;
            $(this.control).append($(this.label.control));
            $(this.control).append($(this.input.control));
        }
        Object.defineProperty(FormGroup.prototype, "Label", {
            get: function () {
                return this.label;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FormGroup.prototype, "Input", {
            get: function () {
                return this.input;
            },
            enumerable: true,
            configurable: true
        });
        return FormGroup;
    }(Html.Div));
    Forms.FormGroup = FormGroup;
})(Forms || (Forms = {}));
var Forms;
(function (Forms) {
    var GridColumn = (function () {
        function GridColumn(fieldname, caption) {
            this.FieldName = fieldname;
            this.Caption = caption && caption || fieldname;
        }
        return GridColumn;
    }());
    Forms.GridColumn = GridColumn;
})(Forms || (Forms = {}));
var Forms;
(function (Forms) {
    var GridRow = (function (_super) {
        __extends(GridRow, _super);
        function GridRow() {
            _super.call(this);
        }
        return GridRow;
    }(Html.TableRow));
    Forms.GridRow = GridRow;
})(Forms || (Forms = {}));
var Forms;
(function (Forms) {
    var GridHeaderCell = (function (_super) {
        __extends(GridHeaderCell, _super);
        function GridHeaderCell(text) {
            _super.call(this);
            this.Text = text;
        }
        return GridHeaderCell;
    }(Html.TableHeaderCell));
    Forms.GridHeaderCell = GridHeaderCell;
})(Forms || (Forms = {}));
var Forms;
(function (Forms) {
    var GridCell = (function (_super) {
        __extends(GridCell, _super);
        function GridCell(text) {
            _super.call(this);
            this.Text = text;
        }
        return GridCell;
    }(Html.TableCell));
    Forms.GridCell = GridCell;
})(Forms || (Forms = {}));
var Forms;
(function (Forms) {
    var GridControl = (function (_super) {
        __extends(GridControl, _super);
        function GridControl() {
            _super.call(this);
            this.head = new Html.TableHead();
            this.body = new Html.TableBody();
            this.Append(this.head);
            this.Append(this.body);
            this.Jq.addClass('table');
            this.Jq.addClass('table-hover');
            this.dataSource = new Array();
            this.rows = new Array();
            this.columns = Array();
        }
        Object.defineProperty(GridControl.prototype, "DoubleClick", {
            set: function (func) {
                this.doubleClick = func;
                for (var i = 0; i < this.rows.length; i++) {
                    this.rows[i].Jq.dblclick(func);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GridControl.prototype, "DataSource", {
            get: function () {
                return this.dataSource;
            },
            set: function (value) {
                this.dataSource = value;
                this.head.Jq.empty();
                this.body.Jq.empty();
                var rowHeader = new Forms.GridRow();
                for (var i = 0; i < this.columns.length; i++) {
                    var headerColumn = new Forms.GridHeaderCell(this.columns[i].Caption);
                    rowHeader.Append(headerColumn);
                }
                $(this.head.control).append(rowHeader.control);
                for (var i = 0; i < this.dataSource.length; i++) {
                    var row = new Forms.GridRow();
                    for (var j = 0; j < this.columns.length; j++) {
                        var column = new Forms.GridCell(this.DataSource[i][this.columns[j].FieldName]);
                        row.Append(column);
                    }
                    row.Object = this.dataSource[i];
                    this.rows.push(row);
                    $(this.body.control).append(row.control);
                }
                this.DoubleClick = this.doubleClick;
            },
            enumerable: true,
            configurable: true
        });
        GridControl.prototype.AddColumn = function (fieldname, caption) {
            var column = new Forms.GridColumn(fieldname, caption);
            this.columns.push(column);
        };
        GridControl.prototype.GetFocusedRow = function () {
            for (var i = 0; i < this.rows.length; i++) {
                if (this.rows[i].Jq.is(':hover')) {
                    return this.rows[i].Object;
                }
            }
        };
        return GridControl;
    }(Html.Table));
    Forms.GridControl = GridControl;
})(Forms || (Forms = {}));
var Forms;
(function (Forms) {
    var MessageBox = (function (_super) {
        __extends(MessageBox, _super);
        function MessageBox(text, caption, buttons, icon) {
            var _this = this;
            _super.call(this);
            this.Yes = function (func) {
                _this.yes = func;
                return _this;
            };
            this.No = function (func) {
                _this.no = func;
                return _this;
            };
            this.Hide = function () {
                $(_this.control).modal('hide');
            };
            this.ShowDialog = function () {
                $(_this.control).modal({
                    keyboard: false,
                    backdrop: 'static'
                });
            };
            this.Resolve = function (result) {
                _this.dialogResult = result;
                switch (_this.dialogResult) {
                    case 6:
                        if (_this.yes)
                            _this.yes();
                        break;
                    case 7:
                        if (_this.no)
                            _this.no();
                        break;
                    default:
                        break;
                }
                _this.Hide();
            };
            this.dialogResult = 0;
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
            this.txtCaption = $.parseHTML('<h4></h4>')[0];
            $(this.txtCaption).addClass("modal-title");
            $(this.txtCaption).text(caption);
            this.modalHeader.AddControl(this.txtCaption);
            this.txtText = $.parseHTML('<p></p>')[0];
            $(this.txtText).html(text);
            this.modalBody.AddControl(this.txtText);
            switch (buttons) {
                case 0:
                    var btn1 = new Forms.Button("OK");
                    btn1.Click = function () { return _this.Resolve(1); };
                    this.modalFooter.AddControl(btn1.control);
                    break;
                case 4:
                    var btn1 = new Forms.Button("Yes");
                    btn1.Color = 1;
                    btn1.Click = function () { return _this.Resolve(6); };
                    this.modalFooter.AddControl(btn1.control);
                    var btn2 = new Forms.Button("No");
                    this.dialogResult = 7;
                    btn2.Click = function () { return _this.Resolve(7); };
                    this.modalFooter.AddControl(btn2.control);
                    break;
            }
            switch (icon) {
                case 0:
                    break;
                case 48:
                    var icon1 = $.parseHTML('<span class="glyphicon glyphicon-warning-sign" aria-hidden="true" > </span> ')[0];
                    this.modalBody.AddControl(icon1);
                    break;
            }
            $(this.control).on('hidden.bs.modal', function () { return $(_this.control).remove(); });
        }
        MessageBox.Show = function (text, caption, buttons, icon) {
            var frmModal = new MessageBox(text, caption, buttons, icon);
            frmModal.ShowDialog();
            return frmModal;
        };
        return MessageBox;
    }(Html.Div));
    Forms.MessageBox = MessageBox;
})(Forms || (Forms = {}));
var Forms;
(function (Forms) {
    var Row = (function (_super) {
        __extends(Row, _super);
        function Row() {
            _super.call(this);
            $(this.control).addClass('row');
        }
        return Row;
    }(Html.Div));
    Forms.Row = Row;
})(Forms || (Forms = {}));
var Html;
(function (Html) {
    var Option = (function (_super) {
        __extends(Option, _super);
        function Option(text, value) {
            if (value === void 0) { value = ''; }
            _super.call(this, '<option></option>');
            this.Text = text;
            this.Value = value;
        }
        Object.defineProperty(Option.prototype, "Text", {
            get: function () {
                return $(this.control).text();
            },
            set: function (value) {
                $(this.control).text(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Option.prototype, "Value", {
            get: function () {
                return $(this.control).val();
            },
            set: function (value) {
                $(this.control).val(value);
            },
            enumerable: true,
            configurable: true
        });
        return Option;
    }(Html.Base));
    Html.Option = Option;
})(Html || (Html = {}));
var Forms;
(function (Forms) {
    var ComboBox = (function (_super) {
        __extends(ComboBox, _super);
        function ComboBox() {
            _super.call(this);
        }
        Object.defineProperty(ComboBox.prototype, "DataSource", {
            get: function () {
                return this.dataSource;
            },
            set: function (value) {
                this.dataSource = value;
                for (var i = 0; i < this.DataSource.length; i++) {
                    var option = new Html.Option(this.DataSource[i][this.DisplayMember], this.DataSource[i][this.ValueMember]);
                    $(this.control).append($(option.control));
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ComboBox.prototype, "Text", {
            get: function () {
                return $(this.control).children("option:selected").text();
            },
            set: function (value) {
                for (var i = 0; i < this.DataSource.length; i++) {
                    if (this.DataSource[i][this.DisplayMember] === value) {
                        $(this.control).val(this.DataSource[i][this.ValueMember]);
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        return ComboBox;
    }(Html.Select));
    Forms.ComboBox = ComboBox;
})(Forms || (Forms = {}));
//# sourceMappingURL=JSForms.js.map