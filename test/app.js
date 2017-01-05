
angular.module("myapp",["ngRoute","ngAnimate","ctrls","services"])
    .config(function($routeProvider){
        $routeProvider.when("/",{
            templateUrl:"index.html",
            controller:"index"
        }).when("/list/:id",{
            templateUrl:"list.html",
            controller:"list"
        }).when("/show/:id",{
            templateUrl:"show.html",
            //controller:"list"
        }).otherwise("/")
    }).controller("list",function($scope,$routeParams){
    $scope.id=$routeParams.id;
})

//1. bower 引入到页面当中
//2. 将route提供的模块以来到我们的主模块当中  ngroute
//3. 配置路由  在主文件当中配置路由
//4. config  $routeProvider 服务
//5. $routeProvider