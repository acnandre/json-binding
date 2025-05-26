sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sapips/training/jsonbinding/model/formatter"
], (Controller, JSONModel, formatter) => {
    "use strict";

    return Controller.extend("sapips.training.jsonbinding.controller.JSONBinding", {
        formatter: formatter,
        onInit() {
            var oModel = new JSONModel({
                "EID": "andre.m.dumandan",
                "Enabled": false,
                "Address": {
                    "Street": "Mackenzie Heights",
                    "City": "Los Angeles",
                    "Zip": "1801",
                    "Country": "United States",
                },
                "SalesAmount": 999999,
                "CurrencyCode":"PHP",
            });
            var oSimpleForm1 = this.getView().byId("sf1");
            var oSimpleForm2 = this.getView().byId("sf2");
            var oList1 = this.getView().byId("list1");
            oSimpleForm1.setModel(oModel);
            oSimpleForm2.setModel(oModel);
            oList1.setModel(oModel);

            this.getView().byId("eidInp").setProperty("enabled",false);
            this.getView().byId("salesAmtInp").setProperty("enabled",false);

            var oSimpleForm3 = this.getView().byId("sf3");
            var oProductModel = new sap.ui.model.json.JSONModel();
			oProductModel.loadData("./model/ProductsModel.json");
			// sap.ui.getCore().setModel(oProductModel, "products");
            oSimpleForm3.setModel(oProductModel);
        },
        onItemSelected(oEvent) {
			const oSelectedItem = oEvent.getSource();
			const oContext = oSelectedItem.getBindingContext("ProductsModel");
            console.log(oContext);
			const sPath = oContext.getPath();
            console.log(sPath);
			const oProductDetailForm = this.byId("sf3");
			oProductDetailForm.bindElement({ path: sPath, model: "ProductsModel" });
		}
    });
}); 