/*
問い合わせによる一時変数の置き換え
*/

// before
const basePrice = this._quantity * this._itemPrice;
if (basePrice > 1000)
  return basePrice * 0.95;
else
  return basePrice * 0.98

// マジックナンバーなのが気になる

// after
get basePrice() { this._quantity * this._itemPrice; }

if (this.basePrice > 1000) return this.basePrice * 0.95;
else return this.basePrice * 0.98;
