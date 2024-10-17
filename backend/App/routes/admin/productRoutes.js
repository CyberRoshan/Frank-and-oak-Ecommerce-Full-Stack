const express = require("express");
const {
  sizeView,
  colorView,
  categoryView,
  subcategoryView,
  productInsert,
  productView,
  productSingleDelete,
} = require("../../controller/admin/productController");
const { uploads } = require("../../middleware/fileUploadation")

const productRoute = express.Router();

productRoute.post(
  "/product-insert",
  uploads("uploads/product").fields([
    {
      name: "productImage",
      maxCount: 1,
    },
    {
      name: "productGallery",
      maxCount: 10,
    },
    {
      name: "productAnimationImage",
      maxCount: 1,
    },
  ]),
  productInsert
);
productRoute.get("/product-view",productView)
productRoute.get("/parentcategory-view", categoryView);
productRoute.get("/size-view", sizeView);
productRoute.get("/color-view", colorView);
productRoute.get("/subcategory-view/:pid", subcategoryView);
productRoute.delete("/delete/:id",productSingleDelete)
module.exports = { productRoute };
