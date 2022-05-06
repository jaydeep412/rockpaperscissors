
// function to display the move user chose if it is paper

function chooseMove1(){

  document.getElementById("movePrintDiv").innerHTML = '';

const moveImage = document.createElement("img");
moveImage.src = "p1.png";
moveImage.setAttribute("id","movePrintImage1");


document.getElementById('movePrintDiv').appendChild(moveImage);

var nodes = document.getElementById('movePrintDiv').childNodes;
for(var i=0; i<nodes.length; i++) {
    if (nodes[i].nodeName.toLowerCase() == "img") {
         nodes[i].style.width = "7em";
     }
}

}



// function to display the move user chose if it is rock

function chooseMove2(){

  document.getElementById("movePrintDiv").innerHTML = '';

  const moveImage = document.createElement("img");
  moveImage.src = "r1.png";
  moveImage.setAttribute("id","movePrintImage2");
  
  
  document.getElementById('movePrintDiv').appendChild(moveImage);
  
  var nodes = document.getElementById('movePrintDiv').childNodes;
  for(var i=0; i<nodes.length; i++) {
      if (nodes[i].nodeName.toLowerCase() == "img") {
           nodes[i].style.width = "7em";
       }
  }
  }


  // function to display the move user chose if it is scissors

  function chooseMove3(){

    document.getElementById("movePrintDiv").innerHTML = '';

    const moveImage = document.createElement("img");
    moveImage.src = "s1.png";
    moveImage.setAttribute("id","movePrintImage3");
    
    
    document.getElementById('movePrintDiv').appendChild(moveImage);
    
    var nodes = document.getElementById('movePrintDiv').childNodes;
    for(var i=0; i<nodes.length; i++) {
        if (nodes[i].nodeName.toLowerCase() == "img") {
             nodes[i].style.width = "7em";
         }
    }
    }


    // function to generate and display random computer move

    function enemyMove(){

      let imageArray = [];
      document.getElementById("printDiv").innerHTML = '';
      
      imageArray.push("s1.png");
      imageArray.push("r1.png");
      imageArray.push("p1.png");

      let imgLink = Math.floor((Math.random() * 3) );

      const enemyMoveImage = document.createElement("img");
      enemyMoveImage.src = imageArray[imgLink];
      enemyMoveImage.setAttribute("id","printImageResult");

      document.getElementById('printDiv').appendChild(enemyMoveImage);
      
      var nodes = document.getElementById('printDiv').childNodes;
      for(var i=0; i<nodes.length; i++) {
          if (nodes[i].nodeName.toLowerCase() == "img") {
               nodes[i].style.width = "7em";
           }
      }
      }

      // function to display results if user move is paper

      function resultDisplay1(){
        
        let enemyMoveImage = document.getElementById('printImageResult').src;

        if(enemyMoveImage == "http://127.0.0.1:5500/p1.png")
        {
          document.getElementById('displayResultDIv').innerHTML = "DRAW";
        }

        else if (enemyMoveImage == "http://127.0.0.1:5500/r1.png")
        {
          document.getElementById('displayResultDIv').innerHTML = "YOU WON";
        }

        else if (enemyMoveImage == "http://127.0.0.1:5500/s1.png")
        {
          document.getElementById('displayResultDIv').innerHTML = "YOU LOST";
        }

      }


      // function to display results if user move is rock

      function resultDisplay2(){
        
        let enemyMoveImage = document.getElementById('printImageResult').src;

        if(enemyMoveImage == "http://127.0.0.1:5500/r1.png")
        {
          document.getElementById('displayResultDIv').innerHTML = "DRAW";
        }

        else if (enemyMoveImage == "http://127.0.0.1:5500/s1.png")
        {
          document.getElementById('displayResultDIv').innerHTML = "YOU WON";
        }

        else if (enemyMoveImage == "http://127.0.0.1:5500/p1.png")
        {
          document.getElementById('displayResultDIv').innerHTML = "YOU LOST";
        }

      }

      // function to display results if user move is scissors

      function resultDisplay3(){
        
        let enemyMoveImage = document.getElementById('printImageResult').src;

        if(enemyMoveImage == "http://127.0.0.1:5500/s1.png"){
          document.getElementById('displayResultDIv').innerHTML = "DRAW";
        }

        else if (enemyMoveImage == "http://127.0.0.1:5500/p1.png")
        {
          document.getElementById('displayResultDIv').innerHTML = "YOU WON";
        }

        else if (enemyMoveImage == "http://127.0.0.1:5500/r1.png")
        {
          document.getElementById('displayResultDIv').innerHTML = "YOU LOST";
        }

      }