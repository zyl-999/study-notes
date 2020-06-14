let set = new Set()  // 只能存放不重复的元素，已存在的元素 添加将失败
set.add('abc')
set.add('a')
set.add('a')

set.delete('a')
set.add('b')
set.add('c')
// set.clear()
// console.log(set.has('a'))

// console.log(set,set.size)
let arr = [1, 2, 3, 2, 1, 4]
arr = Array.from(new Set(arr))
//  console.log(arr)

let map = new Map()
map.set('zhaoyanling', { birthday: '1994-06-10', gender: 'female' })
map.set('zhouweicheng', { birthday: '1990-11-27', gender: 'male' })
map.set('zhaoyanling', map)
map.set('zhaoyanling', 123)
map.set('zhaoyanling', set)

// map.clear()
map.delete('zhaoyanling')
let info = map.get('zhaoyanling')
console.log(map.size, info)


/**
* Set API: add() delete() clear() has() size
特点：
* 1、元素不会重复  ====
* 2、无序
* 创建set  : new Set()   new Set(array)
* 
* Map API: set(key,value)  get(key) delete(key) has(key) clear() size
* 特点：
一个key对应一个value，key具有唯一性,不能重复，value可以是任何类型，可以重复
* 无序
* 
*/