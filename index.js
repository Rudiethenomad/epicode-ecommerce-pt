

// Caching HTML elements
const div = document.getElementById('brand');
const image = document.getElementById('image');
const title = document.getElementById('title');
const price = document.getElementById('price');
const category = document.getElementById('category');
const discription = document.getElementById('discription');
const rating = document.getElementById('rating');
const discountPercentage = document.getElementById('discount');




function getProducts() {
fetch('https://dummyjson.com/products')

    .then(response => response.json())

    .then(data => console.log(data));

}
getProducts()

function listProducts(productsPage){
    document.getElementById('products-list');
}

