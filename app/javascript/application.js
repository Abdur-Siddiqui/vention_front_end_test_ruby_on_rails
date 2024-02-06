document.addEventListener('DOMContentLoaded', function () {
  window.addToCart = function (button, index) {
    const item = flowerItems[index]; 
    item.isInCart = !item.isInCart;

    if (item.isInCart) {
      button.innerHTML = '<div class="circle"> In Cart </div>  <p>Remove to cart</p> ';
      console.log("item is in cart");
    } else {
      button.innerHTML = '<p>Add to cart</p>';
    }
  };
});

  

