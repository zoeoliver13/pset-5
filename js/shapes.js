window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("colored_rectangle").onclick = drawColoredRectangle;
    document.getElementById("triangle").onclick = drawTriangle;
    document.getElementById("smile").onclick = drawFace;
    document.getElementById("pyramid").onclick = drawPyramid;
}

/*
 * Exercise 1.
 */

 const sayHello = function() {
    let text = document.getElementById("student-canvas-1");
    let ctx = text.getContext("2d");
    ctx.clearRect(0, 0, 1024, 128);
    let message = prompt("Message: ")

        while(message.length > 50){
          alert("Try keeping your message under 50 characters :D");
          message = prompt("Message: ");
      }
      ctx.font = "48px sans-serif";
      ctx.strokeText(message, 30, 70, 994);
 };

 /*
  * Exercise 2.
  */

  const drawRectangle = function() {
    let rectangle = document.getElementById("student-canvas-2");
    let ctx = rectangle.getContext("2d");
    ctx.clearRect(0, 0, 1024, 512 );
    let x = prompt("X: ");
    let y = prompt("Y: ");
    let width = prompt("Width: ");
    let height = prompt("Height: ");
    while( x < 1 || x > 1024 || Number.isNaN(x) || Number.isNaN(y) || height < 1  y < 1 || y > 512 || width > 1024 || width < 1 || width > 1024 || width < 1 ||  isNaN(width) || height > 512 ||  isNaN(height)) {
      if (Number.isNaN(width) || Number.isNaN(height) || Number.isNaN(x) || Number.isNaN(y)) {
        alert("Make sure you're only entering numbers.")
      }else if (x < 1 || x > 1024) {
       alert("Make sure your x is > 1 and < 1024.")
      }else if (y < 1 || y > 512) {
       alert("Make sure your y is > 1 and < 512.")
      }else if (width < 1 || width > 1024) {
       alert("Make sure your width is > 1 and < 1024.")
      }else if (height < 1 || height > 512) {
      alert("Make sure your height is > 1 and < 512.")
      }
    if (!(x == null)! && !(y == null)&& !(height == null) && (width == null)) {
      ctx.rect(x, y, width, height);
      ctx.stroke();
    }
  };


 /*
  * Exercise 3.
  */
 const drawColoredRectangle = function() {
    let coloredRectangle = document.getElementById("student-canvas-3");
    let ctx = coloredRectangle.getContext("2d");
      ctx.clearRect(0, 0, 1024, 128);

    let color = "";
    if(color==null){
      break;
    }
    let works = true;
      while(works == true){
        color = window.prompt("Enter a color: ");
        color = color.toLowerCase();
        color = color.trim();
      }
        switch(color){
          case "black":
            ctx.fillStyle = "black";
            works = false;
            break;
          case "blue":
            ctx.fillStyle = "blue";
            works = false;
            break;
          case "green":
            ctx.fillStyle = "green";
            works = false;
            break;
          case "orange":
            ctx.fillStyle = "orange";
            works = false;
            break;
          case "purple":
            ctx.fillStyle = "purple";
            works = false;
            break;
          case "red":
            ctx.fillStyle = "red";
            works = false;
            break;
          case "yellow":
            ctx.fillStyle = "yellow";
            works = false;
            break;
          default:
            alert("Try another color. ");
            works = false;
            break;
      }
        ctx.moveTo(10,10);
        ctx.rect(100,100,50,50);
        ctx.stroke();
  };
 /*
  * Exercise 4.
  */

const drawTriangle = function() {
    let triangle = document.getElementById("student-canvas-4");
    let ctx = triangle.getContext("2d");
      ctx.clearRect(0, 0, 1024, 512);
    let short = Number(prompt("Height: "));
    let other = Number(prompt("Base: "));
    let long = Number(prompt("Hypotenuse: "));
  while (short*short + other*other != long*long || Number.isNaN(short) || Number.isNaN(other) || Number.isNaN(long) || short > 1024 || other > 1024 || long > 1024){
        if (short*short + other*other != long*long) {
          alert("This isn't a right triangle.");
        }else if(short > 1024 || other > 1024 || long > 1024) {
        alert("Out of bounds.");
        }else if(Number.isNaN(short) || Number.isNaN(other) || Number.isNaN(long)){
        alert("Make sure all of your sides are numbers.");
      }
    }
     short += 25
     other += 25
     ctx.beginPath();
     ctx.moveTo(25, 25);
     ctx.lineTo(25, short);
     ctx.lineTo(other, short);
     ctx.lineTo(25, 25);
     ctx.stroke();
  };
 /*
  * Exercise 5.
  */

const drawFace = function() {
   let face = document.getElementById('student-canvas-5');
   let ctx = face.getContext('2d');
   ctx.clearRect(0, 0, 1024, 512);
   let x = face.width/2;
   let y = face.height/2;
   let radius = (prompt("Radius: "))
     if (radius == null) {
       break;
     }
   while (radius > 256 || Number.isNaN(radius) || radius < 32){
     if (radius > 256) {
       alert("Out of bounds. ")
     }
     else if (Number.isNaN(radius)) {
       alert("Make sure your radius is a number")
     }
     else if (radius < 32) {
       alert("Your radius has to be < 32.")
     }else{
       ctx.beginPath();
       ctx.arc(x, y, radius, 0, 2*Math.PI);
       ctx.moveTo(x - radius*.25, y - radius*.4);
       ctx.arc(x - radius*.4, y - radius*.4, radius*.15, 0, 2*Math.PI);
       ctx.moveTo(x+radius*.55, y - radius*.4);
       ctx.arc(x + radius*.4, y - radius*.4, radius*.15, 0, 2*Math.PI);
       ctx.moveTo(x+radius*.7, y);
       ctx.arc(x, y, radius*.7, 0, Math.PI);
       ctx.stroke();
     }
   }


 /*
  * Exercise 6 (extra credit).
  */
// }
// };
