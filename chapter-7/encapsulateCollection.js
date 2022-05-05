/*
コレクションのカプセル化

getterでコレクションそのものを返してしまうとコレクションを保持するクラスを介さずに中身を変更できてしまうため、カプセル化する
そのためにコレクションの中身を変更するメソッドをクラスに用意する
*/

// before
class Person {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }
  get name() { return this._name }
  get courses() { return this._courses; }
  set courses(aList) { this._courses = aList; }
}

class Course {
  constructor(name, isAdvanced) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }
  get name() { return this._name; }
  get isAdvanced() { return this._isAdvanced; }
}

/*
クライアント
numAdvancedCourses = aPerson.courses.filter(c => c.isAdvanced).length;
*/

// after
class Person {
  get courses() { return this._courses.slice(); }
  addCourse(aCourse) {
    this._courses.push(aCourse);
  }
  // 第二引数でデフォルト引数を使用
  // エラーを上げるためのコードを指定できる
  removeCourse(aCourse, fiIfAbsent = () => { throw new RangeError(); }) {
    const index = this._courses.indexOf(aCourse);
    if (index === -1) fiIfAbsent();
    else this._courses.splice(index, 1);
  }
}
