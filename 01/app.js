function getProductList() {
    return [
        {name: 'JavaScript: podstawy', type: 'book', count: 3, price: 67.19, discount: 0.21},
        {name: 'React: podstawy', type: 'book', count: 4, price: 79.17, discount: 0.27},

        
    ]
}

function getTotalPrice(productList) {
    return productList.reduce( (product, acc) => {
        return product.price * (1 - product.discount) * product.count + acc.price * (1 - acc.discount) * acc.count;
     
    
    });
}

const totalPrice = getTotalPrice( getProductList() );
console.log(totalPrice.toFixed(2)); // prawidłowa wartość: 390.42 (należy zaaokrąglić do 2 miejsc po przecinku)