/*
関数群のクラスへの集約
*/

// before
function base(aReading) { }
function texableCharge(aReading) { }
function calculateBaseCharge(aReading) { }

// after
class Reading {
  base() { }
  texableCharge() { }
  calculateBaseCharge() { }
}
