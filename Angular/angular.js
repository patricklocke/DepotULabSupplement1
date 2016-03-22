// Objectives

// Make a button appear on the page when it's first loaded. The button cannot already be in your html.
// When the button is clicked, you should display an Alert box with any (nice) message.
var app = angular.module("myApp",['ngSanitize']);
    
app.controller('firstController', ['$scope', '$window',function($scope,$window){
   $scope.alertClicked = function(){
        $window.alert("Don't touch me there!");
    } 
}])

//Make a button and text box (you can just put them in your HTML). When the button is clicked, display an alert 
//with the message that is typed in the text box.
app.controller('secondController', ['$scope','$window', function($scope,$window){
    $scope.comments = {
        text: ''
    }
    $scope.alertClicked = function(){
        $window.alert($scope.comments.text)
    }
}])


// Create a div in HTML. Using JavaScript, make it change to a different background color when your mouse 
//hovers over it. The div should return to its original color when the mouse exits the div.
app.controller('thirdController', ['$scope', function($scope){
    
    $scope.hover = function(){
        $scope.newColor = {
            'background-color': 'blue'
        };
        console.log('in');
    $scope.out = function(){
        $scope.newColor= {
            'background-color': '#aaa'
        };
        console.log('out');
        }
    };
    
}]);


// Put some text in a paragraph. Make it where when you click on the paragraph, the color of the text 
//switches to red. Once you get that working, try to rewrite your code to make it switch to a random color 
//each click (you don't have to show the code for just red once you get random working).
app.controller('fourthController', ['$scope', function($scope){
    var colors = ["blue", "green", "orange", "purple", "yellow", "navy", "red","pink"];
    $scope.click = function(){
        $scope.newColor = {
            color: colors[Math.floor(Math.random()*6)+1]
        };
        console.log('clicked!');
    };
    
}]);

// Add a button and an empty div. When the button is clicked, add a span that contains your name to the empty div.
app.controller('fifthController', ['$scope','$sanitize', function($scope,$sanitize){
   
    var namer = angular.element( document.querySelector( '#sayMyName' ) );
    $scope.newName = function(){
         namer.append('<p> Patrick Locke </p>')
    }
    
}]);


// Create a button and a ul in your HTML. In JavaScript, create an array containing the names of your 
//friends (at least 10. If you don't have that many, include your imaginary ones). When the button is
// clicked, add each friend's name as an li to the ul on the page.
app.controller('sixthController', ['$scope','$sanitize', function($scope,$sanitize){
    var i = 0
    var friendsList = ["Marilyn", "Josh", "Chris", "Drew", "Mo", "Danny", "Robert", "Kevin", "Andy", "Scotty","Bo"];
    var pool = angular.element( document.querySelector( '#friendpool' ) );
    $scope.show = function (){
       for(i = 0; i < friendsList.length; i++)
       (pool).append('<li>'+friendsList[i]+'</li>');
    }
    
}]);



