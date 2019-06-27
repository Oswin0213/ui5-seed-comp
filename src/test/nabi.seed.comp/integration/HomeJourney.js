/*global QUnit*/
sap.ui.define([
	"sap/ui/test/opaQunit",
	"test/nabi/seed/comp/sampleapp/localService/mockserver",
	"test/nabi/seed/comp/integration/pages/Home"
], function (opaTest, mockserver) {
		"use strict";

		mockserver.init();

		QUnit.module("Home Page");

		opaTest("Should see a list of customers when pressing the button - Component", function (Given, When, Then) {
			// Arrangements
			Given.iStartMyApp();

			// Actions
			When.onTheHomePage.iPressOnTheButtonWithIdAndText("openSelectDialogBtn", "Select Customer");

			// Assertions
			Then.onTheHomePage.iShouldSeeAListOfCustomersInADialog();

			// Cleanup
			Then.iTeardownMyApp();
		});

		/****************************************************************************************************
		 * OPA via IFrame can be really slow. When used with karma you may run into a timeout. In such cases
		 * you could increase the karma config option 'browserDisconnectTimeout' in your Gruntfile.
		 ****************************************************************************************************/
		/*
		 opaTest("Should see a list of customers when pressing the button - IFrame", function (Given, When, Then) {
			// Arrangements
			Given.theAppIsStartedInAFrame();

			// Actions
			When.onTheHomePage.iPressOnTheButtonWithIdAndText("openSelectDialogBtn", "Select Customer");

			// Assertions
			Then.onTheHomePage.iShouldSeeAListOfCustomersInADialog();

			// Cleanup
			Then.iTeardownMyAppFrame();
		});
		*/

	}
);
