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

class Manager extends Employee {

    private teamcount: number;

    constructor(eid?: number, name?: string, status?: boolean, teamcount?: number) {
        super(eid, name, status);
        this.teamcount = teamcount;
    }

    getTeamCount(): number {
        return this.teamcount;
    }
}


let employee: Employee = new Employee(101, 'John', true);
console.log(employee.getEid());
console.log(employee.getName());
console.log(employee.getStatus());

let mamager: Manager = new Manager(102, 'Smith', true, 10);
console.log(mamager.getEid());
console.log(mamager.getName());
console.log(mamager.getStatus());
console.log(mamager.getTeamCount());