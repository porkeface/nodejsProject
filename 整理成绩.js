const fs = require('fs');

// 1.导入fs模块，用来操作文件
fs.readFile('./grade.txt', 'utf-8', function(err, data) {
    if(err) {
        console.log("读取文件失败")
        return console.log(err)
    }
    
    console.log("读取文件成功")
    // 返回lines是一个集合
    const lines = data.split(' ');
    console.log(lines)
    fs.writeFile('./grade1.txt', '', { encoding: 'utf-8' }, (err) => {
        if (err) {
            return console.log('清空文件失败：', err)
        }
    })
    lines.forEach(element => {
        fs.writeFile('./grade1.txt', element + '\n', { flag: 'a', encoding: 'utf-8' }, (err) => {
            if (err) {
                return console.log('写入失败：', err)
            }
            console.log('写入成功！')
        })

    });
    
    // // 先清空文件，然后在回调中进行写入操作
    // fs.writeFile('./grade1.txt', '', { encoding: 'utf-8' }, (err) => {
    //     if (err) {
    //         return console.log('清空文件失败：', err)
    //     }

    //     // 将所有内容合并后一次性写入，避免多次异步写入
    //     const content = lines.join('\n')
    //     fs.writeFile('./grade1.txt', content, {
    //         flag: 'w', // 使用写入模式，而不是追加模式
    //         encoding: 'utf-8'
    //     }, (err) => {
    //         if (err) {
    //             return console.log('写入失败：', err)
    //         }
    //         console.log('写入成功！')
    //     })
    // })

})
