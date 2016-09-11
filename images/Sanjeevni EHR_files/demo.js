

  var widgets = [
    {
      title:'Allergies',
      dialodId : 'did1',
      img : 'http://img.phombo.com/img1/photocombo/1644874/wallpapers-fresh-morning-hd-november-mac-nature-2560x1600-nature-picture-morning-hd-wallpaper.jpg',
      seeMoreFunc : '/getAllergies',
      dialogFunc : 'openDefault()'
    },
    {
      title:'Patient Visits',
      dialodId : 'did2',
      img : 'https://media2.popsugar-assets.com/files/2014/02/10/666/n/24155406/a2acad2b64836967_Postpartum.jpg.xxxlarge_2x.jpg',
      seeMoreFunc : 'patient_visit()'
    }
    ,
    {
      title:'Doctor Notes',
      dialodId : 'did3',
      img : 'http://img.phombo.com/img1/photocombo/1644874/wallpapers-fresh-morning-hd-november-mac-nature-2560x1600-nature-picture-morning-hd-wallpaper.jpg',
      seeMoreFunc : 'allergies()'
    },
    {
      title:'Word Cloud',
      dialodId : 'did4',
      img : 'http://img.phombo.com/img1/photocombo/1644874/wallpapers-fresh-morning-hd-november-mac-nature-2560x1600-nature-picture-morning-hd-wallpaper.jpg',
      seeMoreFunc : 'allergies()'
    },
    {
      title:'Twitter Feeds',
      dialodId : 'did5',
      img : 'http://img.phombo.com/img1/photocombo/1644874/wallpapers-fresh-morning-hd-november-mac-nature-2560x1600-nature-picture-morning-hd-wallpaper.jpg',
      seeMoreFunc : '/twitter'
    }
    ,
    {
      title:'Vital Signs',
      dialodId : 'did5',
      img : 'http://img.phombo.com/img1/photocombo/1644874/wallpapers-fresh-morning-hd-november-mac-nature-2560x1600-nature-picture-morning-hd-wallpaper.jpg',
      seeMoreFunc : 'allergies()'
    }
     ,
    {
      title:'Vital Signs',
      dialodId : 'did5',
      img : 'http://img.phombo.com/img1/photocombo/1644874/wallpapers-fresh-morning-hd-november-mac-nature-2560x1600-nature-picture-morning-hd-wallpaper.jpg',
      seeMoreFunc : 'allergies()'
    }
     ,
    {
      title:'Vital Signs',
      dialodId : 'did5',
      img : 'http://img.phombo.com/img1/photocombo/1644874/wallpapers-fresh-morning-hd-november-mac-nature-2560x1600-nature-picture-morning-hd-wallpaper.jpg',
      seeMoreFunc : 'allergies()'
    }
     ,
    {
      title:'Vital Signs',
      dialodId : 'did5',
      img : 'http://img.phombo.com/img1/photocombo/1644874/wallpapers-fresh-morning-hd-november-mac-nature-2560x1600-nature-picture-morning-hd-wallpaper.jpg',
      seeMoreFunc : 'allergies()'
    }
  ];

 var app = angular.module('app', ['ngRoute','ng-draggable-widgets','ngDialog']);
    
    app.controller('dragController', function($scope , $http, $rootScope, ngDialog) {
      $scope.widgets = widgets;
      $scope.moveWidget = function(drag) {
        console.log(drag);
      }

      $scope.open = function () {
              alert('inside open');
              ngDialog.open({ template: 'firstDialogId'});
            };

            $scope.allergiesDialog = function () {
              //alert('inside open default');
              $rootScope.theme = 'ngdialog-theme-default';

              ngDialog.open({
                template: 'did1',
                className: 'ngdialog-theme-default'
              });
              //alert('inside open default1');
            };

            $scope.visitsDialog = function () {
              //alert('inside open default');
              $rootScope.theme = 'ngdialog-theme-default';

              ngDialog.open({
                template: 'did2',
                className: 'ngdialog-theme-default'
              });
              //alert('inside open default1');
            };

            $scope.openDefault = function () {
              //alert('inside open default');
              $rootScope.theme = 'ngdialog-theme-default';

              ngDialog.open({
                template: 'did2',
                className: 'ngdialog-theme-default'
              });
              //alert('inside open default1');
            };

      $scope.allergies = function(){
        window.location.assign('getAllergies');
      }

      $scope.twitter_default = function(){

        $http.post('/twitter',{

        }).success(function(response){
          console.log("response: "+response.tweets);
          window.location.assign('/twitter');
        })
      }

      $scope.findTweets = function(req,res) {
        // body...
        var searchText = $scope.searchText;
        var state = $scope.stateList;
        alert(state);
        //console.log("searchText: "+searchText);
        $http.post('/twitter',{
          "searchText": $scope.searchText,
          "state" : $scope.stateList
        }).success(function(response){
          console.log("response: "+response);
          window.location.assign('/twitter')
        })
      }
    });

app.controller('homeCtrl',function($scope,$http){
  $scope.homePage = function(req,res){
    console.log('here');
        $http('homepage',
          {
            "data": "hello"
          }
        ).success(function(response){
          console.log(response.toString());
          window.location.assign('homepage');
        });

        }
});  
         
