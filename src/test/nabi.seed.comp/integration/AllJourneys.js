sap.ui.define([
	"sap/ui/test/Opa5",
	"test/nabi/seed/comp/integration/arrangements/Arrangement",
	"test/nabi/seed/comp/integration/HomeJourney"
], function (Opa5, Arrangement) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Arrangement(),
		viewNamespace: "test.nabi.seed.comp.sampleapp.view",	// every waitFor will append this namespace in front of your viewName
		autoWait: true
	});
});
