







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
              <button>Add to Cart<button>
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

    