angular.module("myapp",[])
 .controller("phone",["$scope","$filter","$http",function($scope,$filter,$http){
     $http({url:"/ajax"}).then(function(data){
         //console.log(data)
         //$scope.data=data.data;
         var data=data.data;
         var arr=[];
         for(var i=0;i<data.length;i++){
             var current=[];
             for(var j=1;j<data.length;j++){
                 if(data[i].en==data[j].en&&!data[j].flag){
                     data[j].flag=true;
                     current.push(data[i]);
                     current.en=data[i].en;
                 }
             }
             if(current.length>0){
                 arr.push(current);
                 var arr1=$filter("orderBy")(arr,"en")
             }

         }
         //console.log(arr1)
         $scope.data=arr1;
         $scope.type="";
         $scope.filter=function(en){
             $scope.type=en;
         }
         $scope.show=function(){
             $scope.type="";
         }
     })
 }])