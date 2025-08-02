/**
 * fs 模块 - writeFile 方法使用示例
 * 用于异步地将数据写入文件，如果文件已存在则覆盖文件
 * 
 * 语法: fs.writeFile(file, data[, options], callback)
 * 
 * @param {string|Buffer|URL|number} file - 文件名或文件描述符
 * @param {string|Buffer|TypedArray|DataView} data - 要写入的数据
 * @param {Object|string} [options] - 选项对象或字符编码
 * @param {string} [options.encoding='utf8'] - 字符编码
 * @param {number} [options.mode=0o666] - 文件权限
 * @param {string} [options.flag='w'] - 文件系统标志
 * @param {Function} callback - 完成回调
 */
const fs = require('fs')

// 示例1: 基本写入
// 最简单的使用方式，仅提供必需的参数
fs.writeFile('./test1.txt', '这是基本写入示例', (err) => {
    if (err) {
        console.log('写入失败：', err)
        return
    }
    console.log('基本写入成功！')
})

// 示例2: 指定编码写入
// 通过 options 参数指定字符编码
fs.writeFile('./test2.txt', '这是指定编码的写入示例', {
    encoding: 'utf8'
}, (err) => {
    if (err) {
        console.log('写入失败：', err)
        return
    }
    console.log('指定编码写入成功！')
})

// 示例3: 追加模式写入
// 使用 flag: 'a' 实现追加写入而不是覆盖
fs.writeFile('./test3.txt', '\n这是追加的内容', {
    flag: 'a',
    encoding: 'utf8'
}, (err) => {
    if (err) {
        console.log('写入失败：', err)
        return
    }
    console.log('追加写入成功！')
})

// 示例4: 写入 Buffer 数据
// 演示如何写入二进制数据
const buffer = Buffer.from('这是 Buffer 写入示例')
fs.writeFile('./test4.txt', buffer, (err) => {
    if (err) {
        console.log('写入失败：', err)
        return
    }
    console.log('Buffer 写入成功！')
})

/**
 * flag 参数的常用值：
 * 'w': 写入模式（默认）
 * 'a': 追加模式
 * 'r+': 读写模式
 * 'wx': 排他写入模式
 * 
 * 错误处理最佳实践：
 * 1. 始终检查错误对象
 * 2. 使用 return 提前退出
 * 3. 提供有意义的错误信息
 */