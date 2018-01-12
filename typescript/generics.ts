
class Box<T>{

    private data: T;

    public addData(data: T): void {

        this.data = data;
    }

    public getData(): T {

        return this.data;
    }
}

let box: Box<string> = new Box();
box.addData("John");
console.log(box.getData());

let box2: Box<number> = new Box();
box2.addData(21);
console.log(box2.getData());

let names: Array<string> = new Array<string>();
names.push("John");
names.push("Smith");
names.push("Tom");

names.forEach((name) => {
    console.log(name);
});









