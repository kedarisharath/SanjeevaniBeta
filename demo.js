

  var widgets = [
    {
      title:'Allergies',
      dialodId : 'did1',
      img : 'http://img.phombo.com/img1/photocombo/1644874/wallpapers-fresh-morning-hd-november-mac-nature-2560x1600-nature-picture-morning-hd-wallpaper.jpg',
      seeMoreFunc : 'showAllAlergies.html',
      dialogFunc : 'openDefault()'
    },
    {
      title:'Medical Records',
      dialodId : 'did2',
      img : 'https://media2.popsugar-assets.com/files/2014/02/10/666/n/24155406/a2acad2b64836967_Postpartum.jpg.xxxlarge_2x.jpg',
      seeMoreFunc : 'showAllMedicalHistoryRecord.html'
    },
    {
      title:'Doctor Notes',
      dialodId : 'did3',
      img : 'http://img.phombo.com/img1/photocombo/1644874/wallpapers-fresh-morning-hd-november-mac-nature-2560x1600-nature-picture-morning-hd-wallpaper.jpg',
      seeMoreFunc : 'showDoctorNotes.html'
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
      seeMoreFunc : 'twitter.html'
    }
    ,
    {
      title:'Profile',
      dialodId : 'did5',
      img : 'http://img.phombo.com/img1/photocombo/1644874/wallpapers-fresh-morning-hd-november-mac-nature-2560x1600-nature-picture-morning-hd-wallpaper.jpg',
      seeMoreFunc : 'updateProfile.html'
    }
    
     ,
    {
      title:'Emergency Records',
      dialodId : 'did5',
      img : 'http://img.phombo.com/img1/photocombo/1644874/wallpapers-fresh-morning-hd-november-mac-nature-2560x1600-nature-picture-morning-hd-wallpaper.jpg',
      seeMoreFunc : 'EmergencyRecords.html'
    }
     ,
    {
      title:'Medical Contacts',
      dialodId : 'did5',
      img : 'http://img.phombo.com/img1/photocombo/1644874/wallpapers-fresh-morning-hd-november-mac-nature-2560x1600-nature-picture-morning-hd-wallpaper.jpg',
      seeMoreFunc : 'MedicalContacts.html'
    },
    {
      title:'Reminders',
      dialodId : 'did6',
      img : 'https://lh5.ggpht.com/_gZfEjhX-KGuwfjdGqAPCvp5TzRkpxJtyHYSrnvU7RHK9KQUyC5btRT-gDI0Q06ZyjE4=w300',
      seeMoreFunc : 'reminders.html'
    },
    {
      title:'ICD Browser',
      dialodId : 'did5',
      img : 'http://img.phombo.com/img1/photocombo/1644874/wallpapers-fresh-morning-hd-november-mac-nature-2560x1600-nature-picture-morning-hd-wallpaper.jpg',
      seeMoreFunc : 'EmergencyRecords.html'
    }
     ,
    {
      title:'Population Analyatics',
      dialodId : 'did5',
      img : 'http://img.phombo.com/img1/photocombo/1644874/wallpapers-fresh-morning-hd-november-mac-nature-2560x1600-nature-picture-morning-hd-wallpaper.jpg',
      seeMoreFunc : 'MedicalContacts.html'
    },
    {
      title:'Food and Nutrition Facts',
      dialodId : 'did6',
      img : 'https://lh5.ggpht.com/_gZfEjhX-KGuwfjdGqAPCvp5TzRkpxJtyHYSrnvU7RHK9KQUyC5btRT-gDI0Q06ZyjE4=w300',
      seeMoreFunc : 'reminders.html'
    }
  ];

