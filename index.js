







     fetch('https://dummyjson.com/products')
      .then(res => {
      return  res.json();
      })
    .then((object) => {
      console.log(object);
      console.log(typeof object);
      return object;
    })
    .then ((object) => {
      return object.products;
    })
      .then(products => {
        products.forEach(products => {
          const markup = `        
          <div class="products">     
          <img id="image"src="${products.images[0]}">
          <h2 id="product-title">${products.title}</h2>
          <h3 id="product-brand">${products.brand}</h3>
          <h4 id="product-category">${products.category}</h4>
          <p id="product-description">${products.description}</p>
          <div id="product-price-container">
              <h3 id="product-price">$${products.price}</h3>
              <button class="btn btn-danger my-cart-btn" data-id="1" data-name="product 1" data-summary="summary 1" data-price="10" data-quantity="1" data-image="images/img_1.png">Add to Cart</button>
              <a href="#" class="btn btn-info">Details</a>
          </div>
        
          </div>
          
      </div>
      </div>
      </div>
       `

            document.querySelector('.products').insertAdjacentHTML('beforeend', markup);

        });

      })
      .catch(error => console.log (error));

    




  