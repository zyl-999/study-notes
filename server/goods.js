// node nodejs node.js
//1.数据库
const goodsList = [{
    id: 1,
    name: 'xiaogou',
    price: 33,
    type: 'pet',
    img: './i04.jpg',
    detail: 'this is a dog; it is a male dog and i.......'
}, {
    id: 2,
    name: 'maojin',
    price: 5,
    type: 'ryp',
    img: './i01.jpg',
    detail: 'a very godd mj'
}, {
    id: 3,
    name: 'xiangshui',
    price: 120,
    type: 'hzp',
    img: './iwa.jpg',
    detail: 'a b c d e'
}]
// 模拟后端的 业务服务功能
let idGenerator = 4
module.exports = {
    getGoods(id) {
        // 具体的详情
        for (let i = 0; i < goodsList.length; i++) {
            if (goodsList[i].id === id) {
                return goodsList[i]
            }
        }
        return null
    },
    getAllGoods() {
        // 通常可以有各种筛选条件，分页
        return goodsList
    },
    deleteGoods(id) {
        for (let i = 0; i < goodsList.length; i++) {
            if (goodsList[i].id === id) {
                goodsList.splice(i, 1)
                return true;
            }
        }
        return false;

    },
    createGoods(goods) {
        goods.id = idGenerator++
        goodsList.push(goods)        
        return true
    },
    modifyGoods(goods) {
        for (let i = 0; i < goodsList.length; i++) {
            if (goodsList[i].id === goods.id) {
                goodsList[i] = goods
                return true
            }
        }
        return false
    }
}