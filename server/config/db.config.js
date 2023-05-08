const mongoose = require("mongoose")

// mongoose.connect("mongodb://127.0.0.1:27017/company-system")
mongoose.connect("mongodb://127.0.0.1:27017/company-system")
.then(()=>{console.log('数据连接成功')})
.catch(()=>{console.log('数据库连接失败')})
// mongoose.connect("mongodb://localhost:27017/company-system")