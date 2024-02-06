class HomeController < ApplicationController
  def index
    @flowerItems = [
      {name: 'Blue Flower', price: 80, stars: 4, isInCart: true}, 
      {name: 'Orange Flower', price: 17,  stars: 3,
       isInCart: false},
       {name: 'Pink Flower', price: 30, stars: 5,
       isInCart: false}
      ];  
  end
end
