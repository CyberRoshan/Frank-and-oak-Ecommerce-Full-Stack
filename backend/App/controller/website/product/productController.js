const { categoryModel } = require("../../../modal/admin/categoryModal")

let parentCategory=async (req,res)=>{
    let parentData=await categoryModel.find({categoryStatus:true})
    res.status(200).json({
        status:1,
        dataList:parentData
    })
}

module.exports={parentCategory}