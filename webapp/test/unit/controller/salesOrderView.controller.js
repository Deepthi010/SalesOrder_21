/*global QUnit*/

sap.ui.define([
	"app/salesorderdisplay_21/controller/salesOrderView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("salesOrderView Controller");

	QUnit.test("I should test the salesOrderView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
