

// Caching HTML elements
const div = document.getElementById('brand');
const image = document.getElementById('image');
const title = document.getElementById('title');
const price = document.getElementById('price');
const category = document.getElementById('category');
const discription = document.getElementById('discription');
const rating = document.getElementById('rating');
const discountPercentage = document.getElementById('discount');


function renerPhones(products){
    products.forEach(products => {
      
        const div = document.getElementById('brand');
const image = document.getElementById('image');
const title = document.getElementById('title');
const price = document.getElementById('price');
const category = document.getElementById('category');
const discription = document.getElementById('discription');
const rating = document.getElementById('rating');
const discountPercentage = document.getElementById('discount');


           title.innerText = `title: ${products.title}`
           price.innerText = `price: ${products.price}`
           category.innerText = `category: ${products.price}

           div.appendChild(brand)
           div.appendChild(image)
           div.appendChild(title)
           div.appendChild(price)
           div.appendChild(category)
           div.appendChild(discription)
           div.appendChild(rating)
           div.appendChild(discount)
           cardsContainer.appendChild(div)


    });          
      
};
/*

function load (){
    addEventListener(window.onload);
      };
  
  const populatePhones = (data) => {
    for (const products of products) {
      const productCardHtml = 
      <div class="row">
          <div class="col-4">
            <div class="card">
              <div class="card-body">
                <div class="product">
                  
                <img src="#">
                <h2 class="product-title">${products.title}</h2>
                <h3 class="product-brand"></h3>
                <h4 class="product-category">${products.price}</h4>
                <p class="product-description"></p>
                <div class="product-price-container">
                    <h3 class="product-price">$${products.price}</h3>
                   <h3 class="product-discountPercentage"></h3>
                </div>
                </div>
            </div>
    </div>;
  
    mainPage.innerHTML += bookCardHtml;
  }
  




};
*/

function getProducts() {
fetch('https://dummyjson.com/products')

    .then(response => response.json())

    .then(data => console.log(data));

}
getProducts()

function listProducts(productsPage){
    document.getElementById('products-list');
    }
