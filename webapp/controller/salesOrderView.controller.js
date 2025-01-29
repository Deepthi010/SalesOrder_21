sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
     "sap/m/MessageBox"
],
function (Controller,JSONModel,MessageBox) {
    "use strict";

    return Controller.extend("app.salesorderdisplay21.controller.salesOrderView", {
        onInit: function () {

        },
        onSelect:function(oEvent){
            var oItem = oEvent.getParameter("selectedItem");
            var key = oItem.mProperties.key
            // /BusinessPartnerSet('0100000003')/ToSalesOrders
           // var entity = "/BusinessPartnerSet('" + key + "')/ToSalesOrders" 
           var entity = "/BusinessPartnerSet('" + key + "')/ToSalesOrder" 
            var oModel = this.getOwnerComponent().getModel()
            var that = this

            
            oModel.read(entity,{
                success:function(odata, response){
             //if data is present data is displayed it no data is displayed
            // if "/BusinessPartnerSet('" + key + "')/ToSalesOrder" if api is wrong
            //i.e instead of ToSalesOrders it is given ToSalesOrder it will display error.message
                    if(response.statusCode==="200" || response.statusText==="OK"){
                    // console.log(odata)
                    // console.log(response)
                    var oJModel=new JSONModel(odata)
                    that.getView().setModel(oJModel,"SOModel")
                    }
                },
                error:function(error){
                    if(error.statusCode === "404" || error.statusText==="Not Found"){
                       MessageBox.show(error.message)
                    }
                }
            })


 
 
        

        }
    });
});
