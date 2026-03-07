const button = document.getElementById("themeToggle");

button.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});




const scrollBtn = document.getElementById("scrollTop");
window.addEventListener("scroll", function(){
  if(window.scrollY > 300){
    scrollBtn.style.display = "block";
  }else{
    scrollBtn.style.display = "none";
  }
});
scrollBtn.addEventListener("click", function(){
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
});





const showBtn = document.getElementById("showMore");
const text = document.getElementById("moreText");

showBtn.addEventListener("click", function(){
  text.style.display = "block";
  showBtn.style.display = "none";
});



const showBtn2 = document.getElementById("showMore2");
const text2 = document.getElementById("moreText2");

showBtn2.addEventListener("click", function(){
  text2.style.display = "block";
  showBtn2.style.display = "none";
});
