var fs = require('fs');

var allreadyAwards = fs.readFileSync('awards.txt', 'utf8');
var blacks = allreadyAwards.split(',');

var result = [];

for (var i = 0; i < blacks.length; i++) {
  result[i] = [];
  for (var j = 0; j < blacks.length; j++) {
    if (blacks[i] == blacks[j]) {
      result[i][j] = 'O';
    } else {
      result[i][j] = 'I';
    }
  }
}

for (i = 0; i < result.length; i++) {
  var line = '';
  for (j = 0; j < result[i].length; j++) {
    line += (result[i][j] + ' ');
  }
  console.log(line);
}
