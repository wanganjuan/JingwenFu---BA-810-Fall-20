
    function SalesOrder(customer, taxRate, item){
        let salesOrder = {};
        salesOrder.customer = customer;
        salesOrder.taxRate = taxRate;
        salesOrder.items = items ? items : [];
     }
     //sum of all the item's price = total quantities times price
     salesOrder.getValue = function(){
        let total = 0;
        salesOrder.items.forEach(item =>{
            total += item.price
        });
        return total;
     }
     
     salesOrder.getTotalPrice = function(){
         return salesOrder.getValue() * salesOrder.taxRate;
     }
     
     module.exports = SalesOrder;