class user {
  constructor(username, roll) {
    this.username = username;
    this.roll = roll;
  }
  getName() {
    return this.username;
  }
}
class student extends user {
  constructor(username, roll, grade) {
    super(username, roll);
    this.grade = grade;
  }
  getGrade() {
    return this.grade;
  }
}

const std1 = new student("sandesh", 21, 11);
console.log(std1.getName());

console.log(std1 instanceof user);
