sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],

    function (Controller, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("btptest.invoices.controller.Main", {
            onInit: function () {
                const oJSONModel = new sap.ui.model.json.JSONModel();
                const oView = this.getView();
                oJSONModel.loadData("/model/selectionScreenMenu.json");
                oView.setModel(oJSONModel, "selectionScreen");
            },
            onFilter: function(oEvent){
                const oSelectModel = this.getView().getModel("selectionScreen").getData();
                let filters = [];
                
                if(oSelectModel.ShipName !== ""){
                    filters.push(new Filter("ShipName", FilterOperator.Contains, oSelectModel.ShipName));
                }

                if(oSelectModel.CountryKey !== ""){
                    filters.push(new Filter("Country", FilterOperator.EQ, oSelectModel.CountryKey));
                }

                const oList = this.getView().byId("invoicesList");
                const oBinding = oList.getBinding("items");
                oBinding.filter(filters);

            },

            onClearFilter: function(){
                const oModelSelScreen = this.getView().getModel("selectionScreen");
                oModelSelScreen.setProperty("/ShipName", "");
                oModelSelScreen.setProperty("/CountryKey", "");
                this.onFilter();
            }
        });
    });
