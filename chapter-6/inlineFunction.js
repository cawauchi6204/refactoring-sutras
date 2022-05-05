/*
関数のインライン化

関数の抽出の逆
関数の本体が関数の名前と同じくらいにわかりやすいときに使用する
*/

function getRatingBefore(driver) {
  return moreThanFiveLateDeliveries(driver) ? 2 : 1;

}

function moreThanFiveLateDeliveries(driver) {
  return driver.numberOfLateDeliveries > 5;
}

function getRatingAfter(driver) {
  return (driver.numberOfLateDeliveries > 5) ? 2 : 1;
}
