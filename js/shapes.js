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
      while(message==null){
        break;
      }
      ctx.font = "48px sans-serif";
      ctx.strokeText(message, 30, 70, 994);
 };

 /*
  * Exercise 2.
  */
  const drawRectangle = function() {
    const canvas = document.getElementById('student-canvas-2');
    const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, 1024, 512);
    let x = prompt("X: ");
    let y = prompt("Y: ");
    let width = prompt("Width: ");
    let height = prompt("Height: ");

    do{
      if(x == null || y == null || width == null || height == null){
            break;
          }
      if (x > 1024 || x < 1) {
        alert("Keep your x-coordinate > 1 and < 1024.");
      }
      if (y > 512 || y < 1) {
        alert("Keep your y-coordinate > 1 and < 512.");
      }
      if (width < 1 || width > 1024) {
        alert("Keep your width > 1 and < 1024.");
      }
      if (height < 1 || height > 512) {
        alert("Keep your height > 1 and < 512.");
      }
      if (Number(x) + Number(width) > 1024 || Number(y) + Number(height) > 512) {
        alert("Your rectangle is out of bounds.");
      }
      if (Number.isNaN(x) ||  Number.isNaN(y)|| Number.isNaN(width) || Number.isNaN(height)) {
        alert("Make sure all of your sides are numbers.");
      }
    } while(x < 1 || x > 1024 || Number.isNaN(x) || Number.isNaN(y) || height < 1 || y < 1 || y > 512 || width > 1024 || width < 1 || width > 1024 || width < 1 ||  Number.isNaN(width) || height > 512 ||  Number.isNaN(height))


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
    ctx.clearRect(0, 0, 1024, 128);
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
          break;
        default:
          alert(color+" isn't a supported color. Try Again.");
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
    let canvas = document.getElementById("student-canvas-4");
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 1024, 512);

    let firstSide = prompt("Side 1: ");
    let secondSide = prompt("Side 2: ");
    let thirdSide = prompt("Side 3: ");
    let height = Math.min(firstSide , secondSide , thirdSide);
    let hypot = Math.max(firstSide , secondSide , thirdSide);
    let base = Math.sqrt((hypot * hypot) - (height * height));

    while ( Number.isNaN(firstSide) ||  Number.isNaN(secondSide) || Number.isNaN(thirdSide) || firstSide > 1024 ||  secondSide > 1024 || thirdSide > 1024 || firstSide < 1 || secondSide < 1 || thirdSide< 1){
        if (firstSide == null || secondSide == null || thirdSide == null) {
         break;
        }
        if (Number.isNaN(firstSide) || Number.isNaN(secondSide) || Number.isNaN(thirdSide)){
          alert("Make sure all of your sides are numbers.")
        } if(base*base + height * height != hypot *hypot) {
          alert("This is not a right triangle.")
        }
        firstSide = prompt("Side 1: ");
        secondSide = prompt("Side 2: ");
        thirdSide = prompt("Side 3: ");
      }
    if ( base > 1024 || height > 512 || hypot > 1144 ){
      alert("Your triangle is out of bounds")
    }
    if ((height * height) + (base * base) == (hypot *hypot)) {
      ctx.beginPath();
      ctx.moveTo(25, 25);
      ctx.lineTo(25, height + 25);
      ctx.lineTo(base + 25, height + 25);
      ctx.closePath();
      ctx.stroke();
    }
  };


 /*
  * Exercise 5.
  */

const drawFace = function() {
     const canvas = document.getElementById('student-canvas-5');
     const ctx = canvas.getContext('2d');
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     let radius = (prompt("Radius: "))
       while (radius == null) {
         break;
       }

  while (radius > 265 || Number.isNaN(radius) || radius < 32){
      if (radius < 32) {
          alert("Make sure your radius is > 32")
          radius = (prompt("Radius: "))
          break;
            }
      if (Number.isNaN(radius)) {
               alert("Make sure your radius is a number.")
               radius = (prompt("Radius: "))
             }
      if (radius > canvas.width/2) {
               alert("Your smiley face is out of bounds.")

        }
    }

     let eyes = 0.15 * radius;
     let mouth = 0.7 * radius;

     ctx.beginPath();
     ctx.arc(512, 265, radius, 0, 2 * Math.PI);
     ctx.stroke();
     ctx.closePath();
     ctx.beginPath();
     ctx.arc(512, 265, mouth, 0, Math.PI);
     ctx.stroke();
     ctx.closePath();
     ctx.beginPath();
     ctx.arc(512 - 0.4 * radius, 265 - 0.4 * radius, eyes, 0, 2 * Math.PI);
     ctx.stroke();
     ctx.closePath();
     ctx.beginPath();
     ctx.arc(512 + 0.4 * radius, 265 - 0.4* radius, eyes, 0, 2 * Math.PI);
     ctx.stroke();
     ctx.closePath();
   };



// };
