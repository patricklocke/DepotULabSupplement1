$(document).ready(function() {
    var clickMe = $('#button-time').prepend("<button id= 'clickMe'>Click Here</button>");
        $('#clickMe').html('Click Me');
        $('#clickMe').on('click', function(){
        alert('Why would you DO THAT!?'); 
        });
  
    
    $('#submit').on('click', function(){
        var submitMe = $('#comments').val();
        alert(submitMe);
    });
    
    $('#test').on('mouseover',function(){
        $(this).css({
            backgroundColor: 'navy'
        });
    });
    $('#test').on('mouseout', function(){
        $(this).css({
            backgroundColor: '#AAAAAA'
        });
    });
    
    var colored = ['blue','orange','navy','pink','red','purple','yellow','green'];
    $('#colors').on('click', function(){
        $(this).css({
            color: colored[Math.floor(Math.random()*7)+1]
        })
    })
    
    $('#sayMyName').on('click', function(){
        $('#sayItHere').append('<span>Patrick Locke</span>');
    })
    
    
    var friendList = ["Marilyn", "Josh", "Chris", "Drew", "Mo", "Danny", "Robert", "Kevin", "Andy", "Scotty","Bo"];
    
    $('#myFriendsAreHere').on('click', function(){
        // for (i = 0; i < friendList.length; i++)
        $('#myFriends').append('<li>'+friendList[0]+'</li>');
        friendList.shift();
        // console.log(friendList);
    });
});


// 1. Make a button appear on the page when it's first loaded. The button cannot already be in your html.
//    When the button is clicked, you should display an Alert box with any (nice) message.
// 2. Make a button and text box (you can just put them in your HTML). When the button is clicked, display 
//    an alert with the message that is typed in the text box.
// 3. Create a `div` in HTML. Using JavaScript, make it change to a different background color when your mouse
//    hovers over it. The div should return to its original color when the mouse exits the div.
// 4. Put some text in a paragraph. Make it where when you click on the paragraph, the color of the text switches
//    to red. Once you get that working, try to rewrite your code to make it switch to a random color each click 
//    (you don't have to show the code for just red once you get random working).
// 5. Add a button and an empty div. When the button is clicked, add a `span` that contains your name to the empty div.
// 6. Create a button and a `ul` in your HTML. In JavaScript, create an array containing the names of your friends
//    (at least 10. If you don't have that many, include your imaginary ones). When the button is clicked, add each 
//    friend's name as an `li` to the `ul` on the page.