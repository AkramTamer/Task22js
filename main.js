function shoproducts() {
    fetch("https://dummyjson.com/products").then((response)=> response.json()).then((data)=>{
          const container = document.getElementById("products-container");
          data.products.forEach((product)=> {
            container.innerHTML +=`
                  <div class="card">
                  <img src="${product.images[0]}">
                  <h3>${product.price}</h3>
                  <p>${product.description}</p>
                  <button>Buy Now</button>
                  </div>

            `;
            
          });

  
});
};
shoproducts();

