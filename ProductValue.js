

function product(quantity, price) {
    let product = {};
    product.quantity = quantity;
    product.price = price ? price : [];

    product.addQuantity = function (quantity) {
        product.quantity.push(quantity);
    }
//total price of all the items = total quantities time quantity
    product.productValue = function () {
        let productValue = 0;
        product.price.forEach(item => {
            total += item;
        });
        return productValue;
    }

    return product;
}

module.exports = product;