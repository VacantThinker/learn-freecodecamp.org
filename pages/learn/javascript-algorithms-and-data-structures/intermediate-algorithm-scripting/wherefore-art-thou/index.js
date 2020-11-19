/**
 * source数组在不在collection数组中? 在的话, 请找出包含source数组的元素, 并返回新数组
 * @param collection
 * @param source
 * @returns {[]}
 */
function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
    // 开始双重循环判断
    // 外层collection数组
    for (let i = 0; i < collection.length; i++) {
        let coll = collection[i];
        let collArr = Object.keys(coll);
        let collLen = collArr.length;

        let souArr = Object.keys(source);
        let souLen = souArr.length;

        let equalCount = 0; // key和value同时相等的次数, 初始化为0
        // 内层source数组
        for (let j = 0; j < souLen; j++) {
            let sKey = souArr[j];
            if (collLen >= souLen) { //
                if (coll.hasOwnProperty(sKey)) {
                    console.log(sKey, coll, 'kkk')
                    let collElement = coll[sKey];
                    let sourceElement = source[sKey];
                    if (collElement === sourceElement) {
                        equalCount++;
                    }
                }
            }
        }
        if (souLen === equalCount) {
            arr.push(coll)
        }
        console.log('equalCount=',equalCount)
    }
    // arrSet.forEach(a => arr.push(a))
    console.log(arr)
    // Only change code above this line
    return arr;
}

whatIsInAName([
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
    ],

    { last: "Capulet" })

whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }],
    { "apple": 1 })

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }],
    { "apple": 1, "bat": 2 })

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }],
    { "apple": 1, "cookie": 2 })

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }],
    { "apple": 1, "bat": 2 })

whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})
