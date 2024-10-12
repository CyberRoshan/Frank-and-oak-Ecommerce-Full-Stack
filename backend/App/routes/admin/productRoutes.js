const express=require("express")
const { sizeView, colorView } = require("../../controller/admin/productController")

const productRoute=express.Router()

productRoute.get("/size-view",sizeView)
productRoute.get("/color-view",colorView)
module.exports={productRoute}