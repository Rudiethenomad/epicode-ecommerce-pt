document.addEventListener('DOMContentLoaded', function() {
    let products = document.querySelector('.products');
   



    async function fetchProducts(url) {

    try {
        let data = await fetch(url);
     
        let response = await data.json();

        for(let i = 0; i < response.length; i++) {
            let description = response[i].description;
            let title = response[i].title;
            products.innerHTML  += 
            `<div class="product">
                <img src="${response[i].images[1]}" alt="${response[i].category.name}" class="product-img">
                <div class="product-content">
                <h2 class="product-title">${
                    title.length > 18 ? title.substring(0, 18).concat(' ...') : title
                  }</h2>
                <h4 class="product-category">${response[i].category.name}</h4>
                <p class="product-description">${description.length > 80 ? description.substring(0, 80).concat('...more') : description}</p>
                <div class="product-price-container">
                    <h3 class="product-price">$${response[i].price}</h3>
                    <a href="#!" data-productId="${response[i].id}"  class="add-to-cart"><ion-icon name="cart-outline"></ion-icon></a>
                </div>
                </div>
            </div>
            `;
            
        }
    

    } catch (err) {
        console.log(err);
    }
    }
    fetchProducts('https://api.escuelajs.co/api/v1/products');
});




  /*products.then(response => response.json())
    
    products.forEach(
    function load (){
      addEventListener(window.onload);
        });
    
    const populatePhones = (products) => {
      for (const products of products) {
        const productCardHtml = `
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
      </div>;`
    
      mainPage.innerHTML += bookCardHtml;
    }
    */


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

    /*
  div.appendChild(brand)
           div.appendChild(image)
           div.appendChild(title)
           div.appendChild(price)
           div.appendChild(category)
           div.appendChild(discription)
           div.appendChild(rating)
           div.appendChild(discount)
           cardsContainer.appendChild(div)

      */