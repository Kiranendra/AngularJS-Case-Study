var app = angular.module('app', []);
var cart = angular.module('myCart', []);
var cart_items = [];

app.controller('s10ctrl',function($scope) {
   $scope.s10colors=["Prism Blue","Prism White"];
   $scope.total_S10 = 0;
   $scope.s10colorsFun = function() {
      s10col = $scope.s10colormodel;
      if (s10col == "Prism Blue") {
         $scope.total_S10 = 73799;
         window.s10price = $scope.total_S10;
      } else {
         $scope.total_S10 = 73900;
         window.s10price = $scope.total_S10;
      }
   };
   //$scope.addToCart = function(s10colormodel) {
   //   cart_items.push({name:$scope.s10colormodel, price:window.s10price});
   //};
});
app.controller('vz1ctrl',function($scope) {
   $scope.vz1colors=["Sonic Black","Sonic Blue"];
   $scope.total_vz1 = 0;
   $scope.vz1colorsFun = function() {
      vz1col = $scope.vz1colormodel;
      if (vz1col == "Sonic Blue") {
         $scope.total_vz1 = 12990;
      } else {
         $scope.total_vz1 = 12990;
      }
   };
});

app.controller('i7ctrl',function($scope) {
   $scope.i7colors=["Gold","Red"];
   $scope.total_i7 = 0;
   $scope.i7colorsFun = function() {
      i7col = $scope.i7colormodel;
      if (i7col == "Gold") {
         $scope.total_i7 = 31999;
      } else {
         $scope.total_i7 = 32999;
      }
   };
});

app.controller('fxctrl',function($scope) {
   $scope.fxcolors=["Glacier Blue","Bordeaux Red"];
   $scope.total_fx = 0;
   $scope.fxcolorsFun = function() {
      fxcol = $scope.fxcolormodel;
      if (fxcol == "Glacier Blue") {
         $scope.total_fx = 58990;
      } else {
         $scope.total_fx = 58990;
      }
   };
});

app.controller('k20ctrl',function($scope) {
   $scope.k20colors=["Glacier Blue","Carbon Black"];
   $scope.total_k20 = 0;
   $scope.k20colorsFun = function() {
      k20col = $scope.k20colormodel;
      if (k20col == "Glacier Blue") {
         $scope.total_k20 = 24999;
      } else {
         $scope.total_k20 = 24999;
      }
   };
});

app.controller('goToCartCtrl',function($scope) {
   $scope.goToCart = function() {
      location.href = 'cart.html';
   };
});

cart.controller('cartPriceCtrl',function($scope) {
   $scope.cart_total_price = 0;   
});
