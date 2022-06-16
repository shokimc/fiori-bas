sap.ui.define([
    "sap/ui/core/mvc/Controller"
],

    function (Controller) {
        "use strict";

        return Controller.extend("btptest.invoices.controller.Main", {
            onInit: function () {
                const oJSONModel = new sap.ui.model.json.JSONModel();
                oJSONModel.loadData("/model/selectionScreenMenu.json");
                this.getView().setModel(oJSONModel, "selectionScreen");
            }
        });
    });
