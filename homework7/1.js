var m2i = {
    January:1,
    February:2,
    March:3,
    April:4,
    May:5,
    June:6,
    July:7,
    August:8,
    September:9,
    October:10,
    November:11,
    December:12
}

function monthToIndex(month) {
    return m2i[month]
}

console.log(monthToIndex('January'))
console.log(monthToIndex('February'))
console.log(monthToIndex('March'))
console.log(monthToIndex('April'))
console.log(monthToIndex('May'))
console.log(monthToIndex('June'))
console.log(monthToIndex('July'))
console.log(monthToIndex('August'))
console.log(monthToIndex('September'))
console.log(monthToIndex('October'))
console.log(monthToIndex('November'))
console.log(monthToIndex('December'))



