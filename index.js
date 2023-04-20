
function getProducts() {
fetch('https://dummyjson.com/products')

    .then(response => response.json())

    .then(data => console.log(data));

}
getProducts()

function listProducts(productsPage){
    document.getElementById('products-list');
}