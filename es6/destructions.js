const user = { first: 'John', last: 'David' };
/*let fname = user.first;
let lname = user.last;
console.log(fname);
console.log(lname);
*/

// object destructing
let { first: fname, last: lname } = user;
console.log(fname);
console.log(lname);

// object destructing
let { first, last } = user;
console.log(first);
console.log(last);

// array destructing
let names = ['Smith', 'Jones'];
let [name0, name1] = names;
console.log(name0);
console.log(name1);
