document.addEventListener("DOMContentLoaded", function(event) {
   var btn = document.createElement('button');
   var text = document.createTextNode("Click Me");
   btn.appendChild(text);
   document.body.appendChild(btn);

  
   btn.onclick = function(){
       alert("Hey, Watch where you're pointin' that!");
   };
 var submitbtn = document.getElementById('submit');
     submitbtn.onclick = function(){
         alert(document.getElementById('comment').value);
         }
 
  var divChg = document.getElementById('test')
     divChg.onmouseover = function(){
         divChg.style.backgroundColor = '#003580'; 
         };
     divChg.onmouseout = function() {
         divChg.style.backgroundColor= '#AAAAAA';
         };
    
    
    var name = document.createElement('button');
        var text2 = document.createTextNode('Name');
        name.appendChild(text2);
        document.body.appendChild(name);

    name.onclick = function () {
        var paddy = document.createElement('span');
        paddy.innerHTML = 'Patrick S. Locke';
        document.getElementById('saymyname').appendChild(paddy);
    }

});
 colorArr = ["blue", "green", "orange", "purple", "yellow", "navy", "red", ]
    
 var karmaChameleon = document.getElementById('chameleon');
     karmaChameleon.onclick = function() {
         karmaChameleon.style.color = colorArr[Math.floor(Math.random()*6)+1];
         };

var friendButton = document.getElementById('friends');

var friendsList = ["Marilyn", "Josh", "Chris", "Drew", "Mo", "Danny", "Robert", "Kevin", "Andy", "Scotty","Bo"];

friendButton.onclick = function(){
    for (i = 0 ; i < friendsList.length; i++){
        var listItem = document.createElement('li');
        listItem.innerHTML = friendsList[i];
        friendsList.splice(0,1);
        console.log(friendsList);
        break
    }
    document.getElementById('friendpool').appendChild(listItem);
};

