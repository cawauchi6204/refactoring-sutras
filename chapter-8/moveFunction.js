/*
関数の移動
*/

// before
class Account {
  get overdraftCharge() { }
}

// progress
function trackSummary(points) {
  const totalTime = calculateTime();
  // ここのtotalTimeとして変数を作っているのが気になる
  const totalDistance = calculateDistance();
  const pace = totalTime / 60 / totalDistance;
  return {
    time: totalTime,
    distance: totalDistance,
    pace
  };

  function calculateDistance() {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
      result += distance(points[i - 1], points[i])
    }
    return result;
  }

  function distance(p1, p2) { }
  function radians(degrees) { }
  function calculateTime() { }

}

// after
class AccountType {
  get overdraftCharge() { }
}
