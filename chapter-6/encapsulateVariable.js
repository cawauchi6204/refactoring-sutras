/*
変数のカプセル化
*/

// before
let defaultOwner = { firstName: "Martin", lastName: "Fowler" };

// after
let defaultOwnerData = { firstName: "Martin", lastName: "Fowler" };
export function defaultOwner() { return defaultOwnerData; }
export function setDefaultOwner(arg) { defaultOwnerData = arg; }
