const myobj = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for(const key in myobj){
    console.log(`${key} shortcut is for ${myobj[key]}`)
}
const programming = ["js", "rb", "py", "java", "cpp"]
for(const key in programming){
    console.log(key);
} // it prints the position in order to access the value use arr[key]
const map = new Map()
map.set('IN', "India") //key  in ' ' and values in " "
map.set('USA', "usnited states of america")
map.set('Fr', "France")
for(const key in map){
    console.log(key)
}
