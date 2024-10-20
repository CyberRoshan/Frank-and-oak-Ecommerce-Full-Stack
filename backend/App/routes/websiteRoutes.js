const express=require("express")
const { websiteAuthRoute } = require("./website/auth/websiteAuthRoute")

const websiteRoute=express.Router()

websiteRoute.use("/auth",websiteAuthRoute)

module.exports={websiteRoute}