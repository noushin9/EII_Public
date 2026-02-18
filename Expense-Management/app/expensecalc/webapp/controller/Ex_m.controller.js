sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("expense.expensecalc.controller.Ex_m", {
        formatter: {
            getLength: function(array) {
                return array ? array.length : 0;
            }
        },

        onInit() {
        },

        onSave() {
            // Implement save logic
            const expName = this.byId("expName").getValue();
            const amount = this.byId("amount").getValue();
            // Add logic to save the expense
            console.log("Saving expense:", expName, amount);
        },

        onClear() {
            this.byId("expName").setValue("");
            this.byId("amount").setValue("");
        }
    });
});