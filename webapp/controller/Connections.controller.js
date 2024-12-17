sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("appns.mdname.controller.Connections", {
        onInit: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            // Attach the _onRouteMatched function to the "connections" route
            // Make sure "connections" is the correct route name from manifest.json
            oRouter.getRoute("connections").attachMatched(this._onRouteMatched, this);
        },

        _onRouteMatched: function (oEvent) {
            // Get route arguments: carrid and flightid
            var sCarrid = oEvent.getParameter("arguments").carrid;
            var sFlightid = oEvent.getParameter("arguments").flightid;

            // Get the Connections model
            var oModel = this.getOwnerComponent().getModel("Connections");
            var aConnections = oModel.getData();
            console.log("Connections Data Loaded:", aConnections);

            if (!Array.isArray(aConnections)) {
                console.error("Connections data is not an array. Check that Connections.json is loaded properly.");
                oModel.setProperty("/filteredConnections", []);
                return;
            }

            // Filter the data based on carrid and flightid
            var aFiltered = aConnections.filter(function (conn) {
                // Match exactly the Carrid and FlightNo fields
                return conn.Carrid === sCarrid && conn.FlightNo === sFlightid;
            });

            // Log filtered connections for debugging
            console.log("Filtered connections for:", sCarrid, sFlightid, aFiltered);

            // Set the filtered data to a known property path
            // Ensure your List or Table in Connections.view.xml is bound to "{Connections>/filteredConnections}"
            oModel.setProperty("/filteredConnections", aFiltered);
        },
        onSortName: function() {
            var oTable = this.byId("carrierTable");
            var oBinding = oTable.getBinding("items");
            var oSorter = new sap.ui.model.Sorter("Carrname", false); 
            oBinding.sort(oSorter);
        }
        
    });
});
