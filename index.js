const express = require('express'); 
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
     res.sendFile('index.html', {root: __dirname + '/public/'});
});

app.listen(process.env.PORT || 5000)

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