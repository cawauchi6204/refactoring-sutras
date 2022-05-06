/*
移譲の隠蔽
*/

// before
manager = aPerson.department.manager;

// progress
// setterで部署を設定するようになっている
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() { return this._department; }
  get department() { return this._department; }
  set department(arg) { this._department = arg; }

  // 追加
  get manager() { return this._department.manager; }
}

// あるひとの部署のマネージャー情報を取得するにはまず部署を取得する必要がある
// manager = aPerson.department.manager
// 上記の場合、部署が上司を取得する責務を持っていることがクライアントから丸見えになっている
// 追加をして
// manager = aPerson.managerとする
class Department {
  get chargeCode() { return this._chargeCode; }
  set chargeCode(arg) { this._chargeCode = arg; }
  get manager() { return this._manager; }
  set manager(arg) { this._manager = arg; }
}

// after
manager = aPerson;
class Person {
  get manager() { return this.department.manager; }
}
