class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    Describe() {
        return (this.name + ", " + this.age + " old");
    }
}

let myData = new Person("Sofia", 23);
console.log(myData.Describe());