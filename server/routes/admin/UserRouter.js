var express = require('express');
const UserController = require('../../controllers/admin/UserController');
var UserRouter = express.Router();

/* GET home page. */
UserRouter.post("/adminapi/user/login",UserController.login)
//在路由中匹配到接口，到controller中进行处理，controllser的任务只不过是把前端数据返回给前端数据进行组合，
//具体的操作数据库交给了service
module.exports = UserRouter;
