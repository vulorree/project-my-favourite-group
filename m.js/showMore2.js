const showBtn2 = document.getElementById("showMore2");
const text2 = document.getElementById("moreText2");

showBtn2.addEventListener("click", function(){
    text2.style.display = "block";
    showBtn2.style.display = "none";
});