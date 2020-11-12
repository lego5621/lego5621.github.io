var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
};

var dansing_cat = document.getElementById("dansing_cat");

function del(){
  dansing_cat.classList.remove("dansing_cat_activ");
}

document.getElementById('absol').onclick = function(){
  var dansing_cat = document.getElementById("dansing_cat");
  dansing_cat.classList.add("dansing_cat_activ");
  setTimeout(del, 5000);
}
  
