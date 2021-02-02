class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "kolimunnesa school"
    }
}

const student1 = new Student(12, "Shuvo"); //object
const student2 = new Student(22, "mahiya");//object
const student3 = new Student(29, "Bappi");//object

console.log(student1.name,student2.name);
console.log(student3);