var medication_records = [
                          {"id":1,"Date":"20 june","Doctor":"Bell","Allergy":"Eating"},
                          {"id":2,"Date":"02 july","Doctor":"Dean","Allergy":"Gaming"},
                          {"id":3,"Date":"24 jan","Doctor":"Barnes","Allergy":"Reading Books"},
                          {"id":4,"Date":"15 May","Doctor":"Bell","Allergy":"Youtubing"},
                          {"id":5,"Date":"18 Aug","Doctor":"Burns","Allergy":"Fishing"},
                          {"id":6,"Date":"20 Feb","Doctor":"Kim","Allergy":"Skipping"},
                          {"id":7,"Date":"09 Sep","Doctor":"Wallace","Allergy":"Football"},
                          {"id":8,"Date":"19 May","Doctor":"Williams","Allergy":"Baseball"},
                          {"id":9,"Date":"25 Dec","Doctor":"Olson","Allergy":"Programming"},
                          {"id":10,"Date":"21 Aug","Doctor":"Evans","Allergy":"Playing DOTA"},
                          {"id":11,"Date":"26 Dec","Doctor":"Butler","Allergy":"Gaming"},
                          {"id":12,"Date":"26 June","Doctor":"Hill","Allergy":"surfing"},
                          {"id":13,"Date":"08 June","Doctor":"Torres","Allergy":"cycling"},
                          {"id":14,"Date":"29 July","Doctor":"Hernandez","Allergy":"Music"},
                          {"id":15,"Date":"25 Aug","Doctor":"Carpenter","Allergy":"Football"},
                          {"id":16,"Date":"Harold","Doctor":"West","Allergy":"Gaming"},
                          {"id":17,"Date":"18 Mar","Doctor":"Hicks","Allergy":"Youtubing"},
                          {"id":18,"Date":"23 Mar","Doctor":"Davis","Allergy":"Partying"},
                          ];

// patient profile json
var getPatientProfile =
                    {
                      "ForceLogOn": "false",
                      "ImageLocation": "http://ec2-54-242-85-104.compute-1.amazonaws.com:8080/Sanjeevani/upload/8eda3197-8f1a-4720-a8a3-08708874af05_Picture015.jpg",
                      "address": "Krishna Nagar Colony, \nSecunderabad, A.P\nIndia ",
                      "birthday": "11/08/1940",
                      "blood_type": "B-",
                      "emergency_contact": "5107546260",
                      "ethinicity": "Indian",
                      "gender": "Female",
                      "height": "5.62",
                      "languagetype": "Telugu",
                      "phone": "914027619269",
                      "relationship": "Son",
                      "returnCode": "SUCCESS",
                      "status": "SUCCESS",
                      "user_firstname": "Hanumayamma",
                      "user_lastname": "Vuppalapati",
                      "weight": "130.00"
                    }

