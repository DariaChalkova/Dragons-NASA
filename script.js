// Hide all elements with class="containerTab", except for the one that matches the clickable grid column
function openTab(tabName) {
    var i, x;
    x = document.getElementsByClassName("containerTab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
  }

  //script for carousel of images //
  var count_elements = 4,
  current_element = 0,
  width = 400,
  height = 200,
  duration = 500;
var screen = $('#items');
screen.width(width * count_elements);
function move_screen(x) {
  current_element = (current_element + x) % count_elements;
  if (current_element < 0) {
    current_element += count_elements;
  }
  //console.log(current_element);
  screen.animate({
    marginLeft: -width * current_element
  }, duration);
}
$("#prev").click(function() {
  move_screen(-1);
})
$("#next").click(function() {
  move_screen(1);
})