/*
オブジェクトによるプリミティブの置き換え
*/

// before
orders.filter(o => "high" === o.priority || "rush" === o.priority);

// progress
/*
class Order {
  constructor(data) {
    this.priority = data.priority
  }
}

highPriorityCount = orders.filter(o => "high" === o.priority || "rush" === o.priority).length;

class Priority {
  constructor(value) { this._value = value;}
  toString() {return this._value;}
  // valueというgetterではなく、クライアントが要求しているのは属性というよりは文字列表現のため、toStringが正しい
}

class Order {
  get priority() { return this._priority.toString(); }
  set priority(aString) { this._priority = new Priority(aString); }
}
*/

// after
class Priority {
    constructor(value) {
        if (value instanceof Priority) return value;
        if (Priority.legalValues().includes(value)) this._value = value;
        else throw new Error(`<${value}> is invalid for Priority`);
    }
    toString() { return this._value };
    get _index() { return Priority.legalValues().findIndex(s => s === this._value); }
    static legalValues() { return ['low', 'normal', 'high', 'rush']; }
    // ここ気になる
    // 値をstaticにしてconstructorでpushした方が良さそう

    equals(other) { return this._index === other._index; }
    higherThan(other) { return this._index > other._index; }
    lowerThan(other) { return this._index < other._index; }
}

orders.filter(o => o.priority.higherThan(new Priority("normal")));
