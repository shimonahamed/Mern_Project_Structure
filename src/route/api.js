const express=require ('express')

const InvoiceController=require('../controler/InvoiceController')

const route=express.Router()

//Invoice & Payment
route.get('/CreateInvoice',InvoiceController.CreateInvoice)

module.exports=route;