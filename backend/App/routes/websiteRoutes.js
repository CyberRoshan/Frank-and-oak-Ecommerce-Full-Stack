const express=require("express")

const { collectionRoutes } = require("./website/websiteRoute/CollectionRoute")
const { websiteAuthRoute } = require("./website/auth/websiteAuthRoute")

const websiteRoute=express.Router()


websiteRoute.use("/collections",collectionRoutes)
websiteRoute.use("/auth",websiteAuthRoute)



module.exports={websiteRoute}