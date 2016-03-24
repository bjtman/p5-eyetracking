// Brian Tice
//
// http://ryanve.com/lab/dimensions/

var img;
var song;

// Variables for averaging routine

var numReadings = 10;
var latestEyeX  = 0;
var latestEyeY  = 0;
var total       = 0;
var average     = 0;


function preload() {
  //img = loadImage("assets/james.jpg");
  song = loadSound('assets/StravinskyDuo.mp3');
  
}


function setup() {
 
 createCanvas(2560, 1315);
 img = loadImage("assets/james.jpg");
 //song = loadSound('assets/StravinskyDuo.mp3');


}


function draw() {
  background(255);
  
  fill(100);
  textSize(60);
  text("Dear Architects: Sound Matters Test",20,80);

  textSize(18);
  text("By MICHAEL KIMMELMAN", 20, 120);


  textSize(14); 
  text("December 29, 2015", 400,120);

  textSize(20);
  text("We talk about how cities and buildings look. We call places landmarks or eyesores.",20,230);
  text("But we rarely talk about how architecture sounds, aside from when a building or room is noisy.",20,260);
  text("The spaces we design and inhabit all have distinctive sounds.",20,290);
  text("The reading rooms at the New York Public Library have an overlay of rich sound.",20,320); 
  text("Your office may be a big room in a glass building with rows of cubicles where people ",20,350);
  text("stare into computer screens. It may be sealed off from the outside, and you may think",20,380);
  text("it is quiet. Is it? Often the sound of a place is so pervasive that we stop noticing what we hear.",20,410);
  text("Or we think the sound could not be otherwise — that is, until we, say, turn off the buzzing overhead lights.",20,440);
  text("Compare, for instance, the ear-shattering subway platform in New York City with a relatively ",20,470);
  text("silent station in Paris, where trains slide into platforms on whooshing wheels:",20,500);  

  //image(img,30,520);
  //   But we rarely talk about how architecture sounds, aside from when a building or room is noisy.
  //The spaces we design and inhabit all have distinctive sounds. The reading rooms at the New York Public Library have an overlay of rich sound. Your office may be a big room in a glass building with rows of cubicles where people stare into computer screens.
  //It may be sealed off from the outside, and you may think it is quiet.
  //

  text("“Sound is really important,” Ricardo Scofidio, from Diller Scofidio & Renfro, who helped design the High Line,",580,640);
  text("acknowledged. But then he said, unless you’re an architect designing a concert hall, “you’re not thinking about",580,670); 
  text("how you might produce a specific sound.” He added,",580,700); 
  textSize(40);
  text("“That’s partly because the process of making",680,750);
  text("models and drawings doesn’t allow for it.”",693,790); 
  textSize(20);
  text(" Besides, clients don’t ask much about what a house will sound like.",580,820);  

  image(img,30,520);

  /* if (!leftOpen) {
    fill(128);
    ellipse(eyeX, eyeY,100,100);
    
    if ( song.isPlaying() ) { // .isPlaying() returns a boolean
      song.stop();
    //  background(255,0,0);
    } else {
      song.play();
    //  background(0,255,0);
    }
    
  }
  
  else {
    ellipse(eyeX, eyeY, 20,20);
  }
  */
  
  // Build out an averaging routine
  // House an array with 10 values 
  
  //eyeX = average["avg.x"] 
  //eyeY = average["avg.y"] 
  
  ellipse(eyeX,eyeY,20,20);
  
 // console.log(eyeX);
  
  fill(0);
  
  text(eyeX+","+eyeY, 1200, 100);
  
  // play sound while you look at the picture
  if((eyeX < 546) && (eyeX > 30 ) && (eyeY < 970) && (eyeY > 520)) {
    
      
      if(!song.isPlaying()) {
        song.play();
      }
      ///else {
      //  song.stop();
     // }
  }
  else {
      song.stop();
  }
  
  
  
 
  
}