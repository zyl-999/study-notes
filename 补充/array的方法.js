let arr = [1, 3, 2, 5, 7, 4, 3, 9, 8, 0]
// 过滤
let res = arr.filter(function (ele, ind, array) {
    // console.log(ele,ind,array)
    return ele % 3 === 0

})
// 单纯的遍历
arr.forEach((ele, index, arry) => {
    // console.log(ele,index,arry)
})

res = arr.map(ele => String.fromCharCode('a'.charCodeAt(0) + ele))

// console.log(res,arr)
'efg'.charAt(2)  // g
'efg'.charCodeAt(2)  // g 的 Unicode码
String.fromCharCode(97, 98, 99)  // 'abc'
// =>  

// arr.reverse()  // 会改变原数组，将元素顺序颠倒
// console.log(arr)

// push pop unshift shift 会改变原数组
// 模拟 队列，先进先出，后进后出
function Queen() {
    let arr = []
    this.in = (...items) => {
        arr.push(...items)
    }
    this.out = () => {
        return arr.pop()
    }
    this.showQueen = () => {
        console.log(arr)
    }
}
let queen = new Queen()
queen.in(1)
queen.in(2)
queen.out()
queen.in(3)
queen.in(4)
// queen.showQueen()
// 模拟栈 栈：后进先出，先进后出


arr = [1, 2, 11, 3, 'z', 'a', 'x', 'c11', 'c2', 'c1']  // n*log(n)
// 排序
// arr.sort((a,b)=>{
//     return 1  // 颠倒数组。
//   //  返回 小于等于0 位置不变；返回大于0的 位置改变
// })

arr.sort((a, b) => {
    if (typeof a === 'number') {
        if (typeof b === 'number') {
            return a - b
        } else {
            return -1
        }
    } else {
        if (typeof b === 'number') {
            return 1
        } else {
            // 两个字符串比较  'abc'  'abcd'
            let i = 0;
            while (i < a.length && i < b.length && a.charCodeAt(i) === b.charCodeAt(i)) {
                i++
            }
            // 
            if (i >= a.length) {
                if (i < b.length) {
                    return -1  
                } else {
                    return 0
                }
            } else {
                if (i >= b.length) {
                    return 1
                } else {
                    return a.charCodeAt(i) - b.charCodeAt(i)
                }
            }
        }
    }
})
// 会改变元素组
// sort里面可以传入一个比较函数，如果不传 默认的比较函数
// 默认的是将所有的元素 先转换成字符串，按字符串的规则比：
// 先比较第一个，如果能确定大小就结束比较，如果不能就比较第二个，以此类推。
// 如果 一个字符串比较完了，另一个字符串还有长度，另一个字符串大
// 

// arr.sort((a, b) => a - b) // 升序
// arr.sort((a, b) => b - a) // 降序
// console.log(arr)

// arr.findIndex

/**
 * 
 * @param {Array} arr 
 * @param {(a,b)=>number} fn 
 */
function mySort(arr, fn) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (fn(arr[i], arr[j]) > 0) {
                let buf = arr[j]
                arr[j] = arr[i]
                arr[i] = buf
            }

        }
    }
}
let arr1 = [1,4,3,6,9,2,6,1]
mySort(arr1,(a,b)=>b-a)
console.log(arr1)


let arr = [11, 121, 13, 142]
arr.forEach(ele => {
    // console.log(ele)
})
// arr.reduce()
// console.log(arr.slice(1, 2))
// console.log(arr)
// console.log(arr.some(e => e % 3 === 0))
console.log(arr.filter(e => e % 2 !== 0).map(e => e - 10).map(e => e * 10))