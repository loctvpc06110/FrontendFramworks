//  tạo một ứng dụng AngularJS
var app = angular.module("myShop", []);

app.controller("myCtrl", myFunction);

function myFunction($scope) {
    // Biến mess
    $scope.mess = "Hello Bro !";

    // Mảng Đối tượng info
    $scope.info = [
        {
            name: 'Thái Lộc',
            age: 18,
            address: 'Cần Thơ City'
        },
        {
            name: 'Jocol',
            age: 18,
            address: 'Cần Thơ City'
        }
    ]

    $scope.shop = [
        {
            id: 1,
            name: 'sản phẩm 1',
            price: 1.1
        },
        {
            id: 2,
            name: 'sản phẩm 2',
            price: 111
        },
        {
            id: 3,
            name: 'sản phẩm 3',
            price: 25
        },
        {
            id: 4,
            name: 'sản phẩm 4',
            price: 34
        }
    ]
}