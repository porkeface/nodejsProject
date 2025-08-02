//相对路径：以./或../开头的路径，很容易出现路径动态凭借错误问题
//原因：在运行代码时，会以node命令时所处的目录，动态拼接出被操作文件的完整路径

//绝对路径：以/开头的路径，表示从根目录开始查找文件
//绝对路径在不同操作系统下表现不一致，建议使用path模块来处理路径问题
//path模块：Node.js内置模块，提供了处理文件和目录路径的工具函数
//path模块的使用：
//1.导入path模块
const path = require('path')
//2.使用path.join()方法拼接路径,可以传入多个路径片段，返回拼接后的路径，会根据操作系统的不同，自动添加路径分隔符（/或\）
//__dirname：当前模块所在目录的绝对路径
console.log(__dirname) //绝对路径：D:\Soft\code Project\nodejsProject
var path1 = path.join(__dirname, 'node.js')
console.log(path1) //绝对路径：D:\Soft\code Project\nodejsProject\node.jS

const fs = require('fs')
fs.readFile(path1, 'utf-8', function(err, data) {
    //3.判断是否有错误
    if(err){
        console.log(err.message)
        console.log(err)
    }else{
        console.log("读取文件成功")
        console.log(data)
    }
})

//path.basename(fpath,'fextension')：可以从一个文件路径中，获取路径的文件名部分
//fpath：文件路径,fextension：文件扩展名
const path2 = path.join(__dirname, 'node.js')
console.log(path.basename(path2)) //node.js
console.log(path.basename(path2, '.js')) //node

