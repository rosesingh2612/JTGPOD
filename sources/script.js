var navLinks = document.getElementById("links");
var btns = navLinks.getElementsByTagName("li");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(e) {
  e.preventDefault();
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace("active", "");
  this.className += " active";
  });
}
let chk = 0;
let bChk = 0;
let blogCards = document.getElementsByClassName("blogPostsCard");

function forward(){
  for(let j=0; j<blogCards.length; j++){
    console.log(blogCards.length);
    if(blogCards[j].classList.contains("cActive")){
      console.log("yes");
      if (chk==0){
        if(j<blogCards.length-3){

          chk = 1;
          blogCards[j].className = blogCards[j].className.replace(" cActive","");
          blogCards[j+3].className += " cActive";
        }
      }
    }
  }
  chk = 0;
}
function backward(){
  for(let j=blogCards.length-1; j>=0; j--){
    if(blogCards[j].classList.contains("cActive")){

      if (bChk==0){
        if(j>2){
          console.log(j);
          bChk = 1;
          blogCards[j].className = blogCards[j].className.replace(" cActive","");
          blogCards[j-3].className += " cActive";
        }
      }
    }
  }
  bChk = 0;
}