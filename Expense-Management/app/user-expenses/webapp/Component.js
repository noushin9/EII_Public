sap.ui.define(
    ["sap/fe/core/AppComponent", "sap/ui/model/json/JSONModel"],
    function (Component, JSONModel) {
        "use strict";

        return Component.extend("users.userexpenses.Component", {
            metadata: {
                manifest: "json"
            },

            init: function () { 
                Component.prototype.init.apply(this, arguments);

                const oModel = new JSONModel("/model/data.json");
                this.setModel(oModel, "localData");
            }
            
        });
    }
);