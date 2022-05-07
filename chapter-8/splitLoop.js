/*
ループの分離
*/

// before
let averageAgeBefore = 0;
let totalSalaryBefore = 0;
for (const p of people) {
  averageAgeBefore += p.age;
  totalSalaryBefore += p.salary;
}
averageAgeBefore = averageAgeBefore / people.length;

// after
let averageAgeAfter = 0;
for (const p of people) {
  averageAge += p.age;
}

let totalSalaryAfter = 0;
for (const p of people) {
  totalSalaryAfter += p.salary;
}
averageAgeAfter = averageAgeAfter / totalSalaryAfter;

// パソコンの処理能力を舐めてはいけない
// 重要なのはいかに人間がコードを見た時にすぐにわかるかどうか

// example
/*
let youngest = people[0] ? people[0].age : Infinity;
let totalSalary = 0;
for (const p of people) {
  if (p.age < youngest) youngest = p.age;
  totalSalary += p.salary;
}
return `youngestAge: ${youngest}, totalSalary: ${totalSalary}`;
*/

let totalSalary = 0;
for (const p of people) {
  totalSalary += p.salary;
}
// まずはループをコピーする
// 重複を取り除く
// ステートメントのスライドを行う
// 関数の抽出を2回行う
let youngest = people[0] ? people[0].age : Infinity;
for (const p of people) {
  if (p.age < youngest) youngest = p.age;
}

function totalSalary() {
  let totalSalary = 0;
  for (const p of people) {
    totalSalary += p.salary;
  }
  return totalSalary;
}

function youngestAge() {
  let youngest = people[0] ? people[0].age : Infinity;
  for (const p of people) {
    if (p.age < youngest) youngest = p.age;
  }
  return youngest;
}
return `youngestAge: ${youngestAge()}, totalSalary: ${totalSalary()}`;
