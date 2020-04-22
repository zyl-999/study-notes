// 请求处理服务
const goodsService = require('./goods')
/**
 * @param {string} uri
 */
module.exports = function (method,pathname, query) {
    pathname = pathname.toLocaleLowerCase()
    console.log(pathname,query)
    if ('/getgoods' === pathname) {
        return goodsService.getGoods(+query.id)

    } else if ('/getall' === pathname) {
        return goodsService.getAllGoods()

    } else if ('/delete' === pathname) {
        return goodsService.deleteGoods(+query.id)

    } else if ('/modify' === pathname) {
        return goodsService.modifyGoods(+query.id)
    } else if ('/create'===pathname){
        return goodsService.createGoods(JSON.parse(query.goods))

    }else{
        return;
    }   
   

}