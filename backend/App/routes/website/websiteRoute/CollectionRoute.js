const express=require("express")
const { parentCategory } = require("../../../controller/website/product/productController")
const collectionRoutes=express.Router()

collectionRoutes.get("/parent-category",parentCategory)

module.exports={collectionRoutes}