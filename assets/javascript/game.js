    $(document).ready(function(){
    var randomNum=Math.floor(Math.random()*101+19)
    console.log("my random number",randomNum);
    
    $('.randomNumber').text(randomNum);
      console.log("display random number",randomNum);
    

    var blue= Math.floor(Math.random()*11+1)
    var green= Math.floor(Math.random()*11+1)
    var pink= Math.floor(Math.random()*11+1)
    var purple= Math.floor(Math.random()*11+1)
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;

 
    function reset(){
        randomNum=Math.floor(Math.random()*101+19);
        console.log(randomNum)
        $('.randomNumber').text(randomNum);
         blue= Math.floor(Math.random()*11+1);
         green= Math.floor(Math.random()*11+1);
         pink= Math.floor(Math.random()*11+1);
         purple= Math.floor(Math.random()*11+1);
         userTotal= 0;
        $('#totalScore').text(userTotal);
        } 
  
  function updateWins(){
    wins++; 
    $('#wins').text(wins);
    reset();
  }
  
  function updateLosses(){
    losses++;
    $('#losses').text(losses);
    reset()
  }
  
      $('#blue').on('click', function(){
            userTotal = userTotal + blue;
      console.log("total score =" + userTotal);
      $('#totalScore').text(userTotal); 


          console.log("condition 1a", userTotal == randomNum);      
          if (userTotal == randomNum){
            updateWins();
          }

          console.log("condition 1b", userTotal > randomNum);
          if ( userTotal > randomNum){
            updateLosses();
          }   


    })  
      $('#green').on('click', function(){
            userTotal = userTotal + green;
      console.log("total score =" + userTotal);
      $('#totalScore').text(userTotal); 
          if (userTotal == randomNum){
            updateWins();
          }
          if (userTotal > randomNum){
            updateLosses();
          } 
    })  


    $('#pink').on('click', function(){
           userTotal = userTotal + pink;
      console.log("total score =" + userTotal);
      $('#totalScore').text(userTotal);
  
            if (userTotal == randomNum){
            updateWins();
          }
            if (userTotal > randomNum){
            updateLosses();
          } 
    })  


    $('#purple').on('click', function(){
            userTotal = userTotal + purple;
      console.log("total score =" + userTotal);
      $('#totalScore').text(userTotal); 
        
            if (userTotal == randomNum){
            updateWins();
          }
            if (userTotal > randomNum){
            updateLosses();
          }
    });   
  }); 