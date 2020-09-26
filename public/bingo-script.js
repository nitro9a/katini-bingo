var x;
var table = document.getElementById("myTable");
if (table != null) {
  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length; j++)
      table.rows[i].cells[j].onclick = function () { getval(this); };
  }
}
function getval(cel) {
  if (cel.style.color == "") {
    (cel.style.color = "red")
  } else if (cel.style.color == "red") {
    (cel.style.color = "")
  };

}