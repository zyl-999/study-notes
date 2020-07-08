let a = {
    name: 'Green',
    age: 16
}  // a 实际上是一个引用
let b = {
    name: 'Green',
    age: 16
}
let d = a
// console.log(a === d) // false 比较 对象是否相等，比较的是其引用

// let c = a   // 对象a的本质是引用，这里 a 和 c 是同一个对象的不同引用。可以将引用想象成一个地址（地址就是一个8字节的整数）
// amfgnh
// c.age = 17;
// console.log(c.age, a.age)

function fn(person) {
    // 
    person = 15
    console.log(person)
}

// 对象引用产生的 “副作用” 
// console.log(a.age)
// fn(a.age)
// console.log(a.age)

// 传递数据快，占用内存小
// 可以让数据变化同步(是优点也是缺点)
// 对象的拷贝就比较难

let car = {
    brand: '大众',
    wheels: 4,
    owner: {
        name: 'Mr.zhou',
        age: '18',
        girlFrind: {
            name: 'Ms.zhao',
            age: 16,
            father: {
                age: 45
            }
        }
    }
}

// 自己 直接或间接的调用 自己，这样的函数就是递归函数
function clone(obj) {
    let objClone = {}
    for (let key in obj) {
        if (typeof obj[key] !== 'object') {
            objClone[key] = obj[key]
        } else {
            // 
            objClone[key] = clone(obj[key])
        }
    }
    return objClone
}


// let carClone = car;
// let carClone = {}
// for (let key in car) { // 循环 枚举 对象里的可枚举属性
//     console.log(key)
//     if (typeof car[key] !== 'object') {
//         carClone[key] = car[key]
//     } else {
//         carClone[key] = {}
//         for (let k in car[key]) {
//             carClone[key][k] = car[key][k]
//         }
//     }

// }
let carClone = clone(car)
car.wheels = 3
// console.log(carClone.wheels)

car.owner.age++
car.owner.girlFrind.father.age++

// console.log(carClone.owner.girlFrind.father.age)


/**
 * A B C 三个柱子
 * 有一叠带孔的碟子 放在柱子A上，要移动到C上，要求每次只能移动最上面的一个碟子，并且也只能放在最上面，并且当任意两个碟子在同一个柱子时，他们的上下关系保持不变
 * 对碟子从下往上依次编号：[5,4,3,2,1,0]
 * 
 */
const A = [0]
const B = []
const C = []
console.log(B===C)
/**
 * 
 * @param {Array} from 
 * @param {Array} to 
 */
function Move(from, to) {
    if (from.length === 1) {
        let top = from.pop()
        to.push(top)
        return;
    }
    if (from.length === 2){

    }


}
Move( A, C)
console.log(A, B, C)
