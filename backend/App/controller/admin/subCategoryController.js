const { categoryModel } = require("../../modal/admin/categoryModal");
const { subcategoryModel } = require("../../modal/admin/subCategoryModal");

let parentCategoryView = async (req, res) => {
  try {
    let categoryData = await categoryModel.find({ categoryStatus: 1 });
    res.status(200).json({
      status: 1,
      datalist: categoryData,
    });
  } catch (error) {
    res.status(500).json({
      status: 0,
      message: "Internal Server Error",
      error: error,
    });
  }
};

let subCategoryInsert = async (req, res) => {
  let subCategoryData = {
    subCategoryName: req.body.subCategoryName,
    parentCategoryId: req.body.parentCategoryId,
    subcatDescription: req.body.subcatDescription,
    subCategoryStatus: req.body.subCategoryStatus,
  };
  if (req.file) {
    if (req.file.filename) {
      subCategoryData["subCategoryImage"] = req.file.filename;
    }
  }
  try {
    const subCategoryCollection = new subcategoryModel(subCategoryData);

    let subCatRes = await subCategoryCollection.save();
    res.status(200).json({
      status: 1,
      message: "Data saved.",
      res: subCatRes,
    });
  } catch (error) {
    res.status(500).json({
      status: 0,
      message: "sub category already exists !",
      error: error,
    });
  }
};

let subCategoryView = async (req, res) => {
  try {
    let subCategoryData = await subcategoryModel
      .find()
      .populate("parentCategoryId", "categoryName");
    res.status(200).json({
      status: 1,
      path:process.env.SUBCATEGORY_STATIC_PATH,
      datalist: subCategoryData,
    });
  } catch (error) {
    res.status(500).json({
      status: 0,
      message: "Internal server error !",
      error: error.message,
    });
  }
};

module.exports = { subCategoryInsert, parentCategoryView, subCategoryView };
