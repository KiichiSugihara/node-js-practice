class MyClass {
  constructor(name) {
    // thisはclass自身
    this.myName = name;
  }
}
const myInstance = new MyClass('太郎');
console.log(myInstance.myName);
