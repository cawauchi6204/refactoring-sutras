/*
関数の抽出
*/

// before
function printOwingBefore(invoice) {
  printBanner();
  let outstanding = calculateOutstanding(invoice);

  // 明細の印字
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
}

// after
function printOwingAfter(invoice) {
  printBanner();
  let outstanding = calculateOutstanding(invoice);
  printDetails(outstainding);

  function printDetails(outstanding) {
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
  }
}
