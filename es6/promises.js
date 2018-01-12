// callback functions

let error = true;

let promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log("Task executed successfully....");
        if (error) {
            const user = { first: 'John', last: 'David' };
            reject(user);
        } else {
            resolve();
        }
    }, 1000);
});

promise.then(
    () => console.log("Task completed"),
    (user) => {
        console.log("Task terminated");
        reject();
    }
).then(
    () => console.log("Task completed"),
    () => {
        console.log("Task terminated");
        throw new Error("Error raised...");
    }
).catch ((msg) => {
    console.log(msg);
});
console.log("Application Started");
