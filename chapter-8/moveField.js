/*
フィールドの移動
*/

// before
class Customer {
  get plan() { return this._plan; }
  get discountRate() { return this._discountRate; }
}

// after
class Customer {
  get plan() { return this._plan; }
  get discountRate() { return this.plan_.discountRate; }
}

/*
planにdiscountRateを移動している
*/

// progress
class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._discountRate = discountRate;
    this._contract = new CustomerContract(dateToday());
  }
  get discountRate() { return this._discountRate; }
  becomeReferred() {
    this._discountRate += 0.03;
  }
  applyDiscount(amount) { return amount.subtract(amount.multiply(this._discountRate)); }
}

class CustomerContract {
  constructor(startDate) { return this._startDate = startDate; }
}

// discountRateをCustomerContractに移動したくなった時
// 最初にすべきことは変数のカプセル化を適用して、discountRateフィールドへのアクセスをカプセル化する

class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._contract = new CustomerContract(dateToday());
    this._setDiscountRate(discountRate);
  }
  get discountRate() { return this._contract._discountRate; }
  _setDiscountRate(aNumber) { this.contract._discountRate = aNumber; }
  becomePreferred() {
    this._setDiscountRate(this._contract.discountRate + 0.03);
  }
  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this.discountRate));
  }
}

// CustomerContractにフィールドとアクセサを追加する
class CustomerContract {
  constructor(startDate, discountRate) {
    this._startDate = startDate;
    this._discountRate = discountRate;
  }
  get discountRate() { return this._discountRate; }
  set discountRate(arg) { this._discountRate = arg; }
}

// 全然わからん!!!!!!!!!!!!!!!
