







     fetch('https://dummyjson.com/products')
      .then(res => {
      return  res.json();
      })
    
      .then(data => {
        data.forEach(products => {
          const markup = `        
          <div class="products">     
          <img id="image"src="${products.image}">
          <h2 id="product-title">${products.title}</h2>
          <h3 id="product-brand">${products.brand}</h3>
          <h4 id="product-category">${products.category}</h4>
          <p id="product-description">${products.description}</p>
          <div id="product-price-container">
              <h3 id="product-price">$${products.price}</h3>
             <h3 id="product-discountPercentage">${products.discount}</h3>
          </div>
          </div>
      </div>
      </div>
      </div>
       `

            document.querySelector('products').insertAdjacentHTML('beforeend', markup);

        });

      })
      .catch(error => console.log (error));

    