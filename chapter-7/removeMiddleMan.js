/*
仲介人の除去
*/

// before
manager = aPerson.manager;

class Person {
  get manager() { return this.department.manager; }
}

// after
manager = aPerson.department.manager;
