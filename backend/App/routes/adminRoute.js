const express=require("express")
const { categoryRoute } = require("./admin/categoryRoutes")
const { sizeRoute } = require("./admin/sizeRoutes")
const { storyRoute } = require("./admin/storyRoutes")
const { sliderRoute } = require("./admin/sliderRoutes")
const { colorRoute } = require("./admin/colorRoutes")
const adminRoute=express.Router()

adminRoute.use("/category",categoryRoute)
adminRoute.use("/size",sizeRoute)
adminRoute.use("/story",storyRoute)
adminRoute.use("/slider",sliderRoute)
adminRoute.use("/color",colorRoute)

module.exports={adminRoute}