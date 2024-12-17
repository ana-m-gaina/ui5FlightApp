sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/model/Filter", "sap/ui/model/FilterOperator", "sap/ui/model/Sorter"], 
    function(Controller, Filter, FilterOperator, Sorter) {
        "use strict";
    
        return Controller.extend("appns.mdname.controller.Carrier", {
            onInit: function() {
                console.log("Carrier Controller Initialized");
            },
    
            handleListItemPress: function(oEvent) {
                var oItem = oEvent.getSource();
                var oContext = oItem.getBindingContext("Carrier");
                var sCarrid = oContext.getProperty("Carrid");
                console.log("Selected Carrier ID:", sCarrid);
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("flights", { carrid: sCarrid });
            },
    
            onSearch: function(oEvent) {
                // Get the search query
                var sQuery = oEvent.getParameter("query") || oEvent.getParameter("newValue");
    
                // Build filter if query is not empty
                var aFilters = [];
                if (sQuery) {
                    // Search by Carrid or Carrname
                    aFilters.push(new Filter({
                        filters: [
                            new Filter("Carrid", FilterOperator.Contains, sQuery),
                            new Filter("Carrname", FilterOperator.Contains, sQuery)
                        ],
                        and: false
                    }));
                }
    
                // Apply filter to table items
                var oTable = this.byId("carrierTable");
                var oBinding = oTable.getBinding("items");
                oBinding.filter(aFilters, "Application");
            },

            onSortName: function() {
                // Sort by Carrname in ascending order
                var oTable = this.byId("carrierTable");
                var oBinding = oTable.getBinding("items");
                var oSorter = new Sorter("Carrname", false); // false means ascending
                oBinding.sort(oSorter);
            },

            onSortId: function() {
                // Sort by Carrid in ascending order
                var oTable = this.byId("carrierTable");
                var oBinding = oTable.getBinding("items");
                var oSorter = new Sorter("Carrid", false);
                oBinding.sort(oSorter);
            },

            onAddCarrier: function() {
                // Collect the input data
                var sCarrid = this.byId("inputCarrid").getValue();
                var sCarrname = this.byId("inputCarrname").getValue();
                var sUrl = this.byId("inputUrl").getValue();
    
                // Basic validation
                if (!sCarrid || !sCarrname) {
                    MessageToast.show("Carrier ID and Name are required.");
                    return;
                }
    
                // Get the current carrier data
                var oModel = this.getOwnerComponent().getModel("Carrier");
                var aCarriers = oModel.getData(); // Assuming the model is a simple JSON array
    
                // Add the new carrier to the array
                aCarriers.push({
                    "Carrid": sCarrid,
                    "Carrname": sCarrname,
                    "Url": sUrl
                });
    
                // Update the model
                oModel.setData(aCarriers);
    
                // Clear the input fields
                this.byId("inputCarrid").setValue("");
                this.byId("inputCarrname").setValue("");
                this.byId("inputUrl").setValue("");
    
                MessageToast.show("New carrier added successfully!");
            }

        });
    }
);
