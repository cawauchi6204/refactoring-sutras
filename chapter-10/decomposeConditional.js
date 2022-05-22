const isSummer = !aDat.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
// before
if (isSummer)
    charge = summerCharge();
else
    charge = regularCharge()

// after
if (summer())
    charge = summerCharge()
else
    charge = regularCharge()

function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
}

function summerCharge() {
    return quantity * plan.summerRate;
}

const charge = isSummer ? summerCharge() : regularCharge();
