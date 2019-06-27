sap.ui.define([
	"sap/m/Shell",
	"sap/ui/core/ComponentContainer"
], function (Shell, ComponentContainer) {
	"use strict";

	new Shell({
		app: new ComponentContainer({
			name : "test.nabi.seed.comp.sampleapp"
		})
	}).placeAt("content");

});
