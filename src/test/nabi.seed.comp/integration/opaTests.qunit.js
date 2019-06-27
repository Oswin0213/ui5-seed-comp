/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"test/nabi/seed/comp/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});