const express = require('express')
const controller = require("../Controller/users")
const upload = require('../middleware/uploadfile')
const Route = express.Router()

Route.get("/", controller.all)
Route.post("/",upload.single("photo"), controller.add)

module.exports = Route