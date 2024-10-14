const express=require("express")
const { subCategoryInsert, parentCategoryView, subCategoryView, subCategorySingleDelete, subCategoryMultipleDelete } = require("../../controller/admin/subCategoryController")
const { uploads } = require("../../middleware/fileUploadation")

const subCategoryRoute=express.Router()

subCategoryRoute.get("/parent-category",parentCategoryView)
subCategoryRoute.post("/insert",uploads("uploads/subCategory").single("subCategoryImage"),subCategoryInsert)
subCategoryRoute.get("/view",subCategoryView)
subCategoryRoute.delete("/delete/:id",subCategorySingleDelete)
subCategoryRoute.post("/multiple-delete",subCategoryMultipleDelete)
module.exports={subCategoryRoute}