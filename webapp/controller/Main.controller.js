sap.ui.define([
    "sap/ui/core/mvc/Controller"
],

    function (Controller) {
        "use strict";

        return Controller.extend("btptest.invoices.controller.Main", {
            onInit: function () {
                const oJSONModel = new sap.ui.model.json.JSONModel();
                const oView = this.getView();
                oJSONModel.loadData("/model/selectionScreenMenu.json");
                oView.setModel(oJSONModel, "selectionScreen");
            },
            onFilter: function(oEvent){
                
                
                

            },

            onClearFilter: function(){
                const oModelSelScreen = this.getView().getModel("selectionScreen");
                oModelSelScreen.setProperty("/ShipName", "");
                oModelSelScreen.setProperty("/CountryKey", "");
            }
        });
    });
