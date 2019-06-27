sap.ui.define([
	"test/nabi/seed/comp/sampleapp/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"sap/base/Log",
], function(BaseController, JSONModel, MessageToast, Log) {
	"use strict";

	return BaseController.extend("test.nabi.seed.comp.sampleapp.controller.Home", {

		onInit : function(){
			var oModel;

			oModel = new JSONModel({
				customerSelectionLoaded : false
			});
			this.getView().setModel(oModel, "view");
		},

		onComponentCreated : function(oEvent){
			var oComp = oEvent.getParameter("component");

			// use documented public Component APIs only
			oComp.setText("Select Customer");
			//...

			oComp.attachCustomerSelected(this.onCustomerSelected);
		},

		onCustomerSelected : function(oEvent){
			var oCustomer = oEvent.getParameter("customer");
			MessageToast.show("Selected Customer: CustomerID=" + oCustomer.CustomerID + ", CompanyName=" + oCustomer.CompanyName);
			Log.info(oCustomer);
		},

		onExit : function() { }

	});
});
