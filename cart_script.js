var cart = angular.module('myCart', []);
var total = 0;
var cart_Items = JSON.parse(window.localStorage.getItem("cartItems"));

if (cart_Items.length == 0) {
   alert("Your cart is empty!");
}

cart.controller('cartPriceCtrl',function($scope) {
   if(cart_Items != null){
      for(var i = 0, max = cart_Items.length; i < max; i++){
         total += cart_Items[i].itemprice;
      }
      $scope.cart_total_price = total;
   }
   else {
      $scope.cart_total_price = total;
   }
});

cart.controller('itemsDisplayCtrl',function($scope) {
   $scope.itemsInCart = cart_Items;
});

cart.controller('purchaseCtrl',function($scope) {
   $scope.displayPopup = function() {
      alert('Please visit FLIPKART/AMAZON');
   };
});

cart.controller('removeCtrl',function($scope) {
   $scope.clearCart = function() {
      localStorage.clear();
   };
});
