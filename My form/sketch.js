var canvas;


var database;

var form


function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  form = new Form()
      
}


function draw(){
  form.display();
}
