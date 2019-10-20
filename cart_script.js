var cart = angular.module('myCart', []);
var cart_Items = JSON.parse(window.localStorage.getItem("cartItems"));
console.log(JSON.parse(window.localStorage.getItem("cartItems")));

if (cart_Items.length == 0) {
   alert("Your cart is empty!");
}

cart.controller('cartPriceCtrl',function($scope) {
   var total = 0;
   if(cart_Items != null){
      for(var i = 0, max = cart_Items.length; i < max; i++){
         total += cart_Items[i].itemprice;
      }
      $scope.cart_total_price = total;
   }
   else {
      $scope.cart_total_price = 0;
   }
});

cart.controller('itemsDisplayCtrl',function($scope) {
   $scope.itemsInCart = cart_Items;
   $scope.itemsDetails = [{
                name: 'Batman',
                universe: 'DC',
            }, {
                name: 'Ant Man',
                universe: 'Marvel',
            }, {
                name: 'Superman',
                universe: 'DC',
            }, {
                name: 'Captain America',
                universe: 'Marvel',
            }, {
                name: 'Thor',
                universe: 'Marvel',
            }

        ];
});
