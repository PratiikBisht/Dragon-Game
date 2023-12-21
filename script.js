cross= true;



document.onkeydown = function(e) {
    console.log("key code is", e.keyCode);
    if (e.keyCode == 38) {
      const dino = document.querySelector('.dino');
      dino.classList.add('animateDino');
      setTimeout(() => {
        dino.classList.remove('animateDino');
      }, 500);
    }
    if (e.keyCode == 39) {
        const dino = document.querySelector('.dino');
        dinoX= parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left =dinoX+112+"px";
        }
    if (e.keyCode == 37) {
            const dino = document.querySelector('.dino');
            dinoX= parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
            dino.style.left = (dinoX - 112)+"px";
            }
      
};
  



  setInterval(() => {
    const dino = document.querySelector(".dino");
    const gameOver = document.querySelector('.gameOver');
    const obstacle = document.querySelector('.obstacleAni');
  
    const dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    const dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('bottom'));
  
    const ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    const oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('bottom'));
  
    const offsetX = Math.abs(dx - ox);
    const offsetY = Math.abs(dy - oy);
    console.log(offsetX, offsetY);
  




    let score = 0;

setInterval(() => {
  // Check for collision first
  if (offsetX < 93 && offsetY < 50) {
    gameOver.style.visibility = 'visible';
    obstacle.classList.remove('obstacleAni');
    // Stop the game loop after collision
    clearInterval(intervalId); // Assuming `intervalId` holds the interval reference
  } else {
    // Check for obstacle movement
    if (offsetX > 93 && offsetY > 50) {
      obstacle.style.left = `${ox - 5}px`; // Adjust movement as needed
    } else if(offsetX< 144 && cross) {
      // Increment score and update display
      score++; // Increment score using shorthand
      updateScore(score);
      scoreElement.textContent = score;
      cross= false;
      setTimeout(() => {
        cross= true;
      }, 1000);
    }
  }
}, 100);

function updateScore(score) {
  scoreCount.innerHTML = "Your Score: " + score; // Add a colon for clarity
}





/*    setInterval(() => {
      // Check the first condition
      if (offsetX < 93 && offsetY < 50) {
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
    } else {
        // Check the second condition (for obstacle movement)
        if (offsetX > 93 && offsetY > 50 ) {
          // Move the obstacle
          obstacle.style.left = `${ox - 5}px`; // Adjust movement as needed
        } else {
          
            score = score + 1;
            updateScore(score)
            scoreElement.textContent = score;

          }
        }
    
       // Display the score
        scoreElement.textContent = score; // Assuming a score element exists
      }
    , 100);
    /*if (offsetX < 93 && offsetY < 50) {
      gameOver.style.visibility = 'visible';
      obstacle.classList.remove('obstacleAni');
    } else {
      // Move the obstacle here
      obstacle.style.left = `${ox - 5}px`; // Adjust the movement amount as needed
    }
    //else{
      //  score= score+1;
    //}    
}, 100);
   
function updateScore(score) {
    
    scoreCount.innerHTML= "Your Score"+ score;
}

*/












/*document.onkeydown = function(e){
    console.log("key code is",e.keyCode)
    if(e.keyCode ==38){
        dino= document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 500);
    }
}


setInterval(() => {
    dino= document.querySelector(".dino");
    gameOver = document.querySelector('.gameOver');
    obstacle=  document.querySelector('.obstacleAni');
    
    dx= parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
    dy= parseInt(window.getComputedStyle(dino,null).getPropertyValue('bottom'))

    ox= parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'))
    oy= parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('bottom'))
    
    offsetX= Math.abs(dx-ox);
    offsetY= Math.abs(dy-oy);
    console.log(offsetX, offsetY)
    if(offsetX< 93, offsetY<50){
        gameOver.style.visibility= 'visible';
        obstacle.classList.remove('obstacleAni')
    }
}, 100);*/})