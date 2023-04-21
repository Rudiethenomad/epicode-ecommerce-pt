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