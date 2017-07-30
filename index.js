var express = require('express')
var app = express()

exports.addTwoNumbers = function(number1, number2) {
  return number1 + number2;
}

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
