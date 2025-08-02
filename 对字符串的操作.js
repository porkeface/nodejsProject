// 1. 基本操作示例
let str1 = "Hello World";

// 获取长度
str1.length  // 11

// 获取字符
str1.charAt(0)     // "H"
str1[0]           // "H" (也可以这样访问)

// 2. 查找位置示例
let str2 = "Hello World";

// indexOf: 查找子串首次出现的位置
str2.indexOf("o")    // 4
str2.lastIndexOf("o") // 7  (最后一次出现的位置)

// includes: 判断是否包含子串
str2.includes("World")  // true

// startsWith/endsWith: 判断开头/结尾
str2.startsWith("Hello")  // true
str2.endsWith("World")    // true

// 3. 截取和分割示例
let str3 = "Hello World";

// slice: 截取子串
str3.slice(0, 5)     // "Hello"
str3.slice(6)        // "World"

// split: 分割字符串
str3.split(" ")      // ["Hello", "World"]
str3.split("")       // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]

// 4. 大小写转换示例
let str4 = "Hello World";

str4.toUpperCase()   // "HELLO WORLD"
str4.toLowerCase()   // "hello world"

// 5. 去除空格示例
let str5 = "  Hello World  ";

str5.trim()          // "Hello World"
str5.trimStart()     // "Hello World  "
str5.trimEnd()       // "  Hello World"

// 6. 替换示例
let str6 = "Hello World";

// replace: 替换第一个匹配
str6.replace("o", "0")     // "Hell0 World"

// replaceAll: 替换所有匹配
str6.replaceAll("o", "0")  // "Hell0 W0rld"

// 7. 字符串连接示例
let str7a = "Hello";
let str7b = "World";

// concat
str7a.concat(" ", str7b)    // "Hello World"

// 模板字符串
`${str7a} ${str7b}`        // "Hello World"

// + 运算符
str7a + " " + str7b        // "Hello World"

// 8. 正则匹配示例
let str8 = "Hello World";

// match: 匹配正则表达式
str8.match(/o/g)    // ["o", "o"]

// search: 查找匹配的位置
str8.search(/World/)  // 6