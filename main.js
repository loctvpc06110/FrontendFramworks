var app = angular.module("appShop", []);


app.controller("controllerShop", function ($scope) {

    $scope.submitted = false;

    $scope.sendData = function () {
        $scope.submitted = true;
    
        $scope.timeNow = new Date(); // Lấy thời gian hiện tại
        $scope.yearNow = $scope.timeNow.getFullYear(); // Lấy năm hiện tại
        $scope.yearBirthday = $scope.birthday.getFullYear(); // Lấy năm sinh
        $scope.age = $scope.yearNow - $scope.yearBirthday; // Tính tuổi
    }

    $scope.calculate = function () {
        $scope.length = parseFloat($scope.length);
        $scope.width = parseFloat($scope.width);
        // Tính chu vi và diện tích
        $scope.perimeter = 2 * ($scope.length + $scope.width);
        $scope.area = $scope.length * $scope.width;
    }

    $scope.calculatePerimeter = function () {
        return $scope.perimeter || '';
    };

    $scope.calculateArea = function () {
        return $scope.area || '';
    };

    $scope.dataStudents = [
        {
            studentCode: 'PC66666',
            image: 'student1.png',
            fullName: 'Thái Văn Lộc',
            age: 20,
            gender: 'Nam',
            address: 'Cái Răng, Cần Thơ',
            birthday: '13-02-2004'
        },
        {
            studentCode: 'PC77777',
            image: 'student1.png',
            fullName: 'Hacker Jocol',
            age: 19,
            gender: 'Nam',
            address: 'Cái Răng, Cần Thơ',
            birthday: '13-02-2005'
        },
        {
            studentCode: 'PC88888',
            image: 'student1.png',
            fullName: 'Coder Lord',
            age: 18,
            gender: 'Nam',
            address: 'Cái Răng, Cần Thơ',
            birthday: '13-02-2006'
        }
    ]

});

app.filter('dateFormat', function () {
    return function (input) {
        if (input) {
            var date = new Date(input);
            var day = date.getDate();
            var month = date.getMonth() + 1; // Tháng bắt đầu từ 0 nên cần cộng thêm 1
            var year = date.getFullYear();

            // Đảm bảo có 2 chữ số cho ngày và tháng
            day = (day < 10) ? '0' + day : day;
            month = (month < 10) ? '0' + month : month;

            return day + '-' + month + '-' + year;
        } else {
            return '';
        }
    };
});