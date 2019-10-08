
function Product(price, quantity) {
    this.price = price;
    this.quantity = quantity;

    this.QuantityTimesPrice = function(){
        return this.price * this.quantity;
    }
}  
module.exports = Product;


function salesOrder(total){
    this.total = total;
    this.tax = new Array();

    this.addTax = function(price, quantity){
        this.tax.push(new tax(price, quantity));
    }

    this.calcSO = function(){
        let SO = 0;
        this.price.forEach(item => {
            SO += item.QuantityTimesPrice();
        });
        return SO / this.total;
    }

}

let myTotal = new Total(7);

myTotal.addPrice(10, 2.5);
myMash.addGrain(20, 1);

console.log(myTotal.calcSO());

module.exports = salesOrder;