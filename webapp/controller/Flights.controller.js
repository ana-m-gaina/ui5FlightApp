sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
    "use strict";
    return Controller.extend("appns.mdname.controller.Flights", {
      onInit: function() {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.getRoute("flights").attachMatched(this._onRouteMatched, this);
      },
  
      _onRouteMatched: function(oEvent) {
        var sCarrid = oEvent.getParameter("arguments").carrid;
        var oModel = this.getOwnerComponent().getModel("Flights");
        var aFlights = oModel.getData();
  
   
        var aFiltered = aFlights.filter(f => f.Carrid === sCarrid);
        oModel.setProperty("/filteredFlights", aFiltered);
      },
  
      handleFlightPress: function(oEvent) {
        var oItem = oEvent.getSource();
        var oContext = oItem.getBindingContext("Flights");
        var sFlightNo = oContext.getProperty("FlightNo");
        var sCarrid = oContext.getProperty("Carrid");
  
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("connections", { carrid: sCarrid, flightid: sFlightNo });
      }
    });
  });
  