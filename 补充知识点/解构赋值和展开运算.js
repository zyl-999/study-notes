let obj = {
    a: 12,
    b: 23,
    c: 444,
    d: 888
}


// let va = obj.a
// let vb = obj.b
// let { a: va, b: vb } = obj
// console.log(va, vb)


let arr = [1, 2, 3, 4, 5, 6, 7]
// let [, , a, , b] = arr;
// console.log(a, b)

let a = { v1: 12, v2: 22 };
let b = 222;
let obj2 = { a, b, c: 3 }
// console.log(obj2)

/**
 * 解构赋值, 对象：
 * let {a,b} = obj  // 相当于 let a=obj.a;  let b=obj.b;
 * let {a:va,b:vb} = obj // 相当于 let va=obj.a; let vb=obj.b; *
 * 解构赋值，数组：
 * let [a,b] = arr  相当于 let a = arr[0]; let b=arr[1]
 * let [,,a,,b] =arr 相当于 let a = arr[2]; let b=arr[4]
 * 组装：
 * let a = { v1: 12, v2: 22 };
 * let b = 2;
 * let obj2 = { a, b, c: 3 } 相当于 let obj2 = { a:a, b:b, c: 3 }
 * 
 * ... 展开运算
 * let arr3 = [...arr1, ...arr2] 展开数组，然后合并
 * let oj3 = { ...oj2, ...oj1 }  对象展开后合并, 同名属性 后面的覆盖前面的
 * arr1.splice(index, 1, ...arr2.slice(indx1,indx2))  展开运算的妙用
 * function fn(arr, index, delLen, ...items) { ... }  // 这种也叫 剩余参数，只能写在最后
 * 
 */


// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6]
// let arr3 = [...arr1, ...arr2]
// console.log(arr3)
// arr1.splice(1, 1, ...arr2.slice(0,2))
// console.log(arr1)

// let oj1 = { a: 1, b: 2 }
// let oj2 = { c: 3, b: 4 }
// let oj3 = { ...oj1, ...oj2 }
// console.log(oj3)
let arr5 = [1, 2, 3, 99, 100]
function fn(arr, index, delLen, ...items) {
    while (delLen-- > 0) {
        for (let i = index; i < arr5.length - 1; i++) {
            arr[i] = arr[i + 1]
        }
        arr5.length -= 1
    }
    arr = [...arr.slice(0, index), ...items, ...arr.slice(index)]
    return arr;
}
arr5 = fn(arr5, 0, 2, 3, 4, 5, 6)
// console.log(arr5) // // 1,3,4,5,6

console.log(parseFloat("1212.19s", 3))
console.log(parseInt("12s12s"))
for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);    // 输出 0 到 9
    }, 10);
}
for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);    // 输出 10 到 10
    }, 10);
}
let a = 1
let a = 2
console.log(a)
