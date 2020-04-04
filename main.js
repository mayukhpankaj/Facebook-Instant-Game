console.log("script started");

//testapp https://www.facebook.com/embed/instantgames/YOUR_GAME_ID/player?game_url=https://localhost:PORT NUMBER


//This url is for running the embeddded player in the browser. 
//Replace YOUR_GAME_ID with you gameId ex: 1625766xxxx 
//replace PORT NUMBER with your https server port.


//FBInstant.initializeAsync Initializes the SDK library. This should be called before any other SDK functions.


FBInstant.initializeAsync()    
  .then(function(){
  
  //loading game assets here

  var progress = 0;

  var interval = setInterval(function(){

    progress+=5;
    FBInstant.setLoadingProgress(progress);

    if(progress>95){
     
    //when progress is 100, FBInstant.startGameAsync starts the game.

    	clearInterval(interval)
    	FBInstant.startGameAsync()
  .then(function(){ 

  	console.log("game has started");

    //Now we can access player name, ID , profile picture.
      
      var playerName = FBInstant.player.getName();
      var playerId = FBInstant.player.getID();
      var playerPhoto = FBInstant.player.getPhoto();

      console.log(playerName,playerId,playerPhoto);


       });

   }

  },100)



  console.log("loaded")
}

);
