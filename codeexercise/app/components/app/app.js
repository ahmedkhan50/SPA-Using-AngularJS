var myapp=angular.module('myapp',['ngRoute']);

myapp.config(['$routeProvider',function($routeProvider){

    $routeProvider.

    when('/',{

        templateUrl:'first.html',
        controller:'mycntrl'
    }).


    when('/first',{

        templateUrl:'first.html',
        controller:'mycntrl'
    }).

    when('/second',{

        templateUrl:'second.html',
        controller:'mycntrl'

    }).
    when('/confirm',{

        templateUrl:'confirm.html',
        controller:'mycntrl'

    })


}]);


myapp.service('myservice', function () {

    this.first='';
    this.last='';
    this.address1='';
    this.city='';
    this.state1='';
    this.zip='';
    this.phone='';

});

myapp.controller('mycntrl',function($scope,myservice,$http,$location){

    $scope.first=myservice.first;
    $scope.last=myservice.last;
    $scope.address1=myservice.address1;
    $scope.city=myservice.city;
    $scope.state1=myservice.state1;
    $scope.zip=myservice.zip;
    $scope.phone=myservice.phone;

    $scope.$watch('first', function () {

        $scope.first=$scope.first;
        myservice.first=$scope.first;

    });

    $scope.$watch('last', function () {

        $scope.last=$scope.last;
        myservice.last=$scope.last;

    });

    $scope.$watch('address1', function () {

        $scope.address1=$scope.address1;
        myservice.address1=$scope.address1;

    });

    $scope.$watch('city', function () {

        $scope.city=$scope.city;
        myservice.city=$scope.city;

    });

    $scope.$watch('state1', function () {

        $scope.state1=$scope.state1;
        myservice.state1=$scope.state1;

    });

    $scope.$watch('zip', function () {

        $scope.zip=$scope.zip;
        myservice.zip=$scope.zip;

    });

    $scope.$watch('phone', function () {

        $scope.phone=$scope.phone;
        myservice.phone=$scope.phone;

    });

    $scope.sub= function () {

        var data={first:$scope.first,last:$scope.last,address:$scope.address1,city:$scope.city,state:$scope.state1,zip:$scope.zip,phone:$scope.phone};

        $http.post('http://127.0.0.1:8090/formsubmit',JSON.stringify(data)).success(function (data,status,headers,config) {

            $location.path('/confirm');

        }).error(function (data,status,headers,config) {

        });
    }

});