var reminders = {

};

            
var medicalRecords = {
  "ForceLogOn": "false",
  "PatientMedicalRecords": [
    {
      "blood_presure_diastolic": "120",
      "blood_presure_systolic": "90",
      "body_weight": "120",
      "comments_from_doc": "Confirmed! \nPregnancy",
      "doc_name": "Pushpalatha",
      "doc_visit_date": "08/20/1969",
      "mode_of_visit": "Pregnancy check",
      "prescribed_medicaltest_drugs": "Pregnancy check",
      "primary_doc": "false",
      "recordID": "16",
      "record_type": "MedicalHistory",
      "status": "SUCCESS",
      "temperature": "97"
    },
    {
      "blood_presure_diastolic": "120",
      "blood_presure_systolic": "98",
      "body_weight": "150",
      "comments_from_doc": "congrats - second baby delivery!",
      "doc_name": "Pushpalatha",
      "doc_visit_date": "06/23/1969",
      "mode_of_visit": "Baby Delivery",
      "prescribed_medicaltest_drugs": "None",
      "primary_doc": "true",
      "recordID": "15",
      "record_type": "MedicalHistory",
      "status": "SUCCESS",
      "temperature": "97"
    },
    {
      "blood_presure_diastolic": "120",
      "blood_presure_systolic": "98",
      "body_weight": "120",
      "comments_from_doc": "Congrats! Pregnancy \nAlso, please do not stress out due to taking care first baby.",
      "doc_name": "Pushpalatha",
      "doc_visit_date": "10/09/1968",
      "mode_of_visit": "Pregnancy check",
      "prescribed_medicaltest_drugs": "Pregnancy check",
      "primary_doc": "false",
      "recordID": "14",
      "record_type": "MedicalHistory",
      "status": "SUCCESS",
      "temperature": "97"
    },
    {
      "blood_presure_diastolic": "120",
      "blood_presure_systolic": "98",
      "body_weight": "150",
      "comments_from_doc": "Both Mom and daughter are healthy.\nCongrats!",
      "doc_name": "Pushpa Latha",
      "doc_visit_date": "02/20/1960",
      "mode_of_visit": "Baby deliver",
      "prescribed_medicaltest_drugs": "Baby delivery",
      "primary_doc": "true",
      "recordID": "13",
      "record_type": "MedicalHistory",
      "status": "SUCCESS",
      "temperature": "97"
    },
    {
      "date_of_medication": "01/10/1960",
      "dose_qantity": "1",
      "instructions": " Daily take one capsule",
      "name_of_mediaction": "Multivitamins",
      "prescriber_name": "Pushpalatha",
      "rate_quantity": "1",
      "recordID": "6",
      "record_type": "Medications",
      "status": "SUCCESS",
      "type_of_medication": "Capsules"
    },
    {
      "date_of_medication": "01/10/1969",
      "dose_qantity": "2",
      "instructions": " Daily take two capsule",
      "name_of_mediaction": "Vitamin C",
      "prescriber_name": "Pushpalatha",
      "rate_quantity": "1",
      "recordID": "6",
      "record_type": "Medications",
      "status": "SUCCESS",
      "type_of_medication": "Capsules"
    },
    {
      "blood_presure_diastolic": "120",
      "blood_presure_systolic": "99",
      "body_weight": "140",
      "comments_from_doc": "Please provide pregnancy test",
      "doc_name": "Pushpalatha",
      "doc_visit_date": "10/10/1959",
      "mode_of_visit": "Pregnancy",
      "prescribed_medicaltest_drugs": " Pregnancy Test",
      "primary_doc": "false",
      "recordID": "12",
      "record_type": "MedicalHistory",
      "status": "SUCCESS",
      "temperature": "97"
    },
    {
      "blood_presure_diastolic": "120",
      "blood_presure_systolic": "96",
      "body_weight": "2",
      "comments_from_doc": "Healthy baby",
      "doc_name": "Rama Murthy",
      "doc_visit_date": "12/20/1940",
      "mode_of_visit": "Polio Shot",
      "prescribed_medicaltest_drugs": "Polio Test",
      "primary_doc": "true",
      "recordID": "11",
      "record_type": "MedicalHistory",
      "status": "SUCCESS",
      "temperature": "97"
    },
    {
      "VacRecordScanLocation": "http://www.sanjeevani-ehr.com/LandingPage.html?sessionToken=a576e251-5586-4a6e-bd56-9bc5aecf901f&Status=SUCCESS",
      "VaccinationImmunization_date": "12/20/1940",
      "VaccinationImmunization_dose_qantity": "1",
      "VaccinationImmunization_name": "Polio Shot",
      "VaccinationImmunization_type": "Polio ",
      "recordID": "2",
      "record_type": "VaccinationImmunization",
      "status": "SUCCESS"
    },
    {
      "blood_presure_diastolic": "120",
      "blood_presure_systolic": "96",
      "body_weight": "2",
      "comments_from_doc": "Healthy baby",
      "doc_name": "Rama Murthy",
      "doc_visit_date": "12/20/1940",
      "mode_of_visit": "Polio Shot",
      "prescribed_medicaltest_drugs": "Polio Test",
      "primary_doc": "true",
      "recordID": "11",
      "record_type": "MedicalHistory",
      "status": "SUCCESS",
      "temperature": "97"
    },
    {
      "VacRecordScanLocation": "http://www.sanjeevani-ehr.com/LandingPage.html?sessionToken=a576e251-5586-4a6e-bd56-9bc5aecf901f&Status=SUCCESS",
      "VaccinationImmunization_date": "12/20/1940",
      "VaccinationImmunization_dose_qantity": "1",
      "VaccinationImmunization_name": "Polio Shot",
      "VaccinationImmunization_type": "Polio ",
      "recordID": "2",
      "record_type": "VaccinationImmunization",
      "status": "SUCCESS"
    }
  ],
  "returnCode": "SUCCESS"
}




 var app = angular.module('app', ['ng-draggable-widgets','ngDialog']);
    
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

            $scope.doctorNotes = function () {
              //alert('inside open default');
              $rootScope.theme = 'ngdialog-theme-default';

              ngDialog.open({
                template: 'did3',
                className: 'ngdialog-theme-default'
              });
              //alert('inside open default1');
            };

            $scope.profile = function(){
              $rootScope.theme = 'ngdialog-theme-default';

              ngDialog.open({
                template: 'did4',
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

            $scope.reminders = function () {
              //alert('inside open default');
              $rootScope.theme = 'ngdialog-theme-default';

              ngDialog.open({
                template: 'did6',
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
        //alert(state);
        //console.log("searchText: "+searchText);
        $http.post('/twitter',{
          "searchText": $scope.searchText,
          "state" : $scope.stateList
        }).success(function(response){
          console.log("response: "+response);
          window.location.assign('/twitter')
        })
      }

   //     $scope.sendMessage = function(req,res){
   //  var TWILIO_ACCOUNT_SID = 'ACbbf59407886e07676020f1ce867d3b41';
   //  var TWILIO_AUTH_TOKEN = '2764faaaf2be4b62688aedad02063e54';
   //  var number = "+16697776299";
   //  var client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
   //  var token = Math.floor(100000 + Math.random() * 900000);
   //  console.log('token: '+token);
   //  // client.sendSms({
   //  //   to: "+14087058185",
   //  //   from: number,
   //  //   body: "Hey there good looking!"
   //  // }, function(error, message){
   //  //     if(!error){
   //  //       console.log('Success!');
   //  //       console.log(message.sid);

   //  //       console.log('Message sent on: ', message.dateCreated);
   //  //     } else {
   //  //       console.log(error);
   //  //       console.log('Oops, there was an error!');
   //  //     }
   //  // });
   // }

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

app.controller('updateProfile',function($scope,$http){
  $scope.getPatientProfile = getPatientProfile;
  $scope.bool = false;
  $scope.editProfile = function(){
    alert('here');
    bool = false;
  }
});

var app1 = angular.module('app1', ['angularUtils.directives.dirPagination']);
app1.controller('medication', function($scope , $http){
  $scope.medication_records = medication_records;

});

app1.controller('showAllergy',function($scope,$http){
  $scope.allergyDetails = allergyDetails.AllergyRecords;
});
         
app1.controller('medicalRecords',function($scope,$http){
//     var MedicalHistoryRec = [];
//     $http({method: "GET",
//            url: '/showAllMedicalHistoryRecord'})
//     .success(function(){
//       for(var i=0; i<medicalRecords.PatientMedicalRecords.length ; i++){
//         if(medicalRecords.PatientMedicalRecords[i].record_type=='MedicalHistory')
//           MedicalHistoryRec.push(medicalRecords.PatientMedicalRecords[i]);
//       }
//     console.log(MedicalHistoryRec);
// });
  $scope.medicalRecords = medicalRecords ;
});

app1.controller('medicationRecords',function($scope,$http){
    var MedicationRec = [];
    $http({method: "GET",
           url: '/showMedicationRecords'})
    .success(function(){
      for(var i=0; i<medicalRecords.PatientMedicalRecords.length ; i++){
        if(medicalRecords.PatientMedicalRecords[i].record_type=='Medications')
          MedicationRec.push(medicalRecords.PatientMedicalRecords[i]);
      }
    console.log(MedicationRec);
});
  $scope.MedicationRec = MedicationRec;
});

app1.controller('testResults',function($scope,$http){
    var testResults = [];
    $http({method: "GET",
           url: '/showTestResults'})
    .success(function(){
      for(var i=0; i<medicalRecords.PatientMedicalRecords.length ; i++){
        if(medicalRecords.PatientMedicalRecords[i].record_type=='VaccinationImmunization')
          testResults.push(medicalRecords.PatientMedicalRecords[i]);
      }
    console.log(testResults);
});
  $scope.testResults = testResults;
});
         