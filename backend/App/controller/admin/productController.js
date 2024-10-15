const { categoryModel } = require("../../modal/admin/categoryModal")
const { colorModal } = require("../../modal/admin/colorModal")
const { sizeModal } = require("../../modal/admin/sizeModal")
const { subcategoryModel } = require("../../modal/admin/subCategoryModal")

let categoryView=async (req,res)=>{
    let categoryData=await categoryModel.find({categoryStatus:1})
    res.status(200).json({
        status:1,
        datalist:categoryData
    })
}

let subcategoryView=async (req,res)=>{
    let pid=req.params.pid
    let subcategoryData=await subcategoryModel.find({subCategoryStatus:1,parentCategoryId:pid})
    res.status(200).json({
        status:1,
        datalist:subcategoryData
    })
}

let sizeView=async (req,res)=>{
    let sizeData=await sizeModal.find({sizeStatus:1})
    res.status(200).json({
        status:1,
        datalist:sizeData
    })
}

let colorView=async (req,res)=>{
    let colorData=await colorModal.find({colorStatus:1})
    res.status(200).json({
        status:1,
        datalist:colorData
    })
}

let productInsert=(req,res)=>{

}
module.exports={sizeView, colorView, categoryView, subcategoryView,productInsert}