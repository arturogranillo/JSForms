/// <reference path="dal.ts" />
/// <reference path="frmperson.ts" />
function Initialize(): void {


    ////var row1 = new Forms.Row();
    ////container.AddControl(row1.control);
    ////var cell11 = new Forms.Cell(12);
    ////row1.AddControl(cell11.control);

    ////menu
    var menu = new Forms.NavBar();
    ////menu.Stacked = true;
    var cmdPersons = menu.AddLink("Person", "#");
    var cmdSales = menu.AddLink("Sales", "#");
    menu.AddLink("Report", "#");
    ////var dropDown = new Forms.NavSubItem("Help");
    ////dropDown.AddLink("About", "#");
    ////dropDown.AddLink("Send Feedback", "#");
    ////dropDown.AddLink("Help", "#");
    ////menu.AddControl(dropDown);
    document.body.appendChild(menu.control);

    ////main container
    var container = new Forms.Container();
    document.body.appendChild(container.control);
    var row2 = new Forms.Row();
    container.AddControl(row2.control);
    var cell12 = new Forms.Cell(12);
    row2.AddControl(cell12.control);
    ////PanelList
    var frmPersonList = new App.FrmPersonList();
    frmPersonList.Jq.hide();
    var frmSalesList = new App.FrmSalesList();
    frmSalesList.Jq.hide();

    cell12.Append(frmPersonList);
    cell12.Append(frmSalesList);

    cmdSales.Jq.click(() => {
        frmPersonList.Jq.hide();
        frmSalesList.Jq.show();
    });

    cmdPersons.Jq.click(() => {
        frmSalesList.Jq.hide();
        frmPersonList.Jq.show();
    });
}

window.onload = () => {
    Initialize();
};