function getProducts() {
  fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(products => {
        console.log('products', products);
          // Shuffle products and display the first three
          const shuffledProducts = products.sort(() => Math.random() - 0.5).slice(0, 3);
          const cardElements = [
              document.getElementById('card-1'),
              document.getElementById('card-2'),
              document.getElementById('card-3')
          ];

          shuffledProducts.forEach((product, index) => {
            console.log('index', index);
            console.log('product',product);
              const card = cardElements[index];
              card.querySelector('.card-title').textContent = product.title;
              card.querySelector('.card-text').textContent = product.description;

              // Create and insert the image element
              const imgElement = document.createElement('img');
              imgElement.src = product.image;
              imgElement.className = 'card-img-top';
              card.insertBefore(imgElement, card.firstChild);

              // Add event listener for the button to show product info
              card.querySelector('button').addEventListener('click', function() {
                  alert(`Title: ${product.title}\nRating: ${product.rating.rate}\nCount: ${product.rating.count}\nPrice: $${product.price}\nCategory: ${product.category}`);
              });
          });
      })
      .catch(error => console.error('Error fetching products:', error));
}

// Call the function to fetch and display products
getProducts();

fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
        console.log('Data:', data); // Log the fetched data
        
        // Get the container where you want to append the card
        const cardContainer = document.getElementById('card-container'); // Assume you have a container for the card
        
        // Clear the container if needed
        cardContainer.innerHTML = ''; 

        // Get a random product from the products array
        const randomIndex = Math.floor(Math.random() * data.products.length); // Generate a random index
        const randomProduct = data.products[randomIndex]; // Access the random product

        // Check if the product exists
        if (randomProduct) {
            console.log('Selected Product:', randomProduct);
            // Create a new card element for the random product
            const warrantyCard = document.createElement('div');
            warrantyCard.className = 'card col-12';
            warrantyCard.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${randomProduct.title}</h5>
                    <p class="card-text">${randomProduct.warrantyInformation || 'No warranty information available.'}</p>
                    <button id="button-random" class="btn btn-success">Show Info</button>
                </div>
            `;

            // Append the new card to the container
            cardContainer.appendChild(warrantyCard);

            // Add event listener to the button for the card
            warrantyCard.querySelector('button').addEventListener('click', function() {
                alert(`Warranty Information: ${randomProduct.warrantyInformation || 'No warranty information available.'}`);
            });
        } else {
            console.log('No products available.');
        }
    })
    .catch(error => console.error('Error fetching products:', error));
