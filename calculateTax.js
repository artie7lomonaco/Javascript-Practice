// Calculates the tax based on price and tax rate
function calculateTax(price, taxRate) {
    // Ensure inputs are numbers
    if (typeof price !== 'number' || typeof taxRate !== 'number') {
        throw new Error('Both price and taxRate must be numbers');
    }
    // Calculate the tax
    return price * (taxRate / 100);
}

// Example usage:
// const tax = calculateTax(100, 13);
// console.log(tax); // 13

module.exports = calculateTax; 