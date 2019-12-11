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
    let canvas = document.getElementById("student-canvas-1");
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 1024, 128);
    let message = prompt("Message: ")
        while(message.length > 50){
          alert("Try keeping your message under 50 characters :D");
          message = prompt("Message: ");
      }
      do{
      break;
      if(message = null);
    }
      ctx.font = "48px sans-serif";
      ctx.strokeText(message, 30, 70, 994);
 };

 /*
  * Exercise 2.
  */
//FIX THIS!!
  const drawRectangle = function() {
  const canvas = document.getElementById('student-canvas-2');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let x = 0;
  let y = 0;
  let width = 0;
  let height = 0;
  do {
    let x = prompt("X: ")
    let y = prompt("Y: ")
    let width = prompt("Width: ")
    let height = prompt("Height: ")
    if (x == null || y == null || width == null || height == null) {
      break;
    }
    if (x > 1024 || x < 1) {
      alert("Keep your x-coordinate > 1 and < 1024.");
    }
    if (height > 512 || height < 1) {
      alert("Keep your y-coordinate > 1 and < 512.");
    }
    if (x < 1 || x > 1024) {
      alert("Keep your width > 1 and < 1024.");
    }
    if (y < 1 || y > 512) {
      alert("Keep your y-coordinate > 1 and < 512.");
    }
    if (x + width > 1024 || y + height > 512) {
      alert("Your rectangle is out of bounds.")
    }
    if (Number.isNaN(x) ||  Number.isNaN(y)|| Number.isNaN(width) || Number.isNaN(height)) {
      alert("Make sure all of your sides are numbers.");
    }
  }while( x < 1 || x > 1024 || Number.isNaN(x) || Number.isNaN(y) || height < 1 || y < 1 || y > 512 || width > 1024 || width < 1 || width > 1024 || width < 1 ||  Number.isNaN(width) || height > 512 ||  Number.isNaN(height))

  if (!(width == null) && !(height == null) && !(x == null) && !(y == null)) {
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.closePath();
    ctx.stroke();
  }
};



 /*
  * Exercise 3.
  */
const drawColoredRectangle = function() {
    let canvas = document.getElementById("student-canvas-3");
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let go = true;
    let color = null;
    while (go == true){
      color = window.prompt("Color: ");
      color = color.toLowerCase();
      color = color.trim();
      switch (color){
        case "black":
          ctx.fillStyle = "black";
          go = false;
          break;
        case "blue":
          ctx.fillStyle = "blue";
          go = false;
          break;
        case "green":
          ctx.fillStyle = "green";
          go = false;
          break;
        case "orange":
          ctx.fillStyle = "orange";
          go = false;
          break;
        case "purple":
          ctx.fillStyle = "purple";
          go = false;
          break;
        case "red":
          ctx.fillStyle = "red";
          go = false;
          break;
        case "yellow":
          ctx.fillStyle = "yellow";
          go = false;
          break;
        case null:
          go = false;
          break;
        default:
          alert("Try another color.");
          break;
      }
    }
    if(color != null){
      ctx.beginPath();
      ctx.rect(10, 10, 100, 50);
      ctx.fill();
    }
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
    let hypot = Math.max(short, other, long)
    let height = Math.min (sbort, other, long)
    let base = Math.sqrt(hypot*hypot - height*height)

  while (height*height + base*base != hypot*hypot || Number.isNaN(height) || Number.isNaN(base) || Number.isNaN(hypot) || base > 1024 || height > 1024 || hypot > 1024){
        if (short*short + other*other != long*long) {
          alert("This isn't a right triangle.");
        }else if(height > 1024 || base > 1024 || hypot > 1024) {
        alert("Out of bounds.");
      }else if(Number.isNaN(height) || Number.isNaN(base) || Number.isNaN(hypot)){
        alert("Make sure all of your sides are numbers.");
      }
    }
     short += 25
     other += 25
     ctx.stroke();
     ctx.beginPath();
     ctx.moveTo(25, 25);
     ctx.lineTo(25, 25);
     ctx.lineTo(25, base);
     ctx.lineTo(base, height);


  };
 /*
  * Exercise 5.
  */

const drawFace = function() {
   let face = document.getElementById('student-canvas-5');
   let ctx = face.getContext('2d');
   ctx.clearRect(0, 0, 1024, 512);
   let width = face.width/2;
   let height = face.height/2;
   let radius = (prompt("Radius: "))
     if (radius == null) {
       break;
     }
  while (radius > 256 || isNaN(radius) || radius < 32){
          if (radius < 32) {
            alert("Your radius must be at least 32.")
          }
          if (isNaN(radius)) {
            alert("Your radius is not a number.")
          }
          if (radius > 256) {
            alert("Your smiley face won't fit on the canvas.")
          }
        }

       ctx.beginPath();
          ctx.arc(width, height, radius, 0, 2*Math.PI);
          ctx.moveTo(width - radius*.25, height - radius*.4);
          ctx.arc(width - radius*.4, height - radius*.4, radius*.15, 0, 2*Math.PI);
          ctx.moveTo(width+radius*.55, height - radius*.4);
          ctx.arc(width + radius*.4, height - radius*.4, radius*.15, 0, 2*Math.PI);
          ctx.moveTo(width+radius*.7, height);
          ctx.arc(width, height, radius*.7, 0, Math.PI);
          ctx.stroke();

   };



 /*
  * Exercise 6 (extra credit).
  */
// }
// };
