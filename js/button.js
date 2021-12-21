
function toogle_button(id){
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}     

function button_clip_copy(id) {
    navigator.clipboard.writeText(id);
    alert("Copied the text: " + id);
  }

