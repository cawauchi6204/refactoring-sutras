/*
関数群の変換への集約
*/

// before
function base(aReading) { }
function texableCharge(aReading) { }

// after
function enrichReading(argReading) {
  const aReading = _.cloneDeep(argReading);
  aReading.baseCharge = base(aReading);
  aReading.texableCharge = texableCharge(aReading);
  return aReading;
}
