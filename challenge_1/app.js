//console.log('works !!!')
var imgO = new Image();
imgO.src = "http://clipart-library.com/images_k/letter-transparent/letter-transparent-11.png"
var imgX = new Image();
imgX.src = "http://clipart-library.com/images_k/red-x-png-transparent/red-x-png-transparent-11.png"
imgX.style.height = "100px"
imgX.style.margin = "auto auto"
imgO.style.height = "100px"

//imgX.style.margin-right: auto;

//document.getElementById("5").appendChild(imgX);

// window.onload = function() {
//   var reply_click = function() {
//     return this.id;
//   }


//     document.getElementById("1").addEventListener("click",function() {
//       document.getElementById("1").appendChild(imgX)
//     })



// }

const boxes = document.querySelectorAll("#container div");
var arr = [];
var arrx = [];
var arro = [];

var count = 1;
//document.getElementById("container").addEventListener("click", function() {
  for(box of boxes) {
    box.addEventListener("click",function() {

      function oneByone(imgX,imgO) {
        count++
        if(count % 2 === 0) {

          return imgX
        } else { return imgO}
      }

      if(!arr.includes(this.id)) {
        arr.push(this.id)
        // oneByone(imgX,imgO)
        // if(oneByone(imgX,imgO) === imgX) {
        //   arrx.push(this.id)
        // } else if(oneByone(imgX,imgO) === imgO) {
        //   arro.push(this.id)
        // }
        document.getElementById(this.id).append(oneByone(imgX,imgO))

      }

      if(oneByone(imgX,imgO) === imgX && !arrx.includes(this.id)) {
        arrx.push(this.id)
        count--
      } else if(oneByone(imgX,imgO) === imgO && !arro.includes(this.id)) {
        arro.push(this.id)
        count--
      }

      console.log(arr)
      console.log("Player X",arrx)
      console.log("Player O",arro)

    })

    var stop = []
  }
//})

