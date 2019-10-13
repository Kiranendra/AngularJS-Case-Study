var app = angular.module('app', []);

var s10col = '';
var s10mem = '';
var s10ra = '';

var vz1col = '';
var vz1mem = '';
var vz1ra = '';

var i7col = '';
var i7mem = '';
var i7ra = '';

var fxcol = '';
var fxmem = '';
var fxra = '';

var k20col = '';
var k20mem = '';
var k20ra = '';

app.controller('s10colorsctrl',function($scope) {
   $scope.s10colors=["Prism Blue","Prism White"];
   $scope.s10colorsFun = function() {
      window.s10col = $scope.s10colormodel;
   }
});
app.controller('s10memoryctrl',function($scope) {
   $scope.s10memory=["128GB","512GB"];
   $scope.s10memoryFun = function() {
      window.s10mem = $scope.s10memorymodel;
   }
});
app.controller('s10ramctrl',function($scope) {
   $scope.s10ram=["8GB","12GB"];
   $scope.s10ramFun = function() {
      window.s10ra = $scope.s10rammodel;
   }
});
app.controller('vz1colorsctrl',function($scope) {
   $scope.vz1colors=["Sonic Black","Sonic Blue"];
   $scope.vz1colorsFun = function() {
      window.vz1col = $scope.vz1colormodel;
   }
});
app.controller('vz1memoryctrl',function($scope) {
   $scope.vz1memory=["64GB","128GB"];
   $scope.vz1memoryFun = function() {
      window.vz1mem = $scope.vz1memorymodel;
   }
});
app.controller('vz1ramctrl',function($scope) {
   $scope.vz1ram=["4GB","6GB"];
   $scope.vz1ramFun = function() {
      window.vz1ra = $scope.vz1rammodel;
   }
});
app.controller('i7colorsctrl',function($scope) {
   $scope.i7colors=["Gold","Red"];
   $scope.i7colorsFun = function() {
      window.i7col = $scope.i7colormodel;
   }
});
app.controller('i7memoryctrl',function($scope) {
   $scope.i7memory=["32GB","128GB"];
   $scope.i7memoryFun = function() {
      window.i7mem = $scope.i7memorymodel;
   }
});
app.controller('i7ramctrl',function($scope) {
   $scope.i7ram=["2GB"];
   $scope.i7ramFun = function() {
      window.i7ra = $scope.i7rammodel;
   }
});
app.controller('fxcolorsctrl',function($scope) {
   $scope.fxcolors=["Glacier Blue","Bordeaux Red"];
   $scope.fxcolorsFun = function() {
      window.fxcol = $scope.fxcolormodel;
   }
});
app.controller('fxmemoryctrl',function($scope) {
   $scope.fxmemory=["256GB"];
   $scope.fxmemoryFun = function() {
      window.fxmem = $scope.fxmemorymodel;
   }
});
app.controller('fxramctrl',function($scope) {
   $scope.fxram=["8GB"];
   $scope.fxramFun = function() {
      window.fxra = $scope.fxrammodel;
   }
});
app.controller('k20colorsctrl',function($scope) {
   $scope.k20colors=["Glacier Blue","Carbon Black"];
   $scope.k20colorsFun = function() {
      window.k20col = $scope.k20colormodel;
   }
});
app.controller('k20memoryctrl',function($scope) {
   $scope.k20memory=["128GB","256GB"];
   $scope.k20memoryFun = function() {
      window.k20mem = $scope.k20memorymodel;
   }
});
app.controller('k20ramctrl',function($scope) {
   $scope.k20ram=["6GB","8GB"];
   $scope.k20ramFun = function() {
      window.k20ra = $scope.k20rammodel;
   }
});

//-----------------------------------------------------
app.controller('s10ctrl', function($scope) {
   $scope.total_S10 = "NA";
});
app.controller('vz1ctrl', function($scope) {
   $scope.total_vz1 = "NA";
});
app.controller('i7ctrl', function($scope) {
   $scope.total_i7 = "NA";
});
app.controller('fxctrl', function($scope) {
   $scope.total_fx = "NA";
});
app.controller('k20ctrl', function($scope) {
   $scope.total_k20 = "NA";
});
