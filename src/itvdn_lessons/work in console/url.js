const  url = require('url');

let mockUrl = 'http://user:pass@host.com:8080/p/a/t/t?query=string#hash';
let mockUrlObj = url.parse(mockUrl);
console.log(mockUrlObj);

let formattedUrl = url.format(mockUrlObj);
console.log(formattedUrl);

let resolvedUrl = url.resolve('http://example.com/one/two', '/two/three');
console.log(resolvedUrl);