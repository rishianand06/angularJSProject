let map = new Map();

map.set("John", 221.2);
map.set("Smith", 321.2);
map.set("Tom", 421.2);
map.set("Jerry", 921.2);

console.log(map.get("Jerry"));

console.log(map.size);

console.log("-------Key set-------");
let keys = map.keys();
for (let key of keys) {
    console.log(key);
}

console.log("-------Values-------");
let values = map.values();
for (let value of values) {
    console.log(value);
}

console.log("-------entries-------");
let entries = map.entries();
for (let entry of entries) {
    let key = entry[0];
    let value = entry[1];
    console.log(key + "\t" + value);
}

entries = map.entries();
for (let [key, value] of entries) {
       console.log(key + "\t" + value);
}

map.clear();

