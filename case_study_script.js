var app = angular.module('app', []);
var cart_items = [];

app.controller('s10ctrl',function($scope) {
   $scope.s10colors=["Prism Blue","Prism White"];
   $scope.total_S10 = 0;
   $scope.s10colorsFun = function() {
      window.s10col = $scope.s10colormodel;
      if (s10col == "Prism Blue") {
         $scope.total_S10 = 73799;
         window.s10price = $scope.total_S10;
      } else {
         $scope.total_S10 = 73900;
         window.s10price = $scope.total_S10;
      }
   };
});

app.controller('s10cartCtrl',function($scope) {
   $scope.s10AddCart = function() {
      cart_items.push({itemname:s10col,itemprice:s10price});
   };
});

app.controller('vz1ctrl',function($scope) {
   $scope.vz1colors=["Sonic Black","Sonic Blue"];
   $scope.total_vz1 = 0;
   $scope.vz1colorsFun = function() {
      window.vz1col = $scope.vz1colormodel;
      if (vz1col == "Sonic Blue") {
         $scope.total_vz1 = 12990;
         window.vz1price = $scope.total_vz1;
      } else {
         $scope.total_vz1 = 12990;
         window.vz1price = $scope.total_vz1;
      }
   };
});

app.controller('vz1cartCtrl',function($scope) {
   $scope.vz1AddCart = function() {
      cart_items.push({itemname:vz1col,itemprice:vz1price});
   };
});

app.controller('i7ctrl',function($scope) {
   $scope.i7colors=["Gold","Red"];
   $scope.total_i7 = 0;
   $scope.i7colorsFun = function() {
      window.i7col = $scope.i7colormodel;
      if (i7col == "Gold") {
         $scope.total_i7 = 31999;
         window.i7price = $scope.total_i7;
      } else {
         $scope.total_i7 = 32999;
         window.i7price = $scope.total_i7;
      }
   };
});

app.controller('i7cartCtrl',function($scope) {
   $scope.i7AddCart = function() {
      cart_items.push({itemname:i7col,itemprice:i7price});
   };
});

app.controller('fxctrl',function($scope) {
   $scope.fxcolors=["Glacier Blue","Bordeaux Red"];
   $scope.total_fx = 0;
   $scope.fxcolorsFun = function() {
      window.fxcol = $scope.fxcolormodel;
      if (fxcol == "Glacier Blue") {
         $scope.total_fx = 58990;
         window.fxprice = $scope.total_fx;
      } else {
         $scope.total_fx = 58990;
         window.fxprice = $scope.total_fx;
      }
   };
});

app.controller('fxcartCtrl',function($scope) {
   $scope.fxAddCart = function() {
      cart_items.push({itemname:fxcol,itemprice:fxprice});
   };
});

app.controller('k20ctrl',function($scope) {
   $scope.k20colors=["Glacier Blue","Carbon Black"];
   $scope.total_k20 = 0;
   $scope.k20colorsFun = function() {
      window.k20col = $scope.k20colormodel;
      if (k20col == "Glacier Blue") {
         $scope.total_k20 = 24999;
         window.k20price = $scope.total_k20;
      } else {
         $scope.total_k20 = 24999;
         window.k20price = $scope.total_k20;
      }
   };
});

app.controller('k20cartCtrl',function($scope) {
   $scope.k20AddCart = function() {
      cart_items.push({itemname:k20col,itemprice:k20price});
   };
});

app.controller('goToCartCtrl',function($scope) {
   $scope.goToCart = function() {
      window.localStorage.setItem("cartItems", JSON.stringify(cart_items));
      location.href = 'cart.html';
   };
});
