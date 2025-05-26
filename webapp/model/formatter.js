sap.ui.define([
    "sap/m/library",
    "sap/ui/model/type/Currency"
], function (mobileLibrary, Currency) {
    "use strict";
    return {
        formatMail: function(sEid) {			
            var oModel= new sap.ui.model.resource.ResourceModel({ 
                bundleUrl : "i18n/i18n.properties" });
            var oBundle = oModel.getResourceBundle();			
            return mobileLibrary.URLHelper.normalizeEmail(sEid + oBundle.getText("domain"),
                oBundle.getText("mailSubject", [sEid]),				
                oBundle.getText("mailBody"));
        },
            
        formatStockValue: function (fUnitPrice, iStockLevel, sCurrCode) {
            var oCurrency = new Currency();
            return oCurrency.formatValue([fUnitPrice * iStockLevel, sCurrCode], "string");
        }
    };
});