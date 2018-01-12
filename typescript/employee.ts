class Employee {

    private eid: number;
    private name: string;
    private status: boolean;

    constructor(eid?: number, name?: string, status?: boolean) {
        this.eid = eid;
        this.name = name;
        this.status = status;
    }

    getEid(): number {
        return this.eid;
    }

    getName(): string {
        return this.name;
    }

    getStatus(): boolean {
        return this.status;
    }
}

let employee: Employee = new Employee(101, 'John', true);
console.log(employee.getEid());
console.log(employee.getName());
console.log(employee.getStatus());
