       // Caching HTML elements
       const div = document.getElementById('bookCards-container');
       const image = document.getElementById('image');
       const title = document.getElementById('title');
       const price = document.getElementById('price');
       const category = document.getElementById('category');
       const like = document.getElementById('like');
       const skip = document.getElementById('skip');
 
       
       function renderBooks(data) {
   
         data.forEach(data => {
           const div = document.createId('bookCards-container');
           const image = document.createClassName('image');
           const title = document.createClassName('title');
           const price = document.createClassName('price');
           const category = document.createClassName('category');
           const like = document.createClassName('like');
           const skip = document.createClassName('skip');
           div.classList = 'card'
           skip.button = 'empty'
           like.button = 'empty'
           image.src = data.image
           
           title.innerText = `title: ${data.title}`
           price.innerText = `price: ${data.price}`
           category.innerText = `category: ${data.category}` 
          
           
           div.appendChild(title)
           div.appendChild(image)
           div.appendChild(price)
           div.appendChild(category)
           div.appendChild(like)
           div.appendChild(skip)
           cardsContainer.appendChild(div)
           like.textContent = 'like'
           skip.textContent = 'Skip'
     
         });
     };
     function load (){
   addEventListener(window.onload);
     };
 
 const populateBookResults = (data) => {
   for (const book of books) {
     const bookCardHtml = `<div class="col text-center">
     <img class="img-fluid" src="${title.book.cover_small}" alt="${title.book}" />
     <p>
       <a href="./album_page.html?albumId=${title.book.price}">${title.book.price}</a>
       <br />
       <a href="./artist_page.html?artistId=${title.book.price}">${title.book.price}</a>
     </p>
   </div>`;
 
   mainPage.innerHTML += bookCardHtml;
 }
 }


 fetch('https://dummyjson.com/products')
.then((response) => {

return response.json();

})
.then(data => {
 console.log(data);
})

.catch((err) => {
 console.log('rejected',err);

 
})
.then(date => {
  
})