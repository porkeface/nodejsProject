//1.导入fs模块，用来操作文件
const fs =require('fs')

//2.调用fs.readfloe()方法读取文件
//参数1：路径
//参数2：读取编码格式
//参数3：回调函数
// err 和 data 的意义
// err (第一个参数)：
// 如果操作成功完成，err 会是 null 或 undefined
// 如果操作失败，err 会是一个 Error 对象，包含错误详情
// 这强制开发者必须处理错误情况
// data (第二个参数)：
// 操作成功时返回的结果数据
// 内容取决于具体操作：
// fs.readFile: 文件内容
// fs.stat: 文件状态对象
// fs.readdir: 目录内容数组
// 如果操作失败，data 通常是 undefined
// 参数顺序是固定的：必须 (err, data)，不能 (data, err)
// 参数名称可以改变：你可以命名为 (error, content) 等，但顺序不变
// 这是 Node.js 的约定：几乎所有 Node.js 核心模块都遵循这个模式
//2.调用fs.readFlie()方法读取文件

fs.readFile('./node.js', 'utf-8', function(err, data) {
    //3.判断是否有错误
    if(err){
        console.log("读取文件失败")
        console.log(err)
    }else{
        console.log("读取文件成功")
        console.log(data)
    }
})