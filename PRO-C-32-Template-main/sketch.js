const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg="sunrise1.png"


function preload() {
    // create getBackgroundImg( ) here
	getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
	if(backgroundImg){
		background(backgroundImg)
	}

    Engine.update(engine);

    // write code to display time in correct format here
	if(hour>=12){
	text("time:" + hour%12 + "pm", 50, 100)
	}

	else if(hour==0){
		text("time:12am" ,50, 100)
	}
	else{
		text("time:" + hour%12 + "am", 50, 100)

	}

}

async function getBackgroundImg(){

    // write code to fetch time from API
var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //change the data in JSON format
var responseJSON=await response.json()
var datetime=responseJSON.datetime
    // write code slice the datetime
	hour=datetime.slice(11,13)

    // add conditions to change the background images from sunrise to sunset
	if(hour>=06 && hour<=09){
	bg="sunrise2.png"
	}
	if(hour>=09 && hour<=12){
	bg="sunrise4.png"
	}
	if(hour>=12 && hour<=15){
	bg="sunrise6.png"
	}
	if(hour>=15 && hour<=018){
	bg="sunset7.png"
	}
	if(hour>=18 && hour<=21){
	bg="sunset9.png"
	}
	if(hour>=22 && hour<=0){
	bg="sunset11.png"
	}
	if(hour>=0 && hour<=03){
	bg="sunset12.png"
	}


    //load the image in backgroundImg variable here
	backgroundImg=loadImage(bg)
}
