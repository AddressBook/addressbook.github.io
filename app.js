var http = require('http');

http.get('http://biz.epost.go.kr/KpostPortal/openapi?regkey=aa1499b1825b07fb11420364454631&target=post&query=한남'
, function(response) {
  var body = '';
  response.on('data', function(d) {
    body += d;
  });
  response.on('end', function() {
  //  var parsed = JSON.parse(body);
    console.log(body);
  });
});
