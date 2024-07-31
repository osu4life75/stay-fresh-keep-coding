//fetch api for cards

function getProducts() {
    const cardElements = [
      document.getElementById('card-1'),
      document.getElementById('card-2'),
      document.getElementById('card-3')
    ];
  
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(products => {
        products.slice(0, 3).forEach((product, index) => {
          const card = cardElements[index];
          card.querySelector('.card-title').textContent = product.title;
          card.querySelector('.card-text').textContent = product.description;
          const imgElement = document.createElement('img');
          imgElement.src = product.image;
          imgElement.className = 'card-img-top';
          card.insertBefore(imgElement, card.firstChild);
        });
      })
      .catch(error => console.error('Error fetching product data:', error));
  }
  
  document.addEventListener('DOMContentLoaded', getProducts);
  











// Card Buttons
const button1 = document.getElementById('button-1');

button1.addEventListener('click', function(){
    alert('Button was clicked!')
});

