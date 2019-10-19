var cart = angular.module('myCart', []);
var cart_Items = JSON.parse(window.localStorage.getItem("cartItems"));
console.log(JSON.parse(window.localStorage.getItem("cartItems")));

cart.controller('cartPriceCtrl',function($scope) {
   var total = 0;
   for(var i = 0, max = cart_Items.length; i < max; i++){
      total += cart_Items[i].itemprice;
   }
   $scope.cart_total_price = total;
});

cart.controller('itemsDisplayCtrl',function($scope) {
   $scope.itemsInCart = cart_Items;
});
