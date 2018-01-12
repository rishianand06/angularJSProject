let msg = 'Hello World';
console.log(msg);

msg = 'Hello \n' +
'my \n' +
'name \n' +
'is \n' +
'manpreet';
console.log(msg);

// Template string
msg = `Hello 
my 
name 
is
manpreet`;
console.log(msg);

let name = 'manpreet';
// variable substitution
msg = `Hello 
my 
name 
is
${name}`;
console.log(msg);