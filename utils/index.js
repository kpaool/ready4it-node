
/**
 * 
 * @param {Object[]} sales 
 * @returns {number}
 */
function sumOfSales(sales) {
    return sales.reduce((acc, curr) => acc + curr.amount, 0)
}


module.exports = {
    sumOfSales
}