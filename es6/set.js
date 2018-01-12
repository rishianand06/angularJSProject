
let names = new Set();

names.add("John");
names.add("Smith");
names.add("Tom");

console.log(names.has("John"));

names.forEach((name) => {
    console.log(name);
});

for(let name of names) {
    console.log(name);
}

console.log(names.size);

names.delete("John");

console.log(names.size);

names.clear();
