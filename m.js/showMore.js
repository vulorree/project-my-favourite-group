const showBtn = document.getElementById("showMore");
const text = document.getElementById("moreText");

showBtn.addEventListener("click", function(){
    text.style.display = "block";
    showBtn.style.display = "none";
});