// https://nodejs.org/docs/latest/api/buffer.html

// 1. alloc
let buf = Buffer.alloc(10);
console.log(buf)

// 2. allocUnsafe，速度比 alloc 快，但是不安全
let buf2 = Buffer.allocUnsafe(10);  // unsafe: 因为可能包含旧的内存数据
console.log(buf2)

// 3. from
let buf3 = Buffer.from('hello');
console.log(buf3)

let buf4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])
console.log(buf4)


// buffer 与 字符串的转换
let buf5 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])
console.log(buf5.toString())    // 默认 utf-8 的转换


// buffer 元素的读写
let buf6 = Buffer.from('hello');
console.log(buf6[0])
console.log(buf6[0].toString(2))    // 数字的进制转换，01101000
buf6[0] = 95;
console.log(buf6)
console.log(buf6.toString())


// 溢出，如果修改的数值超过 255 ，则超过 8 位数据会被舍弃
let buf7 = Buffer.from('hello');
buf7[0] = 361;  // > 255, 舍弃高位数字, 0011 0110 0001 --> 0110 0001
console.log(buf7[0])
console.log(buf7[0].toString(2))

// 中文。一个 utf-8 的字符 一般 占3个字节
let buf8 = Buffer.from("你好")
console.log(buf8)