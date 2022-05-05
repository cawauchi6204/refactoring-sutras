/*
変数のインライン化
変数は関数内の式に名前をもたらす良いものだが、ときには名前が式以上のことを語らないことがある。
そうしたときに変数を削除してインライン化する
*/

// before
let basePrice = anOrder.basePrice;
return (basePrice > 1000)

// after
return anOrder.basePrice > 1000;
