/*
パラメータオブジェクトの導入
*/

// before
function amountInvoiced(startDate, endDate) { }
function amountReceived(startDate, endDate) { }
function amountOverdue(startDate, endDate) { }

// after
function amountInvoiced(aDateRange) { }
function amountReceived(aDateRange) { }
function amountOverdue(aDateRange) { }
