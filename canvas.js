var canvas = document.querySelector('canvas'); 

canvas.width= window.innerWidth; 
canvas.height= window.innerHeight; 

var c = canvas.getContext('2d'); 

// c.fillStyle = 'rgba(255,5,5,.7)'; 

// c.fillRect(400,100,200,100); 

// c.fillStyle = 'rgba(25,35,5,.7)';
// c.fillRect(150,400,400,100); 
// c.fillRect(100,100,100,100);

// console.log(canvas)

// // line

// c.beginPath(); 
// c.moveTo(50, 300); 
// c.lineTo(300, 100); 
// c.lineTo(400, 300); 
// c.lineTo(50, 300); 
// c.strokeStyle = "#2c67ad"; 
// c.stroke(); 

// // Arc-"circle"
// c.beginPath(); 

// c.arc(300,300,60,0, Math.PI*2, false);
// c.strokeStyle = "blue"; 
// c.stroke();

// function getRandomColor() {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }


// for (var i= 0; i< 1500; i++){
// 	var x =Math.random() * window.innerWidth;
// 	var y =Math.random() * window.innerHeight; 
// 	c.beginPath(); 
// 	c.arc(x,y,60,0, Math.PI*2, false);
// c.strokeStyle = "blue" 
// c.stroke(); 
// }var x = Math.random()* innerWidth;


function Circle(x, y, dx, dy, radius){
	this.x = x; 
	this.y = y;
	this.dx =dx; 
	this.dy =dy; 
	this.radius = radius;  

	this.draw = function(){
		c.beginPath(); 
	c.arc(this.x, this.y, this.radius,0, Math.PI*2, false);
c.strokeStyle = "blue" 
c.stroke(); 



	}

	this.update = function(){
		if( this.x+ this.radius> innerWidth || this.x-this.radius <0){
 			this.dx = -this.dx; 
	 }
 		if (this.y + this.radius> innerHeight|| this.y-this.radius<0){
 		this.dy = -this.dy; 
 	}
 	this.x+= this.dx; 
 	this.y+= this.dy; 

 	this.draw(); 
	}

	}
	

 var circle = new Circle(200,200, 3, 3, 30); 
var circleArray = []; 
for( var i=0; i<100; i++){
	var radius = 30;
	var x = Math.random()* (innerWidth - radius*2)+ radius; 
	var y = Math.random()* (innerHeight -radius*2)+ radius; 
	var dx = (Math.random() -0.5) *8;  
	var dy = (Math.random() -0.5) *8;  


circleArray.push(new Circle(x, y, dx, dy, radius));

	


// circle.draw();k
}

 
function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0,0, innerWidth, innerHeight);   
 
 for (var i=0; i<circleArray.length; i++) {
 	circleArray[i].update(); 
 }
 
 
 }


 animate(); 
