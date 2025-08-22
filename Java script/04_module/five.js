const coding =["js", "pthon", "java", "c++", "ruby"]
coding.forEach(  function (item) {console.log(item)}) //naming each value as item
coding.forEach(  (item) => {console.log(item)})
function printme(item){
    console.log(item)
}
coding.forEach(printme)
coding.forEach(  (item, index, arr) => {
    console.log(item, index, arr)
})

const mycoding =[
    {
        langname: "javascript",
        langfile: "js"
    },
    {
        langname: "java",
        langfile: "javg"
    },
    {
        langname: "python",
        langfile: "py"
    }
]

mycoding.forEach((item) => {
    console.log(item.langname);
}) 