





// Caching HTML elements

/*
const porducts = document.getElementById('products')
const brand = document.getElementById('brand');
const image = document.getElementById('image');
const title = document.getElementById('title');
const price = document.getElementById('price');
const category = document.getElementById('category');
const discription = document.getElementById('discription');
const rating = document.getElementById('rating');
const discountPercentage = document.getElementById('discount');




           title.innerText = `title: ${products.title}`
           price.innerText = `price: ${products.price}`
           category.innerText = `category: ${products.price}`

           div.appendChild(brand)
           div.appendChild(image)
           div.appendChild(title)
           div.appendChild(price)
           div.appendChild(category)
           div.appendChild(discription)
           div.appendChild(rating)
           div.appendChild(discount)
           cardsContainer.appendChild(div)


function renderPhones(data){
  products.then(response => response.json())
    
  products.forEach(
  function load (){
    addEventListener(window.onload);
      });
  
  const populatePhones = (products) => {
    for (const products of products) {
      const productCardHtml = `
        <div class="row">
        <div class="col-4">
          <div class="products">
          <div class="card">
            <div class="card-body">
              <div id="product">
                
              <img id="image"src="#">
              <h2 id="product-title"></h2>
              <h3 id="product-brand"></h3>
              <h4 id="product-category"></h4>
              <p id="product-description"></p>
              <div id="product-price-container">
                  <h3 id="product-price">$</h3>
                 <h3 id="product-discountPercentage"></h3>
              </div>
              </div>
          </div>
          </div>
          </div>
`};
    }
  };
  */

const renderProducts = async () => {

  try {

    const response = await fetch('https://dummyjson.com/products');

    const data = await response.json();
   //.then(renderPhones)

    console.log(data);

  } catch (error) {

    console.log(error);

  }
  
};
renderProducts()
