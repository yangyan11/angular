angular.module("services",[])
   .factory("indexDate",function($http){
       return $http({url:"1.txt"});
       //return[
       //    {"title":"新闻1", "con":"新闻1内容"},
       //    {"title":"新闻2","con":"新闻1内容"},
       //    {"title":"新闻3","con":"新闻1内容"},
       //    {"title":"新闻4","con":"新闻1内容"},
       //    {"title":"新闻5","con":"新闻1内容"}]
   })
