/*---------ANGULAR JAVA SCRIPT----------*/
var app = angular.module('app', []);
app.controller('s10ctrl', function($scope) {
   $scope.total_S10 = 66800;
});
app.controller('vz1ctrl', function($scope) {
   $scope.total_vz1 = 12990;
});
app.controller('i7ctrl', function($scope) {
   $scope.total_i7 = 26999;
});
app.controller('fxctrl', function($scope) {
   $scope.total_fx = 58990;
});
app.controller('k20ctrl', function($scope) {
   $scope.total_k20 = 24999;
});
/*---------JAVA SCRIPT----------*/
function s10colorFunc() {
   window.s10color = document.getElementById("s10-product-color").value;
}
function s10memoryFunc() {
   window.s10memory = document.getElementById("s10-product-storage").value;
}
function s10ramFunc() {
   window.s10ram = document.getElementById("s10-product-ram").value;
}

function vz1colorFunc() {
   window.vz1color = document.getElementById("vz1-product-color").value;
}
function vz1memoryFunc() {
   window.vz1memory = document.getElementById("vz1-product-storage").value;
}
function vz1ramFunc() {
   window.vz1ram = document.getElementById("vz1-product-ram").value;
}

function i7colorFunc() {
   window.i7color = document.getElementById("i7-product-color").value;
}
function i7memoryFunc() {
   window.i7memory = document.getElementById("i7-product-storage").value;
}
function i7ramFunc() {
   window.i7ram = document.getElementById("i7-product-ram").value;
}

function fxcolorFunc() {
   window.fxcolor = document.getElementById("fx-product-color").value;
}
function fxmemoryFunc() {
   window.fxmemory = document.getElementById("fx-product-storage").value;
}
function fxramFunc() {
   window.fxram = document.getElementById("fx-product-ram").value;
}

function k20colorFunc() {
   window.k20color = document.getElementById("k20-product-color").value;
}
function k20memoryFunc() {
   window.k20memory = document.getElementById("k20-product-storage").value;
}
function k20ramFunc() {
   window.k20ram = document.getElementById("k20-product-ram").value;
}
