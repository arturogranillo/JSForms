var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Forms;
(function (Forms) {
    var Button = (function () {
        function Button(value) {
            this.control = $.parseHTML('<button type="button"></button>')[0];
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
                return this.text;
            },
            set: function (value) {
                this.text = value;
                $(this.control).text(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "Size", {
            get: function () {
                return this.size;
            },
            set: function (value) {
                $(this.control).removeClass('btn-lg');
                $(this.control).removeClass('btn-sm');
                $(this.control).removeClass('btn-xs');
                $(this.control).removeClass('btn-block');
                switch (value) {
                    case 1:
                        $(this.control).addClass('btn-lg');
                        break;
                    case 3:
                        $(this.control).addClass('btn-sm');
                        break;
                    case 4:
                        $(this.control).addClass('btn-xs');
                        break;
                    case 0:
                        $(this.control).addClass('btn-block');
                        break;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "Color", {
            get: function () {
                return this.color;
            },
            set: function (value) {
                $(this.control).removeClass('btn-default');
                $(this.control).removeClass('btn-primary');
                $(this.control).removeClass('btn-success');
                $(this.control).removeClass('btn-info');
                $(this.control).removeClass('btn-warning');
                $(this.control).removeClass('btn-danger');
                $(this.control).removeClass('btn-link');
                switch (value) {
                    case 0:
                        $(this.control).addClass('btn-default');
                        break;
                    case 1:
                        $(this.control).addClass('btn-primary');
                        break;
                    case 2:
                        $(this.control).addClass('btn-success');
                        break;
                    case 3:
                        $(this.control).addClass('btn-info');
                        break;
                    case 4:
                        $(this.control).addClass('btn-warning');
                        break;
                    case 5:
                        $(this.control).addClass('btn-danger');
                        break;
                    case 6:
                        $(this.control).addClass('btn-link');
                        break;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "Enabled", {
            get: function () {
                return this.enabled;
            },
            set: function (value) {
                this.enabled = value;
                $(this.control).prop('disabled', !this.enabled);
            },
            enumerable: true,
            configurable: true
        });
        return Button;
    }());
    Forms.Button = Button;
})(Forms || (Forms = {}));
var Forms;
(function (Forms) {
    var Div = (function () {
        function Div() {
            this.control = $.parseHTML('<div></div>')[0];
        }
        Div.prototype.AddControl = function (value) {
            $(this.control).append($(value));
        };
        return Div;
    }());
    Forms.Div = Div;
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
    }(Forms.Div));
    Forms.Cell = Cell;
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
    }(Forms.Div));
    Forms.Container = Container;
})(Forms || (Forms = {}));
var Forms;
(function (Forms) {
    var Form = (function () {
        function Form(value) {
            this.control = $.parseHTML('<form></form>')[0];
            this.fieldset = $.parseHTML('<fieldset></fieldset>')[0];
            this.legend = $.parseHTML('<legend></legend>')[0];
            $(this.control).append($(this.fieldset));
            $(this.fieldset).append($(this.legend));
            this.Text = value;
        }
        Object.defineProperty(Form.prototype, "Text", {
            get: function () {
                return this.text;
            },
            set: function (value) {
                this.text = value;
                $(this.legend).text(value);
            },
            enumerable: true,
            configurable: true
        });
        Form.prototype.AddControl = function (value) {
            if (!$(value).hasClass("form-group")) {
                var tmp = $.parseHTML('<div></div>')[0];
                $(tmp).addClass('form-group');
                $(tmp).append($(value));
                $(this.fieldset).append($(tmp));
            }
            else {
                $(this.fieldset).append($(value));
            }
        };
        return Form;
    }());
    Forms.Form = Form;
})(Forms || (Forms = {}));
var Forms;
(function (Forms) {
    var Label = (function () {
        function Label(value) {
            this.control = $.parseHTML('<label></label>')[0];
            this.Text = value;
        }
        Object.defineProperty(Label.prototype, "Text", {
            get: function () {
                return this.text;
            },
            set: function (value) {
                this.text = value;
                $(this.control).text(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Label.prototype, "For", {
            get: function () {
                return this.for;
            },
            set: function (value) {
                this.for = value;
                $(this.control).attr('for', this.for);
            },
            enumerable: true,
            configurable: true
        });
        return Label;
    }());
    Forms.Label = Label;
})(Forms || (Forms = {}));
var Forms;
(function (Forms) {
    var Input = (function () {
        function Input() {
            this.control = $.parseHTML('<input type="text">')[0];
            $(this.control).addClass('form-control');
            this.id = 'input-' + Math.floor((Math.random() * 1000) + 1).toString();
            $(this.control).attr('id', this.id);
        }
        Object.defineProperty(Input.prototype, "Id", {
            get: function () {
                return this.id;
            },
            enumerable: true,
            configurable: true
        });
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
    }());
    Forms.Input = Input;
})(Forms || (Forms = {}));
var Forms;
(function (Forms) {
    var FormGroup = (function () {
        function FormGroup(value) {
            this.control = $.parseHTML('<div></div>')[0];
            $(this.control).addClass('form-group');
            this.input = new Forms.Input();
            this.label = new Forms.Label(value);
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
        Object.defineProperty(FormGroup.prototype, "Text", {
            get: function () {
                return this.Input.Text;
            },
            set: function (value) {
                this.Input.Text = value;
            },
            enumerable: true,
            configurable: true
        });
        return FormGroup;
    }());
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
    var GridControl = (function () {
        function GridControl() {
            this.control = $.parseHTML('<table></table>')[0];
            this.head = $.parseHTML('<thead></thead>')[0];
            this.body = $.parseHTML('<tbody></tbody>')[0];
            $(this.control).append($(this.head));
            $(this.control).append($(this.body));
            $(this.control).addClass('table');
            $(this.control).addClass('table-hover');
            this.dataSource = new Array();
            this.rows = new Array();
            this.columns = Array();
        }
        Object.defineProperty(GridControl.prototype, "DoubleClick", {
            set: function (func) {
                this.doubleClick = func;
                for (var i = 0; i < this.rows.length; i++) {
                    $(this.rows[i].control).dblclick(func);
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
                $(this.head).empty();
                $(this.body).empty();
                var rowHeader = new Forms.TableHeaderRow();
                for (var i = 0; i < this.columns.length; i++) {
                    var headerColumn = new Forms.TableHeaderColumn(this.columns[i].Caption);
                    rowHeader.AddColumn(headerColumn);
                }
                $(this.head).append(rowHeader.control);
                for (var i = 0; i < this.dataSource.length; i++) {
                    var row = new Forms.TableRow();
                    for (var j = 0; j < this.columns.length; j++) {
                        var column = new Forms.TableCell(this.DataSource[i][this.columns[j].FieldName]);
                        row.AddColumn(column);
                    }
                    row.Object = this.dataSource[i];
                    this.rows.push(row);
                    $(this.body).append(row.control);
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
                if ($(this.rows[i].control).is(':hover')) {
                    return this.rows[i].Object;
                }
            }
        };
        return GridControl;
    }());
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
            this.modalDialog = new Forms.Div();
            $(this.modalDialog.control).addClass('modal-dialog');
            this.AddControl(this.modalDialog.control);
            this.modalContent = new Forms.Div();
            $(this.modalContent.control).addClass('modal-content');
            this.modalDialog.AddControl(this.modalContent.control);
            this.modalHeader = new Forms.Div();
            $(this.modalHeader.control).addClass('modal-header');
            this.modalContent.AddControl(this.modalHeader.control);
            this.modalBody = new Forms.Div();
            $(this.modalBody.control).addClass('modal-body');
            this.modalContent.AddControl(this.modalBody.control);
            this.modalFooter = new Forms.Div();
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
    }(Forms.Div));
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
    }(Forms.Div));
    Forms.Row = Row;
})(Forms || (Forms = {}));
var Forms;
(function (Forms) {
    var SelectOption = (function () {
        function SelectOption(value) {
            this.control = $.parseHTML('<option></option>')[0];
            this.Text = value;
        }
        Object.defineProperty(SelectOption.prototype, "Text", {
            get: function () {
                return this.text;
            },
            set: function (value) {
                this.text = value;
                $(this.control).text(value);
            },
            enumerable: true,
            configurable: true
        });
        return SelectOption;
    }());
    Forms.SelectOption = SelectOption;
})(Forms || (Forms = {}));
var Forms;
(function (Forms) {
    var Select = (function () {
        function Select() {
            this.control = $.parseHTML('<select></select>')[0];
            $(this.control).addClass('form-control');
            this.dataSource = new Array();
        }
        Object.defineProperty(Select.prototype, "DataSource", {
            get: function () {
                return this.dataSource;
            },
            set: function (value) {
                this.dataSource = value;
                for (var i = 0; i < this.DataSource.length; i++) {
                    var option = new Forms.SelectOption(this.DataSource[i][this.DisplayMember]);
                    $(option.control).val(this.DataSource[i][this.ValueMember]);
                    $(this.control).append($(option.control));
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Select.prototype, "Text", {
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
        return Select;
    }());
    Forms.Select = Select;
})(Forms || (Forms = {}));
var Forms;
(function (Forms) {
    var TableCell = (function () {
        function TableCell(text) {
            this.control = $.parseHTML('<td></td>')[0];
            this.Text = text;
        }
        Object.defineProperty(TableCell.prototype, "Text", {
            get: function () {
                return this.text;
            },
            set: function (value) {
                this.text = value;
                $(this.control).text(value);
            },
            enumerable: true,
            configurable: true
        });
        return TableCell;
    }());
    Forms.TableCell = TableCell;
})(Forms || (Forms = {}));
var Forms;
(function (Forms) {
    var TableHeaderColumn = (function () {
        function TableHeaderColumn(value) {
            this.control = $.parseHTML('<th></th>')[0];
            this.Text = value;
        }
        Object.defineProperty(TableHeaderColumn.prototype, "Text", {
            get: function () {
                return this.text;
            },
            set: function (value) {
                this.text = value;
                $(this.control).text(value);
            },
            enumerable: true,
            configurable: true
        });
        return TableHeaderColumn;
    }());
    Forms.TableHeaderColumn = TableHeaderColumn;
})(Forms || (Forms = {}));
var Forms;
(function (Forms) {
    var TableHeaderRow = (function () {
        function TableHeaderRow() {
            this.control = $.parseHTML('<tr></tr>')[0];
            this.columns = new Array();
        }
        TableHeaderRow.prototype.AddColumn = function (value) {
            this.columns.push(value);
            $(this.control).append($(value.control));
        };
        return TableHeaderRow;
    }());
    Forms.TableHeaderRow = TableHeaderRow;
})(Forms || (Forms = {}));
var Forms;
(function (Forms) {
    var TableRow = (function () {
        function TableRow() {
            this.control = $.parseHTML('<tr></tr>')[0];
            this.columns = new Array();
        }
        TableRow.prototype.AddColumn = function (value) {
            this.columns.push(value);
            $(this.control).append($(value.control));
        };
        return TableRow;
    }());
    Forms.TableRow = TableRow;
})(Forms || (Forms = {}));
//# sourceMappingURL=JSForms.js.map