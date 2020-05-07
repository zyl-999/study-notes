function oushu() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            let random = Math.floor(Math.random() * 100)
            if (random % 2 === 0) {
                resolve(random)
            } else {
                // reject(random)
                throw new Error(random)
            }
        }, 300);
    })
}

// try {
//     oushu().then((n) => {
//         console.log("成功生成偶数", n)
//     })
// } catch (err) {
//     console.log("生成偶数失败", err.message)
// } finally {
//     console.log('over')
// }

const person = {
    say(msg) {
        console.log(msg)
        return {
            say(mm) {
                console.warn(mm)
                return this
            }
        };
    }
}

person.say('你好').say('我是超人').say('有一个小仙女，是我女朋友').say('就不告诉你她是谁')



