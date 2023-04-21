
// Caching HTML elements


const porduct = document.getElementById('products')
const brand = document.getElementById('brand');
const image = document.getElementById('image');
const title = document.getElementById('title');
const price = document.getElementById('price');
const category = document.getElementById('category');
const discription = document.getElementById('discription');
const rating = document.getElementById('rating');
const discountPercentage = document.getElementById('discount');


function renderPhones(products){
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


    });          
      
};
    



const fetchData = async () => {

  try {

    const response = await fetch('https://dummyjson.com/products');

    const data = await response.json();

    console.log(data);

  } catch (error) {

    console.log(error);

  }

};

fetchData()
