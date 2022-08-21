const args = require('minimist')(process.argv.slice(2));

total = args.total;
qty = args.qty;
unit = total / 1.10;
if (qty === undefined) qty = 1;
amount = unit * qty;
amount = amount.toFixed(3);
vat = (total - unit) * qty;


console.log("qty", qty, "\nunit", unit.toFixed(3), "\namount", amount, "\nvat", vat.toFixed(3), "\ntotal", total * qty);


