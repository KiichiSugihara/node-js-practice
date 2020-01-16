class MyClass {
  constructor(name) {
    // thisはclass自身
    this.myName = name;
  }
  getMyName() {
    return this.myName;
  }
}
const myInstance = new MyClass('太郎');
console.log(myInstance.myName);
console.log(myInstance.getMyName());
