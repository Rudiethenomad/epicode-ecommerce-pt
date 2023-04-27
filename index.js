







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
            
              <button class="btn btn-danger my-cart-btn"  "data-name="product 1" data-summary="summary 1"  data-image="images/img_1.png" >Add to Cart</button>
           
        
          </div>
      
      </div>
      </div>
      </div>
       `
     
 let shoppingCart = (function () {
   
        let goToCartIcon = function($addTocartBtn){
          let $cartIcon = $(".my-cart-icon");
          let $image = $('<img width="30px" height="30px" src="' + $addTocartBtn.data("image") + '"/>').css({"position": "fixed", "z-index": "999"});
          $addTocartBtn.prepend($image);
          let position = $cartIcon.position();
          $image.animate({
            top: position.top,
            left: position.left
          }, 500 , "linear", function() {
            $image.remove();
          });
        }
    
        $('.my-cart-btn').myCart({
          classCartIcon: 'my-cart-icon',
          classCartBadge: 'my-cart-badge',
          classProductQuantity: 'my-product-quantity',
          classProductRemove: 'my-product-remove',
          classCheckoutCart: 'my-cart-checkout',
          affixCartIcon: true,
          showCheckoutModal: true,
          clickOnAddToCart: function($addTocart){
            goToCartIcon($addTocart);
          },
          clickOnCartIcon: function($cartIcon, products, totalPrice, totalQuantity) {
            console.log("cart icon clicked", $cartIcon, products, totalPrice, totalQuantity);
          },
          checkoutCart: function(products, totalPrice, totalQuantity) {
            console.log("checking out", products, totalPrice, totalQuantity);
          },
          getDiscountPrice: function(products, totalPrice, totalQuantity) {
            console.log("calculating discount", products, totalPrice, totalQuantity);
            return totalPrice ;
          }
        });
    
      });
            document.querySelector('.products').insertAdjacentHTML('beforeend', markup);

        });

      })
      .catch(error => console.log (error));

    


  
    