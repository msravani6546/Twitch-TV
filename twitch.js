$(document).ready(function() {
  var streamUsers=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
 var i;
  for(i=0;i<streamUsers.length;i++)
    {
       // XHR for Stream info and offline status
  var getStream = new XMLHttpRequest();
  getStream.open("GET", "https://api.twitch.tv/kraken/streams/" + streamUsers[i] + "?client_id=8leeqly0si1afoh8b9xb487c8dujvd", false);
  getStream.send(null);
  // Assigning JSON data to var j
  var json = JSON.parse(getStream.response);
  // Pulling JSON into variables
  var status = json.stream;
      
   // XHR for logo
  var getLogo = new XMLHttpRequest();
  getLogo.open("GET", "https://api.twitch.tv/kraken/channels/" + streamUsers[i] + "?client_id=8leeqly0si1afoh8b9xb487c8dujvd", false);
  getLogo.send(null);

  // Assigning JSON data to var x
  var x = JSON.parse(getLogo.response);
  var logo = x.logo;
  var displayName = x.display_name;
  var url = x.url;
  var game = x.game;
  var followers = x.followers;
   if(status===null)
     {
    $("#followerInfo").prepend("<div class ='row'>"+"<div class='col-md-4'>" +
               "<a href='"+url+"' target='blank'>"+"<img src='" + logo + "'></a>"
              +
              "</div>" + "<div class='col-md-4'><h2>" + displayName + "</h2><h6><p>Followers:"+followers+"</h6></p></div>" + "<div class='col-md-4'>" + "Offline" + "</div></div>");
     }
    else{
      $("#followerInfo").prepend("<div class ='row'>" + "<div class='col-md-4'>" +
              "<img src='" + logo + "'>"
              +
              "</div>" + "<div class='col-md-4 text-center'><h2>" + displayName + "</h2><h6><p>Followers:"+followers+"</h6></p></div>" + "<div class='col-md-4'>" + "Playing:"+game + "</div><br></div>");
     
    }
    }
});
