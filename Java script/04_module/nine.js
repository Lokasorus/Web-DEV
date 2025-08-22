/////reduce 
const array1 = [1, 2, 3, 4]
const mytotal = array1.reduce(function (acc, cv){
    console.log(`acc: ${acc} and cv: ${cv}`)
    return acc + cv
}, 0)
console.log(mytotal)
// const mytotal = array1.reduce((acc, cv) => acc+cv, 0)
// console.log(mytotal)

const shopingcart = [
    {
        itemname: "js course",
        proce: 2999,
    },
    {
        itemname: "py course",
        proce: 999,
    },
    {
        itemname: "webdev course",
        proce: 5999,
    },    {
        itemname: "mobdev course",
        proce: 4999,
    }



]
const pricetopay = shopingcart.reduce((acc, item) => acc+item.proce,0)
console.log(pricetopay)